import { FastifyInstance, RegisterOptions } from "fastify";

import { UsersController } from "../controllers/UsersController";
import { fastifyDoneError } from "../errors/fastifyDoneError";

export default (
  fastify: FastifyInstance,
  opt: RegisterOptions,
  done: typeof fastifyDoneError
) => {
  fastify.get("/", UsersController.index);
  fastify.post("/", UsersController.create);

  done();
};
