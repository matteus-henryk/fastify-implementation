import { fastifyDoneError } from "errors/fastifyDoneError";
import {
  FastifyInstance,
  RegisterOptions,
  FastifyPluginCallback,
  DoneFuncWithErrOrRes,
} from "fastify";

export default (
  fastify: FastifyInstance,
  opt: RegisterOptions,
  done: typeof fastifyDoneError
) => {
  fastify.get("/", async (request, reply) => {
    console.log("chegou");
    return { hello: "Ola mundo" };
  });

  done();
};
