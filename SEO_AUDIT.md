# Sehn Consulting -- SEO Audit

**Audit Date:** March 2026
**Site Framework:** Next.js 16.1.6 (App Router)
**Pages Audited:** Homepage (`/`), Blog post (`/blog/why-mass-timber`)

---

## Executive Summary

The site has a solid foundation with properly configured meta tags on both existing pages, clean URL structure, and good image alt text practices. However, there are significant gaps in technical SEO infrastructure: no sitemap, no robots.txt, no structured data, no canonical URLs, and no custom error pages. The blog is hardcoded rather than using a scalable content framework, which will limit content marketing efforts.

---

## Current State: What Is In Place

### Meta Tags

**Homepage (`/` -- via `layout.tsx`)**
- Title: "Sehn Consulting | Mass Timber Sales Strategy & Market Intelligence"
- Description: Present, 161 characters, includes key service proposition and experience qualifier
- Keywords meta tag: "mass timber consulting, CLT sales strategy, mass timber projects, timber construction consulting, engineered wood products"
- OpenGraph title: Present, matches page title
- OpenGraph description: Present, differentiated from meta description (good practice)
- OpenGraph type: "website"

**Blog Post (`/blog/why-mass-timber`)**
- Title: "Why Mass Timber? | Sehn Consulting"
- Description: Present, 159 characters, covers CLT, glulam, and engineered wood products
- No OpenGraph tags defined (inherits from layout, but blog-specific OG would be better)
- No keywords meta tag on this page

### URL Structure
- Clean, semantic URLs with no query parameters or IDs
- Blog uses logical path: `/blog/why-mass-timber`
- Anchor-based navigation for single-page sections: `#about`, `#services`, `#approach`, `#contact`
- URL structure is ready for expansion (e.g., `/blog/[slug]`)

### Image Optimization
- All images use Next.js `Image` component with `fill` and `object-cover`
- `priority` attribute set on hero images (above-the-fold optimization)
- `quality={85}` set explicitly for optimized file size
- Descriptive alt text present on all images:
  - Hero: "Modern mass timber architecture with geometric wooden beam interior"
  - Blog hero: "Geometric mass timber ceiling structure showcasing engineered wood beams"

### HTML Semantics
- `<html lang="en">` is set correctly
- Semantic elements used: `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`
- `scroll-smooth` applied to html element
- `aria-label="Toggle menu"` on mobile hamburger button
- `aria-label` attributes on footer social links ("LinkedIn", "Email")
- `rel="noopener noreferrer"` on external links
- `target="_blank"` on LinkedIn links

### Performance Considerations
- Font loaded via `next/font/google` (self-hosted, no FOUT/FOIT)
- Antialiased text rendering
- `backdrop-blur-sm` used on header (GPU-accelerated)
- No third-party scripts or analytics loaded

---

## Missing: Critical SEO Infrastructure

### 1. sitemap.xml -- MISSING
**Priority: High**

No `sitemap.xml` is generated or configured. Next.js App Router supports automatic sitemap generation via `src/app/sitemap.ts`.

**Recommendation:** Create `src/app/sitemap.ts` that exports a sitemap function covering all pages. As the blog grows, this should dynamically include all blog post URLs.

**Pages to include:**
- `https://sehnconsulting.com/`
- `https://sehnconsulting.com/blog/why-mass-timber`

### 2. robots.txt -- MISSING
**Priority: High**

No `robots.txt` file exists. Next.js App Router supports this via `src/app/robots.ts`.

**Recommendation:** Create `src/app/robots.ts` that allows all crawlers, references the sitemap URL, and disallows any private or API routes.

### 3. JSON-LD Structured Data -- MISSING
**Priority: High**

No structured data markup is present on any page. This is a significant missed opportunity for rich search results.

**Recommended schemas:**
- **Homepage:** `Organization` schema with name, description, URL, logo, contact info, sameAs (LinkedIn)
- **Homepage:** `ProfessionalService` or `ConsultingBusiness` schema
- **Blog post:** `Article` or `BlogPosting` schema with headline, description, datePublished, author, publisher
- **Person:** `Person` schema for Paul Sehn with jobTitle, worksFor, description

### 4. Open Graph Image -- MISSING
**Priority: Medium**

No `og:image` is defined on any page. Social sharing will not display a preview image.

**Recommendation:** Create a branded OG image (1200x630px) featuring the Sehn Consulting logo, tagline, and brand colors. Use `next/og` (ImageResponse) for dynamic OG image generation, especially for blog posts.

### 5. Twitter Card Tags -- MISSING
**Priority: Medium**

No Twitter/X card meta tags are present. The site will not render preview cards when shared on Twitter/X.

**Recommendation:** Add `twitter:card`, `twitter:title`, `twitter:description`, and `twitter:image` meta tags. Next.js metadata API supports this natively via the `twitter` property in the metadata export.

### 6. Canonical URLs -- MISSING
**Priority: Medium**

No canonical URLs are set on any page. This can cause duplicate content issues, especially if the site is accessible via both www and non-www, or via deployment preview URLs.

**Recommendation:** Set canonical URLs via the `alternates.canonical` property in Next.js metadata exports on each page.

### 7. Custom 404 Page -- MISSING
**Priority: Medium**

No `not-found.tsx` exists in the app directory. Users who hit a broken link will see the default Next.js 404 page, which is unbranded and unhelpful.

**Recommendation:** Create `src/app/not-found.tsx` with branded styling, the Sehn Consulting logo, a clear message, and a link back to the homepage. This improves user experience and reduces bounce rate from broken links.

### 8. Breadcrumb Navigation -- MISSING
**Priority: Medium**

The blog post has a "Back to Home" link but no proper breadcrumb navigation. Breadcrumbs improve navigation UX and can appear as rich results in Google search.

**Recommendation:** Add breadcrumb navigation to the blog page (Home > Blog > Why Mass Timber) and implement `BreadcrumbList` JSON-LD structured data.

---

## Missing: Content & Blog Infrastructure

### 9. Blog Infrastructure (MDX/CMS) -- MISSING
**Priority: High (for content strategy)**

The blog post at `/blog/why-mass-timber` is entirely hardcoded in a single React component (`page.tsx`). The article content is stored as a JavaScript array of section objects within the component file.

**Current limitations:**
- Adding new blog posts requires creating new page directories and writing full React components
- No frontmatter support (publish date, author, tags, categories)
- No MDX support for rich content authoring
- No content listing page (`/blog` index)
- No RSS feed
- No related posts
- No author metadata
- No publish/updated dates displayed
- No estimated reading time
- Content is not portable or queryable

**Recommendation:** Implement an MDX-based blog with:
- `@next/mdx` or `contentlayer` for content management
- Frontmatter support (title, description, date, tags, author)
- A `/blog` index page with post listings
- Dynamic routing via `[slug]`
- RSS feed generation (`src/app/feed.xml/route.ts`)
- Reading time calculation
- Related posts logic

### 10. Blog Social Sharing -- MISSING
**Priority: Low-Medium**

The blog post has no social sharing buttons or functionality. There is no way for readers to easily share the article.

**Recommendation:** Add share buttons for LinkedIn (primary audience), Twitter/X, and a copy-link option. LinkedIn sharing is especially important given the B2B audience.

---

## Heading Hierarchy Review

### Homepage
```
h1: "We identify mass timber projects before your competitors do." (Hero)
  h2: "Three decades at the forefront of mass timber." (About)
    h3: Director, EOP Sales & Technical Services (credential)
    h3: SVP, Sales & Marketing (credential)
    h3: Director of Marketing (credential)
    h3: Business Consultant (credential)
  h2: "Strategic services for mass timber growth." (Services)
    h3: Project Intelligence & Early Identification
    h3: Sales Strategy & Revenue Growth
    h3: Sales Execution & Team Development
    h3: Market Entry & Expansion Advisory
  h2: "From approval to award. Faster." (Approach)
    h3: Research & Discovery
    h3: Intelligence & Analysis
    h3: Strategy & Positioning
    h3: Execution & Results
  h2: "Ready to find your next mass timber project?" (CTA)
```
**Assessment:** Good hierarchical structure. Single h1, logical h2/h3 nesting. No skipped levels.

### Blog Post
```
h1: "Why Mass Timber?" (Hero)
  h2: "In This Article" (TOC -- this is debatable as a heading)
  h2: "What Is Mass Timber?"
  h2: "The Carbon Advantage"
  h2: "Structural Performance That Surprises"
  h2: "Speed of Construction"
  h2: "A Market in Rapid Growth"
  h2: "The Opportunity for Mass Timber Companies"
  h2: "Ready to capitalize on the mass timber opportunity?" (CTA)
```
**Assessment:** Clean hierarchy with single h1. The TOC heading "In This Article" is styled as a small uppercase label (`text-sm`) but uses an `h2` tag -- consider changing to `h3` or a `<p>` to avoid inflating the heading count. No h3 elements in the article body, which is fine for the current depth.

---

## Target Keywords Analysis

### Primary Keywords
| Keyword                                  | Current Coverage                          | Status      |
|------------------------------------------|-------------------------------------------|-------------|
| mass timber consulting                   | Meta keywords, body copy                  | Moderate    |
| mass timber sales strategy               | Title tag, body copy, services section    | Strong      |
| mass timber project intelligence         | Hero text, services section               | Strong      |
| CLT consulting                           | Meta keywords ("CLT sales strategy")      | Weak        |
| glulam sales                             | Blog post content only                    | Weak        |
| engineered wood products consulting      | Meta keywords, about section              | Moderate    |

### Keyword Gaps
- "CLT consulting" appears only in the keywords meta tag, not in visible page content or headings
- "glulam sales" appears only in the blog post, not on the homepage
- No dedicated landing pages for individual service areas
- No location-based keywords (e.g., "mass timber consulting Canada", "North American mass timber")
- Missing long-tail keywords: "how to sell mass timber", "mass timber market intelligence", "mass timber project tracking"

### Recommendations
- Work primary keywords into h2 headings where natural
- Consider individual service pages that can target specific keyword clusters
- Add location signals to metadata and content (Canada, North America)
- Create blog content targeting long-tail keywords in the mass timber space
- Add schema markup with service descriptions containing target keywords

---

## Technical SEO Checklist

| Item                              | Status  | Notes                                          |
|-----------------------------------|---------|------------------------------------------------|
| Title tags                        | PASS    | Present on both pages, under 60 chars          |
| Meta descriptions                 | PASS    | Present, under 160 chars, compelling           |
| H1 tags                           | PASS    | Single h1 per page                             |
| Heading hierarchy                 | PASS    | Logical nesting, no skipped levels             |
| Image alt text                    | PASS    | Descriptive alt on all images                  |
| Image optimization                | PASS    | Next.js Image with quality and priority        |
| Mobile responsive                 | PASS    | Responsive breakpoints, mobile nav             |
| HTTPS                             | N/A     | Deployment-dependent                           |
| Page speed (font loading)         | PASS    | Self-hosted via next/font                      |
| Semantic HTML                     | PASS    | Proper use of semantic elements                |
| Language attribute                | PASS    | `lang="en"` set on html                        |
| External link attributes          | PASS    | `rel="noopener noreferrer"` on external links  |
| sitemap.xml                       | FAIL    | Not present                                    |
| robots.txt                        | FAIL    | Not present                                    |
| JSON-LD structured data           | FAIL    | Not present                                    |
| Open Graph image                  | FAIL    | Not present                                    |
| Twitter Cards                     | FAIL    | Not present                                    |
| Canonical URLs                    | FAIL    | Not present                                    |
| 404 page                          | FAIL    | No custom not-found.tsx                        |
| Breadcrumbs                       | FAIL    | Not present                                    |
| RSS feed                          | FAIL    | Not present                                    |
| Blog index page                   | FAIL    | No /blog listing page                          |
| Favicon / web manifest            | N/A     | Not audited (check public/ directory)          |

---

## Priority Action Items

### Immediate (High Impact, Low Effort)
1. Create `src/app/sitemap.ts`
2. Create `src/app/robots.ts`
3. Add canonical URLs to all page metadata exports
4. Create `src/app/not-found.tsx` with branded 404 page

### Short-Term (High Impact, Medium Effort)
5. Add JSON-LD structured data (Organization, ProfessionalService, Article)
6. Generate OG images (static or dynamic with `next/og`)
7. Add Twitter Card meta tags
8. Add breadcrumb navigation + BreadcrumbList schema to blog

### Medium-Term (Strategic, Higher Effort)
9. Build MDX blog infrastructure with frontmatter, dynamic routing, and index page
10. Create RSS feed
11. Add social sharing to blog posts
12. Create individual service landing pages for keyword targeting
13. Implement blog content calendar targeting long-tail mass timber keywords
