import { FastifyReply, FastifyRequest } from "fastify";

class UsersController {
  static async index(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    return reply.code(200).send({ hello: "GET" });
  }

  static async create(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    console.log(request.body);

    return reply.code(201).send({ hello: "POST" });
  }
}

export { UsersController };
