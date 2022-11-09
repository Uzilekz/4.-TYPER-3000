

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',
    'messi',
    'Binomo',
];

let score = 0
let time = 10
let palabraIngresada = ""

let intervalo = setInterval ( () => this.actualizarTiempo(), 1000 )

addToDom()

document.getElementById("text").addEventListener("keyup", function(e) {
    if (time > 0){
        palabraIngresada = e.target.value
        if(comparar(document.getElementById("randomWord").innerText)){
            addToDom()
            reset()
            updateScore()
            time+=3
        }
    };
});

function reset() {
    document.getElementById("text").value = ''
}

function actualizarTiempo() {
    if (time > 0) {
        time-=1
        document.getElementById('timeSpan').innerHTML=time + 's'
    } else {
        clearInterval(intervalo);
        gameOver()
        borrarMain()
        document.getElementById('section').style.display="block"
    }
}

function gameOver() {
    document.getElementById('perdiste').innerHTML='Perdiste'
    document.getElementById('puntuacion').innerHTML='Tu puntuacion fue de: ' + score;
}

function borrarMain() {
    document.getElementById('main').style.display="none"
}

function updateScore() {
    score+=1
    document.getElementById('score').innerHTML = score
}

function addToDom(){
    document.getElementById("randomWord").innerHTML = randomWords(words);
}

function comparar(rword){
    if(palabraIngresada === rword){
        return true
    }
    return false
}

function randomWords(words){
    return words[Math.floor(Math.random() * words.length)]
}