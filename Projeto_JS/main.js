const listaDeTeclas = document.querySelectorAll('.tecla');

// Loop para detectar a tecla clicada e reproduzir o som
for(let i = 0; i < listaDeTeclas.length; i++) {
    //Pega a tecla da lista e coloca na constante 'tecla'
    const tecla = listaDeTeclas[i]
    //Pega a classe da constante tecla ('tecla_instrumento') e coloca na constante 'instrumento'
    const instrumento = tecla.classList[1]
    //Soma a constante 'instrumento' a string '#som_', é usado crase para que seja possível usar uma função dentro da string
    const idAudio = `#som_${instrumento}`

    //Detecta o clique na tecla e chama a função que irá reproduzir o som, é usado uma função anonima para ser possível mandar um parametro para a função sem chamar ela
    listaDeTeclas[i].onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

//Reproduz o áudio correspondente a ID recebida
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor não encontrado')
    }
}
