# Portfolio redesign — progress

## Original suggestions

### Big moves
1. Color system feels 2020 — yellow over-applied; commit to a refined palette
2. No dark mode
3. Experience section is a flat list — needs structure
4. Projects modal is text-heavy; grid is generic — add asymmetry + outcome metrics

### Small wins
- Typewriter hero animation feels dated
- Button hover-fill is a 2019 trick
- Inconsistent border-radius scale
- Chips look like 2018 tags
- Mobile touch targets under 44px
- No type scale rhythm between hero and body
- Mono font used for prose without reason
- Skip link positioning non-standard
- Project card close button is a styled "x"

---

## Done

### Commit 1: design tokens + type rhythm (`50b650a`)
- Semantic color tokens: `bg`, `ink`, `muted`, `surface`, `border`, `border-strong`
- Real radius scale (6/8/10/14/20/24px)
- Softened pure-black text to `ink` (#0a0a0a) on warm off-white (#fafaf7)
- Heading `letter-spacing: -0.022em` + tightened `line-height` globally
- Antialiased body rendering
- Hero H1 capped at `text-7xl` with `tracking-tight`
- Hero "Freelance Web Engineer" highlight: hard yellow block → underline bar
- Bio body reads as muted supporting copy
- Section headers: smaller, tighter, slab divider → hairline rule
- Chips: yellow-border markers → neutral filled pills

### Commit 2: experience timeline (`9294314`)
- Flat list → two-column CV grid (dates left, content right)
- Mono date column, ink company name, muted description with `max-w-2xl`
- Per-row borders → hairlines between rows only
- Stacks on mobile

### Commit 3: neo-brutalist pass (`76a25e2`)
- Shared brutalist language across buttons, project cards, modal, chips, section headers, profile pic frame
- 2px ink borders + hard offset shadows
- Yellow promoted to deliberate accent (button arrow, wavy hero underline, square section markers, profile-pic backdrop)
- Cards push toward shadow on hover; buttons press into it
- Projects modal reworked

### Commit 4: hero glitch + frameless pic (`aacde9a`)
- Typewriter sweep on "Jonas" → yellow ghost-copy ricochet, ~1.1s, `steps(8)`, respects `prefers-reduced-motion`
- Yellow period → yellow square (matches section markers)
- Profile pic stripped to frameless

### Commit 5: dark mode (`c9bc058`)
- Tokens (`bg`, `surface`, `ink`, `muted`, `border`, `border-strong`, `shadow`, `overlay`) moved to CSS vars with RGB channels; Tailwind `darkMode: 'class'`
- `:root` + `.dark` palettes in `globals.css`; deep warm dark with off-white ink
- Brutalist shadow utilities (`shadow-brutal-xs/sm/brutal/md/lg`) — flip from ink to off-white in dark
- No-FOUC inline init script (reads `localStorage` + `prefers-color-scheme`)
- `ThemeToggle` floating top-right; persists choice
- Swept stray `text-black` (skip link, social icons, impressum), `text-white` on main wrapper, `bg-ink/40` modal overlay → `bg-overlay/60`
- Ghost button kept dark text on yellow regardless of theme

---

## Still open

### High impact
- **Projects grid** — asymmetric featured tiles for top 1–2 projects, then tighter grid
- **Project modal** (`projects.tsx`) — add outcome/metric line at top; lazy-load images; replace styled "x" close button with a real icon

### Medium impact
- Mobile touch targets — bump button padding to ≥44px height
- Mono font usage in CV body — reserve for chips/dates, use Inter for prose

### Polish
- Skip link positioning audit
- Footer rhythm + Impressum link styling
- Hover states on Experience rows (subtle bg tint?)
- Visit any remaining `text-black` / `bg-grey-light` refs and migrate to new tokens

### Content / structure
- About section density — bio + tech list could expand into two real columns with more breathing room
- Add a contact section beyond mailto CTAs
- Optional: skills breakdown, testimonials, case-study depth per project

---

## Suggested next pass
Eyeball dark mode in the browser to catch contrast misses, then tackle Projects (asymmetric featured tiles + modal outcome/metric line + real close icon).
