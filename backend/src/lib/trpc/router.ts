import { initTRPC } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";

import getUsers from "../../routes/getUsers";

export const t = initTRPC.create();

export function createContext({ req, res }: CreateFastifyContextOptions) {
   const user = { name: req.headers.username ?? "anonymous" };
   return { req, res, user };
}

export const appRouter = t.router({
   getUsers,
});
// export type definition of API
export type AppRouter = typeof appRouter;
