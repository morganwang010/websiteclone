# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static with dropdown hover and mobile menu toggle

## DOM Structure
```
header (sticky-top, bg-white, shadow-sm, h-[75px])
├── div.container-custom (flex, justify-between, items-center, h-full)
│   ├── div.logo
│   │   └── a[href="/"]
│   │       └── img[src="/images/logo1.png", alt="苏州xx教育公司中文"]
│   ├── nav.nav-pc (hidden md:block)
│   │   └── ul (flex, justify-center, items-center)
│   │       └── li (relative) × 9 nav items
│   │           ├── a[href="/"] "首页" (.active)
│   │           ├── a[href="/gongsijianjie.html"] "关于我们" + ChevronDownIcon
│   │           │   └── div.sub-menu (absolute, dropdown)
│   │           ├── a[href="/chanpinxilie1.html"] "产品中心" + ChevronDownIcon
│   │           ├── a[href="/fuwuanli.html"] "服务案例"
│   │           ├── a[href="/gongsixinwen.html"] "新闻中心" + ChevronDownIcon
│   │           ├── a[href="/xiazaizhongxin.html"] "下载中心"
│   │           ├── a[href="/lianxiwomen.html"] "联系我们"
│   │           ├── a[href="http://demo2.ldcms.com.cn"] "2024模版"
│   │           └── a[href="http://demo1.ldcms.com.cn"] "2023模版"
│   └── div (flex, items-center)
│       ├── div.lang-wrapper (relative)
│       │   ├── div.lang-btn (flex, items-center, border rounded-full)
│       │   │   ├── GlobeIcon
│       │   │   └── span "简体中文"
│       │   └── div.lang-dropdown (hidden, absolute)
│       │       └── ul
│       │           ├── li "简体中文" (zh-cn)
│       │           └── li "English" (en)
│       ├── div.cart (relative) + CartIcon + span.cart-count
│       ├── SearchIcon (.search-icon)
│       └── button.menu-mobile (md:hidden) + MenuIcon/CloseIcon
└── div.search-wrapper (hidden, absolute top-0, w-full)
    └── form (flex, items-center)
        ├── input.search-input
        ├── button.search-submit
        └── div.search-close
```

## Computed Styles

### Header Container
- height: 75px
- background-color: #ffffff
- position: sticky-top
- box-shadow: 0 1px 2px rgba(0,0,0,0.05)
- z-index: 1050

### Logo
- max-width: 120px
- img width: 100%

### Nav Items
- font-size: 15px
- font-weight: 500
- color: #000000
- text-transform: uppercase
- padding: 0 20px
- hover: color #2460f2 (primary)
- active: color #2460f2

### Language Selector
- border: 1px solid #e8e8e8
- border-radius: 30px
- padding: 0 10px
- height: 30px
- dropdown: box-shadow 0 2px 10px rgba(0,0,0,0.1)

### Mobile Menu Button
- padding: 0 15px
- hamburger icon

## States & Behaviors

### Dropdown Menu
- **Trigger:** hover on nav item
- **Behavior:** sub-menu appears below with fade-in
- **Transition:** 300ms ease
- **Style:** bg-white, border-radius 0 0 8px 8px, box-shadow

### Language Dropdown
- **Trigger:** hover on lang-wrapper
- **Behavior:** dropdown shows below
- **Transition:** 300ms ease

### Mobile Menu
- **Trigger:** click hamburger
- **Behavior:** full-screen overlay with nav list
- **Style:** position fixed, bg rgba(0,0,0,0.5)

### Search Overlay
- **Trigger:** click search icon
- **Behavior:** search panel slides down from top
- **Style:** position absolute, z-index 1055, bg white, h-[75px]

## Text Content
- 导航链接: 首页, 关于我们, 产品中心, 服务案例, 新闻中心, 下载中心, 联系我们, 2024模版, 2023模版
- 下拉项: 公司简介, 合作客户, 产品系列1, 产品系列2, 智能手机, AI机器人, 公司新闻, 行业资讯

## Responsive Behavior
- **Desktop (992px+):** Full nav visible, mobile menu hidden
- **Tablet/Mobile (<992px):** Hamburger menu, collapsible nav
- **Header height:** 75px desktop, 60px mobile

## Assets
- Logo: `public/images/logo1.png`
- Icons: GlobeIcon, ChevronDownIcon, CartIcon, SearchIcon, MenuIcon, CloseIcon from icons.tsx
