import { getMedia } from '@/lib/supabase/queries';
import AdminShell from '@/components/admin/AdminShell';
import MediaLibraryClient from '@/components/admin/MediaLibraryClient';

export const dynamic = 'force-dynamic';

export default async function MediaLibraryPage() {
  // Auth is handled by middleware

  const mediaFiles = await getMedia();

  return (
    <AdminShell>
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 600,
            color: '#f1f5f9',
            marginBottom: '0.5rem',
          }}>
            Media Library
          </h1>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>
            Upload and manage images for your website
          </p>
        </div>

        <MediaLibraryClient initialMedia={mediaFiles || []} />
      </div>
    </AdminShell>
  );
}
