import fastify from "fastify";

import userRoutes from "./routes/user.routes";

const app = fastify({
  logger: true,
});

app.register(userRoutes, { prefix: "/users" });

const start = async () => {
  try {
    await app.listen(3333, "0.0.0.0", () => console.log("\x1b[041mok\x1b[0m"));
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
