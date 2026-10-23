FROM node:22-alpine

# Diretório de trabalho dentro do contêiner de desenvolvimento.
WORKDIR /app

# Instala as dependências declaradas pelo projeto antes de copiar os fontes.
COPY package*.json ./
RUN npm ci

# Inclui os arquivos e inicia o Tailwind em modo de observação.
COPY . .

CMD ["npm", "run", "dev"]
