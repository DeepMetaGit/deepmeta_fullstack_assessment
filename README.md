# DeepMeta Fullstack Assessment

Welcome to DeepMeta fullstack assessment!

## Setting Up

1. Clone the repository

`git clone https://github.com/DeepMetaGit/deepmeta_fullstack_assessment.git`

3. Install dependencies

`npm install`

4. Create prisma db (SQLite)

`npx prism db push`

5. Run the app

`npm run dev`

## Assessment

Setup the assessment and run the app. Open the app in browser. You will see two boxes, one small box and one big box. The aim of the assessment is as follows:

- Use the [dnd-kit](https://docs.dndkit.com/) library to make the small box a draggable and the big box a droppable element. (the core library is already included with the assessment, you can install any additional libraries related to [dnd-kit](https://docs.dndkit.com/) if needed)
- Everytime a user drops the small box, the counter should increment, the small box should dissapear and a new one should appear.
- The data for counter should be stored in SQLite db using [Prisma](https://prisma.io) and [tRPC](https://trpc.io).
- Fetch data from db to persist the state of counter upon reload.
- Implmenet the functionality of the reset button, the counter should reset to 0.
- Style the components using [Tailwind CSS](https://tailwindcss.com), style in any way you like!
- Deploy the app on [Vercel](https://create.t3.gg/en/deployment/vercel) (or any other cloud provider), you can change the origin of the repository and push it to your own GitHub repository for deployment.

## Tech-Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information on deployment.
