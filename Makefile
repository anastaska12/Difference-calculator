lint:
	npx eslint .
 
 install:
	npm ci

test-coverage:
	npx jest --coverage


test:
	npx jest

publish:
	npm publish --dry-run