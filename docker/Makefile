help:
	@cat Makefile

DATA?="${HOME}/Data"
DOCKER_FILE=Dockerfile
DOCKER=docker
TEST=tests/
SRC=$(shell dirname `pwd`)

# CPU environment

build:
	rm -rf python_javascript
	cp -r ../python_javascript python_javascript
	$(DOCKER) build -t data_visualize --build-arg python_version=3.5 -f $(DOCKER_FILE) .
	rm -rf python_javascript

bash: build
	$(DOCKER) run -it -v $(SRC):/src -v $(DATA):/data data_visualize bash

ipython: build
	$(DOCKER) run -p 8888:8888 -p 6006:6006 -it -v $(SRC):/src -v $(DATA):/data data_visualize ipython

notebook: build
	$(DOCKER) run -p 8888:8888 -p 6006:6006 -it -v $(SRC):/src -v $(DATA):/data data_visualize

test: build
	$(DOCKER) run -it -v $(SRC):/src -v $(DATA):/data data_visualize pytest $(TEST)
