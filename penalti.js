function fimDeJogo() {
    document.getElementById("regra").style.color = "black";
    document.getElementById("title").innerHTML = '';
    document.getElementById('regra').innerHTML = 'FIM DE JOGO!';
    document.getElementById("bola").style.display = 'none';
    document.getElementById('corpo').style.display = 'none';
    Array.from(document.getElementsByClassName('me')).forEach(elem => elem.style.display = 'none');
    Array.from(document.getElementsByClassName('md')).forEach(elem => elem.style.display = 'none');
    document.getElementById("body").setAttribute('onKeyPress', '');
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`position${i}`).style.display = "none";
    }
}

function limpa() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`position${i}`).setAttribute('src', `alvo${i}.png`);
        document.getElementById(`position${i}`).style.display = "absolute";
    }
    document.getElementById("bola").setAttribute('id', 'bola');
}

let chutePlayer = 0,
    defesaPlayer = 0,
    chuteCPU = 0,
    defesaCPU = 0,
    placarJogador = 0,
    placarMaquina = 0,
    contador = 0,
    gol = 0;

function chuteJogador(gol) {
    document.getElementById('regra').innerHTML = "escolha onde chutar!"
    chutePlayer = parseInt(gol);
    console.log("chute Jogador: " + chutePlayer);
    if (chutePlayer > 0 && chutePlayer < 6) {
        let chute = `position${gol}`;
        document.getElementById(chute).setAttribute('src', 'assets/bola.png');
        setTimeout(() => {
            document.getElementById(chute).setAttribute('src', `assets/alvo${gol}.png`);
        }, 1500)
    }
    defesaMaquina();
}

function defesaMaquina() {
    let localMaquina = [1, 2, 3, 4, 5, 6];
    let maquina = Math.floor(Math.random() * localMaquina.length);
    defesaCPU = parseInt(localMaquina[maquina]);
    console.log("defesaCPU: " + defesaCPU);

    document.getElementById("corpo").setAttribute('src', 'assets/goleiro.png');
    document.querySelector(".me").setAttribute('src', 'assets/meGoleiro.png');
    document.querySelector(".md").setAttribute('src', 'assets/mdGoleiro.png');
    if (defesaCPU == 1) {
        document.querySelector(".me").setAttribute('id', 'position1');
    } else if (defesaCPU == 2) {
        document.querySelector(".me").setAttribute('id', 'position2');
    } else if (defesaCPU == 3) {
        document.querySelector(".md").setAttribute('id', 'position3');
    } else if (defesaCPU == 4) {
        document.querySelector(".md").setAttribute('id', 'position4');
    } else if (defesaCPU == 5) {
        document.querySelector(".me").setAttribute('id', 'position5');
        document.querySelector(".md").setAttribute('id', 'position5');
    }
    apurarPlacarChuteJogador();
}
function apurarPlacarChuteJogador() {
    document.getElementById("regra").style.color = "blue";
    let mensagem = "";
    if (chutePlayer !== defesaCPU && typeof (chutePlayer) === 'number' && chutePlayer > 0 && chutePlayer < 6) {
        mensagem = "Você fez GOL!";
        placarJogador++;
    } else if (chutePlayer === defesaCPU && chutePlayer > 0 && chutePlayer < 6) {
        mensagem = "DEFENDEU!!";
    } else {
        mensagem = "PRA FORA!!";
    }
    document.getElementById("regra").innerHTML = mensagem;
    document.getElementById("placar").innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;

    setTimeout(() => {
        document.getElementById("regra").innerHTML = "Escolha onde acha que vai ser o chute";
    }, 1500);
}


function chuteMaquina(gol) {
    let localMaquina = [1, 2, 3, 4, 5, 6];
    let maquina = Math.floor(Math.random() * localMaquina.length);
    chuteCPU = parseInt(localMaquina[maquina]);
    console.log("chuteCPU: " + chuteCPU);
    if (chuteCPU > 0 && chuteCPU < 6) {

        document.getElementById(`position${chuteCPU}`).setAttribute('src', `assets/bola.png`);

        setTimeout(() => {
            document.getElementById(`position${chuteCPU}`).setAttribute('src', `assets/alvo${chuteCPU}.png`);
        }, 1500)
    }
    defesaJogador(gol);
}

function defesaJogador(gol) {
    let chute = "position" + gol;
    defesaPlayer = parseInt(gol);
    console.log("defesaJogador:" + defesaPlayer);
    document.getElementById("corpo").setAttribute('src', 'assets/goleiro2.png');
    document.querySelector(".me").setAttribute('src', 'assets/meGoleiro2.png');
    document.querySelector(".md").setAttribute('src', 'assets/mdGoleiro2.png');

    if (defesaPlayer == 1) {
        document.querySelector(".me").setAttribute('id', 'position1');
    } else if (defesaPlayer == 2) {
        document.querySelector(".me").setAttribute('id', 'position2');
    } else if (defesaPlayer == 3) {
        document.querySelector(".md").setAttribute('id', 'position3');
    } else if (defesaPlayer == 4) {
        document.querySelector(".md").setAttribute('id', 'position4');
    } else if (defesaPlayer == 5) {
        document.querySelector(".me").setAttribute('id', 'position5');
        document.querySelector(".md").setAttribute('id', 'position5');
    }
    document.getElementById(chute).setAttribute('src', 'assets/bola.png');

    setTimeout(() => { document.getElementById(chute).setAttribute('src', `assets/alvo${gol}.png`) }, 1500)

    setTimeout(() => {
        apurarPlacarChuteMaquina();
    }, 500);
}
function apurarPlacarChuteMaquina() {
    document.getElementById("regra").style.color = "red";
    let mensagem = "";
    if (chuteCPU !== defesaPlayer && typeof (defesaPlayer) === 'number' && defesaPlayer > 0 && defesaPlayer < 6) {
        mensagem = "GOL do adversário!";
        placarMaquina++;
    } else if (chuteCPU === defesaPlayer && chuteCPU > 0 && chuteCPU < 6) {
        mensagem = "DEFENDEU!!";
    } else {
        mensagem = "PRA FORA!!";
    }
    document.getElementById("regra").innerHTML = mensagem;
    document.getElementById("placar").innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;

    setTimeout(() => {
        document.getElementById("regra").innerHTML = "Escolha onde deseja chutar";
    }, 1500);
}



function tecla_pressionada(event) {
    let tecla = event.which || event.keyCode;
    let meElements = document.querySelectorAll('.me');
    let mdElements = document.querySelectorAll('.md');

    document.querySelector('.me').setAttribute('id', 'position01');
    document.querySelector('.md').setAttribute('id', 'position02');

    if (event.key === 'Enter' && contador === 0) {
        contador++;
        document.getElementById('regra').style.color = 'black';
        document.getElementById('title').innerHTML = '';
        document.getElementById('regra').innerHTML = 'Escolha onde deseja chutar';
    } else {
        document.getElementById('regra').style.color = 'red';
    }

    if (tecla >= 49 && tecla <= 53 && contador <= 10) {
        gol = parseInt(event.key);
        contador++;

        let mensagem = (contador % 2 !== 0) ? 'Escolha onde deseja chutar' : 'Escolha onde acha que vai ser o chute';
        document.getElementById('regra').style.color = 'black';
        document.getElementById('title').innerHTML = '';
        document.getElementById('regra').innerHTML = mensagem;

        if (contador % 2 !== 0) {
            chuteJogador(gol);
        } else {
            chuteMaquina(gol);
        }

        if (contador > 10) {
            document.getElementById('regra').style.display='absolute'
            document.getElementById('regra').style.top= '18vw'
            document.getElementById('regra').style.left= '0vw'
            document.getElementById('regra').innerHTML = 'FIM DE JOGO!';
            setTimeout(fimDeJogo, 1500);
        }
    } else {
        document.getElementById('bola').style.display = 'none';
        document.getElementById('regra').innerHTML = '';
    }
}

