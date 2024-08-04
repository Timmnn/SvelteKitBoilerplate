import { initTRPC } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
const createContext = ({ req, res }: CreateFastifyContextOptions) => ({});
type Context = Awaited<ReturnType<typeof createContext>>;
const trpc = initTRPC.context<Context>().create();
const { router } = trpc;
const publicProcedure = trpc.procedure;

export { router, publicProcedure };
