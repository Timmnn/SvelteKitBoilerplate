import { z } from "zod";
import { config } from "dotenv";

export const envSchema = z.object({
   PUBLIC_CLERK_PUBLIC_KEY: z.string().nonempty(),
});

config();

try {
   envSchema.parse(process.env);
} catch (error) {
   console.error(error);
   process.exit(1);
}
