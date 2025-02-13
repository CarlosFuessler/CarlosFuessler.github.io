document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.getElementById('toggle1');
    const offscreen = document.getElementById('off-screen');
    const body = document.body;

    hamMenu.addEventListener('click', hamMenuFun);
    offscreen.addEventListener('click', offScreenFun);

    function hamMenuFun() {
        
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
        body.classList.toggle('no-scroll'); // Hinzugefügt
    }

    function offScreenFun() {
        
        hamMenu.classList.toggle("active");
        offscreen.classList.toggle("active");
        body.classList.toggle('no-scroll'); // Hinzugefügt
    }
});