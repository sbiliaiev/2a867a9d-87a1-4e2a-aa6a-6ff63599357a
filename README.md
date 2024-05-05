This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation

- The `react context` is being used to store the selected country value.
- To reduce the boilerplate code the react component library [headlessUI](https://headlessui.com/) that officially works with TailwindCSS was used. Also, to keep the code a little bit more "declarative"
- I used the simpliest approach to fetch countries data right inside of `useEffect` hook but idially, of course, better to use something like `react-query` or another package to separate data layer from the actual components.
