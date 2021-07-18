import fastify from "fastify";

const app = fastify({
  logger: true
});

app.route({
  method: 'GET',
  url: '/',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  preHandler: async (request, reply) => {
    console.log("preHandler aqui");
  },
  handler: async (request, reply) => {
    return { teste: "2" };
  }
});

const start = async () => {
  try {
    await app.listen(3333, '0.0.0.0', () => console.log("\x1b[041mok\x1b[0m"));
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();