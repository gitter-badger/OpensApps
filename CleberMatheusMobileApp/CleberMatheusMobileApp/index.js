/*
	Este arquivo faz parte do Cleber Matheus MobileApp;
	
	Cleber Matheus MobileApp é Software Livre; você pode redistribui-lo e/ou
	modificá-lo dentro dos termos da Licença Pública Geru GNU como
	publicada pela Fundação do Software Livre (FSF); na versão 3 da Licença.
	Este programa é distribuído na esperança que possa ser util,
	mas SEM NENHUMA GARANTIA; sem uma garantia implicita de ADEQUAÇÂO a
	qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a Licença Pública Geral
	GNU para maiores detalhes.
	Você deve ter recebido uma cópia da Licença Pública Geral GNU junto com 
	este programa, se não, escreva para a Fundação do Software Livre(FSF) Inc.,
	51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA
	
	Cleber Matheus MobileApp v0.9.2
	Cleber Matheus Apps Series -> Ano: 2013|Tipo: MobileApp
*/
function app(){
	delsec();
	document.getElementById('app1').style.display="block";
	document.getElementById("title").innerHTML="Centra de Aplicativos";
}
function back(){
	document.getElementById('more').style.display='none';
}
function blogs(){
	delsec();
	document.getElementById("title").innerHTML="Blogs";
	document.getElementById('blogs1').style.display="block";
}
function delsec(){
	document.getElementById('app1').style.display="none";
	document.getElementById('blogs1').style.display='none';
	document.getElementById('editions1').style.display="none";
	document.getElementById('games1').style.display="none";
	document.getElementById('home1').style.display="none";
	document.getElementById('opensource1').style.display="none";
	document.getElementById('programacao1').style.display="none";
	document.getElementById('project1').style.display="none";
	document.getElementById('sobre1').style.display="none";
	document.getElementById('videos1').style.display="none";
	document.getElementById('webdesign1').style.display="none";
}
function editions(){
	delsec();
	document.getElementById("title").innerHTML="Cleber Matheus AppSeries";
	document.getElementById('editions1').style.display="block";
}
function games(){
	delsec();
	document.getElementById("title").innerHTML="Jogos";
	document.getElementById('games1').style.display="block";
}
function home(){
	delsec();
	document.getElementById('home1').style.display="block";
	document.getElementById("title").innerHTML="Cleber Matheus MobileApp 1.0";
}
function more(){
	document.getElementById('more').style.display='block';
}
function opensource(){
	delsec();
	document.getElementById('opensource1').style.display="block";
	document.getElementById("title").innerHTML="OpenSource";
}
function programacao(){
	delsec();
	document.getElementById('programacao1').style.display="block";
	document.getElementById("title").innerHTML="Programação";
}
function projetos(){
	delsec();
	document.getElementById('project1').style.display="block";
	document.getElementById("title").innerHTML="Meus Projetos";
}
function sobre(){
	delsec();
	document.getElementById('sobre1').style.display="block";
	document.getElementById("title").innerHTML="Sobre";
}
function videos(){
	delsec();
	document.getElementById('videos1').style.display="block";
	document.getElementById("title").innerHTML="Vídeos";
}
function webdesign(){
	delsec();
	document.getElementById('webdesign1').style.display="block";
	document.getElementById("title").innerHTML="WebDesign";
}
function play1(){
	document.getElementById('white_content').style.display='block';
	document.getElementById('black_overlay').style.display='block';
}
function play2(){
	document.getElementById('white_content').style.display='none';
	document.getElementById('black_overlay').style.display='none';
}