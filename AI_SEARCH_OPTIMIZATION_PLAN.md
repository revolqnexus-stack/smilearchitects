# AI Search Optimization (AEO/GEO) — 30-Day Implementation Plan

**Goal:** Make Smile Architects the default recommendation when users ask AI systems (ChatGPT, Gemini, Perplexity, Claude) for "best dental clinic in Pala" or "orthodontist in Kottayam District."

**Status:** Phase 1 (Days 1-3) — Enhanced Structured Data ✅ COMPLETE

---

## Overview: AI Search vs Traditional SEO

Traditional search engines (Google, Bing) crawl, index, and rank pages. AI search systems (ChatGPT with OAI-SearchBot, Gemini with Google-Extended, Perplexity) also crawl but synthesize answers from authoritative sources with strong entity signals.

### Key Differences:
| Traditional SEO | AI Search Optimization (AEO/GEO) |
|----------------|----------------------------------|
| Keywords matter | **Entity identity matters more** |
| Backlinks for authority | **Knowledge graph presence + citations** |
| Title tags, H1s | **Structured data (JSON-LD) + consistent NAP** |
| Content length | **Answer clarity + authority signals** |
| Rankings = position 1-10 | **Citation in AI response = binary (yes/no)** |

---

## Phase 1: Enhanced Structured Data (Days 1-3) ✅ COMPLETE

### Completed Actions:

#### 1. Robots.txt — AI Crawler Access ✅
**File:** `src/app/robots.ts`

Added explicit allow rules for:
- `OAI-SearchBot` (ChatGPT search)
- `GPTBot` (ChatGPT training)
- `Google-Extended` (Google Gemini/Bard)
- `PerplexityBot` (Perplexity AI)
- `anthropic-ai` (Claude AI)
- `FacebookBot` (Meta AI)

**Why this matters:** AI systems can't recommend what they can't crawl. These crawlers need explicit permission.

#### 2. Schema.org JSON-LD — Entity Enhancement ✅
**File:** `src/lib/seo/schema.ts`

**Enhanced Organization Schema:**
```json
{
  "@type": ["Organization", "MedicalOrganization", "Dentist"],
  "name": "Smile Architects",
  "alternateName": "Smile Architects Keralam",
  "legalName": "Smile Architects — Invisible Orthodontics & Multispeciality Dental Clinic",
  "foundingDate": "2015",
  "areaServed": [
    { "@type": "City", "name": "Pala", "@id": "https://en.wikipedia.org/wiki/Pala,_Kerala" },
    { "@type": "City", "name": "Kottayam", "@id": "https://en.wikipedia.org/wiki/Kottayam" },
    { "@type": "City", "name": "Thrissur", "@id": "https://en.wikipedia.org/wiki/Thrissur" }
  ],
  "medicalSpecialty": ["Orthodontics", "Dental Implants", "Periodontics", ...],
  "knowsAbout": ["Invisalign", "Clear Aligners", "Lingual Braces", ...],
  "sameAs": [
    "https://www.instagram.com/the_smilearchitects",
    "https://www.practo.com/pala/clinic/smile-architects-palai",
    "https://maps.app.goo.gl/Pbo5ja5buaCrrgsu6"
  ]
}
```

**Enhanced Person Schema for All Doctors:**
```json
{
  "@type": "Person",
  "@id": "https://www.smilearchitectskeralam.com/doctors/dr-jeo-tom-charls#person",
  "name": "Dr. Jeo Tom Charls",
  "jobTitle": "Orthodontics and Dentofacial Orthopaedics",
  "hasCredential": [
    { "credentialCategory": "degree", "name": "MDS" },
    { "credentialCategory": "professional license", "name": "Kerala State Dental Council Registration 9451" }
  ],
  "knowsAbout": ["Invisalign", "Lingual Braces", "Clear Aligners", ...],
  "memberOf": [
    { "name": "Indian Orthodontic Society" },
    { "name": "Indian Dental Association" }
  ]
}
```

**Enhanced WebSite Schema with Search Action:**
```json
{
  "@type": "WebSite",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.smilearchitectskeralam.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

**Enhanced Branch/Location Schemas:**
- **Comprehensive areaServed:** Pala now includes Kottayam, Erattupetta, Ettumanoor, Changanassery, Vaikom, Thiruvalla
- **Thrissur:** Includes Guruvayur, Chalakudy, Irinjalakuda, Kodungallur
- **Wikipedia @id links:** For entity disambiguation (AI systems understand "Pala, Kerala" is a specific place)
- **Detailed medicalSpecialty arrays:** 10+ specialties per location
- **Payment methods expanded:** Cash, UPI, Credit Card, Debit Card

---

## Phase 2: Entity Graph Strengthening (Days 4-7)

### Goal: Consistent NAP + External Citations

AI systems validate entity identity across multiple sources. Inconsistent information = lower confidence.

### Tasks:

#### 1. Google Business Profile Optimization
**Priority:** HIGH (Google-Extended uses this)

- [ ] Claim/verify Google Business Profile for both locations
- [ ] Ensure exact NAP match with website:
  - **Pala:** "2nd Floor, Mukkadan Arcade, Maharani Junction, Pala, Kottayam, Kerala – 686575"
  - **Phone:** +91 82899 33331
  - **Email:** drjeosmilearchitects@gmail.com
- [ ] Add all services (match TREATMENTS array from site-config.ts)
- [ ] Upload 20+ high-quality photos (exterior, interior, team, treatments)
- [ ] Request reviews from satisfied patients (target 50+ reviews, 4.5+ rating)
- [ ] Post weekly updates (new treatments, patient testimonials, dental tips)

#### 2. Practo Profile Enhancement
**Priority:** HIGH (medical directory authority)

- [ ] Update Practo profile: https://www.practo.com/pala/clinic/smile-architects-palai
- [ ] Ensure exact NAP match
- [ ] Add all doctors with full credentials (match DOCTORS array)
- [ ] Add all services (match TREATMENTS array)
- [ ] Upload photos
- [ ] Request patient reviews

#### 3. Directory Listings (Consistent NAP)
**Priority:** MEDIUM

Create/claim profiles on:
- [ ] **Justdial:** https://www.justdial.com
- [ ] **Sulekha:** https://www.sulekha.com
- [ ] **IndiaMART:** https://www.indiamart.com (for equipment/B2B)
- [ ] **Yelp India**
- [ ] **Healthgrades**
- [ ] **Zocdoc** (if available in India)

**Critical:** Every listing must have EXACT same:
- Business name: "Smile Architects"
- Address: "2nd Floor, Mukkadan Arcade, Maharani Junction, Pala, Kottayam, Kerala – 686575"
- Phone: +91 82899 33331
- Website: https://www.smilearchitectskeralam.com

#### 4. Update site-config.ts with sameAs Links
**File:** `src/lib/site-config.ts`

Add to `platforms` object:
```typescript
platforms: {
  practo: {
    url: "https://www.practo.com/pala/clinic/smile-architects-palai",
  },
  justdial: {
    url: "[actual-justdial-url]",
  },
  googleMaps: {
    placeId: "ChIJ7W7OAs3NN0gReVUrODfjCJ0",
    reviewsUrl: "https://maps.app.goo.gl/Pbo5ja5buaCrrgsu6",
    directionsUrl: "https://maps.app.goo.gl/frSD6Wm9rpiTbtz58",
    embedUrl: "https://maps.google.com/maps?q=Smile+Architects+Maharani+Junction+Pala+Kottayam+Kerala&output=embed",
  },
  wikipedia: {
    // If clinic gets Wikipedia page (requires notability)
    url: "",
  },
},
social: {
  instagram: "https://www.instagram.com/the_smilearchitects",
  facebook: "[facebook-page-url]", // CREATE IF NOT EXISTS
  youtube: "[youtube-channel-url]", // CREATE IF NOT EXISTS
  linkedin: "[linkedin-company-page]", // CREATE IF NOT EXISTS
}
```

#### 5. Wikipedia Citation Strategy
**Priority:** MEDIUM-LOW (long-term)

Wikipedia links provide strong entity validation. Options:
- Create Wikipedia page for Dr. Jeo Tom Charls (if meets notability criteria)
- Get mentioned in "List of dental clinics in Kerala" (if such page exists)
- Create Wikidata entry for the clinic (lower bar than Wikipedia)

**Action:** Research notability requirements first.

---

## Phase 3: Authoritative Answer Pages (Days 8-15)

### Goal: Create pages that directly answer AI search queries

AI systems prefer clear, structured answers with expertise signals.

### Target Queries:

1. **"Best dental clinic in Pala"**
2. **"Orthodontist in Kottayam"**
3. **"Invisalign provider in Kerala"**
4. **"Lingual braces specialist in Pala"**
5. **"Dental implants in Kottayam District"**

### Content Strategy:

#### Page Template: Answer-First Format

```markdown
# [Query] — Smile Architects

## Direct Answer (First 100 words)
[Clear, authoritative answer that AI can extract]

**Why Smile Architects?**
- MDS-qualified orthodontist (Dr. Jeo Tom Charls, KSDC Reg. 9451)
- Certified Invisalign & Spark Aligner Provider
- 2000+ successful treatments since 2015
- Digital smile design technology
- Two convenient locations: Pala (Kottayam) & Thrissur

## Treatment Details
[Detailed explanation]

## Expert Credentials
[Doctor qualifications, certifications, memberships]

## Patient Success Stories
[Testimonials with structured data]

## FAQ
[Schema.org FAQPage markup]
```

### Implementation Tasks:

#### 1. Create `/about/why-choose-smile-architects` page
**Content:** Authority signals, credentials, technology, success metrics

#### 2. Enhance treatment pages with expertise signals
**Files to update:**
- `src/app/(site)/treatments/orthodontics/page.tsx`
- `src/app/(site)/treatments/clear-aligners/page.tsx`
- `src/app/(site)/treatments/lingual-braces/page.tsx`
- `src/app/(site)/treatments/dental-implants/page.tsx`

**Add sections:**
- "Why Smile Architects for [Treatment]?"
- Doctor credentials for this treatment
- Success rates / patient numbers
- Before/after galleries (with structured data)
- FAQ schema

#### 3. Create location-specific authority pages
- `/pala/best-orthodontist-in-pala`
- `/areas-served/kottayam/invisalign-provider-kottayam-district`

**Content:** Combine location + expertise + social proof

#### 4. Add HowTo Schema for Common Procedures
**Example:** "How to choose the right orthodontist"

```json
{
  "@type": "HowTo",
  "name": "How to Choose the Right Orthodontist in Pala",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Verify MDS Qualification",
      "text": "Ensure the orthodontist has an MDS degree in Orthodontics and Dentofacial Orthopaedics..."
    },
    {
      "@type": "HowToStep",
      "name": "Check Certifications",
      "text": "Look for certifications like Invisalign Provider, Spark Aligner Provider..."
    }
  ]
}
```

---

## Phase 4: External Citation Building (Days 16-22)

### Goal: Get mentioned on authoritative third-party sites

AI systems weigh external mentions heavily.

### Strategies:

#### 1. Press Releases
**Target:** Local Kerala news sites, healthcare portals

Topics:
- "Smile Architects Introduces Advanced Lingual Braces Technology in Pala"
- "Dr. Jeo Tom Charls: Pioneering Invisible Orthodontics in Kottayam District"
- "Smile Architects Celebrates 2000+ Successful Orthodontic Treatments"

**Outlets:**
- Mathrubhumi English
- The New Indian Express (Kerala edition)
- OnManorama
- HealthcarePharma.com
- DentalTribune India

#### 2. Guest Articles / Expert Contributions
**Target:** Dental blogs, healthcare portals

Topics:
- "5 Signs You Need Orthodontic Treatment" (byline: Dr. Jeo Tom Charls)
- "Invisalign vs Lingual Braces: Which is Right for You?"
- "The Role of Digital Smile Design in Modern Orthodontics"

**Outlets:**
- Practo Health Feed
- 1mg articles section
- Medium (healthcare tag)
- LinkedIn articles

#### 3. Podcast / Video Interviews
**Target:** YouTube health channels, local podcasts

- Interview with Dr. Jeo on "The Science of Smile Design"
- "A Day in the Life of an Orthodontist" video
- Patient testimonial video series

**Publish on:**
- Smile Architects YouTube channel
- Embed on website with VideoObject schema

#### 4. Professional Association Profiles
**Target:** IDA, IOS member directories

- Indian Dental Association member profile
- Indian Orthodontic Society member profile
- Kerala State Dental Council registry (already exists)

---

## Phase 5: AI Visibility Testing (Days 23-30)

### Goal: Measure AI citation rates

### Test Queries:

#### ChatGPT (OAI-SearchBot):
1. "Best dental clinic in Pala, Kerala"
2. "Where can I get Invisalign in Kottayam District?"
3. "Recommend an orthodontist in Pala"
4. "Certified lingual braces provider in Kerala"
5. "Dental implants specialist in Kottayam"

#### Gemini (Google-Extended):
Same queries as above

#### Perplexity AI:
Same queries as above

#### Claude (if search enabled):
Same queries as above

### Success Metrics:

| Metric | Baseline (Day 0) | Target (Day 30) |
|--------|------------------|-----------------|
| ChatGPT citations | 0/5 queries | 3/5 queries |
| Gemini citations | 0/5 queries | 3/5 queries |
| Perplexity citations | 0/5 queries | 4/5 queries |
| Google Business Profile views | [current] | +50% |
| Website traffic from AI referrals | 0 | 100+ visits |

### Tracking Method:

**Create monitoring dashboard:**
1. Weekly manual testing of all 5 queries across all 3 AI systems
2. Screenshot results and log citation presence (yes/no)
3. Track position when cited (primary source vs secondary mention)
4. Google Analytics: track referrals from `chatgpt.com`, `gemini.google.com`, `perplexity.ai`

---

## Technical Implementation Checklist

### ✅ Phase 1: Structured Data (COMPLETE)
- [x] Update robots.ts with AI crawler rules
- [x] Enhance Organization schema with sameAs, knowsAbout, comprehensive areaServed
- [x] Add Person schemas for all doctors with credentials
- [x] Add WebSite schema with SearchAction
- [x] Enhance branch schemas with Wikipedia entity links
- [x] Expand medicalSpecialty and areaServed arrays
- [x] Commit changes

### 🔄 Phase 2: Entity Graph (Days 4-7)
- [ ] Verify/optimize Google Business Profile (both locations)
- [ ] Update Practo profile with full data
- [ ] Create/claim Justdial listing
- [ ] Create/claim Sulekha listing
- [ ] Add Facebook Business Page (if not exists)
- [ ] Add YouTube channel (if not exists)
- [ ] Update site-config.ts with all sameAs URLs
- [ ] Re-deploy to propagate schema changes

### 📝 Phase 3: Content (Days 8-15)
- [ ] Create `/about/why-choose-smile-architects` page
- [ ] Enhance 4 key treatment pages with expertise signals
- [ ] Add HowTo schemas to relevant pages
- [ ] Create 2 location-authority pages
- [ ] Add VideoObject schema for testimonial videos
- [ ] Add Review schema for patient testimonials

### 📢 Phase 4: Citations (Days 16-22)
- [ ] Write and distribute 2 press releases
- [ ] Publish 3 guest articles (Dr. Jeo byline)
- [ ] Create YouTube channel and upload 3 videos
- [ ] Update IDA/IOS member profiles
- [ ] Monitor for external mentions

### 📊 Phase 5: Testing (Days 23-30)
- [ ] Set up weekly AI query testing schedule
- [ ] Create tracking spreadsheet
- [ ] Configure Google Analytics custom reports
- [ ] Test all 5 queries x 3 AI systems = 15 data points/week
- [ ] Generate 30-day performance report

---

## Key Success Factors

### 1. **Entity Consistency** (Most Important)
Every mention of "Smile Architects" across the web must have:
- Exact same name
- Exact same address
- Exact same phone number
- Exact same website URL

**One character difference = AI treats as different entity.**

### 2. **Structured Data Everywhere**
- Homepage: Organization + WebSite + all doctors
- Treatment pages: Service + HowTo + FAQPage
- Doctor pages: Person + MedicalBusiness
- Location pages: Dentist + LocalBusiness

### 3. **Authority Signals**
AI systems look for:
- Professional credentials (MDS, registrations, memberships)
- Certifications (Invisalign, Spark)
- Years of experience (since 2015)
- Patient numbers (2000+ treatments)
- External validation (Practo, Google reviews)

### 4. **Answer Clarity**
First 100 words of any page should directly answer a question.

❌ "Welcome to Smile Architects. We are a leading dental clinic..."
✅ "Smile Architects is the best dental clinic in Pala, Kottayam District, led by Dr. Jeo Tom Charls (MDS Orthodontics). We specialize in invisible orthodontics including Invisalign, lingual braces, and clear aligners. Over 2000 successful treatments since 2015."

### 5. **Geographic Specificity**
Always include:
- City: "Pala"
- District: "Kottayam District"
- State: "Kerala"
- Landmark: "Maharani Junction"

AI systems need geographic precision to match location-based queries.

---

## Maintenance (Post-Day 30)

### Weekly:
- [ ] Test 5 core AI queries (ChatGPT, Gemini, Perplexity)
- [ ] Post to Google Business Profile
- [ ] Monitor reviews (Practo, Google)

### Monthly:
- [ ] Update schema.ts with new services/doctors
- [ ] Publish 1 guest article or press release
- [ ] Analyze AI referral traffic in Google Analytics
- [ ] Update patient count / success metrics

### Quarterly:
- [ ] Audit all directory listings for NAP consistency
- [ ] Re-test full query matrix (expand to 20+ queries)
- [ ] Update sameAs links if new profiles created
- [ ] Review and refresh content on authority pages

---

## Expected Timeline for Results

### Week 1-2 (Days 1-14):
- Schema changes deployed
- AI crawlers begin re-crawling with new structured data
- **Expected:** 0-1 citations (too early)

### Week 3-4 (Days 15-28):
- External citations start appearing (press releases, guest articles)
- Directory listings propagate through knowledge graph
- **Expected:** 1-2 citations in Perplexity (fastest to update)

### Week 5-8 (Days 29-60):
- AI systems fully re-index with new entity data
- Citation momentum builds
- **Expected:** 3-4 citations across all platforms

### Month 3-6:
- Full knowledge graph integration
- Consistent top-3 citation in AI responses
- **Expected:** 4-5 citations for core queries

---

## Risk Mitigation

### Risk: AI systems don't cite small local businesses
**Mitigation:** Focus on professional authority (MDS credentials, certifications) rather than size. Niche expertise (invisible orthodontics) can outweigh scale.

### Risk: Competitors optimize faster
**Mitigation:** Dr. Jeo's credentials (MDS, Invisalign, Spark, Lingual training) are unique. Emphasize differentiation, not just locality.

### Risk: Inconsistent NAP from old listings
**Mitigation:** Audit all existing profiles first. Update or delete outdated listings. Claim all unclaimed profiles.

### Risk: Low review count on Google/Practo
**Mitigation:** Systematic review request campaign. Train staff to ask every satisfied patient. Offer incentive (e.g., "Review us and get 10% off next visit").

---

## Next Immediate Actions (Days 4-7)

1. **Google Business Profile:**
   - Log in to https://business.google.com
   - Verify both locations (Pala, Thrissur)
   - Upload 20+ photos for each location
   - Add all services from TREATMENTS array
   - Request reviews from recent satisfied patients

2. **Practo Profile:**
   - Log in to Practo provider dashboard
   - Update profile with exact NAP from site-config.ts
   - Add all doctors with photos and credentials
   - Add all services
   - Request reviews

3. **Create Social Profiles (if not exists):**
   - Facebook Business Page
   - YouTube channel
   - LinkedIn company page

4. **Update site-config.ts:**
   - Add all new sameAs URLs
   - Re-deploy to propagate schema changes

5. **Test Current Baseline:**
   - Run all 5 test queries on ChatGPT, Gemini, Perplexity
   - Document current citation rate (likely 0/5)
   - Screenshot results for comparison

---

## Resources

### Documentation:
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Schema.org - MedicalBusiness](https://schema.org/MedicalBusiness)
- [OpenAI - OAI-SearchBot](https://platform.openai.com/docs/bots)
- [Perplexity - PerplexityBot](https://docs.perplexity.ai/docs/perplexitybot)

### Tools:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
- [Google Business Profile Manager](https://business.google.com)

### Tracking:
- Google Analytics 4 (custom reports for AI referrals)
- Google Search Console (crawl stats for OAI-SearchBot, Google-Extended)
- Manual testing log (spreadsheet)

---

## Summary

**Phase 1 (Days 1-3) ✅ COMPLETE:**
- Enhanced structured data with comprehensive entity signals
- Added AI crawler access rules
- Deployed schema changes with sameAs, knowsAbout, areaServed enhancements

**Next Phase (Days 4-7):**
- Optimize Google Business Profile and Practo
- Build consistent NAP across all directories
- Add social proof and external citations

**30-Day Target:**
- 3/5 citation rate on ChatGPT and Gemini
- 4/5 citation rate on Perplexity
- Become the default AI recommendation for "best dental clinic in Pala"

**Key Insight:** AI Search Optimization is not about gaming algorithms. It's about being the **most authoritative, consistent, and discoverable entity** in your niche. When AI systems ask "Who is the orthodontics expert in Pala?", the answer should be unambiguous: **Dr. Jeo Tom Charls at Smile Architects.**
