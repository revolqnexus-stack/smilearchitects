"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import {
  type BranchId,
  type ClinicBranch,
  BRANCH_STORAGE_KEY,
  DEFAULT_BRANCH_ID,
  getBranch,
  isBranchId,
} from "@/lib/branches";

interface BranchContextValue {
  branchId: BranchId;
  branch: ClinicBranch;
  setBranchId: (id: BranchId) => void;
}

const BranchContext = createContext<BranchContextValue | null>(null);

function branchFromPath(pathname: string): BranchId | null {
  if (
    pathname === "/thrissur" ||
    pathname.startsWith("/thrissur/") ||
    pathname === "/local/thrissur"
  ) {
    return "thrissur";
  }
  if (pathname === "/local/pala" || pathname === "/local/kottayam") {
    return "pala";
  }
  return null;
}

export function BranchProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [branchId, setBranchIdState] = useState<BranchId>(DEFAULT_BRANCH_ID);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const fromPath = branchFromPath(pathname);
    if (fromPath) {
      setBranchIdState(fromPath);
      setHydrated(true);
      return;
    }

    try {
      const stored = localStorage.getItem(BRANCH_STORAGE_KEY);
      if (stored && isBranchId(stored)) {
        setBranchIdState(stored);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, [pathname]);

  const setBranchId = useCallback((id: BranchId) => {
    setBranchIdState(id);
    try {
      localStorage.setItem(BRANCH_STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }, []);

  const branch = useMemo(() => getBranch(branchId), [branchId]);

  const value = useMemo(
    () => ({ branchId, branch, setBranchId }),
    [branchId, branch, setBranchId]
  );

  return (
    <BranchContext.Provider value={value}>
      <div
        data-branch={hydrated ? branchId : DEFAULT_BRANCH_ID}
        style={{ display: "contents" }}
      >
        {children}
      </div>
    </BranchContext.Provider>
  );
}

export function useBranch(): BranchContextValue {
  const ctx = useContext(BranchContext);
  if (!ctx) {
    throw new Error("useBranch must be used within BranchProvider");
  }
  return ctx;
}
