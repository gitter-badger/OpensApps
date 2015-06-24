/*
	Este arquivo faz parte do Breakout;
	
	Breakout é Software Livre; você pode redistribui-lo e/ou
	modificá-lo dentro dos termos da Licença Pública Geru GNU como
	publicada pela Fundação do Software Livre (FSF); na versão 3 da Licença.
	Este programa é distribuído na esperança que possa ser util,
	mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUAÇÂO a
	qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a Licença Pública Geral
	GNU para maiores detalhes.
	Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com 
	este programa, se não, escreva para a Fundação do Software Livre(FSF) Inc.,
	51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
	
	Breakout v0.7
	Breakout -> Ano: 2013, 2015|Tipo: Mobile
*/

//Elementos do Arquivo index.html
var id1 = document.getElementById('breakout');
var ads = document.getElementById('ads');
var sobre = document.getElementById('sobre');
var opcao = document.getElementById('opt');
var menu1 = document.getElementById('menu');
var break1 = id1.getContext("2d");
var header = document.getElementsByTagName('header')[0];

//Variáveis Essenciais para o Jogo
var rowcolors = ["rgb(128,16,16)", "#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#FFFFFF"];
var ballcolor = "#FFFFFF";
var paddlecolor = "#FFFFFF";
var backcolor = "#000000";
var dx, dy, ballr, nrows, ncols, brickheight;
var version = "Breakout Beta 3";
var lang;
nivel = false;

//Inicianlizando partes essenciais do Jogo
document.getElementsByTagName('h1')[0].innerHTML = version;
menu1.addEventListener('load', menuColors(4, true), false);
window.addEventListener('load', themes(), false);
window.addEventListener('load', langDef(window.navigator.language), false);

function selectNivel(){
	var index = document.getElementById('niveis');
	switch(index.options[index.selectedIndex].value){
		case "easy":
			easy();
			break;
		case "medium":
			medium();
			break;
		case "hard":
			hard();
			break;
	}
}

function langDef(language){
	var index = document.getElementById('langSel');
	index.options[index.selectedIndex].selected = false;
	switch(language){
		case "de":
			lang = de;
			index.options[0].selected = true;
			break;
		case "en": case "en-US":
			lang = en;
			index.options[2].selected = true;
			break;
		case "es":
			lang = es;
			index.options[3].selected = true;
			break;
		case "pt":
			lang = pt;
			index.options[4].selected = true;
			break;
		case "pt-BR":
			lang = ptbr;
			index.options[5].selected = true;
			break;
		case "ru":
			lang = ru;
			index.options[1].selected = true;
			break;
		case "zh-TW":
			lang = zhtw;
			index.options[6].selected = true;
			break;
		default:
			lang = ptbr;
			index.options[5].selected = true;
	}
	initLang(4);
}

function langs(){
	var index = document.getElementById('langSel');
	switch(index.options[index.selectedIndex].value){
		case "de":
			lang = de;
			break;
		case "en":
			lang = en;
			break;
		case "es":
			lang = es;
			break;
		case "pt":
			lang = pt;
			break;
		case "ptbr":
			lang = ptbr;
			break;
		case "ru":
			lang = ru;
			break;
		case "zhtw":
			lang = zhtw;
			break;
	}
	initLang(4);
}

function themes(){
	var index = document.getElementById('theme');
	var style = document.getElementById("themeFile");
	switch(index.options[index.selectedIndex].value){
		case "default":
			style.href = "default.css";
			break;
	}
}

//Deixa o Menu Principal Colorido
function menuColors(n, top){
	for(var i = 1; i<=n; i++){
		var x = document.getElementById('b'+i);
		x.style.backgroundColor = rowcolors[i];
		if(top){
			x.style.top = 50*i+"px";
		}
	}
	ads.style.width = screen.width+"px";
}

function easy(){
	dx = 4;
	dy = -4;
	ballr = 15;
	nrows = 5;
	ncols = 5;
	brickheight = 20;
	nivel = true;
}

function medium(){
	dx = 2;
	dy = -4;
	ballr = 10;
	nrows = 10;
	ncols = 5;
	brickheight = 15;
	nivel = false;
}

function hard(){
	dx = 1;
	dy = -8;
	ballr = 5;
	nrows = 15;
	ncols = 5;
	brickheight = 10;
	nivel = true;
}

//Parte Funcional do Jogo
function play(){
	//Variáveis
	var x=25, y=250;
	var height1, width1, paddlex, bricks, brickwidth, padding, i, j;
	var paddleh, paddlew, canvasMinX=0, canvasMaxX=0, intervalId=0;
	rightDown = false;
	leftDown = false;
	
	//Nível Padrão
	if(!nivel){
		medium();
	}
	
	ads.style.display = 'none';
	id1.style.display='block';
	menu1.style.display='none';
	sobre.style.display='none';
	opcao.style.display='none';
	header.style.display='none';
	
	function init(){
		width1 = id1.offsetWidth;
		height1 = id1.offsetHeight;
		screen.lockOrientation = "portrait";
		screen.mozlockOrientation = "portrait";
		return setInterval(draw, 10);
	}
	function initbricks(){
		brickwidth = (width1/ncols)-1;
		padding = 1;
		bricks = new Array(nrows);
		for(i=0;i<nrows;i++){
			bricks[i] = new Array(ncols);
			for(j=0;j<ncols;j++){
				bricks[i][j] = 1;
			}
		}
	}
	function init_mouse(){
		canvasMinX = id1.offsetLeft;
		canvasMaxX = canvasMinX + width1;
	}
	function init_paddle(){
		paddlex = width1/2;
		paddleh = 10;
		paddlew = 75;
	}
	function circle(x,y,r){
		break1.beginPath();
		break1.arc(x, y, r, 0, Math.PI*2, true);
		break1.closePath();
		break1.fill();
	}
	function rect(x,y,w,h){
		break1.beginPath();
		break1.rect(x,y,w,h);
		break1.closePath();
		break1.fill();
	}
	
	//Touch
	function onTouchMove(evt) {
		var touch = evt.changedTouches[0];
		if (parseInt(touch.clientX) > canvasMinX && parseInt(touch.clientX) < canvasMaxX) {
			paddlex = parseInt(touch.clientX) - canvasMinX;
		}
	}
	function initTouch(){
		breakout.addEventListener("touchstart", onTouchMove, false);
		breakout.addEventListener("touchmove", onTouchMove, false);
	}
	
	function clear() {
		break1.clearRect(0, 0, width1, height1);
	}
	function draw(){
		break1.fillStyle = backcolor;
		clear();
		break1.fillStyle = ballcolor;
		circle(x, y, ballr);
		if (rightDown){
			paddlex += 5;
		}
		else if (leftDown){
			paddlex -= 5;
		}
		break1.fillStyle = paddlecolor;
		rect(paddlex, height1 - paddleh, paddlew, paddleh);
	
		//desenha bricks
		for (i=0; i < nrows; i++) {
			break1.fillStyle = rowcolors[i];
			for (j=0; j < ncols; j++) {
				if (bricks[i][j] == 1) {
					rect((j * (brickwidth + padding)) + padding, (i * (brickheight + padding)) + padding, brickwidth, brickheight);
				}
			}
		}
		var rowheight = brickheight + padding;
		var colwidth = brickwidth + padding;
		var row = Math.floor(y/rowheight);
		var col = Math.floor(x/colwidth);
		
		//Destroi o brick
		if(y < nrows*rowheight && row >=0 && col >= 0 && bricks[row][col] == 1){
			dy = -dy;
			bricks[row][col] = 0;
		}
		
		if(x + dx + ballr > width1 || x + dx - ballr < 0){
			dx = -dx;
		}
		if (y + dy - ballr < 0){
			dy = -dy;
		}
		else if(y + dy + ballr > height1 - paddleh){
			if(x > paddlex && x < paddlex + paddlew){
				dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
				dy = -dy;
			}
			else{
				//Você Perdeu! - Colocar como Uma Mensagem e fechar o canvas
				document.location.reload();
			}
		}
		x+=dx;
		y+=dy;
	}
	init();
	initbricks();
	init_paddle();
	init_mouse();
	initTouch();
}

//Ativa o Menu Opções
function options(){
	opcao.style.display='block';
	id1.style.display='none';
	sobre.style.display='none';
	document.getElementById('back').style.display='block';
	menu1.style.display='none';
	document.getElementsByTagName('h1')[0].innerHTML = lang.bX[1];
}

//Volta a Página Inicial
function back(){
	ads.style.display = 'block';
	id1.style.display='none';
	sobre.style.display='none';
	opcao.style.display='none';
	document.getElementById('back').style.display='none';
	menu1.style.display='block';
	header.style.display='block';
	document.getElementsByTagName('h1')[0].innerHTML = version;
}

//Ativa o Menu Sobre
function about(){
	sobre.style.display='block';
	id1.style.display='none';
	document.getElementById('back').style.display='block';
	menu1.style.display='none';
	document.getElementsByTagName('h1')[0].innerHTML = lang.bX[2];
}
