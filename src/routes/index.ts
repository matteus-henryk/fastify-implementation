import Router from "fastify";
import userRoutes from "./user.routes";

const routes = Router();

routes.register(userRoutes, { prefix: "/users" });

export default routes;
