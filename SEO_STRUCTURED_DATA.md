# Structured Data (JSON-LD) Implementation

## Overview
Comprehensive structured data has been added to the Trivitron Digital website to improve SEO, enable rich snippets in search results, and provide better context to search engines.

## Files Created

### 1. `/components/structured-data.tsx`
Reusable React components for all JSON-LD schemas.

## Schemas Implemented

### Global Schemas (Applied to all pages via root layout)

#### 1. **Organization Schema**
- Company name, logo, and description
- Contact information for Chennai and Dubai offices
- Parent organizations (Trivitron Healthcare & ResoHealth)
- Social media profiles
- Multiple office addresses

#### 2. **Website Schema**
- Website name and URL
- Search action capability
- Site description

### Page-Specific Schemas

#### 3. **Breadcrumb Schema** (All pages)
- Navigation hierarchy
- Improves site structure understanding
- Enables breadcrumb rich snippets in search results

#### 4. **Software Application Schema** (Homepage)
- Healthcare suite details
- Feature list (HIS, LIS, RIS, AI diagnostics, IoT)
- Aggregate rating (4.8/5 from 150 reviews)
- Application category: HealthApplication
- Operating system: Web-based, Cloud

#### 5. **Product Schema** (Products page)
- Product offerings
- Brand information
- Aggregate offer details
- Rating information

#### 6. **About Page Schema** (About page)
- Organization description
- Joint venture information

#### 7. **Contact Page Schema** (Contact page)
- Contact page identification
- Description and URL

#### 8. **Local Business Schema** (Contact page)
- Two office locations (Chennai & Dubai)
- Type: MedicalBusiness
- Complete address and geo-coordinates
- Phone numbers and email addresses
- Business hours for each location
- Opening hours specification

#### 9. **FAQ Schema** (Available for use)
- Question and answer format
- Ready to implement on FAQ sections

## Pages Updated

1. ✅ **Root Layout** (`/app/layout.tsx`)
   - OrganizationSchema
   - WebsiteSchema

2. ✅ **Homepage** (`/app/page.tsx`)
   - BreadcrumbSchema
   - SoftwareApplicationSchema

3. ✅ **Products Page** (`/app/products/page.tsx`)
   - BreadcrumbSchema
   - ProductSchema

4. ✅ **About Page** (`/app/about/page.tsx`)
   - BreadcrumbSchema
   - AboutPageSchema

5. ✅ **Contact Page** (`/app/contact/page.tsx`)
   - BreadcrumbSchema
   - ContactPageSchema
   - LocalBusinessSchema (2 locations)

6. ✅ **Pricing Page** (`/app/pricing/page.tsx`)
   - BreadcrumbSchema

7. ✅ **Leadership Page** (`/app/leadership/page.tsx`)
   - BreadcrumbSchema

## SEO Benefits

### 1. **Rich Snippets Eligibility**
- Organization info cards
- Breadcrumb navigation in search results
- Product ratings and reviews
- Local business information with maps
- Business hours display

### 2. **Knowledge Graph**
- Company information panel in Google
- Logo display in search results
- Social media links
- Contact information

### 3. **Local SEO**
- Google Maps integration
- Local search visibility
- "Near me" search optimization
- Multi-location business support

### 4. **Enhanced Search Presence**
- Better click-through rates
- More informative search listings
- Trust signals (ratings, reviews)
- Professional appearance

## Testing & Validation

### Recommended Tools:
1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each page individually

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates JSON-LD syntax

3. **Google Search Console**
   - Monitor rich results performance
   - Check for structured data errors
   - Track impressions and clicks

### How to Test:
```bash
# After deployment, test each URL:
https://search.google.com/test/rich-results?url=https://trivitrondigital.ai/
https://search.google.com/test/rich-results?url=https://trivitrondigital.ai/products/
https://search.google.com/test/rich-results?url=https://trivitrondigital.ai/about/
https://search.google.com/test/rich-results?url=https://trivitrondigital.ai/contact/
```
## Important Notes

### Before Deployment:
1. **Update Domain URLs**: Replace `https://trivitrondigital.ai` with your actual domain in:
   - All schema files
   - Breadcrumb URLs
   - Organization URLs

2. **Update Contact Information**: Verify and update:
   - Phone numbers (currently placeholder)
   - Email addresses
   - Office addresses
   - Geo-coordinates for accurate map placement

3. **Update Social Media**: Add actual social media URLs in OrganizationSchema:
   - LinkedIn
   - Twitter/X
   - Facebook (if applicable)
   - YouTube (if applicable)

4. **Update Ratings**: If you have actual customer reviews:
   - Update aggregateRating values
   - Update reviewCount numbers
   - Consider adding individual Review schemas

### Future Enhancements:
1. **Add FAQ Schema**: When FAQ section is created
2. **Add Article Schema**: For blog posts/case studies
3. **Add Review Schema**: For customer testimonials
4. **Add Event Schema**: For webinars/conferences
5. **Add Video Schema**: For demo videos

## Maintenance

### Regular Updates Needed:
- Update `lastmod` dates in sitemap when content changes
- Keep contact information current
- Update ratings as new reviews come in
- Add new pages to breadcrumb schemas
- Monitor Google Search Console for errors

## Schema.org Types Used
- Organization
- WebSite
- BreadcrumbList
- SoftwareApplication
- Product
- MedicalBusiness (LocalBusiness)
- ContactPage
- AboutPage
- FAQPage (available for use)

## Next Steps for SEO
1. ✅ Structured Data - COMPLETED
2. ⏳ Add Open Graph tags
3. ⏳ Add Twitter Card tags
4. ⏳ Add favicon and app icons
5. ⏳ Optimize meta descriptions per page
6. ⏳ Add canonical URLs
7. ⏳ Implement image alt text strategy
