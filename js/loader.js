let body = document.querySelector('body');
let logopn = document.querySelector('.preimage');
let loadtexts = document.querySelectorAll('.loadtext');
let preload = document.querySelector('#preloader');
body.style.overflow = "hidden";
window.addEventListener('load', () => {

setTimeout(() => {
    logopn.style.opacity =1;
    logopn.style.filter ="blur(0px)";

},200);
// setTimeout(() => {loadtexts.forEach((loadtext) => {
//     loadtext.style.letterSpacing = "10px";
//     });},600);
setTimeout(() => {
    body.style.overflow = "auto";

},400);
setTimeout(() => {
   preload.style.opacity="0";
//    preload.style.filter="blur(100px)";

},1500);
setTimeout(() => {
    preload.style.display="none";

 
 },2000);
});