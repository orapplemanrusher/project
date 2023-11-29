const search =() =>{
	const searchbox = document.getElementById('search-item').value.toUpperCase();
	const storeitems = document.getElementById("product-list")
	const product = document.querySelectorAll(".product")
	const pname = document.getElementByTagName("h2")

	for (var i = 0; i< pname.length; i++) {
		let match = product[i].getElementByTagName('h2')[0];

		if(match){
			let textvalue = match.textContent || match.innerHTML

			if (textvalue.toUpperCase().indexOf(searchbox)>-1) {
				product[i].style.display="";
			}else{
				product[i].style.display="none";
			}
		}
	}
}


const searchbar=document.querySelector(".search-input");
const cross=document.querySelector(".fa-xmark");
const product=document.querySelector(".product");
const searchbar=document.querySelector(".search-input");

searchbar.addEventListener("click",()=>{
	searchbar.classList.add("active");
	cross.classList.add("active");
	product.classList.add("active");
	document.body.classList.add("stop-scroll");
})
