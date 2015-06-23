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

var en = {
	version: "Breakout Beta 3",
	bX: ["Play", "Options", "About", "Exit"],
	error: "Your browser does not support Canvas!",
	nivelN: "Game Difficulty",
	tema: "Themes",
	idioma: "Language",
	cor: "Color from Ball",
	nX: ["Easy", "Medium", "Hard"],
	tX: ["Default"],
	lX: ["English", "Portuguese (Brazil)"],
	contSobre: "Game created with the aim of providing an experience that is as light as possible and if I lose the intuitive gameplay.<br/>Breakout, 0.7 - 2015<br/>Created by Cleber Matheus (clebermatheus@outlook.com)"
};

var ptbr = {
	version: "Breakout Beta 3",
	bX: ["Jogar", "Opções", "Sobre", "Sair"],
	error: "O seu browser não suporta Canvas!",
	nivelN: "Dificuldade de Jogo",
	tema: "Temas",
	idioma: "Idioma",
	cor: "Cor da Bolinha",
	nX: ["Fácil", "Médio", "Difícil"],
	tX: ["Padrão"],
	lX: ["Inglês", "Português (Brasil)"],
	contSobre: "Jogo criado com o intuito de proporcionar uma experiência que seja o mais leve possível e intuitiva se perder a jogabilidade.<br/>Breakout, 0.7 - 2015<br/>Criado por Cleber Matheus (clebermatheus@outlook.com)"
};

function initLang(n){
	var erro = document.getElementById("error");
	var nivelT = document.getElementById("nivelTitle");
	var themeT = document.getElementById("themeTitle");
	var langT = document.getElementById("langTitle");
	var title = document.getElementsByTagName('h1')[0];
	var cont = document.getElementById("contAbout");
	var cor = document.getElementById("corTitle");
	
	for(var i = 1; i<=n; i++){
		var x = document.getElementById('b'+i);
		x.innerHTML = lang.bX[i-1];
	}
	title.innerHTML = lang.version;
	erro.innerHTML = lang.error;
	nivelT.innerHTML = lang.nivelN;
	themeT.innerHTML = lang.tema;
	langT.innerHTML = lang.idioma;
	cont.innerHTML = lang.contSobre;
	cor.innerHTML = lang.cor;
	for(var i = 0; i<lang.nX.length; i++){
		var x = document.getElementById('n'+i);
		x.innerHTML = lang.nX[i];
	}
	for(var i = 0; i<lang.tX.length; i++){
		var x = document.getElementById('t'+i);
		x.innerHTML = lang.tX[i];
	}
	for(var i = 0; i<lang.lX.length; i++){
		var x = document.getElementById('l'+i);
		x.innerHTML = lang.lX[i];
	}
}
