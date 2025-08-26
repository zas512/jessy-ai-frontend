# PWA Icons

This directory should contain the following icon files for your PWA:

## Required Icons

1. **icon-192x192.png** - 192x192 pixel PNG icon
2. **icon-512x512.png** - 512x512 pixel PNG icon

## Icon Requirements

- **Format**: PNG
- **Purpose**: Both icons should support "maskable any" purpose
- **Design**: Icons should be simple, recognizable, and work well at small sizes
- **Background**: Icons should have a solid background or be designed to work with the theme color (#2d6cdf)

## How to Create Icons

You can create these icons using:

- Design tools like Figma, Sketch, or Adobe Illustrator
- Online icon generators
- Convert existing logos to the required sizes

## Testing

After adding the icons:

1. Build your app: `npm run build`
2. Start the production server: `npm start`
3. Open Chrome DevTools > Application > Manifest to verify icons are loaded
4. Test the "Add to Home Screen" functionality

## Notes

- The 192x192 icon is used for most Android devices
- The 512x512 icon is used for high-DPI displays and app stores
- Icons should be square and centered within the canvas
