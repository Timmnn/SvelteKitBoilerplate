import { z } from "zod";
import { config } from "dotenv";

export const envSchema = z.object({
   API_PORT: z.number().int().positive().default(3001),
   POSTGRES_PASSWORD: z.string().min(1),
   POSTGRES_USER: z.string().min(1),
   POSTGRES_DB: z.string().min(1),
});

config();

try {
   envSchema.parse(process.env);
} catch (error) {
   console.error(error);
   process.exit(1);
}
