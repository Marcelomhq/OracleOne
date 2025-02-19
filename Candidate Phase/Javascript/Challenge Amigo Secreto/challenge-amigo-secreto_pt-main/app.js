//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

//This function only works for ID's because everything used had an ID
function changeTextAndColor(tag,text,color=null){
    const element = document.getElementById(tag);
    element.textContent = text;

    if (color){
        element.style.color = color;
    }
}

function checkValidInput(valueInput){
    const removerEspacos = String(valueInput).trim();
    const checadorValidadeRegex = /^[A-Za-z ]+$/;

    if (removerEspacos.length > 1 && checadorValidadeRegex.test(removerEspacos)){
        console.log('passou');
        return true;
    } else{
        console.log('n passou');
    }
}

function mostrarLi(){
    const listaAmigosElement = document.getElementById('listaAmigos');

}
function inserirListaAmigos(){
    const listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';
    listaAmigosElement.style.color='black';

    for (let i =0; i < listaNomes.length; i++){
        listaAmigosElement.innerHTML += `<li>${listaNomes[i]}</li>`;
    }
}

function adicionarAmigo() {
    let newAmigo = document.getElementById('amigo').value;

    if (checkValidInput(newAmigo)){
        if (listaNomes.includes(newAmigo)){
            changeTextAndColor('listaAmigos',`Epa la! Voce ja incluiu o nome "${newAmigo}" na lista. Digite outro nome ou clique em sortear para escolher o sorteado.`,'red')
            console.log('ja existe')
        } else {
            listaNomes.push(newAmigo);
            inserirListaAmigos();
            document.getElementById('amigo').value = ''; 
            document.getElementById('amigo').setAttribute('placeholder','Digite outro nome');     
        }
    } else {
        changeTextAndColor('listaAmigos',`Ops! "${newAmigo}" não é válido. Use apenas letras (A-Z, a-z) e mais de 1 letra ao menos.`,'red');
    }

    document.getElementById('resultado').innerHTML = '';  
}

function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');    

    if (listaNomes.length == 0) {
        resultadoElement.innerHTML = `Nenhum nome foi adicionado a lista ainda. Digite seus amigos para ser sorteado antes de colocar em "Sortear Amigos"`;
        resultadoElement.style.color = 'red';
        inserirListaAmigos();     
        console.log('Lista vazia');
    } else if (listaNomes.length < 2) {
        resultadoElement.innerHTML = 'resultado',`Como apenas tinhamos um amigo na lista o sorteado foi: <strong>${listaNomes[0]}</strong>`;
        inserirListaAmigos();
        resultadoElement.style.color = '#05DF05';
    } else {
        const sorteadoIndex = Math.floor(Math.random()*(listaNomes.length));
        resultadoElement.innerHTML = `Sorteado: "${listaNomes[sorteadoIndex]}"`;
        resultadoElement.style.color = '#05DF05';
        inserirListaAmigos();
    }
}