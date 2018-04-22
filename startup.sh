export NODE_PATH=./src/api
export ENV=local
cd form && npm run build
cd .. && npm start
