// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
   dsn: "https://4cb1f803e7edd464a4e446af11d5d5ef@o4507693104693248.ingest.de.sentry.io/4507693106921552",
   integrations: [nodeProfilingIntegration()],
   // Performance Monitoring
   tracesSampleRate: 1.0, //  Capture 100% of the transactions

   // Set sampling rate for profiling - this is relative to tracesSampleRate
   profilesSampleRate: 1.0,
});
