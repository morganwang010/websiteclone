# Hero Banner Specification

## Overview
- **Target file:** `src/components/HeroBanner.tsx`
- **Interaction model:** auto-play carousel with manual navigation
- **Animation library:** Swiper.js (simulate with CSS animations)

## DOM Structure
```
section.main-slider
├── div.swiper-wrapper
│   └── div.swiper-slide × 3
│       ├── img.swiper-silde-img OR video
│       ├── div.image-layer
│       ├── div.image-layer-overlay
│       └── div.container.swiper-slide-content
│           └── div.row.w-100
│               └── div.col-lg-8
│                   └── div.main-slider__content
│                       ├── h2 "标题"
│                       ├── p "副标题"
│                       └── a.more "查看更多" + ArrowDoubleRightIcon
├── div#main-slider-pagination
│   └── span.swiper-pagination-bullet × 3
├── div.main-slider__nav
│   ├── div.swiper-button-prev + AngleLeftIcon
│   └── div.swiper-button-next + AngleRightIcon
```

## Computed Styles

### Container
- position: relative
- overflow: hidden
- min-height: 400px
- max-height: 800px

### Slide Image/Video
- width: 100%
- object-fit: cover
- transform: scale(1) → scale(1.15) on active (Ken Burns effect)
- transition: transform 7000ms ease

### Content Container
- position: absolute
- top: 0, left: 0, right: 0, bottom: 0
- z-index: 99
- display: flex, align-items: center

### Heading
- font-size: 60px
- font-weight: 900
- color: #ffffff
- text-shadow: 2px -1px 4px #000
- margin-bottom: 15px
- opacity: 0 → 1 (on active)
- transform: translateY(120px) → translateY(0)
- transition-delay: 1000ms

### Paragraph
- font-size: 18px
- color: #eeeeee
- text-shadow: 2px -1px 4px #000
- margin-bottom: 53px
- opacity: 0 → 1
- transform: translateY(100px) → translateY(0)
- transition-delay: 2500ms

### CTA Button
- background-color: #2460f2
- color: #ffffff
- font-size: 16px
- text-transform: uppercase
- padding: 15px 40px
- border-radius: 50px
- letter-spacing: 0.2em
- opacity: 0 → 1
- transform: translateY(100px) → translateY(0)
- transition-delay: 2500ms

### Pagination Dots
- width: 10px → 20px (active)
- height: 10px
- border-radius: 10px
- background-color: #ffffff
- opacity: 0.4 → 1 (active)
- transition: all 500ms ease

### Navigation Arrows
- width: 50px, height: 50px
- background: #ffffff
- border-radius: 50%
- box-shadow: 0 2px 10px rgba(0,0,0,0.1)
- opacity: 0 → 1 (on hover)
- transition: all 500ms ease

## States & Behaviors

### Auto-play
- Slides change every 7 seconds
- Ken Burns zoom on images

### Text Animations
- H2 slides up after 1s delay
- Paragraph slides up after 2.5s delay
- CTA button slides up after 2.5s delay

### Navigation
- Dots: click to jump to slide
- Arrows: click prev/next
- Arrows appear on container hover

## Content

### Slide 1
- Title: 企业数字化门户系统
- Subtitle: 助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！
- Image: banner1.jpg
- Link: #

### Slide 2
- Title: 轮播图片支持使用视频
- Subtitle: 智能VR眼镜，科技改变生活
- Video: video.mp4 (poster: banner1.jpg)
- Link: #

### Slide 3
- Title: AI人工智能
- Subtitle: 助力从业者更好地定制策略和实现数字化转型升级，迎接时代浪潮！
- Image: banner2.jpg
- Link: #

## Assets
- Banner images: `public/images/banner1.jpg`, `public/images/banner2.jpg`
- Icons: AngleLeftIcon, AngleRightIcon, ArrowDoubleRightIcon from icons.tsx

## Responsive Behavior
- **Desktop (992px+):** Full content visible, arrows show on hover
- **Tablet (768-991px):** Text scales down (h2: 45px)
- **Mobile (<576px):** h2: 36px, reduced padding
