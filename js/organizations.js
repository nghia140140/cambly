function menu(){
	var menu = document.getElementById("navbar");
	let text= menu.style.display;
	if(text == "none" || text == ""){
		menu.style.display = 'block';
		menu.style.clear= 'both';
	}else{
		menu.style.display = 'none';
	}
}