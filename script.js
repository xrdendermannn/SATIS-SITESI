
let progress = document.getElementById('progress');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
  if(progress.style.height < 10 +"%"){
	    progress.style.height = 9 + "%";
  }
}
console.log("hi");
