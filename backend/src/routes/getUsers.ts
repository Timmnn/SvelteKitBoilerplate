import { publicProcedure } from "../lib/trpc/context";
import useDb from "../lib/useDb";

const getUsers = publicProcedure.query(async () => {
   const { db, schema } = await useDb();
   if (!db) {
      return [];
   }

   const resp = await db.select().from(schema.users);

   return resp;
});

export default getUsers;
