# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
```
footer (bg-[#1f232b], py-10)
├── div.container
│   ├── div.footer-link (border-b border-[#353535] pb-5)
│   │   ├── div.public-title "友情链接"
│   │   └── ul.flex.flex-wrap
│   │       └── li × 3 (LDcms网站系统, 苏州网站建设, 苏州网站模板)
│   ├── div.grid.grid-cols-4.gap-8
│   │   ├── div
│   │   │   └── dl
│   │   │       ├── dt "关于我们"
│   │   │       └── dd (公司简介, 合作客户)
│   │   ├── div
│   │   │   └── dl
│   │   │       ├── dt "产品中心"
│   │   │       └── dd (产品系列1, 产品系列2, 智能手机, AI机器人)
│   │   ├── div
│   │   │   └── dl
│   │   │       ├── dt "新闻中心"
│   │   │       └── dd (公司新闻, 行业资讯)
│   │   └── div.footer-contact
│   │       ├── p "400-000-0000"
│   │       ├── p "江苏省苏州市xxx街xx号"
│   │       ├── p "123123@163.com"
│   │       └── div.qrcodes.flex
│   │           ├── div
│   │           │   ├── img (微信二维码)
│   │           │   └── p "微信二维码"
│   │           └── div
│   │               ├── img (抖音二维码)
│   │               └── p "抖音二维码"
└── div.copyriht (bg-[#171717], py-3, text-center)
    └── p "Copyright © 2011-2024 苏州竹子网络科技有限公司 版权所有"
        + a "Sitemap"
        + a "备案号:苏ICP备88888888号"
```

## Styles
- Footer bg: #1f232b
- Link color: #aaa, hover: #2460f2
- Footer menu: dt font-bold text-white, dd a text-[#999]
- Phone: text-xl font-bold text-white
- Copyright: bg #171717, text #666

## Content
- Links with real hrefs from original site
- QR codes (placeholder divs)

## Assets
- QR code placeholder images

## Responsive
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: stacked
