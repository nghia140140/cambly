function menu(){
	var menu = document.getElementById("navbar");
  document.getElementById("interfaceLanguages").style.display = "none";
	let text= menu.style.display;
	if(text == "none" || text == ""){
		menu.style.display = 'block';
		menu.style.clear= 'both';
	}else{
		menu.style.display = 'none';
	}
}
	// document.getElementsByClassName("dropdown-toggle").addEventListener("click", function(event){
	// 	event.preventDefault()
	// });

function myFunction(){
  document.getElementById("selectedInterfaceLanguage").onclick = function(){
	  document.getElementById("interfaceLanguages").classList.toggle("show");
  };
}

// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown-toggle')) {
// 	  // removeClass(document.getElementsByClassName("dropdown-menu"),'show');
//     var dropdowns = document.getElementsByClassName("dropdown-menu");
// 	document.getElementById("interfaceLanguages").classList.remove("show");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];	
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

function removeClass(elements, myClass){
 
  // nếu ta có selector, nhận elements đã chọn
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }
 
  // nếu ta chỉ có một DOM element, biến nó thành array để đơn giản hóa hành vi
  else if (!elements.length) { elements=[elements]; }
 
  // tạo pattern để tìm class name
  var reg = new RegExp('(^| )'+myClass+'($| )','g');
 
  // xóa bỏ class khỏi mọi elements đã chọn
  for (var i=0; i<elements.length; i++) {
    elements[i].className = elements[i].className.replace(reg,' ');
  }
}
// document.getElementsByClassName("dropdown-toggle").onclick = myFunction();
function video(){
	var video = document.getElementById("video");
	video.style.display = 'initial';
	
}
// function thoat(){
// 	// var video = document.getElementsByClassName("paddingVideo");
	
// 	var video = document.getElementById("cc");
// 	// video.style.position = 'relative';
// 	video.style.display = 'none;'
// }
function video1(){
	var video = document.getElementById("video1");
	video.innerHTML = '<iframe width="'+video.width+'" height="'+video.height+'" src="https://www.youtube.com/embed/YK676DOhEA0?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
function video2(){
	var video = document.getElementById("video2");
	video.innerHTML = '<iframe width="'+video.width+'" height="'+video.height+'" src="https://www.youtube.com/embed/BhaDciQgl50?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
function video3(){
	var video = document.getElementById("video3");
	video.innerHTML = '<iframe width="'+video.width+'" height="'+video.height+'" src="https://www.youtube.com/embed/3ArOIx2GE78?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}
