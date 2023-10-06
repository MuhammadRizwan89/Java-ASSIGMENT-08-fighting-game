
let forward = 0;
function abc(event) {
  console.log(event.keyCode);
  var hero = document.getElementById('hero');
  if (event.keyCode === 68) {
    forward = forward + 10;
    hero.style.width = '200px'
    hero.style.left = forward + 'px';
    hero.src = './images/Hulk/hulk-walk.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 800)
  }
  if(event.keyCode === 65){
    forward = forward -10;
    hero.style.width = '240px';
    hero.style.left = forward +'px';
    hero.src = './images/Hulk/hulk-walkback.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 800)
  }
  if(event.keyCode === 87){
    hero.style.width =  '340px';
    hero.src = './images/Hulk/hulk-jumps.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 3500)
  }
  if(event.keyCode === 83){
    hero.style.width = '200px';
    hero.src = './images/Hulk/hulk-crouch.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 500)
  }
  if(event.keyCode === 32){
    hero.style.width = '370px';
    hero.src = './images/Hulk/hulk-rox.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 2000)
  }
  if(event.keyCode === 70){
    hero.style.width = '300px';
    hero.src = './images/Hulk/hulk-mk.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 900)
  }
  if(event.keyCode === 71){
    hero.style.width = '460px';
    hero.src = './images/Hulk/hulk-special2.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 1300)
  }
  if(event.keyCode === 72){
    hero.style.width = '200px';
    hero.src = './images/Hulk/hulk-gah.gif';
    setTimeout(function(){
        hero.src = './images/Hulk/hulk-stand-grey.gif'
        hero.style.width = '180px';
    }, 1300)
  }
}
window.onkeydown = abc;


let go = 0;
function xyz(game){
console.log(game.keyCode);
let willon = document.getElementById('willon')
if(game.keyCode === 37){
    go = go -10;
    willon.style.left = go + 'px';
}
if(game.keyCode === 39){
    go = go +10;
    willon.style.left = go + 'px';
}
if(game.keyCode === 38){
    willon.src = './images/beni12-kick.gif'
    willon.style.width = '280px';
    setTimeout(function(){
        willon.src = './images/benimaru.gif'
        willon.style.width = '150px';
    }, 1200)
}
if(game.keyCode === 40){
    willon.src = './images/beni-2k3-slash.gif'
    willon.style.width = '550px';
    setTimeout(function(){
        willon.src = './images/benimaru.gif'
        willon.style.width = '150px';
    }, 1100)
    
}
if(game.keyCode === 16){
    willon.src = './images/beni12-elbow.gif'
    willon.style.width = '200px';
    setTimeout(function(){
        willon.src = './images/benimaru.gif'
        willon.style.width = '150px';
    }, 1100)
}
if(game.keyCode === 17){
    willon.src = './images/beni-xi-super3.gif'
    willon.style.width = '1200px';
    setTimeout(function(){
        willon.src = './images/benimaru.gif'
        willon.style.width = '150px';
    }, 4000)
}
if(game.keyCode === 191){
    willon.src = './images/beni-xi-super.gif'
    willon.style.width = '600px';
    setTimeout(function(){
        willon.src = './images/benimaru.gif'
        willon.style.width = '150px';
    }, 3000)
}
}
window.addEventListener('keydown',xyz);

