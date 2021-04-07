function menu(){
	var menu = document.getElementById("navbar");
	let text= menu.style.display;
	if(text == "none" || text == ""){
		menu.style.display = 'block';
		menu.style.clear= 'both';
	}else{
		menu.style.display = 'none';
		// menu.style.transition ='height 2s';
	}
}
function Change(obj) {
    var options = obj.children;
    var gtri;
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            gtri = options[i].value;
        }
    }
    var giaThang = document.getElementById("thang");
    var giaQuy = document.getElementById("quy");
    var giaNam = document.getElementById("nam");

    // alert(gtri);
    if(gtri ==2){
        giaThang.innerHTML = "2.390.000&nbsp;₫";
        giaQuy.innerHTML = "2.151.000&nbsp;₫";
        giaNam.innerHTML = "1.792.500&nbsp;₫";
    }else if( gtri == 3){
        giaThang.innerHTML = "3.190.000&nbsp;₫";
        giaQuy.innerHTML = "2.871.000&nbsp;₫";
        giaNam.innerHTML = "2.392.500&nbsp;₫";
    }else if( gtri == 5){
        giaThang.innerHTML = "4.490.000&nbsp;₫";
        giaQuy.innerHTML = "4.041.000&nbsp;₫";
        giaNam.innerHTML = "2.367.500&nbsp;₫";
    }else if( gtri == 7){
        giaThang.innerHTML = "5.890.000&nbsp;₫";
        giaQuy.innerHTML = "5.301.000&nbsp;₫";
        giaNam.innerHTML = "4.417.500&nbsp;₫";
    }
}