# DONN ALLENO

Luxury Nigerian menswear storefront built with Next.js, React, and Tailwind CSS.

## Project overview
This project is a storefront for DONN ALLENO with:
- product catalog and shop page
- product detail pages
- cart and checkout flow
- account, FAQ, returns, shipping, and contact pages
- admin area for product/order management

## Tech stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide icons

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Production build

```bash
npm run build
npm start
```

## Environment variables
Copy the example file and fill in your real values:

```bash
copy .env.example .env.local
```

Then update the values in `.env.local` for:
- site URL
- Paystack keys
- database connection
- email delivery settings

## GitHub upload checklist
Upload only the files intended for source control. Do not commit:
- `.next`
- `node_modules`
- `.env`
- `.env.local`
- `.vercel`

These are already ignored by the project `.gitignore`.

## Deploy to Vercel
1. Push this project to GitHub
2. Import the repo in Vercel
3. Keep the default Next.js settings
4. Add your environment variables in Vercel
5. Deploy the project

## Notes
This is a storefront frontend starter and may require real integrations for payment, database, and transactional emails before production use.
