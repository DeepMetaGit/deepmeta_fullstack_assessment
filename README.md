# DeepMeta Fullstack Assessment

Welcome to DeepMeta fullstack assessment!

## Setting Up

1. Clone the repository

```
git clone https://github.com/DeepMetaGit/deepmeta_fullstack_assessment.git
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in root folder, and add the following env variables:

```
DATABASE_URL="file:./db.sqlite"
NODE_ENV="development"
```

5. Sync your Prisma schema with your database (SQLite is default, you can use any other database provider you like [Prisma Database Connectors](https://www.prisma.io/docs/concepts/database-connectors))

```
npx prism db push
```

6. Run the app

```
npm run dev
```

## Assessment

In this assessment we are developing a simple scheduling application for a team of software developers to organize activities in order of pripority. The user requirenment of the application is as follows:

- The application should have an interactive sortable list
- The user should be able to add an item to the list
- The user should be able to edit and delete any existing item on the list
- The user should be able to sort the priority of a list item using drag-n-drop
- The state of the list should persist using a database
- The application needs to be online, deploy the application on a cloud platform of your choice

The application should use the following libraries so that it integrates well with the rest of the services in the organization:

- [Prisma](https://prisma.io) for managing database
- [dnd-kit](https://docs.dndkit.com/) for creating sortable list

You can find detailed information on which stack to use below.

## Tech-Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

Follow deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information on deployment.
