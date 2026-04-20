# Service Cases Section Specification

## Overview
- **Target file:** `src/components/ServiceCasesSection.tsx`
- **Interaction model:** horizontal carousel with hover effects

## DOM Structure
```
section.case-wrapper (bg-white, py-16)
├── div.container.position-relative
│   ├── div.flex (justify-between)
│   │   ├── div.public-title
│   │   │   ├── h3 "服务案例"
│   │   │   └── p "service case"
│   │   └── a.public-more "MORE"
│   ├── div.case-swiper
│   │   └── ul.swiper-wrapper
│   │       └── li.swiper-slide × 6
│   │           └── a
│   │               ├── div.swiper-slide-img
│   │               │   └── img
│   │               └── div.case-content-wrapper
│   │                   ├── h3
│   │                   └── p
│   ├── div.case-next + AngleRightIcon
│   ├── div.case-prev + AngleLeftIcon
│   └── div.swiper-pagination
```

## Styles
- Section: bg-white, py-16
- Card: rounded-xl, overflow-hidden
- Image: rounded-xl, scale(1) → scale(1.1) on hover
- Content overlay: absolute, mt-[-50px], mx-8, bg-white, rounded-lg, shadow

## Cases Data
1. 上海某某汽车有限公司_copy_copy_copy, idxcase3.jpg
2. 重庆某某汽车有限公司_copy_copy_copy, idxcase1.jpg
3. 北京某某汽车有限公司_copy_copy_copy, idxcase3.jpg
4. 上海某某汽车有限公司_copy_copy, idxcase1.jpg
5. 重庆某某汽车有限公司_copy_copy, idxcase2.jpg
6. 上海某某汽车有限公司_copy_copy_copy, idxcase1.jpg

## Assets
- Images from `public/images/`
- Icons: AngleLeftIcon, AngleRightIcon

## Responsive
- Tablet: adjusted spacing
- Mobile: stacked
