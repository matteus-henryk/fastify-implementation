import fastify from "fastify";

import { appIndexRoutes } from "./routes";

const app = fastify({
  logger: true,
});

appIndexRoutes(app);

const start = async () => {
  try {
    await app.listen(3333, "0.0.0.0", () => console.log("\x1b[041mok\x1b[0m"));
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
