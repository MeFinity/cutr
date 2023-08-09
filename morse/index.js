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

const dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
    'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
    'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
    'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
    '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

const dictrev = Object.fromEntries(Object.entries(dict).map(([key, value]) => [value, key]));

function encode() {
    const inputText = document.getElementById("input").value.toUpperCase();
    const morseOutput = document.getElementById("output");
    morseOutput.value = [...inputText].map(char => dict[char] || '').join(' ');
}

function decode() {
    const morseInput = document.getElementById("output").value;
    const textOutput = document.getElementById("input");
    textOutput.value = morseInput.split(' ').map(code => dictrev[code] || '').join('');
}
