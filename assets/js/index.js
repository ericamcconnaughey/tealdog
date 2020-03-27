$(document).ready(function () {

  function animateWords() {
    let elem = document.getElementById("animated-text");
    let opacity = 0;
    let id = setInterval(frame, 5);

    function frame() {
      if (opacity === 100) {
        clearInterval(id);
      } else {
        opacity++;
      }
    }
  }
  animateWords();
})