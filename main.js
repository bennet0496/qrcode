import './style.css'
import * as QRCode from 'qrcode'

function render(text) {
    document.querySelector('#app').innerHTML = `<canvas id="canvas"></canvas>`

    const canvas = document.querySelector('canvas#canvas')

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
}


let text = decodeURIComponent(window.location.hash.substring(1))

if (text === '') {
    document.querySelector('#app').innerHTML = `<input type="text" id="text" placeholder="Enter Text"/><button id="generate">Generate QR Code</button>`
    document.querySelector('#generate').addEventListener('click', () => {
        text = document.querySelector('#text').value
        window.location.hash = '#' + encodeURIComponent(text)
        render(text)
    })
} else {
    render(text)
}
