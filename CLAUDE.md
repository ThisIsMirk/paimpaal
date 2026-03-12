# Paimpaal Website

## Overview
Static website for Paimpaal farm (www.paimpaal.in) in India. Replaces a bloated WordPress/Elementor site with a fast, mobile-first static site.

## Architecture
- **Pure HTML + CSS + vanilla JS** — no frameworks, no build step
- **4 pages**: index.html, products.html, farmstay.html, about.html
- **Hosting**: GitHub Pages (custom domain paimpaal.in)
- **No ecommerce** — all orders/inquiries via WhatsApp with pre-filled messages

## Business
Two businesses:
1. **Farm products** — dairy (milk, yogurt, ghee, eggs), produce (tomatoes, okra, brinjal, chillies), fruits (avocado, chikoo, guava, rambutan, mangosteen), spices (black pepper, cardamom, cinnamon, clove)
2. **Farmstay** — cottage + tent on a hilltop with scenic views

## Design System
- Mobile-first (320px base, breakpoints at 768px and 1024px)
- Colors: olive green (#6B7C2E), cream background (#FDF8F0), dark brown text (#3B2F2F), terracotta accent (#C1644A)
- System font stack (no external fonts)
- Large tap targets (48px+ for mobile)

## File Structure
```
paimpaal/
├── index.html
├── products.html
├── farmstay.html
├── about.html
├── css/style.css
├── js/main.js
├── images/
└── CLAUDE.md
```

## Placeholders (TBD)
- WhatsApp number: currently "91XXXXXXXXXX"
- Product prices
- Farmstay pricing, amenities details, check-in/out
- Farm address
- Tagline/mission statement
