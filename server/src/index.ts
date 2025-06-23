import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import cors from "@elysiajs/cors";
import { urlRoutes } from "./modules/url.routes";

const app = new Elysia({ adapter: node() })
  .use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    })
  )
  .get("/", () => "Hello Elysia")
  .use(urlRoutes)
  .listen(3333, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
