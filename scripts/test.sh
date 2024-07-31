#!/bin/bash

# Run backend tests
(cd backend && bun run test)
backend_status=$?

# Run frontend tests
(cd frontend && npm run test)
frontend_status=$?

# Exit with non-zero status if any test failed
if [ $backend_status -ne 0 ] || [ $frontend_status -ne 0 ]; then
  exit 1
fi

exit 0