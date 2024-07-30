import winston, { format, transports } from "winston";
const { combine, timestamp, label, printf, prettyPrint, splat, simple } = format;

import SentryTransport from "winston-transport-sentry-node";

const color_map = {
   green: "32",
   red: "31",
   yellow: "33",
   blue: "34",
   purple: "35",
   cyan: "36",
   white: "37",
} as const;

function coloredString(color: keyof typeof color_map, str: string) {
   return `\x1b[${color_map[color]}m${str}\x1b[0m`;
}

const logger = winston.createLogger({
   level: "info",
   format: winston.format.json(),
   defaultMeta: { service: "user-service" },
   transports: [
      new SentryTransport({
         sentry: {
            dsn: process.env.SENTRY_DSN,
            environment: process.env.NODE_ENV,
         },
      }),
   ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
   logger.add(
      new winston.transports.Console({
         format: combine(
            timestamp(),
            splat(),
            printf(({ level, message, timestamp }) => {
               const color_map = {
                  info: "cyan",
                  error: "red",
                  warn: "yellow",
                  fatal: "purple",
               } as const;
               const color = color_map[level] || "white";

               return `[${timestamp}] [${coloredString(color, level.toUpperCase())}] ${message}`;
            })
         ),
      })
   );
}

export default logger;
