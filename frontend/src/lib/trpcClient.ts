import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../backend/src/lib/trpc/router";

export function getTRPCClient(host?: string): ReturnType<typeof createTRPCProxyClient<AppRouter>> {
   return createTRPCProxyClient<AppRouter>({
      links: [
         httpBatchLink({
            url: host || "http://traefik/trpc",
         }),
      ],
   });
}
