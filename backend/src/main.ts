import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { appRouter, type AppRouter, createContext } from "./lib/trpc/router";
import dotenv from "dotenv";
import logger from "./lib/logger";
dotenv.config();

const app = fastify({
  maxParamLength: 5000,
});

app.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});

app.get("/trpc/test", (req, reply) => {
  reply.send({ hello: "world" });
});

(async () => {
  const API_PORT = process.env.API_PORT as string;

  try {
    await app.listen({ port: parseInt(API_PORT), host: "0.0.0.0" });
    logger.info(`Server is running on http://localhost:${API_PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
})();
