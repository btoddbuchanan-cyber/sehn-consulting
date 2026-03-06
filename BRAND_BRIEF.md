# Sehn Consulting -- Brand Brief

## Company Overview

**Name:** Sehn Consulting
**Tagline:** Mass Timber Advisory
**Principal:** Paul Sehn
**Location:** Canada
**Website:** sehnconsulting.com
**Email:** paul@sehnconsulting.com
**LinkedIn:** https://www.linkedin.com/in/paulsehn9161b542/

Sehn Consulting is a premium B2B consulting firm specializing in mass timber sales strategy, market intelligence, and revenue growth advisory. Founded by Paul Sehn, the firm leverages 30+ years of senior executive experience across the mass timber and engineered wood products industry. Clients are mass timber companies seeking to identify projects early, build winning sales strategies, and accelerate revenue growth.

---

## Logo

### Description
The logo is a custom SVG icon depicting three stacked layers (a layered/laminated motif), evoking the cross-laminated structure of mass timber products. The icon uses three horizontally stacked chevron shapes radiating from a central point, suggesting depth, structure, and engineered precision.

### SVG Markup
```svg
<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 2L2 7l10 5 10-5-10-5z" />
  <path d="M2 17l10 5 10-5" />
  <path d="M2 12l10 5 10-5" />
</svg>
```

### Logo Usage
- **Header (light background):** 40x40px rounded container with `bg-primary` (#2d5016) fill, white stroke icon at 22x22px. Accompanied by the wordmark "Sehn Consulting" in bold foreground text with "Mass Timber Advisory" subtitle in accent color, uppercase tracking-widest.
- **Footer (dark background):** 32x32px rounded container with `bg-primary` (#2d5016) fill, white stroke icon at 16x16px. Accompanied by "Sehn Consulting" in semi-bold white/80 text.
- **Blog header:** Same treatment as main header (40x40px container, 22x22px icon).
- The logo works on both light backgrounds (white header with border) and dark backgrounds (hero gradient overlay, dark footer #111).

### Logo Container
The icon is always placed inside a rounded square container with the primary green background. This ensures contrast and consistency across light and dark contexts.

---

## Color Palette

### Primary Colors
| Token             | Hex       | Usage                                                    |
|-------------------|-----------|----------------------------------------------------------|
| `primary`         | `#2d5016` | Logo bg, CTA buttons, active states, section labels, links on hover, border accents |
| `primary-light`   | `#3a6b1e` | Button hover state (header "Get Started" button)         |
| `primary-dark`    | `#1e3a0e` | Dark end of gradient overlays                            |

### Accent Colors
| Token             | Hex       | Usage                                                    |
|-------------------|-----------|----------------------------------------------------------|
| `accent`          | `#8b7355` | Subtitle text ("Mass Timber Advisory"), label text       |
| `accent-light`    | `#a6896a` | Defined but not currently in active use                  |

### Neutral / Background Colors
| Token             | Hex       | Usage                                                    |
|-------------------|-----------|----------------------------------------------------------|
| `background`      | `#ffffff` | Page background, card backgrounds                        |
| `foreground`      | `#1a1a2e` | Primary body text, headings                              |
| `warm`            | `#f5f0eb` | Warm cream (defined, available for warm sections)        |
| `warm-dark`       | `#e8dfd6` | Darker warm tone (defined, available)                    |
| `section`         | `#fafaf7` | Alternating section background (Services, blog TOC)     |

### Dark / Overlay Colors (used inline, not as tokens)
| Color             | Usage                                                      |
|-------------------|------------------------------------------------------------|
| `#1a2e0a`         | Hero gradient start, CTA gradient start                    |
| `#111`            | Footer background                                          |
| `gray-100`        | Header border, card borders                                |
| `gray-600`        | Body text, descriptions                                    |
| `gray-500`        | Secondary descriptive text                                 |
| `green-300`       | Hero highlight text ("before your competitors do")         |
| `green-400`       | Pulsing status dot in hero badge                           |
| `white/10` - `white/90` | Various transparency levels for text and elements on dark backgrounds |

### Gradient Definitions
- **Hero overlay:** `bg-gradient-to-br from-[#1a2e0a]/85 via-[#2d5016]/75 to-[#1e3a0e]/80`
- **Hero bottom fade:** `bg-gradient-to-t from-white to-transparent`
- **CTA section:** `bg-gradient-to-br from-[#1a2e0a] via-[#2d5016] to-[#1e3a0e]`
- **Blog hero overlay:** `bg-gradient-to-t from-white via-[#1a2e0a]/50 to-[#1a2e0a]/70`

---

## Typography

### Font Family
- **Primary:** Geist Sans (loaded via `next/font/google` as `Geist`)
- **CSS Variable:** `--font-geist-sans`
- **Fallback:** Arial, Helvetica, sans-serif (set on body)
- **Classification:** Modern, clean, geometric sans-serif
- **Monospace (defined but unused):** `--font-geist-mono`

### Type Scale (Tailwind classes in use)
| Element                  | Classes                                                 |
|--------------------------|---------------------------------------------------------|
| Hero h1                  | `text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight` |
| Section h2               | `text-3xl sm:text-4xl font-bold`                       |
| Blog article h2          | `text-2xl sm:text-3xl font-bold`                       |
| Card h3                  | `text-xl font-bold`                                    |
| Approach step h3         | `text-lg font-bold`                                    |
| Section labels           | `text-sm font-semibold tracking-widest uppercase`       |
| Body text                | `text-lg text-gray-600 leading-relaxed`                |
| Feature list items       | `text-sm text-gray-600`                                |
| Nav links                | `text-sm font-medium`                                  |
| Logo wordmark            | `text-xl font-bold tracking-tight`                     |
| Logo subtitle            | `text-xs tracking-widest uppercase`                    |

### Text Rendering
- `antialiased` applied globally via body class

---

## Visual Tone & Brand Personality

### Overall Positioning
- **Professional and authoritative:** The design communicates seniority and deep industry expertise. No playful elements, no casual tone.
- **Nature-aligned:** The forest green palette directly references the timber industry. Green is used as the dominant brand color throughout.
- **Premium B2B consulting:** Clean whitespace, restrained color usage, and structured layouts signal high-end advisory services rather than a product company.
- **Understated confidence:** The design does not oversell. Copy is direct and factual. Visual hierarchy is clean and deliberate.

### Design Language
- Rounded corners on containers and buttons (not fully rounded/pill -- uses `rounded` which is 0.25rem)
- Subtle borders (`border-gray-100`) for card and header separation
- Generous whitespace (`py-24 lg:py-32` on sections)
- Restrained use of color -- primary green is used for accents and CTAs, not for large fills (except hero/CTA overlays)
- Backdrop blur on fixed header for glassmorphism effect (`bg-white/95 backdrop-blur-sm`)
- SVG icons are hand-coded inline, not from an icon library
- No stock photography visible -- hero uses an architectural mass timber image
- Background patterns used sparingly (CTA section has a subtle SVG cross pattern at 5% opacity)

### Imagery
- Hero: Full-bleed background image of mass timber architecture (`/images/hero-wood-beams.jpg`)
- Blog hero: Geometric mass timber ceiling structure (`/images/hero-geometric-ceiling.jpg`)
- Images use Next.js `Image` component with `fill`, `object-cover`, `priority`, and `quality={85}`
- All images have descriptive alt text

---

## Brand Voice (as expressed in current copy)

- **Direct and confident:** "We identify mass timber projects before your competitors do."
- **Experience-led:** "30+ years of senior executive leadership"
- **Action-oriented:** CTAs use imperative language -- "Schedule a Consultation", "Start a Conversation", "Get Started"
- **Industry-specific:** Uses precise terminology -- CLT, glulam, NLT, DLT, MPP, specifiers, EOP
- **Benefit-focused:** Emphasizes outcomes -- "earlier identification", "winning sales strategies", "accelerate revenue growth"
- **Formal but not stiff:** Professional register without jargon overload

---

## Component Inventory

| Component   | File                          | Description                                           |
|-------------|-------------------------------|-------------------------------------------------------|
| Header      | `src/components/Header.tsx`   | Fixed top nav with logo, links, mobile hamburger menu |
| Hero        | `src/components/Hero.tsx`     | Full-viewport hero with bg image, overlay, badge, CTA |
| About       | `src/components/About.tsx`    | Two-column: bio text + executive track record cards   |
| Services    | `src/components/Services.tsx` | 2x2 grid of service cards with icons and features     |
| Approach    | `src/components/Approach.tsx` | 4-step numbered methodology with arrow connectors     |
| CTA         | `src/components/CTA.tsx`      | Dark gradient section with contact card               |
| Footer      | `src/components/Footer.tsx`   | Minimal dark footer with logo, copyright, social links|

---

## Technical Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 with `@tailwindcss/postcss`
- **Language:** TypeScript 5.x (strict mode)
- **Font Loading:** `next/font/google` (Geist Sans)
- **Image Handling:** `next/image` with optimized quality settings
- **Build Tool:** Next.js built-in (Turbopack compatible)
- **Linting:** ESLint with `eslint-config-next`
