import { getTRPCClient } from "../lib/trpcClient";

/** @type {import('./$types').PageLoad} */
export async function load() {
   const trpc = getTRPCClient();
   const response = await trpc.getUsers.query();
   console.log(response);

   return {
      users: response,
   };
}
