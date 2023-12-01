document.addEventListener("DOMContentLoaded", function () {
    var subtitle = document.getElementById("hero-subtitle");
    var words = ["build things for web", "make games", "do VFX", "do Video Editing", "... :)"];
    var currentWordIndex = 0;
    var currentWord = words[currentWordIndex];
  
    function animateSubtitle() {
      anime.timeline({ loop: false })
        .add({
          targets: '.hero-subtitle',
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 500,
        })
        .add({
          targets: '.hero-subtitle',
          opacity: [1, 0],
          easing: "easeInOutQuad",
          duration: 500,
          complete: function () {
            subtitle.textContent = ""; // Clear the text
            typeWord(currentWord); // Start typing the next word
          }
        });
    }
  
    function typeWord(word) {
      var characters = word.split('');
      var charIndex = 0;
  
      function typeCharacter() {
        subtitle.textContent += characters[charIndex];
        charIndex++;
  
        if (charIndex < characters.length) {
          setTimeout(typeCharacter, 100); // Adjust typing speed here
        } else {
          currentWordIndex = (currentWordIndex + 1) % words.length;
          currentWord = words[currentWordIndex];
          setTimeout(animateSubtitle, 1000); // Delay before fading out
        }
      }
  
      typeCharacter();
    }
  
    animateSubtitle();
  });
  