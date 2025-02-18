// let title = document.querySelector('h1');
// title.innerHTML = 'advinha ai tio';

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number between 1 and 10';
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
// console.log(numeroAleatorio);

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function mudarCor(tag,cor){
    let campo = document.querySelector(tag);
    campo.style.color = cor;
}
function exibitMensagemInicial() {
    exibirTextoNaTela('h1',"adivinha se tu eh bom mermu!!");
    exibirTextoNaTela('p','choose a numb between 1 and 10');
    }

exibitMensagemInicial();


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
        // alert(`Acertou em ${tentativas + 1} tentativas. numero ${chute} foi igual ao numero ${numeroAleatorio}`);
        mudarCor('h1','green');
        exibirTextoNaTela('h1',"PARABENS !!!!!");        
        exibirTextoNaTela('p',`Acertasi doctor depois de ${tentativas}, o numero aleatorio era ${numeroAleatorio}\nClique em "Novo Jogo" se quiser recomecar este jogo fanstaticos`);
        document.getElementById('reiniciar').disabled = false;
    } else {
        alertNumeroDiferente(chute,numeroAleatorio);
        tentativas ++;
        document.querySelector('input').value = '';
        document.querySelector('input').focus;
    }
}

function alertNumeroDiferente(numEscolha,numAleatorio) {
    const dica = numEscolha > numAleatorio ? 'maior' : 'menor';
    exibirTextoNaTela('h1','F, tenta denovo');
    mudarCor('h1','red');
    exibirTextoNaTela('p',`Erraste xddddddd, O numero escolhido ${numEscolha} eh ${dica} que o o numero aleatorio`);
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
    tentativas = 0;
    exibitMensagemInicial();
    limparCampo();
    document.querySelector('input').focus;
    document.querySelector('h1').style.color = 'white';
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10+1);    
}
