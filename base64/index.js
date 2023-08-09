function encode() {
    const inputText = document.getElementById("input").value;
    const encodedOutput = document.getElementById("output");
    encodedOutput.value = btoa(inputText);
}

function decode() {
    const encodedInput = document.getElementById("output").value;
    const decodedOutput = document.getElementById("input");
    decodedOutput.value = atob(encodedInput);
}
