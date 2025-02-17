document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById('toggle1');
    const offscreen = document.getElementById('off-screen');
    const body = document.body;

    hamMenu.addEventListener('click', hamMenuFun);
    offscreen.addEventListener('click', offScreenFun);

    function hamMenuFun() {
        
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
        body.classList.toggle('no-scroll'); 
    }

    function offScreenFun() {
        
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
        body.classList.toggle('no-scroll'); 
    }
    var loadingScreen = document.querySelector(".loadingScreen");
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));

      }
    window.addEventListener('load', function() {
        this.setTimeout(function(){
            loadingScreen.style.display = 'none';
        },900);
    })
});