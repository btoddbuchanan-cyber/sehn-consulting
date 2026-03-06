# Sehn Consulting -- Design Audit

**Audit Date:** March 2026
**Site Framework:** Next.js 16.1.6 with Tailwind CSS v4
**Pages Audited:** Homepage (`/`), Blog post (`/blog/why-mass-timber`)

---

## Executive Summary

The Sehn Consulting website has a solid visual foundation: clean layout, well-structured component hierarchy, professional color palette, and appropriate imagery. However, the site is entirely static with no motion design, no scroll-triggered animations, no micro-interactions, and no page transitions. The design is functional but lacks the polish and dynamism expected from a premium consulting brand competing for high-value B2B clients. The recommendations below focus on adding depth, interactivity, and refinement without compromising the professional tone.

---

## Section-by-Section Analysis

### Header
**File:** `src/components/Header.tsx`

**What works:**
- Fixed positioning with backdrop blur (`bg-white/95 backdrop-blur-sm`) creates a clean glassmorphism effect
- Logo + wordmark + subtitle hierarchy is well-structured
- Navigation links are clearly organized with a prominent "Get Started" CTA button
- Mobile hamburger toggle works correctly with open/close icon swap

**What could improve:**
- **Mobile nav has no transition animation.** The menu appears/disappears instantly via conditional rendering (`{mobileOpen && ...}`). It should slide down or fade in with a smooth transition.
- **No scroll-aware styling.** The header does not change appearance on scroll (e.g., adding a shadow, reducing height, or adjusting transparency). A scroll-responsive header would feel more polished.
- **Logo uses an `<a href="#">` anchor** instead of Next.js `<Link href="/">`. This is inconsistent with the blog page header which correctly uses `<Link>`. This also means clicking the logo on the homepage scrolls to the top rather than navigating properly.
- **No active state on nav links.** The current section is not visually indicated in the navigation. Adding an active indicator based on scroll position would improve wayfinding.
- **The mobile nav lacks a backdrop overlay.** On mobile, the menu opens without dimming or blurring the content behind it. A semi-transparent overlay would improve focus.

### Hero Section
**File:** `src/components/Hero.tsx`

**What works:**
- Full-viewport hero with background image creates strong visual impact
- Multi-layer gradient overlay provides consistent text contrast
- Status badge with pulsing green dot is a nice detail (`animate-pulse`)
- Two-button CTA pattern (primary + secondary) is effective
- Bottom fade-to-white gradient creates seamless transition to content
- The animate-pulse on the green dot is the only animation on the entire site

**What could improve:**
- **No entrance animations.** The hero text, badge, and buttons all render statically. Staggered fade-in/slide-up animations would dramatically improve first impression.
- **No parallax effect on the background image.** The hero image is static. Even a subtle parallax scroll would add depth.
- **The hero highlight text ("before your competitors do")** in `text-green-300` could benefit from a subtle text reveal or gradient animation to draw attention.
- **No scroll indicator.** There is no visual cue (e.g., a bouncing chevron or "scroll down" hint) encouraging users to scroll past the hero.

### About Section
**File:** `src/components/About.tsx`

**What works:**
- Two-column layout (bio text + credentials) creates balanced visual weight
- Credential cards have a left border accent (`border-l-2 border-primary/30`) with hover state (`hover:border-primary`) that provides subtle interactivity
- Section label uses the consistent `text-sm font-semibold tracking-widest uppercase` pattern

**What could improve:**
- **No scroll-reveal animations.** The entire section appears at once. The credential cards would benefit from staggered reveal animations as users scroll into view.
- **No visual element for Paul Sehn.** A professional headshot or abstract portrait element would add a human dimension to the section and build trust. The section is currently entirely text-based.
- **The credential cards have hover state but no other interactivity.** Consider adding a subtle scale or shadow lift on hover, or an expand-to-reveal-more pattern.

### Services Section
**File:** `src/components/Services.tsx`

**What works:**
- Clean 2x2 grid layout with consistent card structure
- Each card has an icon, title, description, and feature checklist -- comprehensive information architecture
- Cards have existing hover state (`hover:border-primary/20 hover:shadow-lg transition-all duration-300`)
- Icon containers use tinted primary background (`bg-primary/10 text-primary`)

**What could improve:**
- **Hover animations are minimal.** Current hover only changes border color and adds shadow. Consider adding:
  - Icon container background color shift (e.g., from `bg-primary/10` to `bg-primary` with white icon on hover)
  - Subtle card translate-y lift (e.g., `hover:-translate-y-1`)
  - Feature checkmarks animating in on hover or scroll
- **No scroll-triggered entrance.** Cards should stagger in from bottom as the user scrolls to this section.
- **No visual differentiation between the four services.** All cards look identical in structure. Consider using different icon colors, numbered badges, or gradient accents to create visual distinction.
- **The section background (`bg-section` / `#fafaf7`)** provides minimal contrast from white sections. Consider a slightly stronger differentiation or a subtle pattern.

### Approach Section
**File:** `src/components/Approach.tsx`

**What works:**
- Four-step numbered methodology clearly communicates process
- Large faded step numbers (`text-5xl font-bold text-primary/10`) provide visual anchoring
- Arrow connectors between steps (hidden on mobile, visible on large screens) show progression

**What could improve:**
- **The connecting arrows are static and minimal.** The SVG arrows between steps (`text-primary/20`) are very faint. Consider:
  - An animated connecting line/path that draws itself on scroll
  - A progress-bar-style connector that fills as the user scrolls through the section
  - Dotted or dashed lines for a more dynamic feel
- **No scroll-reveal on steps.** Steps should animate in sequentially (1, 2, 3, 4) as the user scrolls, reinforcing the sequential nature of the process.
- **Step cards could be more visually distinct.** Currently they are plain text with a faded number. Consider adding:
  - A top border or accent stripe in primary color
  - An icon for each step
  - A subtle background card container
- **No hover interaction on steps.** Adding hover states would make the section feel more interactive and encourage exploration.
- **On mobile (stacked 2x2 or single column), the sequential flow is not visually communicated.** The arrows are hidden below `lg:` breakpoint. Consider a vertical timeline treatment for mobile.

### CTA / Contact Section
**File:** `src/components/CTA.tsx`

**What works:**
- Strong dark gradient background creates visual weight and urgency
- Subtle SVG cross pattern overlay at 5% opacity adds texture without distraction
- Glassmorphism contact card (`bg-white/10 backdrop-blur-sm border border-white/20`) is elegant
- Contact information is well-organized with icons (email, location, LinkedIn)
- Clear CTA button with full-width treatment inside the card

**What could improve:**
- **The contact card could be more interactive.** Consider:
  - Hover effects on contact items (icon animation, slight indent, or color shift)
  - A subtle glow or border animation on the card itself
  - The card could have a reveal animation on scroll
- **No contact form.** The section relies entirely on email links. Adding a simple contact form (name, email, message) would lower the barrier to engagement and enable lead capture.
- **The section subtitle ("Let's discuss how Sehn Consulting can help...") is generic.** Consider adding a more specific value proposition or social proof element (e.g., a testimonial, client logo bar, or statistic).
- **No visual connection to the preceding section.** A wave, diagonal cut, or gradient transition between the white Approach section and the dark CTA section would improve flow.

### Footer
**File:** `src/components/Footer.tsx`

**What works:**
- Dark background (`#111`) provides clear page termination
- Logo, copyright, and social links are appropriately placed
- LinkedIn and email icons have hover states (`hover:text-white`)
- Clean, uncluttered layout

**What could improve:**
- **Footer is extremely minimal.** For a consulting site, the footer is underserving its potential. Consider adding:
  - Navigation links (mirror main nav: About, Services, Approach, Blog, Contact)
  - A brief company description or tagline
  - Location information
  - A secondary CTA (e.g., "Schedule a Consultation")
- **No visual separation from CTA section.** Both sections use dark backgrounds. Consider a border-top or slight color differentiation.
- **Copyright year is dynamically generated** (`new Date().getFullYear()`) -- this is correct and future-proof.
- **Social links are limited.** Only LinkedIn and email are present. Consider adding relevant industry platforms if applicable.

### Blog Page
**File:** `src/app/blog/why-mass-timber/page.tsx`

**What works:**
- Well-structured long-form article with clear section breaks
- Table of contents with anchor links provides good navigation
- Opening pull quote with left border accent sets the tone
- Inline CTA at the bottom of the article encourages conversion
- Consistent use of the check-mark icon for list items
- Blog has its own header (simplified, with "Back to Home" link) and footer

**What could improve:**
- **Table of contents is static.** It should:
  - Highlight the currently visible section as the user scrolls (active state tracking)
  - Become a sticky sidebar on desktop for constant access during reading
  - Collapse/expand on mobile
- **No reading progress indicator.** A progress bar at the top of the page (below the header) showing how far through the article the reader has progressed would improve engagement.
- **No social sharing buttons.** There is no way for readers to share the article on LinkedIn, Twitter/X, or copy the link. For B2B content marketing, LinkedIn sharing is critical.
- **No estimated reading time.** Displaying "X min read" near the title helps set reader expectations.
- **No publish date or author attribution.** The article has no visible date or author, which hurts credibility and SEO.
- **No related posts or "read next" section.** After the inline CTA, there is nothing guiding readers to additional content.
- **The blog header duplicates the SVG logo code** rather than extracting it into a shared component. This creates maintenance burden and inconsistency risk.

---

## Cross-Cutting Design Issues

### 1. No Animations or Motion Design
**Priority: High**

The site has zero scroll-triggered animations, no entrance effects, no page transitions, and only one CSS animation (the pulsing green dot in the hero). This makes the site feel flat and static compared to modern B2B consulting sites.

**Recommendations:**
- Add a scroll-reveal library (Framer Motion is ideal for React/Next.js) for:
  - Fade-in-up on section headings and content blocks
  - Staggered reveal on card grids (Services, Approach steps, credentials)
  - Counter animations for any future statistics
- Add subtle hover micro-interactions throughout:
  - Button scale/shadow effects
  - Icon animations on hover
  - Link underline animations
- Consider page transitions between homepage and blog
- Add a smooth scroll-to-section animation when clicking nav links (currently relies on CSS `scroll-smooth` which is functional but not customizable)

### 2. Typography Could Benefit from a Display/Serif Font
**Priority: Medium**

The entire site uses Geist Sans, which is clean and modern but creates a uniform typographic texture. Introducing a display or serif typeface for headings would create visual contrast and hierarchy, adding a premium, editorial feel that suits a consulting brand.

**Recommendations:**
- Consider pairing Geist Sans (body) with a serif or display font for h1/h2 headings
- Options: a refined serif like "Instrument Serif", "Playfair Display", or "Source Serif Pro" would complement Geist Sans and add warmth/authority
- Alternatively, a geometric display sans like "Cabinet Grotesk" or "General Sans" at heavier weights could work
- The blog article headings especially would benefit from a display font treatment

### 3. No Loading States
**Priority: Low-Medium**

There are no loading states, skeleton screens, or loading indicators anywhere in the application. While the site is currently simple enough that loading states are rarely noticed, as the site grows (especially with a dynamic blog), these will become necessary.

**Recommendations:**
- Create `src/app/loading.tsx` for route-level loading states
- Consider a branded loading spinner or progress bar using the primary green
- Image loading could use blur-up placeholder treatment (Next.js `placeholder="blur"`)

### 4. No Page Transitions
**Priority: Low-Medium**

Navigation between the homepage and blog post is an abrupt hard cut. There is no visual transition between pages.

**Recommendations:**
- Implement route transition animations using Framer Motion's `AnimatePresence` or Next.js View Transitions API
- Even a simple fade-out/fade-in would significantly improve the perceived quality

### 5. No Custom 404 Page
**Priority: Medium**

The site has no `not-found.tsx`, so users who hit a broken link see the default Next.js 404 page.

**Recommendations:**
- Create a branded 404 page with the Sehn Consulting logo, a helpful message, and a clear CTA to return home
- Consider adding a search function or sitemap links on the 404 page

### 6. Shared Component Extraction
**Priority: Medium (code quality)**

The logo SVG and header/footer markup are duplicated between the homepage components and the blog page. The blog page has its own inline header and footer rather than reusing the shared components.

**Recommendations:**
- Extract the SVG logo into a standalone `Logo` component
- Create a shared `BlogLayout` component or modify the existing `Header`/`Footer` to accept props for different contexts (e.g., simplified blog header vs. full homepage header)
- This prevents visual drift between pages and reduces maintenance burden

---

## Visual Design Strengths (Preserve These)

These elements are working well and should be maintained through any redesign:

1. **Color palette** -- The forest green primary with warm accents is distinctive and industry-appropriate
2. **Whitespace** -- Generous padding on sections (`py-24 lg:py-32`) gives the design room to breathe
3. **Hero composition** -- Full-bleed background image with gradient overlay is impactful
4. **Card consistency** -- Service cards follow a clear, repeatable pattern
5. **CTA section gradient** -- The dark green gradient creates visual weight and urgency
6. **Glassmorphism elements** -- Header blur and CTA contact card feel modern
7. **Icon style** -- Consistent inline SVG stroke icons with 1.5px stroke weight
8. **Section label pattern** -- The uppercase, tracked-out, small-size section labels create rhythm

---

## Design Upgrade Priority Matrix

### High Priority (Greatest Impact)
| Item | Effort | Impact |
|------|--------|--------|
| Scroll-reveal animations (Framer Motion) | Medium | High |
| Hero entrance animation sequence | Medium | High |
| Mobile nav transition animation | Low | Medium-High |
| Services card hover improvements | Low | Medium |
| Custom 404 page | Low | Medium |

### Medium Priority (Polish & Refinement)
| Item | Effort | Impact |
|------|--------|--------|
| Display/serif font for headings | Low | Medium |
| Blog sticky table of contents | Medium | Medium |
| Reading progress indicator | Low | Medium |
| Footer navigation expansion | Low | Medium |
| Approach section connecting visuals | Medium | Medium |
| Section transition elements (waves, diagonals) | Medium | Medium |
| Blog social sharing buttons | Low | Medium |

### Lower Priority (Nice to Have)
| Item | Effort | Impact |
|------|--------|--------|
| Page transitions | Medium | Low-Medium |
| Loading states / skeletons | Low | Low |
| Parallax hero image | Low | Low |
| Contact form | Medium | Medium |
| Scroll-aware header styling | Low | Low |
| Blog reading time & date | Low | Low |

---

## Recommended Technology Additions

| Library | Purpose | Size Impact |
|---------|---------|-------------|
| `framer-motion` | Scroll animations, page transitions, micro-interactions | ~30kb gzipped |
| `next/font` (additional font) | Display/serif typeface for headings | Variable (typically 15-40kb) |

These are the only additions recommended. The site should remain lean and avoid heavy animation libraries, parallax frameworks, or complex state management for design purposes. Framer Motion alone can handle all the animation requirements listed above.
