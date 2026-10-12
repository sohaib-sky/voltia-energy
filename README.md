# TRUE CUTOUT

**TRUE CUTOUT** is a premium AI-powered image background removal application by TURE.

> Cut the background. Keep the subject.

## Features

- AI-powered background removal
- Transparent PNG export
- Custom background colors and gradients
- Before/after comparison viewer
- Drag & drop upload
- Cinematic 2026 editorial design
- Responsive and accessible

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Installation

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required variables:

| Variable | Description |
|----------|-------------|
| `BACKGROUND_REMOVAL_API_KEY` | API key for your background-removal provider |
| `BACKGROUND_REMOVAL_API_URL` | Custom API URL (optional) |
| `BACKGROUND_REMOVAL_PROVIDER` | Provider type: `removebg`, `clipdrop`, or `replicate` |

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## AI Provider Configuration

TRUE CUTOUT supports multiple background-removal providers:

### remove.bg (default)

```env
BACKGROUND_REMOVAL_PROVIDER=removebg
BACKGROUND_REMOVAL_API_KEY=your-removebg-api-key
```

### Clipdrop

```env
BACKGROUND_REMOVAL_PROVIDER=clipdrop
BACKGROUND_REMOVAL_API_KEY=your-clipdrop-api-key
```

### Replicate

```env
BACKGROUND_REMOVAL_PROVIDER=replicate
BACKGROUND_REMOVAL_API_KEY=your-replicate-api-key
```

## API Endpoint

### POST /api/remove-background

Accepts `multipart/form-data` with an `image` field.

**Response:**

```json
{
  "success": true,
  "data": {
    "imageUrl": "data:image/png;base64,...",
    "provider": "removebg"
  }
}
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js hosting platform.

## Limitations

- Maximum file size: 10MB
- Supported formats: JPG, PNG, WEBP
- Maximum image dimensions: 4096x4096 pixels
- Requires a valid AI provider API key

## License

Proprietary. All rights reserved.
