const slides__img = ["slide1.jpg","slide2.jpg","slide3.jpg","slide4.png"];
const slides__tagline = ["Impressions tous formats <span>en boutique et en ligne</span>","Tirages haute définition grand format <span>pour vos bureaux et events</span>","Grand choix de couleurs <span>de CMJN aux pantones</span>","Autocollants <span>avec découpe laser sur mesure</span>"];
let banner_img = document.getElementById("banner-img");
let arrow_right = document.getElementById("arrow_right");
let banner_text = document.getElementById("banner_text");
let dot_1 =document.getElementById("dot_1");
let dot_2 =document.getElementById("dot_2");
let dot_3 =document.getElementById("dot_3");
let dot_4 =document.getElementById("dot_4");
let n = 0;
let slide__img = null
let slide_tagline = null

if(n==0){
	dot_1.classList.add("dot_selected");
	dot_4.classList.remove("dot_selected");
}

arrow_right.addEventListener("click", function(){
	n+=1;
	if(n==4){
		n=0;
	}
	slide__img = slides__img[n];
	banner_img.src ="./assets/images/slideshow/"+slide__img;
	slide_tagline = slides__tagline[n];
	banner_text.innerHTML =slide_tagline;

	if(n==0){
		dot_1.classList.add("dot_selected");
		dot_4.classList.remove("dot_selected");
	}
	if(n==1){
		dot_2.classList.add("dot_selected");
		dot_1.classList.remove("dot_selected");
	}
	if(n==2){
		dot_3.classList.add("dot_selected");
		dot_2.classList.remove("dot_selected");
	}
	if(n==3){
		dot_4.classList.add("dot_selected");
		dot_3.classList.remove("dot_selected");
	}
});

let arrow_left = document.getElementById("arrow_left");
arrow_left.addEventListener("click", function(){
	n-=1;
	if(n==-1){
		n=3;
	}
	slide__img = slides__img[n];
	banner_img.src ="./assets/images/slideshow/"+slide__img;
	slide_tagline = slides__tagline[n];
	banner_text.innerHTML =slide_tagline;

	if(n==0){
		dot_1.classList.add("dot_selected");
		dot_2.classList.remove("dot_selected");
	}
	if(n==1){
		dot_2.classList.add("dot_selected");
		dot_3.classList.remove("dot_selected");
	}
	if(n==2){
		dot_3.classList.add("dot_selected");
		dot_4.classList.remove("dot_selected");
	}
	if(n==3){
		dot_4.classList.add("dot_selected");
		dot_1.classList.remove("dot_selected");
	}
});

//	dot_2.classList.remove("dot");
//	dot_1.classList.remove("dot_selected");


