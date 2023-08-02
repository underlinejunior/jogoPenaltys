
let regra = document.getElementById(`regra`);
let title = document.getElementById(`title`);
let bola = document.querySelector(`.bola`);
let corpo = document.getElementById(`corpo`);
let me = document.querySelector(`.me`);
let md = document.querySelector(`.md`);
let placar = document.getElementById(`placar`);
let goldenScore = document.getElementById(`goldenScore`);
let regraAtual = document.getElementById(`regraAtual`);
let processando = true;

function fimDeJogo() {
    document.getElementById("regra").style.color = "black";
    regra.innerHTML = `FIM DE JOGO!<br/>${placarJogador} X ${placarMaquina}<br>` + (placarJogador > placarMaquina ? `Parabéns, você venceu!` : `Não era seu dia!`);
    document.getElementById("bola").style.display = 'none';
    corpo.style.display = 'none';
    me.style.display = 'none';
    md.style.display = 'none';
    placar.style.display = 'none';
    goldenScore.style.display = 'none';
    regraAtual.style.display = "none";
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
    golsRestantes = 10,
    gol = 0;

function chuteJogador(gol) {
    regra.innerHTML = "escolha onde chutar!"
    chutePlayer = parseInt(gol);
    console.log("chute Jogador: " + chutePlayer);
    if (chutePlayer >= 1 && chutePlayer <= 5) {
        bola.setAttribute('id', `position${chutePlayer}`);
        setTimeout(() => {
            document.getElementById(`position${chutePlayer}`).setAttribute('src', `assets/alvo${chutePlayer}.png`);
        }, 1000);
    }
    defesaMaquina();
}

function defesaMaquina() {
    let localMaquina = [1, 2, 3, 4, 5, 6];
    let maquina = Math.floor(Math.random() * localMaquina.length);
    defesaCPU = parseInt(localMaquina[maquina]);
    console.log("defesaCPU: " + defesaCPU);
    const positions = ['position1', 'position2', 'position3', 'position4', 'position5'];
    if (defesaCPU == 1) {
        me.setAttribute('id', positions[0]);
    } else if (defesaCPU == 2) {
        me.setAttribute('id', positions[1]);
    } else if (defesaCPU == 3) {
        md.setAttribute('id', positions[2]);
    } else if (defesaCPU == 4) {
        md.setAttribute('id', positions[3]);
    } else if (defesaCPU == 5) {
        me.setAttribute('id', positions[4]);
        md.setAttribute('id', positions[4]);
    }
    setTimeout(() => {
        apurarPlacarChuteJogador();
    }, 1500);
}
function apurarPlacarChuteJogador() {
    const mensagem = (chutePlayer !== defesaCPU && typeof chutePlayer === 'number' && chutePlayer > 0 && chutePlayer < 6)
        ? (placarJogador++, "Você fez GOL!")
        : (chutePlayer === defesaCPU && chutePlayer > 0 && chutePlayer < 6)
            ? "CPU DEFENDEU!!"
            : "PRA FORA!!";

    setTimeout(() => {
        console.log(mensagem);
        regra.style.color = "blue";
        regra.innerHTML = mensagem;
        placar.innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;
    }, 1500);

    setTimeout(() => {
        regra.style.color = "black";
        regra.innerHTML = "Escolha onde acha que vai ser o chute";
        bola.setAttribute('src', 'assets/bola.png');
        bola.setAttribute('id', 'bola');
        me.setAttribute('id', 'position01');
        md.setAttribute('id', 'position02');
    }, 500);
    corpo.setAttribute('src', 'assets/goleiro2.png');
    me.setAttribute('src', 'assets/meGoleiro2.png');
    md.setAttribute('src', 'assets/mdGoleiro2.png');
    processando=true;
}

function chuteMaquina(gol) {
    const localMaquina = [1, 2, 3, 4, 5];
    const maquina = Math.floor(Math.random() * localMaquina.length);
    chuteCPU = localMaquina[maquina];
    console.log("chuteCPU:", chuteCPU);
    if (chuteCPU >= 1 && chuteCPU <= 5) {
        bola.setAttribute('id', `position${chuteCPU}`);
        setTimeout(() => {
            document.getElementById(`position${chuteCPU}`).setAttribute('src', `assets/alvo${chuteCPU}.png`);
        }, 1000);
    }
    defesaJogador(gol);
}


function defesaJogador(gol) {
    let chute = "position" + gol;
    const positions = ['position1', 'position2', 'position3', 'position4', 'position5'];

    defesaPlayer = parseInt(gol);
    console.log("defesaJogador:", defesaPlayer);

    if (defesaPlayer == 1) {
        me.setAttribute('id', positions[0]);
    } else if (defesaPlayer == 2) {
        me.setAttribute('id', positions[1]);
    } else if (defesaPlayer == 3) {
        md.setAttribute('id', positions[2]);
    } else if (defesaPlayer == 4) {
        md.setAttribute('id', positions[3]);
    } else if (defesaPlayer == 5) {
        me.setAttribute('id', positions[4]);
        md.setAttribute('id', positions[4]);
    }

    setTimeout(apurarPlacarChuteMaquina, 1500);
}

function apurarPlacarChuteMaquina() {
    const mensagem = (chuteCPU !== defesaPlayer && typeof defesaPlayer === 'number' && defesaPlayer > 0 && defesaPlayer < 6)
        ? (placarMaquina++, "GOL do adversário!")
        : (chuteCPU === defesaPlayer && chuteCPU > 0 && chuteCPU < 6)
            ? "VOCÊ DEFENDEU!!"
            : "PRA FORA!!";

    console.log(mensagem);
    regra.style.color = "red";
    regra.innerHTML = mensagem;
    placar.innerHTML = `Player:${placarJogador} <br/> Maquina:${placarMaquina}`;

    setTimeout(() => {
        regra.style.color = "black";
        regra.innerHTML = "Escolha onde deseja chutar";
        bola.setAttribute('src', 'assets/bola.png');
        bola.setAttribute('id', 'bola');
        me.setAttribute('id', 'position01');
        md.setAttribute('id', 'position02');
    }, 1500);

    corpo.setAttribute('src', 'assets/goleiro.png');
    me.setAttribute('src', 'assets/meGoleiro.png');
    md.setAttribute('src', 'assets/mdGoleiro.png');
    processando=true;
}


function tecla_pressionada(event) {
    const tecla = event.which || event.keyCode;
    me.setAttribute('id', 'position01');
    md.setAttribute('id', 'position02');

    if (event.key === 'Enter' && contador === 0) {
        document.getElementById('goleiro').style.display = "flex";
        document.getElementById('position1').style.display = "flex";
        document.getElementById('position2').style.display = "flex";
        document.getElementById('position3').style.display = "flex";
        document.getElementById('position4').style.display = "flex";
        document.getElementById('position5').style.display = "flex";
        placar.style.display = 'flex';
        contador++;
        regra.innerHTML = 'Escolha onde deseja chutar';
    } else if (processando == true && (tecla >= 49 && tecla <= 53) && contador < 10 && Math.abs(placarJogador - placarMaquina) < 3) {
        processando = false;
        gol = parseInt(event.key);
        contador++;
        golsRestantes--;
        const mensagem = (contador % 2 !== 0) ? 'Escolha onde deseja chutar' : 'Escolha onde acha que vai ser o chute';
        regra.innerHTML = mensagem;
        regraAtual.style.display = 'block';
        regraAtual.innerHTML = `Vence quem fizer 3 gols de diferença antes dos ${golsRestantes} chutes`;
        if (contador % 2 !== 0) {
            chuteJogador(gol);
        } else {
            chuteMaquina(gol);
        }
    }
    else if (processando == true && contador >= 10 && Math.abs(placarJogador - placarMaquina) < 2) {
        processando = false;
        goldenScore.style.display = `flex`;
        regraAtual.innerHTML = 'Vence quem fizer 2 gols de diferença primeiro';
        if (contador % 2 !== 0) {
            chuteJogador(gol);
        } else {
            chuteMaquina(gol);
        }
    }
    else if (processando == true && (tecla < 49 || tecla > 53) && event.key !== 'Enter') {
        processando = false;
        setTimeout(() => {
            regra.innerHTML = 'PRA FORA!';
        }, 1500);
        processando = true;
    }

}



