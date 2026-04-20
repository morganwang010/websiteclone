# BackToTop Specification

## Overview
- **Target file:** `src/components/BackToTop.tsx`
- **Interaction model:** click to scroll

## DOM Structure
```
div#backTop (fixed, right-3, top-[75%])
├── span.ft-tel (hover reveals phone)
│   └── PhoneIcon + small.telTop "400-000-0000"
├── span.ft-wx (hover reveals QR)
│   └── QQICon + small.weixin (QR code)
└── a#gttop (scroll to top)
    └── ArrowUpIcon
```

## Styles
- Position: fixed, right-10px, top-75%, z-888
- Box shadow: 0 2px 10px rgba(0,0,0,0.1)
- Button size: 40px × 50px
- Phone reveal: right: 70%
- QR reveal: left: -190px
- Primary color: #2460f2

## Behaviors
- Click back top: smooth scroll to y=0
- Hover tel: reveal phone number
- Hover wx: reveal QR code

## Assets
- Icons: PhoneIcon, QQICon, ArrowUpIcon
