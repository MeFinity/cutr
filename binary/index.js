function binaryToText() {
    const input = document.getElementById("output").value;
    const textOutput = document.getElementById("input");
    textOutput.value = binaryToString(input);
}

function textToBinary() {
    const input = document.getElementById("input").value;
    const binaryOutput = document.getElementById("output");
    binaryOutput.value = stringToBinary(input);
}

function binaryToString(binary) {
    return binary
        .match(/.{1,8}/g)
        .map(chunk => String.fromCharCode(parseInt(chunk, 2)))
        .join("");
}

function stringToBinary(text) {
    return [...text]
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join("");
}