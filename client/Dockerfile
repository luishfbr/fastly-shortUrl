# Desenvolvimento
FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]
