function generate(){
    let password = '';
    let cheractorset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    for (let i = 0; i<12; i++){
        let passwordIndex = Math.floor(Math.random()*cheractorset.length);
        password += cheractorset[passwordIndex];
    }
    document.getElementById('password').value = password;
}
function copy(){
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Password copied to clipboard');
}