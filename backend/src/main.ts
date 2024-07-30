import Fastify from "fastify";
import dotenv from "dotenv";
import logger from "./lib/logger";
import "./lib/sentry";
import Sentry from "@sentry/node";
dotenv.config();

const app = Fastify({});

Sentry.setupFastifyErrorHandler(app);

app.get("/", async (request, reply) => {
   logger.info("Request to /");
   return { hello: "world" };
});

const start = async () => {
   const API_PORT = process.env.API_PORT as string;

   try {
      await app.listen({ port: parseInt(API_PORT) });
      logger.info(`Server listening on port ${API_PORT}`);
   } catch (err) {
      console.error(err);
   }
};
start();
