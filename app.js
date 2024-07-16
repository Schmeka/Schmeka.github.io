function Home() {
    window.location.href = "index.html"; 
}

document.querySelector(".idk").addEventListener("click", function() {
    window.location.href = "newpage.html"; 
});

document.querySelector(".jp").addEventListener("click", function() {
    window.location.href = "jp.html"; 
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

  const hiragana = [
    { character: 'あ', romanization: 'a' },
    { character: 'い', romanization: 'i' },
    { character: 'う', romanization: 'u' },
    { character: 'え', romanization: 'e' },
    { character: 'お', romanization: 'o' },
    { character: 'か', romanization: 'ka' },
    { character: 'き', romanization: 'ki' },
    { character: 'く', romanization: 'ku' },
    { character: 'け', romanization: 'ke' },
    { character: 'こ', romanization: 'ko' },
    { character: 'が', romanization: 'ga' },
    { character: 'ぎ', romanization: 'gi' },
    { character: 'ぐ', romanization: 'gu' },
    { character: 'げ', romanization: 'ge' },
    { character: 'ご', romanization: 'go' },
    { character: 'さ', romanization: 'sa' },
    { character: 'し', romanization: 'shi' },
    { character: 'す', romanization: 'su' },
    { character: 'せ', romanization: 'se' },
    { character: 'そ', romanization: 'so' },
    { character: 'ざ', romanization: 'za' },
    { character: 'じ', romanization: 'ji' },
    { character: 'ず', romanization: 'zu' },
    { character: 'ぜ', romanization: 'ze' },
    { character: 'ぞ', romanization: 'zo' },
    { character: 'た', romanization: 'ta' },
    { character: 'ち', romanization: 'chi' },
    { character: 'つ', romanization: 'tsu' },
    { character: 'て', romanization: 'te' },
    { character: 'と', romanization: 'to' },
    { character: 'だ', romanization: 'da' },
    { character: 'ぢ', romanization: 'ji' },
    { character: 'づ', romanization: 'zu' },
    { character: 'で', romanization: 'de' },
    { character: 'ど', romanization: 'do' },
    { character: 'な', romanization: 'na' },
    { character: 'に', romanization: 'ni' },
    { character: 'ぬ', romanization: 'nu' },
    { character: 'ね', romanization: 'ne' },
    { character: 'の', romanization: 'no' },
    { character: 'は', romanization: 'ha' },
    { character: 'ひ', romanization: 'hi' },
    { character: 'ふ', romanization: 'fu' },
    { character: 'へ', romanization: 'he' },
    { character: 'ほ', romanization: 'ho' },
    { character: 'ば', romanization: 'ba' },
    { character: 'び', romanization: 'bi' },
    { character: 'ぶ', romanization: 'bu' },
    { character: 'べ', romanization: 'be' },
    { character: 'ぼ', romanization: 'bo' },
    { character: 'ぱ', romanization: 'pa' },
    { character: 'ぴ', romanization: 'pi' },
    { character: 'ぷ', romanization: 'pu' },
    { character: 'ぺ', romanization: 'pe' },
    { character: 'ぽ', romanization: 'po' },
    { character: 'ま', romanization: 'ma' },
    { character: 'み', romanization: 'mi' },
    { character: 'む', romanization: 'mu' },
    { character: 'め', romanization: 'me' },
    { character: 'も', romanization: 'mo' },
    { character: 'や', romanization: 'ya' },
    { character: 'ゆ', romanization: 'yu' },
    { character: 'よ', romanization: 'yo' },
    { character: 'ら', romanization: 'ra' },
    { character: 'り', romanization: 'ri' },
    { character: 'る', romanization: 'ru' },
    { character: 'れ', romanization: 're' },
    { character: 'ろ', romanization: 'ro' },
    { character: 'わ', romanization: 'wa' },
    { character: 'を', romanization: 'wo' },
    { character: 'ん', romanization: 'n' },
];

    let currentchar = {};

    function randomchar(){
        const randomind = Math.floor(Math.random() * hiragana.length);
        currentchar = hiragana[randomind];
        document.getElementById('character').innerHTML = currentchar.character;
    }

    function checkRomanization(){
        const hira = document.getElementById('romani').value.toLowerCase();
        if (hira == currentchar.romanization){
            document.getElementById('romani').value = '';
            randomchar();
        }
     } 

     randomchar();
