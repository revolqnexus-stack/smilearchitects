# Treatment Images - Quick Checklist

## 📁 Add to: `/public/images/treatments/`

---

## 10 Images Needed (in order):

### ✅ Checklist

- [ ] **01-smile-design.jpg** (1200×800px) - Hero tile, beautiful smile transformation
- [ ] **02-orthodontics.jpg** (800×800px) - Metal/ceramic braces close-up
- [ ] **03-braces.jpg** (800×800px) - Braces with colored bands
- [ ] **04-clear-aligners.jpg** (1200×600px) - Person holding clear aligner
- [ ] **05-lingual-braces.jpg** (400×400px) - Hidden braces (inner teeth)
- [ ] **06-cosmetic-dentistry.jpg** (400×800px) - Perfect white smile/veneers
- [ ] **07-dental-implants.jpg** (1200×800px) - Implant model or restoration
- [ ] **08-general-dentistry.jpg** (400×400px) - Dental checkup/examination
- [ ] **09-pediatric-dentistry.jpg** (400×400px) - Happy child at dentist
- [ ] **10-root-canal-treatment.jpg** (400×400px) - Endodontic procedure

---

## 📋 Quick Specs

**Format:** JPG (85-90% quality)  
**Max size:** 300KB per file  
**Style:** Professional dental photography  

**Sizes:**
- **Hero (2 images):** 1200×800px (3:2 ratio)
- **Wide (1 image):** 1200×600px (2:1 ratio)
- **Tall (1 image):** 400×800px (1:2 portrait)
- **Medium (2 images):** 800×800px (1:1 ratio)
- **Small (4 images):** 400×400px (1:1 ratio)

---

## 🎯 Priority Order

**Do these first (biggest visual impact):**
1. 01-smile-design.jpg ⭐
2. 07-dental-implants.jpg ⭐

**Then these:**
3. 04-clear-aligners.jpg
4. 02-orthodontics.jpg
5. 03-braces.jpg

**Finally:**
6-10. The rest

---

## 🔄 After Adding Images

1. Open `/src/components/sections/TreatmentsBentoGrid.tsx`
2. Update lines 12-50 (TREATMENT_IMAGES map)
3. Change each `imagePath` from Unsplash URL to:
   ```typescript
   imagePath: "/images/treatments/01-smile-design.jpg"
   ```

**Full example:**
```typescript
const TREATMENT_IMAGES: Record<string, { imagePath: string; alt: string }> = {
  "smile-design": {
    imagePath: "/images/treatments/01-smile-design.jpg",
    alt: "Beautiful smile transformation with digital smile design",
  },
  orthodontics: {
    imagePath: "/images/treatments/02-orthodontics.jpg",
    alt: "Close-up of metal braces on teeth - orthodontic treatment",
  },
  // ... continue for all 10 treatments
};
```

---

## 📂 Full File Paths

```
/public/images/treatments/01-smile-design.jpg
/public/images/treatments/02-orthodontics.jpg
/public/images/treatments/03-braces.jpg
/public/images/treatments/04-clear-aligners.jpg
/public/images/treatments/05-lingual-braces.jpg
/public/images/treatments/06-cosmetic-dentistry.jpg
/public/images/treatments/07-dental-implants.jpg
/public/images/treatments/08-general-dentistry.jpg
/public/images/treatments/09-pediatric-dentistry.jpg
/public/images/treatments/10-root-canal-treatment.jpg
```

---

## 📖 Detailed Guides

For complete photography guidelines, layouts, and technical details:
- **Full Guide:** `/public/images/treatments/IMAGE_GUIDE.md`
- **Layout Map:** `/public/images/treatments/LAYOUT_MAP.txt`

---

**Current Status:** Unsplash placeholders active (site works now, will auto-upgrade when you add your photos!)
