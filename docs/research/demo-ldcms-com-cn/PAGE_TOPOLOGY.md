# Page Topology - demo.ldcms.com.cn

## Sections (top to bottom)

### 1. Header
- Fixed/sticky top navigation
- Logo (left)
- Desktop nav menu with dropdowns (center)
- Language selector, cart icon, search icon (right)
- Search overlay panel
- **Responsive:** Mobile hamburger menu

### 2. Hero Banner (Swiper Carousel)
- 3 slides with images/videos
- Each slide: background image/video, overlay, text content (h2, p, CTA button)
- Pagination dots
- Navigation arrows (hidden on hover initially)
- **Responsive:** Text scales down, arrows hide on tablet/mobile

### 3. Products Section
- Section title with English subtitle
- Category filter links (产品系列1, 产品系列2, 智能手机, AI机器人)
- 8 product cards in 4-column grid (responsive)
- Each card: image, title, description, price, MORE link
- Card hover: lift effect, image scale, background color change
- MORE button at bottom

### 4. About Section
- Two-column layout: image (left), content (right)
- Content: title, English subtitle, description text, stats (10年, 20+), CTA link
- Stats counter animation (wow.js)

### 5. Service Cases Section
- Horizontal swiper carousel
- 6 case cards with images and text overlay
- Hover: color slide-up effect
- Navigation arrows and pagination

### 6. News Section
- 6 news items in 2-column grid
- Each item: image (left), content (right)
- Content: title, date, view count, excerpt
- Hover: background color change
- MORE button at bottom

### 7. Partner/Client Logos
- 12 logo images in 6-column grid
- Hover: box shadow effect

### 8. Contact Form Section
- Dark background (#25292f)
- Title and subtitle
- Inline form: name, phone, email inputs + message + submit button

### 9. Footer
- 4-column layout:
  - Column 1: Friendly links
  - Column 2: About us links
  - Column 3: Products links
  - Column 4: News links
- Contact info column: phone, address, email, QR codes
- Copyright bar at bottom

### 10. Back to Top (Fixed)
- Fixed right sidebar
- Phone hover reveal
- WeChat hover reveal
- Back to top button

## Layout
- Container: max-width 88% at xl breakpoint
- Bootstrap 5 grid system
- Wow.js for scroll animations
- Swiper for carousels
- Font Awesome icons

## Z-index Layers
- Header: 1050 (sticky)
- Search overlay: 1055
- Mobile menu: 1050
- Carousel nav buttons: 100
- Back to top: 888
