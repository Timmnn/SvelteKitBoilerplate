import { publicProcedure } from "../lib/trpc/context";
import useDb from "../lib/useDb";

const createUser = publicProcedure.mutation(async () => {
  const { db, schema } = await useDb();
  if (!db) {
    console.log("no db");
    return null;
  }

  await db
    .insert(schema.users)
    .values({
      id: 1,
      email: "test@test.com",
      username: "test",
    })
    .execute();
});

export default createUser;
