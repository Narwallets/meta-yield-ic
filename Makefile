SHELL = /bin/bash

.PHONY: all
all: install

.PHONY: node_modules
.SILENT: node_modules
node_modules:
	pushd src/frontend/src; yarn; popd

.PHONY: install
.SILENT: install
install: clean
	./scripts/install.sh


.PHONY: init-local
.SILENT: init-local
init-local: 
	./scripts/initalize_local_balance.sh $(II_PRINCIPAL)
	#example make init-local II_PRINCIPAL=5dsno-hmmf7-lzevk-7thyg-bcnj2-txto2-jonxs-pipfr-z2imz-2q5cd-5qe
.PHONY: build
.SILENT: build
build:
	dfx canister create --all
	dfx build

.PHONY: frontend
.SILENT: frontend
frontend: node_modules
	cd src/frontend/src && yarn build && yarn dev

.PHONY: test
.SILENT: test
test:
	./test/demo.sh
	./test/trade.sh
	./test/transfer.sh

.PHONY: clean
.SILENT: clean
clean:
	dfx stop
	rm -fr .dfx
	rm -fr src/frontend/node_modules/
	rm -fr src/declarations/
	rm -fr src/frontend/declarations/
	rm -fr src/frontend/.next
	rm -fr src/frontend_assets
