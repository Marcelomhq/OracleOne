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
    if ((typeof valueInput === "string") && (valueInput.length >1)){
        return true;
    } else {
        return false;
    }
}

function adicionarAmigo() {
    let newAmigo = document.getElementById('amigo').value;
    if (checkValidInput(newAmigo)){
        console.log('Novo amigo: '+newAmigo);
        if (listaNomes.includes(newAmigo)){
            changeTextAndColor('listaAmigos',`Epa la! Voce ja incluiu o nome "${newAmigo}" na lista. Digite outro nome ou clique em sortear para escolher o sorteado.`,'red')
            console.log('ja existe')
        } else {
            listaNomes.push(newAmigo);
            changeTextAndColor('listaAmigos',`Lista atual: ${listaNomes}`,'black');
            document.getElementById('amigo').value = ''; 
            document.getElementById('amigo').setAttribute('placeholder','Digite outro nome');     
            console.log(listaNomes)
        }
    } else {
        changeTextAndColor('listaAmigos',`Opss algo deu errado! O valor ou nome que você digitou: "${newAmigo}" não é valido. So aceitamos nomes com mais de 1 letra.`,'red');
    }
    changeTextAndColor('resultado','');  
}

function sortearAmigo() {
    if (listaNomes.length == 0) {
        changeTextAndColor('resultado',`Nenhum nome foi adicionado a lista ainda. Digite seus amigos para ser sorteado antes de colocar em "Sortear Amigos"`,'red');      
        console.log('Lista vazia');
    } else if (listaNomes.length < 2) {
        changeTextAndColor('resultado',`Como apenas tinhamos um amigo na lista o sorteado foi: ${listaNomes}`,'#05DF05');
        console.log(`Como apenas um amigo foi inserido na lista o sorteado foi:${listaNomes}`);
    } else {
        const sorteado = Math.floor(Math.random()*(listaNomes.length));
        console.log(sorteado+','+listaNomes[sorteado]);
        changeTextAndColor('resultado',`Sorteado: "${listaNomes[sorteado]}"`,'#05DF05');
    }
}