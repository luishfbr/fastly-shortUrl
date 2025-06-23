import Elysia from "elysia";
import { urlService } from "./url.service";

type bodyType = {
  originalUrl: string;
};

export const urlRoutes = new Elysia()
  .post("/api/create-slug", async ({ body }) =>
    urlService.createSlug(body as bodyType)
  )
  .get("/:slug", async ({ params }) => urlService.getSlug(params.slug));
