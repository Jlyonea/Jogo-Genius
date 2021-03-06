let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.azul');
const red = document.querySelector('.vermelho');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selecionada');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selecionada');
    }, number - 150);
}
//checa se os botões clickados são iguais aos que acenderam
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length ==  order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selecionada');

    setTimeout(() => {
        createColorElement(color).classList.remove('selecionada');
        checkOrder();
    }, 250);
}

//função que retorna a cor
let createColorElement = (color) =>{
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

//função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Função para game over
let  gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}

//função inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genius! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
}


green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();