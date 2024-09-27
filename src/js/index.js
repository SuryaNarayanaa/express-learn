
let firstSlideContainer = 
document.getElementsByClassName("slide--content")[0];

let secondSlideContainer = 
document.getElementsByClassName("slide--content--one")[0];

let secondCanvas = 
document.getElementsByClassName("second--canvas")[0];

secondSlideContainer.setAttribute("style","display:none");
secondCanvas.setAttribute("style","display:none");

let thirdCanvas = 
document.getElementsByClassName("third--canvas")[0];

thirdCanvas.setAttribute("style","display:none");
document.getElementById('gf1').addEventListener('click', function() {
	window.location.href = 'image.html';  // Replace 'otherpage.html' with the actual page URL
});
document.getElementById('gf2').addEventListener('click', function() {
	window.location.href = 'image.html';  // Replace 'otherpage.html' with the actual page URL
});
document.getElementById('gf3').addEventListener('click', function() {
	window.location.href = 'image.html';  // Replace 'otherpage.html' with the actual page URL
});





let containerToggleOne = setTimeout(function(){
	firstSlideContainer.setAttribute("style","display:none");
	secondSlideContainer.setAttribute("style","display:block");
},3100);


let removeFirstSlide = setTimeout(function(){
	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
	secondCanvas.setAttribute("style","display:block");
},6500);

let removeSecondCanvas = setTimeout(function(){
	secondCanvas.setAttribute("style","display:none");
	thirdCanvas.setAttribute("style","display:block")
},9800)
