if (window.addEventListener){window.addEventListener('load', WindowLoad, false);} else if (window.attachEvent) {window.attachEvent('onload', WindowLoad);} function WindowLoad() {
    var pass = document.getElementById('passInput');
    var sub = document.getElementById('sub');

    pass.addEventListener('keydown', ({key}) => {
        if (key === 'Enter') {
            sub.click();
            setTimeout(() => {
                sub.click();
            }, 1000);
        }
    });

    sub.addEventListener('click', () => {
        check(myForm);
    });
}

var auth;
var error = document.getElementById("error");

function check(myForm) {
    const correct = "052586";
    var input = myForm.passInput.value;
    if (correct.includes(input)) {
        window.location.href = '/home';
    } else {
        error.style.visibility='visible';
    }
}

if (auth == true) {
    window.location.href = "/home";
}