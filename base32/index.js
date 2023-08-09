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

const BASE32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

        function encode() {
            const inputText = document.getElementById("input").value;
            const encodedOutput = document.getElementById("output");
            const encodedText = textencode(inputText);
            encodedOutput.value = encodedText;
        }

        function decode() {
            const encodedInput = document.getElementById("output").value;
            const decodedOutput = document.getElementById("input");
            const decodedText = textdecode(encodedInput);
            decodedOutput.value = decodedText;
        }

        function textencode(input) {
            let output = '';
            let bits = 0;
            let value = 0;
            
            for (let i = 0; i < input.length; i++) {
                value = (value << 8) | input.charCodeAt(i);
                bits += 8;
                
                while (bits >= 5) {
                    output += BASE32_ALPHABET[(value >>> (bits - 5)) & 0x1F];
                    bits -= 5;
                }
            }
            
            if (bits > 0) {
                output += BASE32_ALPHABET[(value << (5 - bits)) & 0x1F];
            }
            
            return output;
        }

        function textdecode(input) {
            let output = '';
            let bits = 0;
            let value = 0;
            
            for (let i = 0; i < input.length; i++) {
                value = (value << 5) | BASE32_ALPHABET.indexOf(input.charAt(i));
                bits += 5;
                
                while (bits >= 8) {
                    output += String.fromCharCode((value >>> (bits - 8)) & 0xFF);
                    bits -= 8;
                }
            }
            
            return output;
        }