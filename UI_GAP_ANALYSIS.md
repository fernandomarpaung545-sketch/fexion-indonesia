# UI Gap Analysis — GEOFERA Homepage vs Target Image

## 1. NAVBAR

### Current
- Logo: geofera-logo.png (height 46px) — OK
- Nav: Home, About, Training▾, Events▾, Community, Knowledge Hub, Membership, Contact
- Right: Login text + orange "Join GEOFERA" button + Search
- Height: 64px, sticky, white bg, border-bottom

### Target Image
- Logo left: "GEOFERA by OliNesia" text+icon logo
- Nav center: Home (underlined orange), About, Training, Events, Community, Knowledge Hub, Membership, Contact
- Right: orange "Join GEOFERA" button (pill shape with user icon) + search magnifier
- Home tab has orange underline active state
- NO "Login" text visible — only Join GEOFERA button + search

### Planned Fix
- Remove Login link from desktop nav (keep for mobile)
- Make Join GEOFERA button more pill-shaped (rounded-lg → rounded-full or larger border-radius)
- Ensure nav items have correct active state with orange underline

---

## 2. HERO SECTION

### Current
- Left: eyebrow + h1 (4 lines) + paragraph + 3 CTA buttons + social row
- Right: Custom SVG with SEA map, geological layers, FE logs, well trajectory
- Background: white (#fff)
- minHeight: 720px
- Grid: 1fr 1fr

### Target Image
- Left: SAME content and structure — ✅
- Right: The full IMAGE from hero-bg.png (AI-generated composite with drilling rig, SEA map, FE logs, geological cross-section, well trajectory)
- The right panel is the hero-bg.png image itself — NOT an SVG recreation
- Hero height: ~700-750px total
- The image fills the RIGHT half, bleeding edge-to-edge on the right
- Left side has white background
- Buttons: Join GEOFERA (orange filled), Explore Training (outline), Upcoming Events (outline with calendar icon)
- Social icons: LinkedIn, Facebook, YouTube, Email — small circles

### Planned Fix
- Replace SVG with actual hero-bg.png image filling right panel
- Adjust hero layout: left ~45% white, right ~55% image (no border-radius, bleeds to edges)
- White-to-transparent gradient overlay on left edge of image panel
- Ensure button styles match: orange filled, gray outline

---

## 3. STATS/METRICS SECTION

### Current
- 4 columns: 3,000+ Members | 150+ Technical Sessions | 80+ Events | 15+ Countries
- Icon circles (56px) + value + label + sub text
- White background, border-top/bottom
- padding: 1.875rem per item

### Target Image
- Same 4 metrics with same values ✅
- Icon style: circular, colored icons (navy, green, orange, purple)
- Values are LARGE and bold
- Description text below label
- Dividers between columns
- Clean white section, moderate padding

### Planned Fix
- Minor: Increase value font size to match (currently fine)
- Ensure icon circles are sized correctly (56px bg circle with colored SVG)
- Check divider lines between columns are visible

---

## 4. FOUR-COLUMN CONTENT GRID

### Current
- Grid: `195px 1fr 1fr 215px` — fixed pixel widths
- Col 1: Technical Pillars (4 items)
- Col 2: Featured Programs (6 items with small thumbnails)
- Col 3: Upcoming Events (4 items)
- Col 4: Knowledge Hub (4 items)

### Target Image Analysis (pixel-by-pixel):

#### Col 1 — Technical Pillars
- Title: "OUR TECHNICAL PILLARS" (uppercase, small, bold)
- 4 items with colored circle icons + title + 2-line desc
- "View all pillars →" link at bottom
- Items: Geoscience (green globe), Formation Evaluation (blue bars), Drilling (orange derrick), Upstream Integration (purple network)

#### Col 2 — Featured Programs  
- Title: "FEATURED PROGRAMS" + "View all programs →" right-aligned
- 6 rows: thumbnail (small, ~72×52px) + bold title + gray desc
- Compact vertical list, no dividers

#### Col 3 — Upcoming Events
- Title: "UPCOMING EVENTS" + "View all events →"
- 4 events: date (month+day stacked) | divider | type badge + title + location + time | Register button
- Dividers between events
- Type badges colored (WEBINAR=blue, WORKSHOP=green, TECHNICAL TALK=orange, CONFERENCE=purple)

#### Col 4 — Knowledge Hub
- Title: "KNOWLEDGE HUB" + "View all resources →"
- 4 items: thumbnail (60×44px) + category badge + title
- Last item (LEARNING VIDEO) has dark thumbnail with play button

### Planned Fix
- Col widths: Change to `210px 1.8fr 1.4fr 210px` for better proportion
- Ensure section has a clear horizontal separator above it
- Check typography sizes match: headers 0.72rem uppercase, titles 0.8125rem, desc 0.71rem
- Add `border-top: 1px solid #f1f5f9` above section

---

## 5. CTA BANNER

### Current
- Dark navy (#0A2342)
- Text left: "Join the GEOFERA Community" + sub
- 3 buttons right: Join GEOFERA (orange) + Become a Speaker (outline) + Become a Partner (outline)
- padding: 1.75rem 0

### Target Image
- Same dark navy banner
- Left: "Join the GEOFERA Community" h2 + "Shape the future of technical excellence together."
- Right: 3 buttons — Join GEOFERA (orange, large), Become a Speaker (dark outline with mic icon), Become a Partner (dark outline with handshake icon)
- Buttons have icons
- Banner appears taller in image (~80-90px padding)

### Planned Fix
- Increase padding to ~2.25rem 0
- Ensure button icons are visible and correct
- Check outline button style: dark border not gray border

---

## 6. FOOTER

### Current
- 8-col grid: brand(1.6fr) + 6 link cols(1fr each) + contact col(1.4fr)
- Dark navy bg
- Logo inverted (white)
- Social icons bottom of brand col
- Copyright + Privacy Policy + Terms of Use

### Target Image
- Same structure ✅
- Brand col: logo + description + social icons (LinkedIn, YouTube, Email)
- 6 link columns: About GEOFERA, Training, Events, Community, Knowledge Hub, Membership
- Contact col: email, phone, location + social icons repeated
- Bottom: copyright left + Privacy Policy | Terms of Use right

### Planned Fix
- Footer structure is already close — verify padding
- Ensure contact col has phone icon + map pin icon
- Verify social icons appear in BOTH brand col and contact col

---

## 7. RESPONSIVE BEHAVIOR

### Target
- Mobile: stack hero to single col, stack content grid to 2×2 then 1 col
- Stats: 2×2 on mobile, 4×1 on desktop

### Planned Fix
- Add @media queries for content grid
- Hero: on mobile, show text only (hide SVG visual)
