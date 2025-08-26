# PWA Setup for Jessy Assistant

This document explains the Progressive Web App (PWA) setup for the Jessy Assistant Next.js application.

## What's Been Implemented

### 1. PWA Configuration (`next.config.ts`)

- ✅ `next-pwa` integration with production-only mode
- ✅ Runtime caching strategies:
  - **CacheFirst**: Static assets (`/_next/static/*`, images)
  - **NetworkFirst**: API calls (`/api/*`)
  - **StaleWhileRevalidate**: Google Fonts
- ✅ Service worker registration and skip waiting

### 2. Web App Manifest (`public/manifest.json`)

- ✅ App name: "Jessy Assistant"
- ✅ Short name: "Jessy"
- ✅ Theme color: #2d6cdf
- ✅ Background color: #ffffff
- ✅ Display mode: standalone
- ✅ Icon references (192x192 and 512x512)

### 3. Offline Support

- ✅ Offline page at `/offline`
- ✅ Service worker fallback for navigation requests
- ✅ Custom offline handling in service worker

### 4. Service Worker Registration

- ✅ Client-side registration in `PWAInstallPrompt` component
- ✅ Production-only registration
- ✅ Console logging for success/errors
- ✅ Install prompt handling

### 5. PWA Metadata

- ✅ Updated `layout.tsx` with PWA metadata
- ✅ Apple-specific meta tags
- ✅ Manifest link in HTML head

## Files Created/Modified

### New Files:

- `public/manifest.json` - Web app manifest
- `public/sw.js` - Custom service worker
- `src/app/offline/page.tsx` - Offline fallback page
- `src/components/PWAInstallPrompt.tsx` - PWA install prompt component
- `src/types/pwa.d.ts` - TypeScript declarations
- `public/icons/README.md` - Icon requirements documentation

### Modified Files:

- `next.config.ts` - Added PWA configuration
- `src/app/layout.tsx` - Added PWA metadata and install prompt
- `src/app/page.tsx` - Updated to show PWA status
- `package.json` - Added next-pwa dependency

## Required Icons

You need to add the following icons to `/public/icons/`:

1. **icon-192x192.png** (192x192 pixels)
2. **icon-512x512.png** (512x512 pixels)

These should be PNG files with a solid background or designed to work with the theme color (#2d6cdf).

## Testing Your PWA

### 1. Build and Start Production Server

```bash
npm run build
npm start
```

### 2. Chrome DevTools Testing

1. Open Chrome DevTools (F12)
2. Go to **Application** tab
3. Check **Manifest** section - should show your app details
4. Check **Service Workers** section - should show registered SW
5. Check **Storage** section - should show cached resources

### 3. Lighthouse PWA Audit

1. Open Chrome DevTools
2. Go to **Lighthouse** tab
3. Select **Progressive Web App** category
4. Run audit
5. Should pass all PWA checks

### 4. Offline Testing

1. Open DevTools → Network tab
2. Check "Offline" checkbox
3. Navigate to different pages
4. Should see offline fallback page

### 5. Install Testing

1. Look for install prompt (bottom of screen)
2. Click "Install" to add to home screen
3. App should install and work offline

## PWA Features

### Caching Strategies

- **Static Assets**: CacheFirst (1 year)
- **Images**: CacheFirst (30 days)
- **API Calls**: NetworkFirst (5 minutes)
- **Google Fonts**: StaleWhileRevalidate (1 year)

### Offline Behavior

- Navigation requests fall back to offline page
- Static assets served from cache
- API calls fail gracefully when offline

### Install Experience

- Automatic install prompt detection
- Custom install UI component
- Handles install success/failure

## Troubleshooting

### PWA Not Working in Development

- PWA is disabled in development mode
- Only works in production builds
- Use `npm run build && npm start` to test

### Icons Not Loading

- Ensure icons exist in `/public/icons/`
- Check file names match manifest.json
- Verify PNG format and correct sizes

### Service Worker Not Registering

- Check browser console for errors
- Ensure HTTPS in production
- Verify next-pwa is properly configured

### Install Prompt Not Showing

- App must meet installability criteria
- Check manifest.json is valid
- Ensure service worker is registered

## Performance Optimizations

The PWA includes several performance optimizations:

1. **Smart Caching**: Different strategies for different content types
2. **Preloading**: Critical resources cached on first visit
3. **Offline Support**: App works without internet
4. **Fast Loading**: Service worker serves cached content instantly

## Browser Support

- ✅ Chrome/Chromium (full support)
- ✅ Edge (full support)
- ✅ Firefox (basic PWA support)
- ✅ Safari (limited PWA support)
- ⚠️ Mobile browsers (varies by platform)

## Next Steps

1. Add your custom icons to `/public/icons/`
2. Customize the theme colors in `manifest.json`
3. Add app shortcuts if needed
4. Implement push notifications (optional)
5. Add background sync (optional)
6. Test on various devices and browsers
