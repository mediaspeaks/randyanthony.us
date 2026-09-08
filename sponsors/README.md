# Sponsor Card System

The RANDI sponsor card system uses one shared presentation layer and one standard HTML structure across the site.

## Files

- `/css/sponsors.css` is the canonical sponsor card stylesheet.
- This document defines the standard markup and rules for adding or replacing a sponsor card.

## Canonical HTML

```html
<div class="sponsor-grid">
  <article class="sponsor-card">
    <img class="sponsor-logo" src="/assets/SPONSOR-LOGO.webp" alt="Sponsor Name">
    <h3>Sponsored by Sponsor Name</h3>
    <p>
      Sponsor copy goes here.
    </p>
    <a class="sponsor-cta" href="https://example.com/">CTA Text →</a>
  </article>
</div>
```

## Rules

1. Use `sponsor-grid` for the sponsor-card container when the page presents one or more sponsor cards.
2. Use `sponsor-card` for every sponsor article.
3. Use `sponsor-logo` for the sponsor image. The shared stylesheet controls logo size, centering, and responsive behavior.
4. Use `sponsor-cta` for the sponsor action link. Do not use a page-specific button class for the sponsor CTA.
5. Keep sponsor name, copy, destination URL, and CTA wording in the page HTML. The stylesheet controls presentation only.
6. Do not generate sponsor cards with JavaScript. The site is static HTML and the sponsor content should remain visible in the source.
7. Do not add sponsor-specific layout rules to `public-nav.css`, page-level styles, or unrelated global styles unless there is a documented exception.
8. Sponsor cards use the standard dark card geometry: `#2f3a44`, 16px radius, 24px padding, shared shadow, and equal-height grid behavior.
9. Sponsor headings and body copy use the shared typography defined in `/css/sponsors.css`.
10. Sponsor CTAs use the shared green treatment defined in `/css/sponsors.css`.

## Adding a New Sponsor

Copy the canonical HTML structure, replace the logo, sponsor name, copy, destination URL, and CTA text, and leave the presentation classes unchanged.

This is a copy-and-paste component for the static site. It is intentionally not a runtime include or JavaScript component.
