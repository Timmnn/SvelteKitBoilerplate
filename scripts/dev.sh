(cd frontend/; yarn)
(cd backend/; yarn)


docker-compose -f ./docker-compose.dev.yml down

docker-compose -f ./docker-compose.dev.yml up --build
