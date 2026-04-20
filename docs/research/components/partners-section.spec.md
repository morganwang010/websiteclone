# Partners Section Specification

## Overview
- **Target file:** `src/components/PartnersSection.tsx`
- **Interaction model:** static with hover effects

## DOM Structure
```
section.custom-wrapper (py-16, bg-white)
├── div.container
│   ├── div.public-title
│   │   ├── h3 "合作客户"
│   │   └── p ""
│   └── div.custom-list.row
│       └── div.col-6.col-md-4.col-lg-2 × 12
│           └── div.custom-item
│               └── div.pic
│                   └── img
```

## Styles
- Grid: 6 columns desktop, 4 tablet, 2 mobile
- Border: 1px solid #f2f2f2
- Item hover: box-shadow 0 0 8px #ddd
- Image: padding-5, centered

## Partners Data
12 logo images alternating between 240-120.png and logo.png

## Assets
- Images from `public/images/`

## Responsive
- Desktop: 6 columns
- Tablet: 4 columns
- Mobile: 2 columns
