document.getElementById('speakBtn').addEventListener('click', () => {
    const text = document.getElementById('text').value;

   
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;

       
        window.speechSynthesis.speak(speech);
    } else {
        console.error("Sorry, your browser doesn't support speech synthesis.");
    }
});
