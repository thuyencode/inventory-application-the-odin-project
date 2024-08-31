# Project: Inventory Application

[More details information here.](https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application)

[![Demo: Inventory Applicaton - Watch Video](https://previews.jumpshare.com/thumb/815bc01b796dd6f1733c957c5af1949386790303ab48246a41a3806c96bcba0a35391e41cf3c6db4319480ffa66dd95c231026f4a1067b6ff9ad9d68a1f93e64f47f107bb9467d6686354bd45f78f0b1e599480873f9ea0ad3770d0a29a0acc1)](https://jmp.sh/v/Pvy3UfCFQTgKFzTDZ17G)

**Tech stacks:**

|                                                                                                                                                 Frontend                                                                                                                                                  |                                                                                                                Backend                                                                                                                 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![front-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=vite,ts,react,reactquery,tailwind,daisyui)](https://github.com/LelouchFR/skill-icons) <br /> and [Tanstack Router](https://tanstack.com/router/latest), [Ky](https://github.com/sindresorhus/ky), [Valibot](https://valibot.dev) | [![back-end's tech stack](https://go-skill-icons.vercel.app/api/icons?i=nodejs,ts,express,postgresql)](https://github.com/LelouchFR/skill-icons) <br /> and [node-postgres](https://node-postgres.com), [Valibot](https://valibot.dev) |

## Getting started

### 1. Setting-up database

Your need to install PostgreSQL first using your OS's package manager, an installer file or using Docker (recommended).

Configure the host address, port number, username, password, a database according to [`.env.example`](./.env.example).

Copy the file [`.env.example`](./.env.example) into `.env.production.local` and `.env.development.local` and edit the env variables' values.

## 2. Running the project

First, install all the dependencies:

```bash
npm i
```

To run the dev server:

```bash
npm run dev
```

To export and run the production build:

```bash
npm run build
npm run start
```
