var pressed = [];
var secretcode = 'navidad';

window.addEventListener('keyup', function (e) {
    pressed.push(e.key);
    pressed.splice(-secretcode.length -1, pressed.length - secretcode.length);

    if (pressed.join('') == secretcode) {
        console.log('Se usó el código secreto :)');
    }
});
