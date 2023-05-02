const submit = document.querySelector(".submit");

submit.onclick = function (){
    document.body.style.background = `
    rgb(`+Math.round(Math.random() * 255)+","+Math.round(Math.random() * 255)+","+Math.round(Math.random() * 255)+`)
    `
    submit.style = `
    transform: scale(0.9);
    background: #BDBDBD;
    background: -moz-linear-gradient(top, #BDBDBD 0%, #919191 100%);
    background: -webkit-linear-gradient(top, #BDBDBD 0%, #919191 100%);
    background: linear-gradient(to bottom, #BDBDBD 0%, #919191 100%);
    `
}