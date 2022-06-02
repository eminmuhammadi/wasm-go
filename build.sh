#/bin/env sh

rm -rf public/dist && \
mkdir -p public/dist && \
cp $(tinygo env TINYGOROOT)/targets/wasm_exec.js public/dist/exec.js && \
tinygo build -target wasm -no-debug -o public/dist/main.wasm wasm/main.go