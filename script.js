(function(){
    const img = new Image();
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    img.onload = function () {               
        const overlay = document.getElementById('overlay');
        overlay.classList.remove('overlay');
        const may = document.getElementById('may');
        may.classList.add('may');
        const maya = document.getElementById('maya');
        maya.classList.add('maya');
        const title = document.getElementById('title');
        title.classList.add('title');
    }
    
    img.classList.add('img-bkg');
    img.src = `http://loremflickr.com/${width}/${height}/landscape,nopeople`;
    const wrapper = document.getElementById('bkg');
    wrapper.appendChild(img);
})();