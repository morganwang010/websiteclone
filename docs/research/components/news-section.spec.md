# News Section Specification

## Overview
- **Target file:** `src/components/NewsSection.tsx`
- **Interaction model:** static with card hover effects

## DOM Structure
```
section.news-wrapper (py-16)
├── div.container
│   ├── div.public-title
│   │   ├── h3 "新闻中心"
│   │   └── p "News"
│   ├── div.news-list.row
│   │   └── div.col-lg-6 × 6
│   │       └── div.news-item (row)
│   │           ├── div.col-md-4.news-item-img
│   │           │   └── a > img
│   │           └── div.col-md-8
│   │               └── a.card-body
│   │                   ├── h5.card-title (text-ellipsis)
│   │                   ├── p.card-info (ClockIcon, EyeIcon, counts)
│   │                   ├── p.card-text (text-ellipsis-3)
│   │                   └── p.more "MORE"
│   └── div.text-center.news-more
│       └── a.public-more "MORE"
```

## Styles
- Card: rounded-xl, bg-white, shadow, overflow-hidden
- Card hover: card-body bg-[#2460f2], text white
- Image: absolute, centered, cover

## News Data
1. WBE世界电池展圆满落幕..., b4.jpeg, 2022-09-02, 427 views
2. WBE世界电池展圆满落幕..., b3.jpeg, 2022-09-02, 593 views
3. WBE世界电池展圆满落幕..., b2.jpeg, 2022-09-02, 558 views
4. WBE世界电池展圆满落幕..., b1.jpeg, 2022-09-02, 391 views
5. 复制文档到网站后台..., b5.jpeg, 2022-09-02, 589 views
6. WBE世界电池展圆满落幕..., b4.jpeg, 2022-09-02, 632 views

## Assets
- Images from `public/images/`
- Icons: ClockIcon, EyeIcon, ArrowDoubleRightIcon

## Responsive
- Desktop: 2 columns
- Mobile: stacked
