function Home() {
    window.location.href = "index.html"; 
}

document.querySelector(".idk").addEventListener("click", function() {
    window.location.href = "newpage.html"; 
});

var modal = document.getElementById("furinamodal");

function openmodal(){
    modal.style.display ="block";
}


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }