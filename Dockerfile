FROM node:20-alpine
WORKDIR /app
RUN rm -rf node_modules
COPY package*.json ./
RUN npm install
COPY . .
# Add environment variables during build
ARG PORT
ARG HOST
ENV PORT=${PORT}
ENV HOST=${HOST}
RUN npm run build
EXPOSE ${PORT}
CMD ["node", ".output/server/index.mjs"]