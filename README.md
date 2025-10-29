# MSID Online School Website

A bilingual (English/Arabic) VitePress website for MSID Online School with full RTL support.

## Features

- ✅ Bilingual support (English & Arabic)
- ✅ Full RTL (Right-to-Left) support for Arabic using PostCSS
- ✅ Custom Vue components (TestimonialCard)
- ✅ Responsive design
- ✅ Dark mode support

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run docs:dev
```

## Build

Build for production:

```bash
npm run docs:build
```

## Preview Production Build

```bash
npm run docs:preview
```

## Language Structure

### English Content

All English content is in the root directory:

- `/index.md` - Home page
- `/about.md` - About page
- `/programs.md` - Programs page
- `/testimonials.md` - Testimonials page
- etc.

### Arabic Content

All Arabic content is in the `/ar/` directory:

- `/ar/index.md` - Arabic home page
- `/ar/testimonials.md` - Arabic testimonials
- `/ar/contact.md` - Arabic contact page
- etc.

## RTL Support

RTL support is automatically handled by `postcss-rtlcss`. The configuration is in `postcss.config.js`.

When you write CSS with directional properties (like `margin-left`, `padding-right`, `border-left`, etc.), the PostCSS plugin automatically creates RTL versions for Arabic pages.

### Example:

```css
.element {
  margin-left: 20px;
  border-left: 2px solid blue;
}
```

Automatically becomes:

```css
/* For LTR */
:where([dir="ltr"]) .element {
  margin-left: 20px;
  border-left: 2px solid blue;
}

/* For RTL */
:where([dir="rtl"]) .element {
  margin-right: 20px;
  border-right: 2px solid blue;
}
```

## Custom Components

### TestimonialCard

A reusable Vue component for displaying testimonials with images, ratings, and custom colors.

#### Usage

```vue
<TestimonialCard
  name="John Doe"
  subtext="New York, USA"
  image="/path/to/image.jpg"
  color="#0ea5e9"
  :rating="5"
>

Your testimonial content goes here. You can use **markdown** formatting!

</TestimonialCard>
```

#### Props

| Prop      | Type   | Default   | Description                                           |
| --------- | ------ | --------- | ----------------------------------------------------- |
| `name`    | string | required  | Name of the person                                    |
| `subtext` | string | required  | Additional info (location, role, etc.)                |
| `image`   | string | optional  | URL to profile image (shows initials if not provided) |
| `color`   | string | `#0ea5e9` | Border color                                          |
| `rating`  | number | `5`       | Star rating (1-5)                                     |

#### Suggested Colors

- Blue: `#0ea5e9`
- Green: `#10b981`
- Orange: `#f59e0b`
- Pink: `#ec4899`
- Purple: `#8b5cf6`
- Indigo: `#6366f1`
- Cyan: `#06b6d4`

## Adding New Components

1. Create your component in `.vitepress/theme/YourComponent.vue`
2. Register it in `.vitepress/theme/index.ts`:

```typescript
import YourComponent from "./YourComponent.vue";

export default {
  // ...
  enhanceApp({ app }) {
    app.component("YourComponent", YourComponent);
  },
};
```

3. Use it in any markdown file:

```vue
<YourComponent prop="value" />
```

## Configuration

The main configuration file is `.vitepress/config.mts`. Here you can:

- Add/modify navigation items
- Configure sidebars
- Add new locales
- Customize theme settings

## Styling

Global styles are in `.vitepress/theme/style.css`. Component-specific styles should be scoped within the component's `<style scoped>` tag.

## License

All rights reserved - MSID Online School
