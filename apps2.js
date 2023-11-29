
/**Buttom to top**/
const backtop = document.querySelector(".backtop");
backtop.addEventListener("click",()=>{
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
})


/**sidebar**/
const sidebar=document.querySelector(".sidebar");
const cross=document.querySelector(".fa-xmark");
const black=document.querySelector(".black");
const sidebtn=document.querySelector(".pannel-all");

sidebtn.addEventListener("click",()=>{
	sidebar.classList.add("active");
	cross.classList.add("active");
	black.classList.add("active");
	document.body.classList.add("stop-scroll");
})

cross.addEventListener("click",()=>{
	sidebar.classList.remove("active");
	cross.classList.remove("active");
	black.classList.remove("active");
	document.body.classList.remove("stop-scroll");
})



/**account**/
const sign=document.querySelector(".nav-signin");
const tri=document.querySelector(".triangle");
const signin=document.querySelector(".hdn-sign");

sign.addEventListener("click",()=>{
	black.classList.toggle("active-1");
	signin.classList.toggle("active");
	tri.classList.toggle("active");
	document.body.classList.toggle("stop-scroll");	
})
