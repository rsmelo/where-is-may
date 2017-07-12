const overlay = document.getElementById('overlay');
const may = document.getElementById('may');
const maya = document.getElementById('maya');
const title = document.getElementById('title');
const wrapper = document.getElementById('bkg');
const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

(function(){   
    loadImage("");

    document.getElementById("title").addEventListener('click',function (){
     	location.reload();
    }); 
    document.body.addEventListener('keypress',function (evt){
    	if(evt.keyCode == 27){
     		var url = prompt("Insira a URL com o novo paraíso das Mays", `http://loremflickr.com/${width}/${height}/landscape,nopeople,horizontal`);
     		loadImage(url);
     	}
    }); 
})();

function loadImage(url){

	try{
		var img_loaded = document.getElementById("img-loaded");
		wrapper.removeChild(img_loaded);
	}catch(e){}

	const img = new Image();

	load();

	img.onload = function () {               
        loaded();
    }

    if(url == ""){
    	url = `http://loremflickr.com/${width}/${height}/landscape,nopeople,horizontal`;
    }

    img.classList.add('img-bkg');

    img.src = url;
    img.id = "img-loaded";
    
    wrapper.appendChild(img);
}

function load(){
	overlay.classList.add('overlay');
	may.classList.remove('may');        
    maya.classList.remove('maya');
    title.classList.remove('title');
}

function loaded(){
	overlay.classList.remove('overlay');        
    may.classList.add('may');        
    maya.classList.add('maya');        
    title.classList.add('title');
}