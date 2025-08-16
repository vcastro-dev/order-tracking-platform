# Usando uma imagem base Node.js
FROM node:20-alpine AS development

WORKDIR /usr/src/app

# Copia os arquivos de configuração de dependência primeiro para otimizar o cache
COPY package*.json ./
RUN npm install

# Copia todo o código-fonte
COPY . .

# Expõe a porta que o NestJS usa (geralmente 3000)
EXPOSE 3000

# Comando para iniciar o NestJS em modo de desenvolvimento (ou produção se for o caso)
# Para desenvolvimento com hot-reload (normalmente usando `npm run start:dev`)
CMD ["npm", "run", "start:dev"]

# --- Opcional: Estágio de Produção (para otimização e tamanho menor da imagem final) ---
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Instala apenas dependências de produção
COPY package*.json ./
RUN npm ci --only=production

# Copia o build do estágio de desenvolvimento
COPY --from=development /usr/src/app/dist ./dist

# Inicia o aplicativo compilado
CMD ["node", "dist/main"]