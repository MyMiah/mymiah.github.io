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

var error = document.getElementById("error");

function check(myForm) {
    const correct = "110809";
    var input = myForm.passInput.value;
    if (input == correct) {
        window.location.href = '/home';
        error.style.visibility='hidden';
    } else {
        error.style.visibility='visible';
    }
}