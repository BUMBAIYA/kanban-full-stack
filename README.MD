<div align="center">
  <img src="./packages/app/public/kanban.png" width="70" alt="">
  <h1>Kanban</h1>
  <br/>
</div>

<div align="center">
Welcome to Kanban, project built with <a target="_blank" href="https://react.dev">React.js</a>, <a target="_blank" href="https://tailwindcss.com">Tailwind CSS</a> and <a target="_blank" href="https://www.typescriptlang.org">TypeScript</a>.
    <div>
    Streamlining your workflow and project management has never been easier. With a clean and intuitive user interface crafted using ReactJS, you'll experience seamless navigation and real-time updates as you manage tasks and projects.
    </div>
</div>
<br/>

## 🛑 IMPORTANT

This project is in its early stages, so the tech stack may be subject to change throughout the development process.

## 🖥️ Technologies Used

- [React.js](https://react.dev) : React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
- [Tailwind CSS](https://tailwindcss.com) : A utility-first CSS framework for rapid UI development.
- [Prisma](https://www.prisma.io) : Next-generation ORM, it provides a clean and type-safe API for submitting database queries.
- [PostgreSQL](https://www.postgresql.org/) : It is a highly stable database management system, which has high levels of resilience, integrity, and correctness.
- [Express](https://expressjs.com/) : An Express server is a fast and minimalist web application framework for Node.js, designed to simplify the creation of robust and scalable web applications and APIs.
- [Socket.io](https://socket.io/) : Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.
- [Docker](https://www.docker.com/) : Docker helps developers build, share, and run applications anywhere — without tedious environment configuration or management.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that provides enhanced tooling and developer productivity.

## 🛠️ Development setup

Steps to locally setup development after cloning the project.

`NOTE`: Run every command in project root

1. Clone repo

    ```sh
    git clone https://github.com/BUMBAIYA/kanban-full-stack.git
    ```

2. Navigate to the project directory

    ```sh
    cd kanban-full-stack
    ```

3. Install dependencies

    ```sh
    npm run install
    ```

4. `Recommended` : Use Docker to build the PostgreSQL server if you don't want to install postgres locally

    Copy and paste variables from `Docker` part from `packages/server/.env.example` into `packages/server/.env` Do not edit the env variables

    Run docker compose

    ```sh
    docker compose up -d
    ```

    Stop the docker kanban-server

    ```sh
    docker stop kanban-server
    ```

    Start the development Express server

    ```sh
    npm run dev:server
    ```

    Start the development ReactJs Application

    ```sh
    npm run dev:app
    ```

    Server will be running on `https://localhost:3000`

    App will be running on `http://localhost:5173`

5. `Optional` : If you have PostgreSQL installed locally

    Copy and paste variables from `Local ProstgreSQL` part from `packages/server/.env.example` into `packages/server/.env`

    Edit the `DB_USER` and `DB_PASSWORD` with your local postgreSQL credentials

    Generate prisma client

    ```sh
    npm run db:generate
    ```

    Migrate Database schmema

    ```sh
    npm run db:migrate
    ```

    Start the Express server

    ```sh
    npm run dev:server
    ```

    Start the ReactJs Application

    ```sh
    npm run dev:app
    ```

    Server will be running on `https://localhost:3000`

    App will be running on `http://localhost:5173`

## License

Licensed under the MIT license

---
