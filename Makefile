# Todo corre dentro de Docker: no hace falta Node en el host.
RUN = docker compose run --rm web

.PHONY: build install up down logs sh lint format typecheck test e2e check generate preview
build:     ## Construye la imagen de desarrollo
	docker compose build web
install:   ## Instala dependencias
	$(RUN) pnpm install
up:        ## Arranca el servidor de desarrollo en http://localhost:3100 (WEB_PORT para cambiarlo)
	docker compose up -d web
down:
	docker compose down
logs:
	docker compose logs -f web
sh:        ## Shell dentro del contenedor
	$(RUN) bash
lint:
	$(RUN) pnpm lint
format:
	$(RUN) pnpm format
typecheck:
	$(RUN) pnpm typecheck
test:
	$(RUN) pnpm test
e2e:       ## Requiere 'make up'
	docker compose --profile e2e run --rm e2e
check:     ## Reglas de marca + lint + tipos + tests
	bash .claude/skills/contextual-web/scripts/check-design.sh && $(RUN) sh -c "pnpm lint && pnpm typecheck && pnpm test"
generate:  ## Web estática en .output/public
	$(RUN) pnpm generate
