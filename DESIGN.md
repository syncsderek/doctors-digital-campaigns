---
name: Clinical Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

This design system establishes an atmosphere of institutional authority merged with modern technological sophistication. The brand personality is "The Expert Partner"—composed, reliable, and results-driven. It targets healthcare executives and medical practitioners who value data-backed growth and patient-centric outcomes.

The design style is **Corporate Modern with a Minimalist lean**. It draws inspiration from high-end technology interfaces (Apple) and world-class medical institutions (Mayo Clinic). The aesthetic relies on meticulous alignment, expansive whitespace, and a rhythmic use of cool tones to evoke a sense of sterile, high-performance clarity. Visual complexity is intentionally reduced to emphasize trust and professional competence.

## Colors

The palette is anchored in **Deep Navy Blue**, providing the "weight" and authority required for a medical marketing context. **Clinical Teal** acts as the primary functional color for interactive elements and brand recognition, symbolizing modern healthcare technology.

- **Primary (#0F172A):** Used for typography, navigation bars, and heavy structural elements.
- **Secondary (#0EA5E9):** Used for primary actions, iconography, and subtle UI accents.
- **Success/Accent (#10B981):** Reserved strictly for growth indicators, positive metrics, and high-conversion CTAs.
- **Surface Tiers:** Backgrounds utilize a sequence of White (#FFFFFF) to Slate-50 (#F8FAFC) to create a clean, multi-layered "clinical" environment.

## Typography

The design system utilizes **Inter** exclusively to maintain a utilitarian, clinical appearance. This single-typeface approach ensures that the "voice" of the interface remains consistent and unbiased. 

Headlines use semi-bold and bold weights with tighter tracking to feel like authoritative "statements." Body copy is set with generous line heights (1.5–1.6) to maximize legibility for dense medical marketing information. Labels and small metadata use increased letter spacing and uppercase styling to provide a modern, "monitored" aesthetic.

## Layout & Spacing

This design system follows a **Fixed Grid** model for desktop to ensure content remains centered and scannable, transitioning to a fluid model for mobile devices. 

- **The 8px Rhythm:** All spacing between elements must be a multiple of 8px.
- **Sectioning:** Large vertical gaps (120px+) are used between major content blocks to convey a "premium" feel and allow the eye to rest.
- **Desktop:** 12-column grid with 24px gutters and a 1280px max-width container.
- **Mobile:** 4-column grid with 16px margins.
- **Alignment:** Content is predominantly left-aligned to mirror clinical documentation styles, though hero sections may use center-alignment for impact.

## Elevation & Depth

Visual hierarchy is managed through **Soft Ambient Shadows** and **Tonal Layering**. 

1. **The Floor:** Pure white (#FFFFFF) for the primary content canvas.
2. **Sub-surfaces:** Cool gray (#F8FAFC) for secondary containers, sidebar backgrounds, or "well" components.
3. **Elevated Cards:** High-quality cards use a very subtle, large-radius shadow (Blur: 40px, Y: 10px, Opacity: 4%) to lift items off the background without appearing heavy.
4. **Interactive State:** Upon hover, interactive cards should slightly deepen their shadow and transition up by 2px to provide tactile feedback.

## Shapes

The shape language is defined as **Soft and Structural**. 

A standard border-radius of **8px** (rounded-md) is applied to buttons, input fields, and small UI components. Larger containers and cards utilize **12px-16px** (rounded-lg) to soften the professional tone. Circles are reserved strictly for avatars and specific iconography status indicators. Avoid "pill" shapes for buttons to maintain a more structured, medical-software appearance.

## Components

### Buttons
- **Primary:** Deep Navy (#0F172A) background with White text. Sharp 8px corners.
- **Secondary:** Clinical Teal (#0EA5E9) text with a subtle Slate-100 border or transparent background for "ghost" styles.
- **CTA:** Success Green (#10B981) background. Used exclusively for "Book a Demo" or "Get Started."

### Input Fields
Inputs use a white background with a 1px Slate-200 border. Labels sit above the input in `label-md` style. Focus states use a 2px Teal ring with 0% offset.

### Cards
Cards are the primary content vehicle. They feature a 1px Slate-100 border, 12px radius, and a soft ambient shadow. Internal padding should be generous (24px or 32px).

### Lists & Data
Use thin Slate-100 horizontal dividers between list items. Success Green is used for checkmarks in feature lists to reinforce the "patient growth" narrative.

### Imagery & Icons
- **Photography:** High-brightness, clinical environments with professional staff. Low saturation of warm tones.
- **Icons:** 2px stroke weight, "Line" style icons in Deep Navy or Clinical Teal. No filled icons unless they represent an active state.