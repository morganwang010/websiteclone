# Products Section Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Interaction model:** static with card hover effects

## DOM Structure
```
section.product-wrapper (container-custom, mt-[60px])
├── div.row
│   ├── div.public-title.col-xl-6
│   │   ├── h3 "产品中心"
│   │   └── p "Products"
│   └── div.link-section.col-xl-6 (flex, justify-end)
│       └── a × 4 (产品系列1, 产品系列2, 智能手机, AI机器人)
├── div.product-list.row
│   └── div.product-item.col-xl-3.col-lg-3.col-md-6.col-sm-6 × 8
│       └── a.product-item-wrapper
│           ├── div.pic (overflow-hidden, rounded-t-2xl)
│           │   └── img (object-cover)
│           └── div.content-wrapper (text-center, px-4, py-4)
│               ├── h3.product-item-title (text-ellipsis)
│               ├── p.product-item-info (text-ellipsis-2)
│               └── div.product-item-bottom (flex, justify-between)
│                   ├── div.price
│                   │   ├── span.price-unit "￥"
│                   │   └── strong "5999.00"
│                   └── span.public-more "MORE"
└── div.text-center.product-more
    └── a.public-more "MORE" + ArrowDoubleRightIcon
```

## Computed Styles

### Section
- margin-top: 60px
- background: #f5f7fa (body bg)

### Title
- h3: font-size 30px, font-weight 700, uppercase
- p: font-size 14px, color #333333, uppercase

### Product Card
- border-radius: 12px
- background: #ffffff
- box-shadow: 0 2px 8px rgba(100,100,100,0.1)
- transition: top 0.5s

### Card Hover
- top: -4px
- .pic img: transform scale(1.2)
- .content-wrapper: background #2460f2, color #ffffff
- .product-item-title: color #ffffff
- .product-item-info: color #ffffff
- .price: color #ffffff

### Image Container
- border-radius: 12px 12px 0 0
- overflow: hidden

### Product Title
- font-size: 16px
- font-weight: 700
- text-align: center

### Product Info
- font-size: 14px
- color: #999999
- line-height: 24px

### Price
- color: #333333
- .price-unit: font-size 12px
- strong: font-size 18px

## States & Behaviors

### Card Hover
- **Trigger:** mouseenter
- **Behavior:**
  - Card lifts 4px
  - Image scales to 1.2x
  - Content background turns primary blue
  - All text turns white
- **Transition:** all 300ms ease

## Products Data
1. xx手机16系列_copy_copy_copy, pro5.jpg, ¥5999.00
2. xx手机16系列_copy, pro2.jpg, ¥5999.00
3. xx手机16系列_copy_copy, pro5.jpg, ¥5999.00
4. xx手机16系列_copy_copy, pro3.jpg, ¥5999.00
5. xx手机16系列_copy_copy, 395x400.png, ¥5999.00
6. xx手机16系列_copy, pro2.jpg, ¥5999.00
7. xx手机16系列_copy_copy, 395x400.png, ¥5999.00
8. xx手机16系列_copy, pro4.jpg, ¥5999.00

## Responsive Behavior
- **Desktop (1200px+):** 4 columns
- **Tablet (992-1199px):** 4 columns, smaller gap
- **Mobile (<768px):** 2 columns

## Assets
- Product images from `public/images/`
- Icons: ArrowDoubleRightIcon from icons.tsx
