# Behaviors - demo.ldcms.com.cn

## Scroll Behaviors

### Header Search
- **Trigger:** Click search icon
- **Behavior:** Full-width search overlay slides down from top
- **Transition:** display + opacity animation

### Header Dropdowns
- **Trigger:** Hover on menu items
- **Behavior:** Sub-menu appears below with fade-in
- **Transition:** 300ms ease

### Product Cards
- **Trigger:** Hover
- **Behavior:** 
  - Card lifts up 4px (top: -4px)
  - Image scales to 1.2x
  - Content wrapper background changes to primary color
  - Text color changes to white
- **Transition:** all 300ms ease

### Case Cards (Swiper)
- **Trigger:** Hover
- **Behavior:**
  - Image scales to 1.1x
  - Overlay slides down from top
  - Content wrapper slides up with color change
- **Transition:** all 500ms ease

### News Cards
- **Trigger:** Hover
- **Behavior:**
  - Image scales to 1.1x
  - Card body background changes to primary color
  - Text changes to white
- **Transition:** 500ms ease

### Client Logos
- **Trigger:** Hover
- **Behavior:** Box shadow appears
- **Transition:** 300ms

### Back to Top
- **Trigger:** Click back top button
- **Behavior:** Smooth scroll to top

## Carousel Behaviors

### Hero Banner
- Auto-play with slide change
- Navigation arrows appear on hover
- Pagination dots at bottom
- Active dot is wider (20px vs 10px)
- Slide transition: 7000ms ease (Ken Burns effect on images)
- Text animations: slide up with delays

### Case Carousel
- Horizontal scroll
- Navigation arrows outside container
- Pagination dots

## Form Behaviors
- Input focus: border color changes to primary
- Submit button: hover darkens slightly
- Form validation (native)

## Animation Libraries
- **wow.js:** fadeInUp, slideInLeft, slideInRight, zoomIn animations triggered on scroll
- **Swiper:** Carousel functionality
- **jQuery:** CountUp for stats numbers

## Responsive Breakpoints
- 1400px+: Container 88% max-width
- 1200px: Container adjusts, nav shrinks
- 992px: Tablet - columns stack, nav becomes hamburger
- 576px: Mobile - further adjustments
