test: 
	@node_modules/.bin/mocha -u bdd -R spec test/* -r chai

test-watch:
	@node_modules/.bin/mocha -u bdd -R min test/* -w -r chai

run: 
	clear
	-./bin/jsfu

watch: 
	$(MAKE) -s run; \
	while true ; do \
		inotifywait -qqr .; \
		$(MAKE) -s run; \
	done

.PHONY: test test-watch run watch
.SILENT: watch run