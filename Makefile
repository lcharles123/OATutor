NOME=oatutor-docker
IMAGE=lcharles060/$(NOME):latest
CONTAINER=$(NOME)-run

all:
	cat Makefile

dbuild:
	docker build . --tag $(IMAGE)

dpush:
	docker push $(IMAGE)

dpull:
	docker pull $(IMAGE)

drun:
	docker run -it -p 3000:80 --name $(CONTAINER) $(IMAGE)

denter:
	docker exec -it $(CONTAINER) /bin/bash

dclean:
	docker rm -f $(CONTAINER)

dpurge:
	docker image rm -f $(IMAGE) 

