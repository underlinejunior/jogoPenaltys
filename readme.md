<h1>Jogo de Penaltys</h1>
<p>Jogo desenvolvido como parte da disciplina de lógica de programação - módulo 1 de ADS.</p>
<p>Aplicação de Arrays e funções em javascript</p>
<h3>Funcionamento do Jogo</h3>
<p>O jogo funciona pelo teclado;</p>
<p>1. O aplicativo espera a tecla ENTER ser precionada pra começar e termina quando algum dos jogadores conseguir uma diferença de dois gols;</p>
<p>2. Durante o jogo pode ser precionado qualquer tecla, sendo que as teclas numericas de 1 à 5 chutam no gol, conforme marcadas no jogo. Qualquer outra tecla a bola vai pra fora e o goleiro não se mexem;</p>
<p>3. Na vez da CPU é feito um sorteio de 1 a 6, sendo o 6 o chute pra fora. tanto pro chute quanto pra defesa da maquina.
<div style='background-color:black;border:2px solid gray'>
<code style='background-color:black;color:yellowgreen'>
let localMaquina = [1, 2, 3, 4, 5, 6];</code>
<br>
<code style='background-color:black;color:yellowgreen'>
let maquina = Math.floor(Math.random() * localMaquina.length);
</code>
</div>

</p>
<p>4. Para que o jogo não se prolongue demais existem duas regras para vitoria:</p>
<p>4.1. Em 10 chutes quem fizer dois gols de vantagem sobre o oponente;<br>
4.2. Após 10 chutes quem fizer um gol de vantagem sobre o oponente.</p>
<br>

<p>Disponível em: <a href="https://underlinejunior.github.io/jogoPenaltys/">https://underlinejunior.github.io/jogoPenaltys/</a></p>

Projeto feito em parceira com <a href="https://github.com/AntonioIvoDeOliveiraSouza">AntonioIvoDeOliveiraSouza</a> e baseado em projeto feito em portugol disponível em:<a href="https://github.com/AntonioIvoDeOliveiraSouza/Portugol-Studio/blob/main/Jogo%20do%20pen%C3%A2lti">JogoDoPenalti</a>.
