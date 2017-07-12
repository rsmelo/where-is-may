(function () {
  const overlay = document.getElementById('overlay');
  const may = document.getElementById('may');
  const maya = document.getElementById('maya');
  const title = document.getElementById('title');
  const wrapper = document.getElementById('bkg');
  const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const defaultUrl = `http://loremflickr.com/${width}/${height}/landscape,nopeople,horizontal`;

  function showOverlay() {
    overlay.classList.add('overlay');
    may.classList.remove('may');
    maya.classList.remove('maya');
    title.classList.remove('title');
  }

  function hideOverlay() {
    overlay.classList.remove('overlay');
    may.classList.add('may');
    maya.classList.add('maya');
    title.classList.add('title');
  }

  function loadImage(url = defaultUrl) {
    const wrapper = document.getElementById('bkg');
    const img_loaded = document.getElementById("img-loaded");
    const img = new Image();

    showOverlay();

    img.onload = () => {
      hideOverlay();
    };

    img.classList.add('img-bkg');
    img.src = url;
    img.id = "img-loaded";
    wrapper.appendChild(img);
  }


  loadImage();
  document.getElementById("title").addEventListener('click', () => { location.reload(); });


  document.body.addEventListener('keypress', (evt) => {
    if (evt.keyCode == 27) {
      const url = prompt("Insira a URL com o novo paraíso das Mays", defaultUrl);
      loadImage(url);
    }
  });
})();
