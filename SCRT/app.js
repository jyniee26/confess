const box = document.getElementById('box');
const letter = document.getElementById('letter');
const magicWord = document.getElementById('magicWord');
const confessionText = document.getElementById('confessionText');
const song = document.getElementById('song');

// Original: Click the box to open it and show the letter
box.addEventListener('click', function() {
    box.classList.add('open');
    letter.classList.remove('hidden');
});

// Updated: Click the "MAGIC" word to reveal "HAHAHAHAHA use your ears!" and play the song
magicWord.addEventListener('click', function() {
    confessionText.classList.remove('hidden');
    song.classList.remove('hidden');
    song.play();  // Starts playing the song
});