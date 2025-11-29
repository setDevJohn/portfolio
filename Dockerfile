# Stage de build (igual ao que você já tem)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage runtime (serve)
FROM node:18-alpine AS runtime
WORKDIR /app

# instalar 'serve' globalmente para servir o dist
RUN npm install -g serve

# copia os arquivos construídos
COPY --from=builder /app/dist ./dist

EXPOSE 4000
# -s serve em modo single-page (fallback para index.html)
CMD ["serve", "-s", "dist", "-l", "4000"]
