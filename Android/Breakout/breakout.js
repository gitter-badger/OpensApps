var rowcolors = ["rgb(128,16,16)", "#FF1C0A", "#FFFD0A", "#00A308", "#0008DB", "#FFFFFF"];
var id1 = document.getElementById('breakout');
var ads = document.getElementById('ads');

document.getElementById('menu').addEventListener('load', menuColors(3), false);

function menuColors(n){
	for(var i = 1; i<=n; i++){
		var x = document.getElementById('b'+i);
		x.style.backgroundColor = rowcolors[i];
		x.style.top = 50*i+"px";
	}
	ads.style.width = screen.width+"px";
}

function play(){
	//Variáveis
	var menu1 = document.getElementById('menu');
	var break1 = id1.getContext("2d");
	var x=25, y=250, dx=2, dy=-4, ballr = 10;
	var height1, width1, paddlex, bricks, nrows, ncols, brickwidth, brickheight, padding, i, j;
	var paddleh=10, paddlew=75, canvasMinX=0, canvasMaxX=0, intervalId=0;
	var paddlecolor = "#FFFFFF";
	var ballcolor = "#FFFFFF";
	var backcolor = "#000000";
	rightDown = false;
	leftDown = false;
	
	ads.style.display = 'none';
	id1.style.display='block';
	menu1.style.display='none';
	document.getElementsByTagName('header')[0].style.display='none';
	window.addEventListener("resize",orient);
	
	function orient(){
		id1.style.height=window.innerHeight+'px';
	}
	function init(){
		width1 = id1.offsetWidth;
		height1 = id1.offsetHeight;
		return setInterval(draw, 10);
	}
	function initbricks(){
		nrows = 10;
		ncols = 5;
		brickwidth = (width1/ncols)-1;
		brickheight = 15;
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
		if(y < nrows*rowheight && row >=0 && col >= 0 && bricks[row][col] == 1){
			dy = -dy;
			bricks[row][col] = 0;
		}
		if(x + dx + ballr > width1 || x + dx - ballr < 0){
			dx= -dx;
		}
		if (y + dy - ballr < 0){
			dy = -dy;
		}
		else if(y + dy + ballr > height1 - paddleh){
			if(x > paddlex && x < paddlex + paddlew){
				dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
				dy = -dy;
			}
			else if (y + dy + ballr > HEIGHT){
				clearInterval(intervalId);
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

function options(){}