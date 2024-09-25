import './style.css'
import * as QRCode from 'qrcode'

document.querySelector('#app').innerHTML = `<canvas id="canvas"></canvas>`

const canvas = document.querySelector('canvas#canvas')

const text = decodeURIComponent(window.location.hash.substring(1))

console.log(QRCode.toCanvas);



QRCode.toCanvas(canvas, text, {errorCorrectionLevel: 'H'}, function (error) {
    if (error) {
        console.error(error)
        canvas.outerHTML = `failed to render QR Code`
    }
    console.log('success!');
})

const scaleTo = Math.min(window.innerHeight, window.innerWidth) * .5;

canvas.style.width = scaleTo + "px";
canvas.style.height = scaleTo + "px";

setTimeout(function () {
    window.location.hash = "";
    canvas.outerHTML = `QR Code expired`;
}, 5 * 60 * 1000);