(cd frontend && bun install) || exit 1
(cd backend && bun install) || exit 1


concurrently --kill-others \
   "cd frontend && bun run dev" \
   "cd backend && bun run dev"