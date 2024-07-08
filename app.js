function youtubevideo(){
    window.open('https://youtu.be/ft70sAYrFyY?si=C07DKDIyJ3MAyg-l');
}

function furina(){
    window.open('https://akasha.cv/profile/655060329');
    const audio = new Audio();
    audio.src = "./let my name echo in song.mp3"
    audio.play();
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = "200px";
    }
  });
}

