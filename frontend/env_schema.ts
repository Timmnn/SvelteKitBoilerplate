import { z } from "zod";
import { config } from "dotenv";

export const envSchema = z.object({
   PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().nonempty(),
   STRIPE_SECRET_KEY: z.string().nonempty(),
   PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().nonempty(),
   CLERK_SECRET_KEY: z.string().nonempty(),
});

config();

try {
   envSchema.parse(process.env);
} catch (error) {
   console.error(error);
   process.exit(1);
}
