
let regra = document.getElementById(`regra`);
let title = document.getElementById(`title`);
let bola = document.querySelector(`.bola`);
let corpo = document.getElementById(`corpo`);
let me = document.querySelector(`.me`);
let md = document.querySelector(`.md`);
let placar = document.getElementById(`placar`);

function fimDeJogo() {
    document.getElementById("regra").style.color = "black";
    title = '';
    if (placarJogador > placarMaquina) {
        regra.innerHTML = 'FIM DE JOGO!<br/> Parabéns,você venceu!';
    } else {
        regra.innerHTML = 'FIM DE JOGO!<br/> Não era seu dia!';
    }
    document.getElementById("bola").style.display = 'none';
    corpo.style.display = 'none';
    Array.from(me).forEach(elem => elem.style.display = 'none');
    Array.from(md).forEach(elem => elem.style.display = 'none');
    document.getElementById("body").setAttribute('onKeyPress', '');
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`position${i}`).style.display = "none";
    }
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
    regra.innerHTML = "escolha onde chutar!"
    chutePlayer = parseInt(gol);
    console.log("chute Jogador: " + chutePlayer);
    if (chutePlayer > 0 && chutePlayer < 6) {
        if (chutePlayer == 1) {
            bola.setAttribute('id', 'position1');
        } else if (chutePlayer == 2) {
            bola.setAttribute('id', 'position2');
        } else if (chutePlayer == 3) {
            bola.setAttribute('id', 'position3');
        } else if (chutePlayer == 4) {
            bola.setAttribute('id', 'position4');
        } else if (chutePlayer == 5) {
            bola.setAttribute('id', 'position5');
        }
    }
    defesaMaquina();
}

function defesaMaquina() {
    let localMaquina = [1, 2, 3, 4, 5, 6];
    let maquina = Math.floor(Math.random() * localMaquina.length);
    defesaCPU = parseInt(localMaquina[maquina]);
    console.log("defesaCPU: " + defesaCPU);

    corpo.setAttribute('src', 'assets/goleiro.png');
    me.setAttribute('src', 'assets/meGoleiro.png');
    md.setAttribute('src', 'assets/mdGoleiro.png');
    if (defesaCPU == 1) {
        me.setAttribute('id', 'position1');
    } else if (defesaCPU == 2) {
        me.setAttribute('id', 'position2');
    } else if (defesaCPU == 3) {
        md.setAttribute('id', 'position3');
    } else if (defesaCPU == 4) {
        md.setAttribute('id', 'position4');
    } else if (defesaCPU == 5) {
        me.setAttribute('id', 'position5');
        md.setAttribute('id', 'position5');
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
        mensagem = "CPU DEFENDEU!!";
    } else {
        mensagem = "PRA FORA!!";
    }
    setTimeout(() => {
        console.log(mensagem);
        regra.innerHTML = mensagem;
        placar.innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;
    }, 1500);
    setTimeout(() => {
        regra.innerHTML = "Escolha onde acha que vai ser o chute";
        bola.setAttribute('src', 'assets/bola.png');
        bola.setAttribute('id', 'bola');
        me.setAttribute('id', 'position01');
        md.setAttribute('id', 'position02');
    }, 1500);
}


function chuteMaquina(gol) {
    let localMaquina = [1, 2, 3, 4, 5, 6];
    let maquina = Math.floor(Math.random() * localMaquina.length);
    chuteCPU = parseInt(localMaquina[maquina]);
    console.log("chuteCPU: " + chuteCPU);
    if (chuteCPU > 0 && chuteCPU < 6) {
        if (chuteCPU == 1) {
            bola.setAttribute('id', 'position1');
        } else if (chuteCPU == 2) {
            bola.setAttribute('id', 'position2');
        } else if (chuteCPU == 3) {
            bola.setAttribute('id', 'position3');
        } else if (chuteCPU == 4) {
            bola.setAttribute('id', 'position4');
        } else if (chuteCPU == 5) {
            bola.setAttribute('id', 'position5');
        }

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
    corpo.setAttribute('src', 'assets/goleiro2.png');
    me.setAttribute('src', 'assets/meGoleiro2.png');
    md.setAttribute('src', 'assets/mdGoleiro2.png');

    if (defesaPlayer == 1) {
        me.setAttribute('id', 'position1');
    } else if (defesaPlayer == 2) {
        me.setAttribute('id', 'position2');
    } else if (defesaPlayer == 3) {
        md.setAttribute('id', 'position3');
    } else if (defesaPlayer == 4) {
        md.setAttribute('id', 'position4');
    } else if (defesaPlayer == 5) {
        me.setAttribute('id', 'position5');
        md.setAttribute('id', 'position5');
    }

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
        mensagem = "VOCÊ DEFENDEU!!";
    } else {
        mensagem = "PRA FORA!!";
    }

    console.log(mensagem);
    regra.innerHTML = mensagem;
    placar.innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;

    setTimeout(() => {
        regra.innerHTML = "Escolha onde deseja chutar";
        bola.setAttribute('src', 'assets/bola.png');
        bola.setAttribute('id', 'bola');
        me.setAttribute('id', 'position01');
        md.setAttribute('id', 'position02');
    }, 1500);
}

function tecla_pressionada(event) {
    let tecla = event.which || event.keyCode;
    me.setAttribute('id', 'position01');
    md.setAttribute('id', 'position02');

    if (event.key === 'Enter' && contador === 0) {
        contador++;
        regra.style.color = 'black';
        title = '';
        regra.innerHTML = 'Escolha onde deseja chutar';

    } else if ((tecla >= 49 && tecla <= 53 )&& contador>0 &&(placarJogador - placarMaquina<2 || placarMaquina-placarJogador<2)) {
        gol = parseInt(event.key);
        contador++;

        let mensagem = (contador % 2 !== 0) ? 'Escolha onde deseja chutar' : 'Escolha onde acha que vai ser o chute';
        regra.style.color = 'black';
        title = '';
        regra.innerHTML = mensagem;

        if (contador % 2 !== 0) {
            chuteJogador(gol);
        } else {
            chuteMaquina(gol);
        }

        if (contador<10 &&(placarJogador - placarMaquina>2 || placarMaquina-placarJogador>2)) {
            regra.style.display = 'absolute';
            regra.style.top = '18vw';
            regra.style.left = '0vw';
            setTimeout(fimDeJogo, 1500);
        }
        if (contador>=10 &&(placarJogador - placarMaquina>1 || placarMaquina-placarJogador>1)) {
            regra.style.display = 'absolute';
            regra.style.top = '18vw';
            regra.style.left = '0vw';
            setTimeout(fimDeJogo, 1500);
        }
    } else if ((tecla < 49 || tecla > 53) && event.key !== 'Enter') {
        setTimeout(() => {
            regra.innerHTML = 'PRA FORA!';
        }, 1000)
    }
}

