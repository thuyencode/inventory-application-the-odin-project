# Project: Inventory Application

**Tech stacks:**

|                                                                                                                                                 Frontend                                                                                                                                                  |                                                                                                                Backend                                                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![front-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=vite,ts,react,reactquery,tailwind,daisyui)](https://github.com/LelouchFR/skill-icons) <br /> and [Tanstack Router](https://tanstack.com/router/latest), [Ky](https://github.com/sindresorhus/ky), [Valibot](https://valibot.dev) | [![back-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=nodejs,ts,express,postgresql)](https://github.com/LelouchFR/skill-icons) <br /> and [node-postgres](https://node-postgres.com), [Valibot](https://valibot.dev) |

## Getting started

### 1. Setup database

Your need to install PostgreSQL first using your OS's package manager, an installer file or using Docker (recommended).

Configure the host address, port number, username, password, a database according to [`.env.example`](./.env.example).

Copy the file [`.env.example`](./.env.example) into `.env.production.local` and `.env.development.local` and edit the env variables' values.

## 2. Run the project

First, install all the dependencies:

```bash
npm i
```

To run the dev server:

```bash
npm run dev
```

To export and preview the production build:

```bash
npm run build
npm run preview
```
