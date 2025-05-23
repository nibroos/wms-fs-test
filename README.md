<h1 align="center">
    <br>
  Backend
  <br>
</h1>

## 🚀 Quick Start
### Developement Environment
Copy `.env.development.local.example`, rename it to `.env.development.local`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
PORT=3050

# DATABASE
DB_USER=postgres
DB_PASSWORD=root
# DB_HOST=localhost
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=fstest-nibros
DB_DIALECT=postgres
```

> <b>Note</b> : make sure to run bash on <b>backend</b> folder.

Install package
```bash
npm install
```

Run migrations
```bash
npx sequelize-cli db:migrate
```

Run seeders
```bash
npx sequelize-cli db:seed:all
```

Run development server
```bash
npm run dev
```
### Test Environment
Copy `.env.test.local.example`, rename it to `.env.test.local`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
PORT=3000

# DATABASE
DB_USER=postgres
DB_PASSWORD=rootinstal
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=fstest-nibros
DB_DIALECT=postgres
```

Run migrations (skip if already run)
```bash
npx sequelize-cli db:migrate
```

Run seeders (skip if already run)
```bash
npx sequelize-cli db:seed:all
```
Run test
```bash
npm test

## OR use docker
docker exec -it server sh -c "npm run test"
```

## 🛎 Available Commands for the Server

- Run the Server in production mode : `npm run start` in VS Code
- Run the Server in development mode : `npm run dev` in VS Code
- Run all unit-tests : `npm test` in VS Code
- Check for linting errors : `npm run lint` in VS Code
- Fix for linting : `npm run lint:fix` in VS Code

## 💎 The Package Features

<p>
  <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=fff"instal />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=fff" />&nbsp;&nbsp;
</p>
<p>
  <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NGINX-269539?style=for-the-badge&logo=NGINX&logoColor=fff" />
  <img src="https://img.shields.io/badge/-PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=Jest&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-SWC-FFFFFF?style=for-the-badge&logo=swc&logoColor=FBE1A6" />
</p>
<p>
  <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" />&nbsp;&nbsp;
<img src="https://img.shields.io/badge/-PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL&logoColor=fff" />&nbsp;&nbsp;
</p>

### 🐳 Docker :: Container Platform

[Docker](https://docs.docker.com/get-docker/) Install.

- Starts the containers in the background and leaves them running : `docker-compose up -d`
- Stops containers and removes containers, networks, volumes, and images : `docker-compose down`

Modify `docker-compose.yml` and `Dockerfile` file to your source code.

### 📗 API Document
All endpoints stored in  `fstest-nibros.postman_collection.json`


## 📔 Notes & Issues

#### error function gen_salt(unknown) does not exist, postgre extensions
`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "btree_gist";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";`

<h1 align="center">
    <br>
  Frontend
  <br>
</h1>

## 🚀 Quick Start
### Developement Environment
Copy `.env.example`, rename it to `.env`, Modify to suit your environment, focus on these key, you can leave others as it is. The key name is explanatory itself.
```bash
# PORT
API_URL=http://localhost:3050 #BACKEND BASE API
```
> <b>Note</b> : make sure to run bash on <b>frontend</b> folder.

Install package
```bash
npm install # bun install
```

Run development server
```bash
npm run dev # bun dev
```

## 🛎 Available Commands for the Server

- Run the Server with docker (preferred) : `docker compose -f docker-compose.yml up -d`
- Run the Server in development mode : `npm run dev` in VS Code

## 💎 The Package Features

<p>
  <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=fff" />&nbsp;&nbsp;
  <img src="https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=fff" />&nbsp;&nbsp;
</p>
<p>
 
</p>
<p>
  <img src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82" />&nbsp;&nbsp;
      <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" />&nbsp;&nbsp;
          <img src="https://img.shields.io/badge/pinia-%2302262B.svg?style=for-the-badge&logo=Pinia&logoColor=white" />&nbsp;&nbsp;
              <img src="https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF" />&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />&nbsp;&nbsp;
  
</p>


<h1 align="center">
    <br>
  Features & Notes
  <br>
</h1>
Highlighting some of the main features I implemented based on core requirements. Additionally, I added some extra features for your consideration:

- <b>Vendor Modules</b>: Fully functional CRUD operations with backend validation and global search capabilities.
- <b>Searchable Units</b>: Implemented custom autocomplete dynamic components for unit search.
- <b>Global State Management</b>: Used persisted Pinia state management to dynamically update the vendor list.
- <b>Backend Structure</b>: Followed an MVC-based structure with a service design pattern.
- <b>Database Management</b>: Using Sequelize for database migration and seeding.
- <b>Type Hinting</b>: Most of the code is type-hinted for better readability and maintenance.
- <b>Authentication System</b>: Developed a complete authentication system including login, signup, and logout functionalities.
- <b>Backend Validation & Error Handling</b>: Added validation and error handling using middleware.

Honestly, I didn't have time to implement the role and permission system, but on theory, there will be 4 tables in the database: roles, permissions, role_permissions, and user_roles. The user_roles table will be a junction table between users and roles, while the role_permissions table will be a junction table between roles and permissions. This way, we can assign multiple roles to a user and multiple permissions to a role. The permissions will stored on JWT token, and the backend will check by the middleware if there's a permission to access the route. So, we dont have to interact with the database every time we check for permissions.

for example, adding a `PermissionMiddleware` to the route:
```typescript
this.router.post(`${this.path}/create`, AuthMiddleware, PermissionMiddleware, ValidationMiddleware(CreateVendorDto), this.vendor.createVendor);
```

On the frontend, the simplest way to implement this is to create an utils function that checks if the user has the permission to access the route, the call it using v-if on the template. For example:
```typescript
const hasPermission = (permission: string) => {
  return store.state.user.permissions.includes(permission);
};
```
```typescript
<template>
  <div v-if="hasPermission('vendor.create')">
    <button @click="createVendor">Create Vendor</button>
  </div>
</template>
```

## Screenshots

<details>
<summary>Running Tests</summary>
![Image](https://github.com/user-attachments/assets/ffb28c87-a2bb-4ddb-bdc4-427b0dcf38c8)

![Image](https://github.com/user-attachments/assets/139f4dbd-d8ad-49c2-8b3f-b4d66b9e5c6d)

![Image](https://github.com/user-attachments/assets/d426b896-de0a-4296-aea9-68be851a622c) 
</details>

<details>
<summary>List Unfiltered</summary>

![Image](https://github.com/user-attachments/assets/d4019271-8dc4-4c03-8e76-85b24622865a)

</details>

<details>
<summary>List Filtered</summary>

![Image](https://github.com/user-attachments/assets/3211d46b-d9bd-49bd-9479-91f409f207be)

</details>

<details>
<summary>Create  (Must select Unit)</summary>

![Image](https://github.com/user-attachments/assets/7b7acbf1-8a7a-4e3f-8adf-9a26c2f61cc6)

![Image](https://github.com/user-attachments/assets/4a114b18-794e-4e94-aba1-2d2ada423aad)

</details>

<details>
<summary>Edit</summary>

![Image](https://github.com/user-attachments/assets/a4a3513c-6075-41ba-9db6-8db290bb8d4f)

![Image](https://github.com/user-attachments/assets/66b1fe1d-cf57-462a-967e-761a5ba64427)

</details>

Feel free to ask if you have any questions or need more details!

