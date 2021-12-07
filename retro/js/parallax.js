let interiorBg = document.querySelector('.interior__parralax-bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    interiorBg.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
});

let exteriorBg = document.querySelector('.exterior__parralax-bg');
window.addEventListener('mousemove', function (e) {
    let x = e.clientY / window.innerWidth;
    let y = e.clientX / window.innerHeight;
    exteriorBg.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 20 + 'px)';
});