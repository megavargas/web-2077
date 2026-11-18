# Imagen de producción (Cloud Run). Desarrollo: docker/Dockerfile.dev.
FROM node:26-slim AS build
ENV NUXT_TELEMETRY_DISABLED=1 PNPM_HOME=/pnpm
RUN npm install -g pnpm@12
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm build

FROM node:26-slim
ENV NODE_ENV=production NUXT_TELEMETRY_DISABLED=1 HOST=0.0.0.0 PORT=8080
WORKDIR /app
RUN chown node:node /app
COPY --from=build --chown=node:node /app/.output ./.output
USER node
EXPOSE 8080
CMD ["node", ".output/server/index.mjs"]
