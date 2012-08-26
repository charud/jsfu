test: 
	@node_modules/mocha/bin/mocha -u bdd -R spec src/* -r chai

test-watch:
	@node_modules/mocha/bin/mocha -u bdd -R min src/* -w -r chai

run: 
	clear
	-./bin/2js

watch: 
	$(MAKE) -s run; \
	while true ; do \
		inotifywait -qqr .; \
		$(MAKE) -s run; \
	done

.PHONY: test test-watch run watch
.SILENT: watch run