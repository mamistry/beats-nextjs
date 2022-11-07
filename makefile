ENV_DIR = 'envs'
SOURCES := $(shell find envs -name "*.json" -exec basename {} .json \;)

generate-github-actions:
	@@if [ -f ".github/workflows/$(WORKFLOW).yml" ]; then \
		rm .github/workflows/$(WORKFLOW).yml; \
	fi
	@jsonnet scripts/ghaction.jsonnet \
		-o /tmp/output.json
	@yq eval -P /tmp/output.json > \
		.github/workflows/$(WORKFLOW).yml
	@jsonnet -m $(ENV_DIR) scripts/srvrless.jsonnet
	@@for prefix in $(SOURCES); do \
		mkdir -p  apps/web/deploy/$$prefix; \
		yq eval -P envs/$$prefix.json > apps/web/deploy/$$prefix/serverless.yml; \
	done
