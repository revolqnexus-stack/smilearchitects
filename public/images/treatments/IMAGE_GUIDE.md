# Treatment Images Guide

## 📁 Folder Location
`/public/images/treatments/`

---

## 📸 Images Needed (in display order)

Add these 10 images to this folder. Use the exact filenames shown below:

### 1. **01-smile-design.jpg**
- **Treatment:** Smile Design (HERO tile - largest)
- **Subject:** Beautiful smile transformation, before/after, digital planning
- **Size:** 1200×800px minimum (3:2 ratio)
- **Position:** Top-left hero tile (biggest tile)
- **Vibe:** Premium, aspirational, confident smile

---

### 2. **02-orthodontics.jpg**
- **Treatment:** Orthodontics
- **Subject:** Metal or ceramic braces on teeth (close-up)
- **Size:** 800×800px minimum (1:1 ratio)
- **Position:** Top-middle (medium tile)
- **Vibe:** Clinical, professional, treatment detail

---

### 3. **03-braces.jpg**
- **Treatment:** Dental Braces
- **Subject:** Braces with colored bands or metal brackets
- **Size:** 800×800px minimum (1:1 ratio)
- **Position:** Top-right (medium tile)
- **Vibe:** Detailed shot of braces, orthodontic work

---

### 4. **04-clear-aligners.jpg**
- **Treatment:** Clear Aligners
- **Subject:** Person holding clear aligner tray, or aligners on teeth
- **Size:** 1200×600px minimum (2:1 wide ratio)
- **Position:** Middle row, full width (panoramic tile)
- **Vibe:** Modern, discreet, lifestyle-oriented

---

### 5. **05-lingual-braces.jpg**
- **Treatment:** Lingual Braces
- **Subject:** Braces on inner surface of teeth (hidden braces)
- **Size:** 400×400px minimum (1:1 ratio)
- **Position:** Middle-left (small tile)
- **Vibe:** Specialized, hidden treatment detail

---

### 6. **06-cosmetic-dentistry.jpg**
- **Treatment:** Cosmetic Dentistry
- **Subject:** Perfect white smile, veneers, whitening results
- **Size:** 400×800px minimum (1:2 portrait ratio)
- **Position:** Left side, tall tile
- **Vibe:** Aesthetic, beautiful results, confidence

---

### 7. **07-dental-implants.jpg**
- **Treatment:** Dental Implants (HERO tile - second largest)
- **Subject:** Implant model, implant procedure, or restored smile
- **Size:** 1200×800px minimum (3:2 ratio)
- **Position:** Right side hero tile (second biggest)
- **Vibe:** Advanced technology, permanent solution

---

### 8. **08-general-dentistry.jpg**
- **Treatment:** General Dentistry
- **Subject:** Dental checkup, examination, preventive care
- **Size:** 400×400px minimum (1:1 ratio)
- **Position:** Middle (small tile)
- **Vibe:** Routine care, friendly, family dentistry

---

### 9. **09-pediatric-dentistry.jpg**
- **Treatment:** Paediatric Dentistry
- **Subject:** Happy child at dentist, kid-friendly care
- **Size:** 400×400px minimum (1:1 ratio)
- **Position:** Bottom-middle (small tile)
- **Vibe:** Gentle, child-friendly, positive experience

---

### 10. **10-root-canal-treatment.jpg**
- **Treatment:** Root Canal Treatment
- **Subject:** Endodontic procedure, dental instruments, tooth anatomy
- **Size:** 400×400px minimum (1:1 ratio)
- **Position:** Bottom-right (small tile)
- **Vibe:** Clinical, professional, tooth-saving treatment

---

## 🎨 Photography Guidelines

### Overall Style
- **Professional dental photography** preferred
- Natural lighting or clinical lighting
- High resolution (300dpi recommended)
- Sharp focus, no blur
- Consistent color grading across all images

### What Works Well
✅ Real patient results (with consent)  
✅ Professional clinic photography  
✅ Detailed treatment shots  
✅ Lifestyle shots showing confidence  
✅ Before/after comparisons  
✅ Warm, welcoming atmosphere  

### What to Avoid
❌ Stock photos that look generic  
❌ Overly edited/artificial looking  
❌ Low resolution or pixelated  
❌ Harsh shadows or poor lighting  
❌ Inconsistent styles between images  

---

## 📏 Technical Specifications

### File Format
- **Format:** JPG or WebP
- **Quality:** 85-90% (balance size vs quality)
- **Max file size:** 200-300KB per image (Next.js will optimize)

### Aspect Ratios Summary
| Treatment | Ratio | Min Size | Tile Type |
|-----------|-------|----------|-----------|
| Smile Design | 3:2 | 1200×800 | Hero |
| Orthodontics | 1:1 | 800×800 | Medium |
| Braces | 1:1 | 800×800 | Medium |
| Clear Aligners | 2:1 | 1200×600 | Wide |
| Lingual Braces | 1:1 | 400×400 | Small |
| Cosmetic | 1:2 | 400×800 | Tall |
| Dental Implants | 3:2 | 1200×800 | Hero |
| General | 1:1 | 400×400 | Small |
| Paediatric | 1:1 | 400×400 | Small |
| Root Canal | 1:1 | 400×400 | Small |

---

## 🔄 After Adding Images

Once you've added all images to this folder, run:

```bash
cd /Users/ajmal/smilearchitects/smilearchitects
```

Then update the component file:  
**File:** `/src/components/sections/TreatmentsBentoGrid.tsx`  
**Lines:** 12-50 (the `TREATMENT_IMAGES` map)

Change from:
```typescript
"smile-design": {
  imagePath: "https://images.unsplash.com/...",  // ← Old placeholder
  alt: "...",
},
```

To:
```typescript
"smile-design": {
  imagePath: "/images/treatments/01-smile-design.jpg",  // ← Your image
  alt: "Beautiful smile transformation with digital smile design",
},
```

---

## ✅ Quick Checklist

- [ ] All 10 images added to `/public/images/treatments/`
- [ ] Filenames match exactly (01-smile-design.jpg, etc.)
- [ ] Images are high quality and properly sized
- [ ] File sizes are reasonable (<300KB each)
- [ ] Update `TREATMENT_IMAGES` map in TreatmentsBentoGrid.tsx
- [ ] Test locally with `npm run dev`
- [ ] Commit and push changes

---

## 🎯 Priority Order (if doing in phases)

**Phase 1 - Heroes First:**
1. 01-smile-design.jpg (biggest impact)
2. 07-dental-implants.jpg (second hero)

**Phase 2 - Medium Tiles:**
3. 02-orthodontics.jpg
4. 03-braces.jpg
5. 04-clear-aligners.jpg
6. 06-cosmetic-dentistry.jpg

**Phase 3 - Small Tiles:**
7. 05-lingual-braces.jpg
8. 08-general-dentistry.jpg
9. 09-pediatric-dentistry.jpg
10. 10-root-canal-treatment.jpg

---

**Questions?** The current Unsplash placeholders will show until you replace them, so the site works now and will seamlessly upgrade as you add each image!
