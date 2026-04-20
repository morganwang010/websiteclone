# About Section Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Interaction model:** static with wow.js scroll animations

## DOM Structure
```
section.about-wrapper
├── div.left-img (col-lg-6, h-[580px])
│   └── img[src="/images/about.jpeg"]
└── div.about-right (col-lg-6)
    └── div.about-right-content
        ├── h2 "公司简介"
        ├── p "Company profile"
        ├── div.info (6-line clamp)
        ├── div.count-wrapper
        │   ├── div.count-item
        │   │   ├── div.count-text (span.number "10", span.unit "年")
        │   │   └── p "10年核心团队经验"
        │   └── div.count-item
        │       ├── div.count-text (span.number "20", span.unit "+")
        │       └── p "超20项知识产权"
        └── a.public-more "查看更多"
```

## Styles
- Section: mt-16, mb-3
- Left image container: h-[580px], overflow-hidden
- Content box: absolute, h-full, bg-white, p-12
- Heading: text-3xl font-bold
- Stat number: text-4xl font-bold text-[#2460f2]

## Content
- Title: 公司简介
- Subtitle: Company profile
- Description text with 6-line clamp
- Stats: 10年 经验, 20+ 知识产权

## Assets
- Image: `public/images/about.jpeg`
- Icons: ArrowDoubleRightIcon

## Responsive
- Desktop: 2-column
- Mobile: stacked
