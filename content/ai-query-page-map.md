# AI Query-to-Page Mapping — Smile Architects
## Search Intent → Target URL Strategy

**Document Purpose**: Map every priority search query to its optimal target page to avoid keyword cannibalization and ensure clear content purpose.

**Last Updated**: November 11, 2026  
**Status**: Implementation Guide

---

## MAPPING PRINCIPLES

### 1. One Primary Target Per Query
Each query should have ONE clear primary destination. Secondary pages may support, but one page "owns" each query.

### 2. Intent-Based Routing
- **Informational** → Educational guides, treatment pages
- **Commercial Investigation** → Treatment pages, doctor profiles
- **Transactional** → Booking page, contact page
- **Navigational** → Homepage, location pages

### 3. Avoid Cannibalization
Multiple pages targeting the same query dilute ranking power. Choose the strongest page for each query.

### 4. Natural Language Optimization
AI systems prefer natural, comprehensive answers over keyword-stuffed pages.

---

## A. GENERAL CLINIC DISCOVERY QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Best dental clinic in Pala"** | `/` (Homepage) | `/local/pala`, `/about` | Commercial Investigation | ✅ Good | Enhance hero subheading, add expertise signals |
| **"Best dentist in Pala"** | `/` (Homepage) | `/dentists`, `/local/pala` | Commercial Investigation | ✅ Good | Strengthen doctor introduction section |
| **"Multispeciality dental clinic Pala"** | `/about` | `/`, `/treatments` | Informational + Commercial | ✅ Good | Emphasize specialist team more prominently |
| **"Dental clinic near Maharani Junction"** | `/local/pala` | `/`, `/contact` | Local Discovery | ✅ Good | Enhance landmark references |
| **"Best dental clinic Kottayam District"** | `/local/kottayam` | `/areas-served/kottayam`, `/` | Regional Discovery | ✅ Good | Strengthen district-wide messaging |
| **"Best dental clinic Thrissur"** | `/thrissur` | `/` | Local Discovery (Branch) | ✅ Good | Clarify branch vs main centre relationship |
| **"Dentist near Punkunnam Thrissur"** | `/thrissur` | `/locations` | Local Discovery | ✅ Good | Add more Punkunnam landmark references |

**Implementation Priority**: MEDIUM — Homepage and location pages already well-optimized. Minor enhancements only.

---

## B. ORTHODONTICS & BRACES QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Best orthodontist in Pala"** | `/dentists/dr-jeo-tom-charls` | `/orthodontics`, `/` | Commercial Investigation | ✅ Good | Add "Best orthodontist" answer section to profile |
| **"Best orthodontist in Kottayam"** | `/dentists/dr-jeo-tom-charls` | `/orthodontics`, `/local/kottayam` | Regional Discovery | ⚠️ Moderate | Add Kottayam District context to profile |
| **"Orthodontic clinic in Pala"** | `/orthodontics` | `/dentists/dr-jeo-tom-charls`, `/` | Informational | ✅ Good | None needed |
| **"Where can I get braces in Pala?"** | `/orthodontics/braces` | `/treatments/braces`, `/` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Metal braces treatment Pala"** | `/orthodontics/braces` | `/treatments/braces` | Commercial Investigation | ✅ Good | Add metal braces detailed section |
| **"Ceramic braces Kerala"** | `/orthodontics/braces` | `/treatments/braces` | Commercial Investigation | ✅ Good | Add ceramic braces section |
| **"Clear aligner treatment Pala"** | `/orthodontics/clear-aligners` | `/treatments/clear-aligners` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Invisalign provider Kerala"** | `/dentists/dr-jeo-tom-charls` | `/orthodontics/clear-aligners`, `/` | Commercial Investigation | ✅ Good | Emphasize Invisalign certification more |
| **"Certified Invisalign provider Pala"** | `/dentists/dr-jeo-tom-charls` | `/orthodontics/clear-aligners` | Commercial Investigation | ✅ Good | Highlight certification in first paragraph |
| **"Lingual braces in Pala"** 🎯 | `/orthodontics/lingual-braces` | `/treatments/lingual-braces`, `/dentists/dr-jeo-tom-charls` | Commercial Investigation | ✅ Excellent | This is UNIQUE DIFFERENTIATOR — maximize |
| **"Hidden braces Kerala"** 🎯 | `/orthodontics/lingual-braces` | `/dentists/dr-jeo-tom-charls` | Commercial Investigation | ✅ Excellent | Same as above |
| **"Invisible braces Kottayam"** 🎯 | `/orthodontics/lingual-braces` | `/dentists/dr-jeo-tom-charls` | Commercial Investigation | ✅ Excellent | Same as above |
| **"CAD/CAM lingual braces"** 🎯 | `/orthodontics/lingual-braces` | `/dentists/dr-jeo-tom-charls` | Advanced Professional | ✅ Excellent | Already well-documented |
| **"Braces vs clear aligners"** | `/dental-guides/clear-aligners-vs-braces` | `/orthodontics`, `/orthodontics/braces` | Informational | ✅ Excellent | Already has dedicated guide |
| **"How long does orthodontic treatment take?"** | `/orthodontics` | `/dental-guides/braces-what-to-expect` | Informational | ✅ Good | Add FAQ section to orthodontics hub |
| **"Braces cost in Kerala"** | `/orthodontics/braces` | `/treatments/braces`, `/pricing` | Commercial Investigation | ⚠️ Moderate | Add pricing information more prominently |
| **"Can adults get braces?"** | `/orthodontics/braces` | `/dental-guides/braces-what-to-expect` | Informational | ⚠️ Moderate | Add dedicated "Adults and Orthodontics" section |

**Implementation Priority**: HIGH — Orthodontics is primary specialty. Strengthen answer-first sections and FAQs.

🎯 **CRITICAL**: Lingual braces is the unique differentiator. Maximize visibility and authority for these queries.

---

## C. COSMETIC DENTISTRY QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Best cosmetic dentist in Pala"** | `/treatments/cosmetic-dentistry` | `/treatments/smile-design`, `/dentists/dr-jeo-tom-charls` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Smile designing clinic Kottayam"** | `/treatments/smile-design` | `/treatments/cosmetic-dentistry`, `/` | Commercial Investigation | ✅ Good | Add Kottayam District context |
| **"Smile makeover in Pala"** | `/treatments/smile-design` | `/treatments/cosmetic-dentistry` | Commercial Investigation | ✅ Good | None needed |
| **"Digital smile design Kerala"** | `/treatments/smile-design` | `/dentists/dr-jeo-tom-charls` | Commercial Investigation | ✅ Good | Emphasize digital technology |
| **"Teeth whitening in Pala"** | `/treatments/cosmetic-dentistry` | ❌ Consider `/treatments/teeth-whitening` | Commercial Investigation | ⚠️ Moderate | Consider dedicated teeth whitening page |
| **"Dental veneers in Kerala"** | `/treatments/veneers` | `/treatments/cosmetic-dentistry` | Commercial Investigation | ✅ Good | None needed |
| **"What are dental veneers?"** | `/treatments/veneers` | `/dental-guides/smile-design-guide` | Informational | ✅ Good | Add comprehensive FAQ |
| **"How can I fix gaps between teeth?"** | `/treatments/cosmetic-dentistry` | `/orthodontics`, `/treatments/veneers` | Problem-Focused | ⚠️ Moderate | Create FAQ or guide for this specific problem |

**Implementation Priority**: MEDIUM — Cosmetic dentistry well-covered. Consider dedicated teeth whitening page if high search volume.

**Opportunity**: Create problem-focused content (gap teeth, chipped teeth, discoloration) that links to relevant treatments.

---

## D. DENTAL IMPLANTS & RESTORATIVE QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Best dental implant clinic Kottayam"** | `/treatments/dental-implants` | `/dentists/dr-jom-t-kizhakkel`, `/local/kottayam` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Dental implants in Pala"** | `/treatments/dental-implants` | `/dentists/dr-jom-t-kizhakkel` | Commercial Investigation | ✅ Good | Add location context |
| **"Dental implant specialist Pala"** | `/dentists/dr-jom-t-kizhakkel` | `/treatments/dental-implants` | Commercial Investigation | ⚠️ **CRITICAL** | **COMPLETE DR. JOM'S PROFILE** |
| **"Where can I replace missing teeth?"** | `/treatments/dental-implants` | `/treatments/bridges`, `/treatments/dentures` | Problem-Focused | ✅ Good | Add comparison section |
| **"How long do dental implants last?"** | `/treatments/dental-implants` | `/dental-guides/dental-implants-guide` | Informational | ✅ Good | Add FAQ |
| **"Dental implant cost Kerala"** | `/treatments/dental-implants` | `/pricing` | Commercial Investigation | ⚠️ Moderate | Add pricing range information |
| **"Implant vs bridge vs denture"** | `/treatments/dental-implants` | `/dental-guides/dental-implants-guide` | Informational | ⚠️ Moderate | Create comparison guide or add section |
| **"Root canal treatment in Pala"** | `/treatments/root-canal-treatment` | `/` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Root canal specialist Kottayam"** | `/treatments/root-canal-treatment` | `/dentists` | Commercial Investigation | ✅ Good | Clarify which dentist performs RCT |
| **"Is root canal treatment painful?"** | `/treatments/root-canal-treatment` | `/dental-guides/root-canal-myths` | Informational | ✅ Excellent | Already has dedicated guide |
| **"Dental crowns in Pala"** | `/treatments/crowns` | `/treatments/prosthodontics`, `/dentists/dr-akarsh-babu` | Commercial Investigation | ✅ Good | None needed |
| **"Full mouth rehabilitation Kerala"** | `/treatments/prosthodontics` | `/dentists/dr-akarsh-babu`, `/treatments/dental-implants` | Commercial Investigation | ✅ Good | Add comprehensive section |

**Implementation Priority**: HIGH — Dr. Jom's profile needs completion urgently. Add pricing guidance and comparison content.

⚠️ **CRITICAL ACTION**: Complete Dr. Jom T. Kizhakkel's profile with registration, education, and professional experience.

---

## E. GENERAL & PREVENTIVE DENTISTRY QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"General dentist in Pala"** | `/treatments/general-dentistry` | `/`, `/dentists` | Commercial Investigation | ✅ Good | None needed |
| **"Dental checkup in Pala"** | `/treatments/general-dentistry` | `/book-appointment` | Transactional | ✅ Good | Add clear CTA |
| **"Teeth cleaning in Kottayam"** | `/treatments/general-dentistry` | `/treatments/periodontal-treatment` | Commercial Investigation | ✅ Good | Add scaling/cleaning section |
| **"How often should I visit a dentist?"** | `/treatments/general-dentistry` | `/dental-guides/oral-hygiene-tips` | Informational | ✅ Good | Add FAQ |
| **"Treatment for bleeding gums"** | `/treatments/periodontal-treatment` | `/dentists/dr-jom-t-kizhakkel` | Problem-Focused | ✅ Good | Add symptom-focused section |
| **"Gum disease treatment Pala"** | `/treatments/periodontal-treatment` | `/dentists/dr-jom-t-kizhakkel` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Wisdom tooth removal Kottayam"** | `/treatments/oral-surgery` | `/dentists/dr-kishore-george` | Commercial Investigation | ⚠️ Moderate | Consider dedicated wisdom teeth page if high volume |
| **"Emergency dentist Pala"** | ❌ **CREATE** `/emergency-dental-care` | `/contact`, `/` | Urgent Need | ❌ **MISSING** | **CREATE EMERGENCY CARE PAGE** |

**Implementation Priority**: MEDIUM — General dentistry covered. **Critical gap**: No emergency care information.

⚠️ **ACTION REQUIRED**: Create emergency dental care page or section on homepage.

---

## F. PAEDIATRIC DENTISTRY QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Best pediatric dentist in Pala"** | `/treatments/pediatric-dentistry` | `/dentists/dr-renu-ann-mathew` | Commercial Investigation | ✅ Good | Add answer-first section |
| **"Children's dental clinic Kottayam"** | `/treatments/pediatric-dentistry` | `/dentists/dr-renu-ann-mathew` | Commercial Investigation | ✅ Good | Add location context |
| **"Dentist for kids near Pala"** | `/treatments/pediatric-dentistry` | `/dentists/dr-renu-ann-mathew` | Commercial Investigation | ✅ Good | None needed |
| **"First dental visit for children"** | `/treatments/pediatric-dentistry` | `/dental-guides/childrens-dental-health` | Informational | ✅ Excellent | Already has guide |
| **"When should children first visit dentist?"** | `/dental-guides/childrens-dental-health` | `/treatments/pediatric-dentistry` | Informational | ✅ Good | Add FAQ |

**Implementation Priority**: LOW — Paediatric dentistry well-covered. Dr. Renu's profile needs completion but lower priority than Dr. Jom.

---

## G. LOCATION-SPECIFIC ROUTING

### Pala Primary Location

| Query | Primary Target | Notes |
|-------|----------------|-------|
| Best dental clinic in Pala | `/` | Homepage already optimized |
| Dentist near Maharani Junction | `/local/pala` | Local landing page |
| Dental clinic near KSRTC Pala | `/local/pala` | Landmark reference |
| Orthodontist in Pala | `/dentists/dr-jeo-tom-charls` | Doctor profile |
| Braces in Pala | `/orthodontics/braces` | Treatment page |
| Implants in Pala | `/treatments/dental-implants` | Treatment page |

### Kottayam District Regional

| Query | Primary Target | Notes |
|-------|----------------|-------|
| Best dental clinic Kottayam District | `/local/kottayam` | Regional landing page |
| Orthodontist Kottayam | `/dentists/dr-jeo-tom-charls` | Doctor profile with district context |
| Dental implants Kottayam District | `/treatments/dental-implants` | Treatment page |
| Areas served Kottayam | `/areas-served/kottayam` | Service area page |

### Thrissur Branch

| Query | Primary Target | Notes |
|-------|----------------|-------|
| Best dental clinic Thrissur | `/thrissur` | Branch landing page |
| Dentist Punkunnam | `/thrissur` | Branch page |
| Dental clinic near St. Joseph's Church | `/thrissur` | Landmark reference on branch page |
| Orthodontist Thrissur | `/thrissur` | Branch page (verify Dr. Jeo's visiting schedule) |

**Implementation Priority**: HIGH — Location pages are critical for local SEO. Ensure each page has unique, substantial content.

---

## H. DECISION-MAKING & COMPARISON QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"How do I choose a good orthodontist?"** | ❌ **CREATE** `/patient-guide/choosing-an-orthodontist` | `/dentists/dr-jeo-tom-charls`, `/orthodontics` | Informational | ❌ **MISSING** | **CREATE GUIDE** |
| **"What should I look for in a dental clinic?"** | ❌ **CREATE** `/patient-guide/choosing-a-dental-clinic` | `/about`, `/technology` | Informational | ❌ **MISSING** | **CREATE GUIDE** |
| **"Are clear aligners better than braces?"** | `/dental-guides/clear-aligners-vs-braces` | `/orthodontics` | Informational | ✅ Excellent | Already has dedicated guide |
| **"What is the difference between veneers and crowns?"** | ❌ **CREATE** `/dental-guides/veneers-vs-crowns` | `/treatments/veneers`, `/treatments/crowns` | Informational | ❌ **MISSING** | **CREATE COMPARISON GUIDE** |
| **"Implants vs bridges vs dentures"** | ❌ **CREATE** `/dental-guides/tooth-replacement-options` | `/treatments/dental-implants` | Informational | ❌ **MISSING** | **CREATE COMPARISON GUIDE** |
| **"When should I consider a smile makeover?"** | `/treatments/smile-design` | `/dental-guides/smile-design-guide` | Informational | ✅ Good | Add FAQ section |
| **"What is MDS qualification?"** | `/about` | `/dentists` | Informational | ⚠️ Moderate | Add educational section or FAQ |

**Implementation Priority**: MEDIUM — These comparison/decision guides are valuable for AI systems and patient education.

**Content Gap**: Multiple high-value comparison guides missing.

---

## I. BRANDED QUERY ROUTING

### Direct Brand Searches
| Query | Primary Target | Notes |
|-------|----------------|-------|
| Smile Architects Pala | `/` | Homepage |
| Smile Architects Kerala | `/` | Homepage |
| Smile Architects contact | `/contact` | Contact page |
| Smile Architects appointment | `/book-appointment` | Booking page |
| Smile Architects reviews | `/patient-stories` | Testimonials page |
| Smile Architects doctors | `/dentists` | Team page |
| Smile Architects treatments | `/treatments` | Treatment catalog |
| Smile Architects Thrissur | `/thrissur` | Branch page |

### Doctor-Specific Branded
| Query | Primary Target | Notes |
|-------|----------------|-------|
| Dr. Jeo Tom Charls | `/dentists/dr-jeo-tom-charls` | Doctor profile |
| Dr. Jeo orthodontist Pala | `/dentists/dr-jeo-tom-charls` | Doctor profile |
| Dr. Jom T. Kizhakkel | `/dentists/dr-jom-t-kizhakkel` | Doctor profile |
| Dr. Kishore George | `/dentists/dr-kishore-george` | Doctor profile |
| Dr. Renu Ann Mathew | `/dentists/dr-renu-ann-mathew` | Doctor profile |
| Dr. Akarsh Babu | `/dentists/dr-akarsh-babu` | Doctor profile |

**Implementation Priority**: LOW — Branded queries will naturally find correct pages. Ensure consistent naming across all pages.

---

## J. COST & PRICING QUERIES

| Query Cluster | Primary Target | Secondary Targets | Search Intent | Current Coverage | Improvement Needed |
|--------------|----------------|-------------------|---------------|------------------|-------------------|
| **"Braces cost in Kerala"** | `/orthodontics/braces` | `/treatments/braces`, `/pricing` | Commercial Investigation | ⚠️ Moderate | Add pricing range section |
| **"Invisalign cost Pala"** | `/orthodontics/clear-aligners` | `/treatments/clear-aligners` | Commercial Investigation | ⚠️ Moderate | Add pricing range section |
| **"Dental implant cost Kottayam"** | `/treatments/dental-implants` | `/pricing` | Commercial Investigation | ⚠️ Moderate | Add pricing range section |
| **"Lingual braces cost Kerala"** | `/orthodontics/lingual-braces` | `/treatments/lingual-braces` | Commercial Investigation | ⚠️ Moderate | Add pricing range section |
| **"Dental treatment cost Kerala"** | ❌ Consider `/pricing` | `/treatments` | Commercial Investigation | ⚠️ Moderate | Consider creating pricing overview page |

**Implementation Priority**: MEDIUM — Pricing transparency helps qualified patients. Consider structured pricing page or add ranges to treatment pages.

**Note**: Always include disclaimer: "Final cost determined at consultation after clinical assessment."

---

## CONTENT GAPS & OPPORTUNITIES

### Critical Gaps (Must Create)

1. **Emergency Dental Care Page** ⚠️ HIGH PRIORITY
   - Target: "Emergency dentist Pala", "Dental emergency near me"
   - Create: `/emergency-dental-care` or homepage section
   - Content: Emergency symptoms, same-day appointments, after-hours guidance

2. **Dr. Jom T. Kizhakkel Profile Completion** ⚠️ CRITICAL
   - Target: "Dental implant specialist Pala", "Periodontist Kottayam"
   - Action: Complete registration, education, experience sections
   - Priority: URGENT — Dr. Jom is permanent team member, not visiting

3. **Visiting Consultant Profiles Completion** ⚠️ HIGH PRIORITY
   - Dr. Kishore George (Oral Surgery)
   - Dr. Renu Ann Mathew (Paediatric)
   - Dr. Akarsh Babu (Prosthodontics)
   - Action: Add registration, education, primary practice details

### High-Value Opportunities (Should Create)

4. **"How to Choose an Orthodontist" Guide**
   - Target: "How do I choose a good orthodontist?", "What to look for in orthodontist"
   - Create: `/patient-guide/choosing-an-orthodontist`
   - Content: MDS qualification importance, certifications to look for, questions to ask

5. **"How to Choose a Dental Clinic" Guide**
   - Target: "What should I look for in a dental clinic?"
   - Create: `/patient-guide/choosing-a-dental-clinic`
   - Content: Sterilization, technology, specialist qualifications, facilities

6. **"Tooth Replacement Options Comparison" Guide**
   - Target: "Implants vs bridges vs dentures"
   - Create: `/dental-guides/tooth-replacement-options`
   - Content: Detailed comparison with pros/cons, costs, longevity

7. **"Veneers vs Crowns" Guide**
   - Target: "What is the difference between veneers and crowns?"
   - Create: `/dental-guides/veneers-vs-crowns`
   - Content: When to choose each, process, costs, durability

### Enhancements (Improve Existing)

8. **Add Pricing Ranges to Treatment Pages**
   - Pages: All major treatments
   - Action: Add "Indicative Cost Range" section with disclaimer
   - Priority: MEDIUM

9. **Add Answer-First Sections**
   - Pages: All treatment pages
   - Action: First paragraph directly answers "What is [treatment]?" and "Why choose Smile Architects?"
   - Priority: HIGH for AI optimization

10. **Add Comprehensive FAQs**
    - Pages: All treatment pages
    - Action: 5-10 FAQs per treatment with structured data
    - Priority: HIGH for AI systems

11. **Add "Adults and Orthodontics" Section**
    - Page: `/orthodontics/braces`
    - Action: Dedicated section answering "Can adults get braces?"
    - Priority: MEDIUM

12. **Consider Dedicated Teeth Whitening Page**
    - Current: Subsection of cosmetic dentistry
    - Opportunity: High search volume may justify dedicated page
    - Action: Analyze search volume first
    - Priority: LOW

---

## KEYWORD CANNIBALIZATION AUDIT

### Potential Cannibalization Issues

**Issue 1**: Orthodontics pages
- `/orthodontics` (hub)
- `/orthodontics/braces` (dedicated)
- `/treatments/braces` (catalog)

**Resolution**: 
- `/orthodontics/braces` = PRIMARY target for "braces in Pala"
- `/treatments/braces` = SECONDARY (catalog reference)
- Canonical URL: `/orthodontics/braces`

**Issue 2**: Clear aligners
- `/orthodontics/clear-aligners` (dedicated)
- `/treatments/clear-aligners` (catalog)

**Resolution**:
- `/orthodontics/clear-aligners` = PRIMARY target
- Canonical URL: `/orthodontics/clear-aligners`

**Issue 3**: Lingual braces
- `/orthodontics/lingual-braces` (dedicated)
- `/treatments/lingual-braces` (catalog)

**Resolution**:
- `/orthodontics/lingual-braces` = PRIMARY target (CRITICAL DIFFERENTIATOR)
- Canonical URL: `/orthodontics/lingual-braces`

**Status**: ✅ Existing code already handles this via canonical URLs in sitemap

---

## INTERNAL LINKING STRATEGY

### Hub → Spoke Model

**Orthodontics Hub** (`/orthodontics`)
- Links TO:
  - `/orthodontics/braces`
  - `/orthodontics/clear-aligners`
  - `/orthodontics/lingual-braces`
  - `/dentists/dr-jeo-tom-charls`
  - `/dental-guides/braces-what-to-expect`
  - `/dental-guides/clear-aligners-vs-braces`

**Treatment Page** (e.g., `/orthodontics/braces`)
- Links TO:
  - Related treatments (clear aligners, lingual braces)
  - Performing specialist (Dr. Jeo)
  - Educational guides (braces guide, comparison guide)
  - Booking page
  - Location pages (where available)

**Doctor Profile** (e.g., `/dentists/dr-jeo-tom-charls`)
- Links TO:
  - All treatments performed (orthodontics, braces, aligners, lingual, smile design)
  - Educational guides authored/reviewed
  - Booking page
  - Homepage

**Location Page** (e.g., `/local/pala`)
- Links TO:
  - Homepage
  - Featured treatments available at location
  - Doctors practicing at location
  - Booking page with location pre-selected

---

## AI OPTIMIZATION CHECKLIST

For each priority page, ensure:

### ✅ Content Structure
- [ ] Answer-first format (first sentence directly answers query)
- [ ] Clear H1 with primary keyword
- [ ] Logical H2/H3 hierarchy
- [ ] Short paragraphs (3-5 sentences)
- [ ] Bullet points for lists
- [ ] Internal links to related content

### ✅ Entity Clarity
- [ ] Clinic name mentioned (Smile Architects)
- [ ] Location mentioned (Pala, Kottayam District, Kerala)
- [ ] Doctor attribution (Dr. [Name], MDS [Specialty])
- [ ] Service relationships clear (who does what)

### ✅ Authority Signals
- [ ] Professional credentials (MDS qualifications)
- [ ] Registration details (Kerala State Dental Council)
- [ ] Certifications (Invisalign, CAD/CAM, etc.)
- [ ] Years of experience (since 2015)
- [ ] Professional memberships

### ✅ Structured Data
- [ ] Appropriate schema.org types
- [ ] FAQPage schema where applicable
- [ ] HowTo schema for procedural content
- [ ] Person schema for doctors
- [ ] Service/MedicalProcedure schema for treatments

### ✅ User Experience
- [ ] Clear CTA (Book Appointment)
- [ ] Contact information visible
- [ ] Related content suggestions
- [ ] Mobile-friendly layout
- [ ] Fast loading time

---

## IMPLEMENTATION PRIORITY SEQUENCE

### Phase 1: Critical Gaps (Week 1)
1. ⚠️ Complete Dr. Jom T. Kizhakkel profile (registration, education, experience)
2. ⚠️ Complete visiting consultant profiles (Dr. Kishore, Dr. Renu, Dr. Akarsh)
3. ⚠️ Create emergency dental care page or section
4. Enhance all doctor profiles with answer-first sections

### Phase 2: Treatment Page Enhancements (Week 1-2)
5. Add answer-first sections to all 18 treatment pages
6. Add comprehensive FAQs to all major treatment pages (orthodontics, implants, smile design, RCT)
7. Add pricing ranges with disclaimers to all major treatments
8. Add "Why Smile Architects?" sections to all treatment pages

### Phase 3: Educational Content Creation (Week 2-3)
9. Create "How to Choose an Orthodontist" guide
10. Create "How to Choose a Dental Clinic" guide
11. Create "Tooth Replacement Options" comparison guide
12. Create "Veneers vs Crowns" comparison guide

### Phase 4: Location Page Optimization (Week 3)
13. Enhance `/local/pala` with more landmark references and local context
14. Enhance `/local/kottayam` with district-wide service area details
15. Enhance `/thrissur` with Punkunnam-specific content

### Phase 5: Technical SEO (Week 3-4)
16. Verify canonical URLs for all orthodontics cluster pages
17. Implement FAQ schema on all treatment pages with FAQs
18. Implement HowTo schema on patient guide pages
19. Audit and fix any internal linking gaps

---

## MEASUREMENT & TRACKING

### Query Performance Tracking

**Method**: Create spreadsheet to track:
- Query
- Target URL
- Current rank (Google)
- AI citation rate (ChatGPT, Gemini, Perplexity)
- Monthly impressions (Search Console)
- Monthly clicks (Search Console)
- Click-through rate
- Monthly bookings attributed to query

**Frequency**: Update monthly

### AI Citation Tracking

**Test Queries Weekly**:
1. Best dental clinic in Pala
2. Best orthodontist in Pala
3. Lingual braces in Kerala
4. Dental implants in Kottayam
5. Invisalign provider Kerala
6. Best orthodontist in Kottayam District
7. Smile Architects Pala
8. Dr. Jeo Tom Charls

**Systems to Test**:
- ChatGPT (OAI-SearchBot)
- Google Gemini (Google-Extended)
- Perplexity AI (PerplexityBot)
- Google AI Overviews (Googlebot)

**Success Metric**: 4/8 citations across all platforms within 60 days

---

## NOTES ON QUERY INTENT

### Informational Queries
Goal: Educate and build trust. Lead to commercial investigation pages.

Examples:
- "What is lingual orthodontics?"
- "How long do dental implants last?"
- "Can adults get braces?"

Target: Educational guides, comprehensive treatment pages, FAQ sections

### Commercial Investigation Queries
Goal: Present credentials, expertise, facilities. Lead to booking.

Examples:
- "Best orthodontist in Pala"
- "Lingual braces provider Kerala"
- "Dental implant clinic Kottayam"

Target: Doctor profiles, treatment pages, location pages

### Transactional Queries
Goal: Facilitate immediate action (book, call, message).

Examples:
- "Book dental appointment Pala"
- "Smile Architects contact"
- "Emergency dentist near me"

Target: Booking page, contact page, emergency page

### Navigational Queries
Goal: Reach specific page on site.

Examples:
- "Smile Architects Pala"
- "Dr. Jeo Tom Charls"
- "Smile Architects reviews"

Target: Homepage, doctor profiles, testimonials page

---

**END OF QUERY-TO-PAGE MAPPING DOCUMENT**

**Next Step**: Begin implementation starting with Phase 1 (Critical Gaps)

**Status**: Ready for implementation team
