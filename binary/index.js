function binaryToText() {
    const binaryInput = document.getElementById("binaryInput").value;
    const textOutput = document.getElementById("textInput");
    textOutput.value = binaryToString(binaryInput);
}

function textToBinary() {
    const textInput = document.getElementById("textInput").value;
    const binaryOutput = document.getElementById("binaryInput");
    binaryOutput.value = stringToBinary(textInput);
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