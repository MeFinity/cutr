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

function decode() {
    const input = document.getElementById("output").value;
    const textOutput = document.getElementById("input");
    textOutput.value = StringEncode(input);
}

function encode() {
    const input = document.getElementById("input").value;
    const binaryOutput = document.getElementById("output");
    binaryOutput.value = StringDecode(input);
}

function StringEncode(binary) {
    return binary
        .match(/.{1,8}/g)
        .map(chunk => String.fromCharCode(parseInt(chunk, 2)))
        .join("");
}

function StringDecode(text) {
    return [...text]
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join("");
}