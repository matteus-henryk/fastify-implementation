import { FastifyInstance } from "fastify";

import userRoutes from "./user.routes";

function appIndexRoutes(app: FastifyInstance) {
  app.register(userRoutes, { prefix: "/users" });
}

export { appIndexRoutes };
