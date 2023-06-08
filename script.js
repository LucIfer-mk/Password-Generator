function generatePassword() {
    var length = document.getElementById("length").value;
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    var validChars = "";
    if (includeUppercase) {
        validChars += uppercaseChars;
    }
    if (includeLowercase) {
        validChars += lowercaseChars;
    }
    if (includeNumbers) {
        validChars += numberChars;
    }
    if (includeSymbols) {
        validChars += symbolChars;
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }
    document.getElementById("output").value = password;
}