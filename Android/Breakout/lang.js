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

var de = {
	bX: ["Spielen", "Optionen", "Über", "Verlassen"],
	error: "Ihr Browser unterstützt keine Canvas!",
	nivelN: "Spiel-Schwierigkeit",
	tema: "Themen",
	idioma: "Sprache",
	cor: "Farbe von Ball",
	nX: ["Einfach", "Durchschnitt", "Schwer"],
	tX: ["Standard", "Alternative"],
	lX: ["Deutsch", "Chinesische Tradition", "Englisch", "Spanisch", "Portugiesisch (Portugal)", "Portugiesisch (Brasilien)", "Russisch"],
	contSobre: "Spiel, um eine Erfahrung, die so leicht wie möglich ist und verlor intuitive Gameplay bieten bekommen erstellt.<br/>Breakout, 0.7 - 2015<br/>Erstellt von Cleber Matheus (clebermatheus@outlook.com)"
};

var en = {
	bX: ["Play", "Options", "About", "Exit"],
	error: "Your browser does not support Canvas!",
	nivelN: "Game Difficulty",
	tema: "Themes",
	idioma: "Language",
	cor: "Color from Ball",
	nX: ["Easy", "Medium", "Hard"],
	tX: ["Default", "Alternate"],
	lX: ["German", "Chinese Traditional", "English", "Espanhol", "Portuguese (Portugal)", "Portuguese (Brazil)", "Russian"],
	contSobre: "Game created with the aim of providing an experience that is as light as possible and if I lose the intuitive gameplay.<br/>Breakout, 0.7 - 2015<br/>Created by Cleber Matheus (clebermatheus@outlook.com)"
};

var es = {
	bX: ["Juego", "Opciones", "Acerca", "Saír"],
	error: "Su navegador no soporta Canvas!",
	nivelN: "Dificultad del juego",
	tema: "Temas",
	idioma: "Idioma",
	cor: "Color de Bola",
	nX: ["Fácil", "Medio", "Difícil"],
	tX: ["Standard", "Alternativa"],
	lX: ["Alemán", "Chino Tradicional", "Inglés", "Español", "Portugués (Portugal)", "Portugués (Brazil)", "Ruso"],
	contSobre: "Juego creado con el objetivo de brindar una experiencia que es tan ligera como sea posible y si pierdo el juego intuitivo.<br/>Breakout, 0.7 - 2015<br/>Creado por Cleber Matheus (clebermatheus@outlook.com)"
};

var pt = {
	bX: ["Jogar", "Opções", "Sobre", "Sair"],
	error: "O seu browser não suporta Canvas!",
	nivelN: "Dificuldade de Jogo",
	tema: "Temas",
	idioma: "Idioma",
	cor: "Cor da Bolinha",
	nX: ["Fácil", "Médio", "Difícil"],
	tX: ["Padrão", "Alternativo"],
	lX: ["Alemão", "Chinês Tradicional", "Inglês", "Espanhol", "Português (Portugal)", "Português (Brasil)", "Russo"],
	contSobre: "Jogo criado com o intuito de proporcionar uma experiência que seja o mais leve possível e intuitiva se perder a jogabilidade.<br/>Breakout, 0.7 - 2015<br/>Criado por Cleber Matheus (clebermatheus@outlook.com)"
};

var ptbr = {
	bX: ["Jogar", "Opções", "Sobre", "Sair"],
	error: "O seu browser não suporta Canvas!",
	nivelN: "Dificuldade de Jogo",
	tema: "Temas",
	idioma: "Idioma",
	cor: "Cor da Bolinha",
	nX: ["Fácil", "Médio", "Difícil"],
	tX: ["Padrão", "Alternativo"],
	lX: ["Alemão", "Chinês Tradicional", "Inglês", "Espanhol", "Português (Portugal)", "Português (Brasil)", "Russo"],
	contSobre: "Jogo criado com o intuito de proporcionar uma experiência que seja o mais leve possível e intuitiva se perder a jogabilidade.<br/>Breakout, 0.7 - 2015<br/>Criado por Cleber Matheus (clebermatheus@outlook.com)"
};

var ru = {
	bX: ["Играть", "Параметры", "О", "Отпуск"],
	error: "Ваш браузер не поддерживает Canvas!",
	nivelN: "Сложность игры",
	tema: "Темы",
	idioma: "язык",
	cor: "Цвет от мяча",
	nX: ["Легко", "Средний", "Жесткий"],
	tX: ["стандарт", "Альтернатива"],
	lX: ["немецкий", "Традиционный китайский", "английский", "испанский", "португальский (Португалия)", "португальский (Бразилия)", "русский"],
	contSobre: "Игра, созданная с целью предоставления опыт, как свет, как это возможно и если я теряю интуитивный геймплей.<br/>Breakout, 0.7 - 2015<br/>Создан Cleber Matheus (clebermatheus@outlook.com)"
};

var zhtw = {
	bX: ["戲劇", "選項", "關於", "離開"],
	error: "您的瀏覽器不支援畫布。",
	nivelN: "遊戲的難度",
	tema: "主題",
	idioma: "語言",
	cor: "從球的顏色",
	nX: ["容易", "介質", "硬"],
	tX: ["預設", "替代"],
	lX: ["德語", "繁體中文", "英語", "西班牙文", "葡萄牙文 (葡萄牙)", "葡萄牙文 (巴西)", "俄語"],
	contSobre: "創建，目的是提供一種體驗，是輕如可能，如果失去了一個直觀的遊戲的遊戲。<br/>突圍，0.7-2015 年<br/>由 Cleber · 馬修斯 (clebermatheus@outlook.com)"
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
