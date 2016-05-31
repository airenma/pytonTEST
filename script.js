var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ',' ']; 
//функция, сдвигающая алфавит на количество букв shift

function shiftAlphabet(shift) {
    console.log(shift)
    var shiftedAlphabet = ''; //сдвинутый алфавит 
    for (var i = 0; i < alphabet.length; i++) {
        //console.log(i, alphabet[i+shift]);
        currentLetter = (alphabet[i + shift] === undefined) ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]); //Текущая буква со сдвигом, если выходим за рамки длины алфавита - берем с начала алфавита

        shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
    }
    return shiftedAlphabet;
} //end function shiftAlphabet

console.log(shiftedAlphabet);

function encrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        var indexOfLetter = alphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}

function decrypt() {
    var message = document.getElementById('message').value;
    var shift = parseInt(document.getElementById('shift').value);
    var shiftedAlphabet = shiftAlphabet(shift);
    var encryptedMessage = '';
    for (var i = 0; i < message.length; i++) {
        if (message[i] == ' ') {
            encryptedMessage = encryptedMessage.concat(' ');
            continue};
        var indexOfLetter = shiftedAlphabet.indexOf(message[i].toUpperCase());
        encryptedMessage = encryptedMessage.concat(alphabet[indexOfLetter]);
    }
    document.getElementById('cipher').value = encryptedMessage.toLowerCase();
}