const slides__img = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.png"];
const slides__tagline = ["Impressions tous formats <span>en boutique et en ligne</span>","Tirages haute définition grand format <span>pour vos bureaux et events</span>","Grand choix de couleurs <span>de CMJN aux pantones</span>","Autocollants <span>avec découpe laser sur mesure</span>"];


let banner_img = document.getElementById("banner-img");
let arrow_right = document.getElementById("arrow_right");
let dot_1 =document.getElementById("dot_1");
let dot_2 =document.getElementById("dot_2");
let dot_3 =document.getElementById("dot_3");
let dot_4 =document.getElementById("dot_4");
let n = 0;
let slide__img = null

arrow_right.addEventListener("click", function(){
	n+=1;
	if(n==4){
		n=0;
	}
	slide__img = slides__img[n];
	banner_img.src ="./assets/images/slideshow/"+slide__img;

});

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function(){
	n-=1;
	if(n==-1){
		n=3;
	}
	slide__img = slides__img[n];
	banner_img.src ="./assets/images/slideshow/"+slide__img;

});

//	dot_2.classList.remove("dot");
//	dot_1.classList.remove("dot_selected");


