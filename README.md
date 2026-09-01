# Rosé — Myanmar Fan Group Website

A Next.js fan site for Rosé (BLACKPINK), covering her music, videos, photos, biography, and group activities. Built with the App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack dev server)
- **UI:** React 19, Tailwind CSS
- **Content:** Local TypeScript data files + static images (no CMS/database)
- **Extras:** Swiper (carousels), react-player (video embeds)
- **Tooling:** ESLint, Prettier, Husky + lint-staged (formats staged files on commit)

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit files under `app/`.

Other scripts:

```bash
pnpm build          # production build
pnpm start           # run the production build
pnpm lint            # run ESLint
pnpm format          # run Prettier (write)
pnpm format:check    # run Prettier (check only)
```

## Site Flow / Pages

The `Header` and `Footer` (in [components/](components/)) wrap every page via [app/layout.tsx](app/layout.tsx), which also renders a `Preloader` splash and loads the custom fonts.

| Route                 | File                                                               | Purpose                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                   | [app/(home)/page.tsx](<app/(home)/page.tsx>)                       | Landing page composed of stacked sections: Hero → Album → Video → Photo → Blackpink (see [app/(home)/sections/](<app/(home)/sections/>)) |
| `/biography`          | [app/biography/page.tsx](app/biography/page.tsx)                   | Rosé's biography                                                                                                                         |
| `/discography`        | [app/discography/page.tsx](app/discography/page.tsx)               | Grid of all albums ([AlbumCard.tsx](app/discography/AlbumCard.tsx)), sourced from [albums.ts](app/discography/albums.ts)                 |
| `/discography/[slug]` | [app/discography/[slug]/page.tsx](app/discography/[slug]/page.tsx) | Detail page for one album, looked up by `slug`                                                                                           |
| `/videos`             | [app/videos/page.tsx](app/videos/page.tsx)                         | Music video gallery, sourced from [videos.ts](app/videos/videos.ts)                                                                      |
| `/photos`             | [app/photos/page.tsx](app/photos/page.tsx)                         | Paginated photo gallery ([Pagination.tsx](components/Pagination.tsx)), sourced from [photos.ts](app/photos/photos.ts)                    |
| `/blackpink`          | [app/blackpink/page.tsx](app/blackpink/page.tsx)                   | BLACKPINK group info section                                                                                                             |
| `/privacy-policy`     | [app/privacy-policy/page.tsx](app/privacy-policy/page.tsx)         | Static privacy policy text                                                                                                               |
| `/terms-of-use`       | [app/terms-of-use/page.tsx](app/terms-of-use/page.tsx)             | Static terms-of-use text                                                                                                                 |

## How Content Is Managed

There's no backend or CMS — content lives directly in TypeScript arrays alongside the images they reference, imported with `next/image`'s static import so Next.js can optimize them automatically.

- **Albums:** edit [app/discography/albums.ts](app/discography/albums.ts). Each entry needs a `slug` (used for the `/discography/[slug]` route), `title`, `type`, `releaseDate`, `cover` image, `description`, and `trackList`.
- **Videos:** edit [app/videos/videos.ts](app/videos/videos.ts). Each entry is a `title` + `cover` image.
- **Photos:** edit [app/photos/photos.ts](app/photos/photos.ts), a flat list of imported images rendered in a paginated gallery.

To add new content:

1. Drop the image file into the matching folder under [assets/](assets/) (`album-img`, `video-cover-img`, or `photo-page`).
2. Import it at the top of the relevant data file and add a new entry to the array.
3. For a new album, pick a unique `slug` — this becomes the URL segment.

## Project Structure

```
app/                  Routes (App Router)
  (home)/sections/    Home page sections (Hero, Album, Video, Photo, Blackpink)
  discography/        Discography list + [slug] detail page + albums.ts
  videos/             Video gallery + videos.ts
  photos/             Photo gallery + photos.ts
  biography/          Biography page
  blackpink/          BLACKPINK page + sections
components/           Shared components (Header, Footer, Preloader, Pagination, AvailableOn)
assets/               Images and fonts used by data files and sections
styles/               Global CSS and font setup
public/               Static files served as-is (favicon, etc.)
```

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new), the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
