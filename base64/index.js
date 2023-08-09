function copyinput() {
    var textarea = document.getElementById("input");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
}

function copyoutput() {
    var textarea = document.getElementById("output");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
}

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
