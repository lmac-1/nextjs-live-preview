# Lucy's Repository Notes

This is a repository of the Next.js part of Sanity's "Live Preview with Next.js and Sanity Studio" tutorial.
Sanity studio part found [here](https://github.com/lmac-1/sanity-live-preview)

## Resources
- Tutorial [link](https://www.sanity.io/guides/nextjs-live-preview)
- Official repo with final code [link](https://github.com/SimeonGriggs/sanity-nextjs-preview)
- Walkthrough video [link](https://www.youtube.com/watch?v=sENgsB4AdZw)

## Notes
- Uses `pages` directory rather than `app`
- This project has the Sanity Studio hosted separately and not integrated within the same project
- TypeScript is used in this example but is not required
- This projects runs on localhost:3000 

You'll need to add an `env.development` file locally with the following content: 

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

Your `NEXT_PUBLIC_SANITY_PROJECT_ID` can be found in your Sanity account

# General Next.js Repo Notes

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
