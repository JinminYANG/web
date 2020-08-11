"use strict";
var hd=document.querySelector("header"),
gnb=hd.querySelector(".gnb"),
hover=gnb.querySelectorAll(".hover"),
hoverA=gnb.querySelectorAll(".hover a"),
ul=gnb.querySelectorAll(".hover > ul");
function none(){
	hd.classList.remove("show"),
	ul.forEach(function(e){
		e.style.height=0,
		e.style.marginTop=0,
		e.style.opacity=0,
		e.style.visibility="hidden"
	})
}
function show(){
	hd.classList.add("show"),
	ul.forEach(function(e){
		e.style.height="200px",
		e.style.marginTop="20px",
		e.style.opacity=1,e.style.visibility="visible"
	})
}
function init(){
	hover.forEach(function(e){
		e.addEventListener("mouseover",show),
		e.addEventListener("mouseleave",none)
	}),
	hoverA.forEach(function(e){
		e.addEventListener("focus",show),
		e.addEventListener("blur",none)
	})
}

init();

//$(function(){
//    $(".tnb").load("login.html .tnb");
//    $(".tnb").html(log);
//    alert(log);
//});