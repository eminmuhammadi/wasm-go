// Defined in wasm_exec.js. Don't forget to add this in your index.html.
const go = new Go();
// Get the importObject from the go instance.
const importObject = go.importObject;

const Add = async () => {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate(
    "./dist/main.wasm",
    importObject
  );

  // Allow the wasm_exec go instance, bootstrap and execute our wasm module
  go.run(wasmModule.instance);

  // Call the Add function export from wasm, save the result
  const response = wasmModule.instance.exports.add(a, b);

  document.getElementById("result").innerHTML = response;
};

const addButton = document.getElementById("add");
addButton.addEventListener("click", Add);
