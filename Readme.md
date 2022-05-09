# Project Template

Here's a basic typescript + express + prisma project template for learning purposes.
I'll try to explain a few decisions here.


## Tooling
We're using typescript here because it greatly helps code maintainability. Ts-node-dev is used for development so we can get live reloading as we develop. When we go to production we will have to run a build script and run from node for performance improvements. I would like to look into Deno in the future instead as it is Typescript native and has some really interesting features.

Our database is Prisma (prisma.io). It is in my opinion the easiest and best way for JS side projects and startups to work with a database. Prisma not only acts as a great type-safe ORM but also handles all database migrations as well. We only have to modify the schema.prisma file and it will automatically generate SQL files to upgrade our database.

Prisma requires some work to have it working on your machine. When you pull down the project you will have to run `npx prisma db push` to sync your database. This isn't recommended by Prisma as it doesnt generate migration files but it does force your database to sync with the schema file which is useful for development.

After modifying your schema file you will have to run `yarn generate` to update the Prisma client. 

Further documentation should be found at Prisma's website.

## Server
I'm using express for the server here. It is a tad outdated now by Node standards but still has a large and vibrant community around it. You shouldn't have any trouble finding middlewares and examples for it. The server is bootstrapped in src/server.ts and routes are imported from the routes/ folder. I've tried to set this up in a basic MVC architecture - you can think of the route files as controllers.

## Testing
Jest is the standard for JS testing nowadays and this project is no different. I expect to write tests in the tests/ folder that mirror the other files in the project. That is to say, for the routes/posts.routes file we will have a tests/routes/posts.routes.test file to test it. I'm still working on examples for this.