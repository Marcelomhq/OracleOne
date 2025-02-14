// let title = document.querySelector('h1');
// title.innerHTML = 'advinha ai tio';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number between 1 and 10';
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 0;
// console.log(numeroAleatorio);

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1',"adivinha se tu eh bom mermu!!");
exibirTextoNaTela('p','choose a numb between 1 and 29y6');

// First try, then deepseek taught me that while loops in JavaScript blocks the entire interface until the loop is broken, so it wouldnt allow any other guess be made regardless.
// function verificarChute(){
//     let chute = parseInt(document.querySelector('input').value);
//     console.log(chute+','+numeroAleatorio);
//     while (chute != numeroAleatorio) {        
//         if (chute == numeroAleatorio) {
//             alert('voce acertou');
//             console.log('numero escolhido'+chute+' foi igual ao numero aleatorio '+numeroAleatorio);
//             console.log('1111');
//             break;
//         } else {
//             alertNumeroDiferente(chute,numeroAleatorio);
//             console.log('entrando na funcao alertNumeroDiferente');
//             let chute = document.querySelector('input').value;
//         }
//     }
// }

function verificarChute() {
    const chute = parseInt(document.querySelector('input').value);
    console.log(numeroAleatorio+','+chute);
    
    if (chute === numeroAleatorio){
        alert(`Acertou em ${tentativas + 1} tentativas. numero ${chute} foi igual ao numero ${numeroAleatorio}`);
        reiniciarJogo();
    } else {
        alertNumeroDiferente(chute,numeroAleatorio);
        tentativas ++;
        document.querySelector('input').value = '';
        document.querySelector('input').focus;
    }
}

function alertNumeroDiferente(numEscolha,numAleatorio) {
    const dica = numEscolha > numAleatorio ? 'maior' : 'menor';
    alert(`Erraste xddddddd, O numero escolhido ${numEscolha} eh ${dica} que o o numero aleatorio`);
    // if (numEscolha < numAleatorio){
    //     alert('numero escolhido'+chute+' eh menor que o numero aleatorio '+numeroAleatorio);
    //     console.log('entrando no num escolha < numAleatorio');
    // } else {
    //     alert('numero escolhido'+chute+' eh maior que o numero aleatorio '+numeroAleatorio);
    //     console.log('entrando no num escolha > numAleatorio');
    // }
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0
    alert('recomece se quiser only');
    document.querySelector('input').value ='';
    document.querySelector('input').focus;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10+1);    
}
