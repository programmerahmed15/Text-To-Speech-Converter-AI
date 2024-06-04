const speakButton = document.getElementById('speakButton');
const textInput = document.getElementById('textInput');

speakButton.addEventListener('click', () => {
    const text = textInput.value;
    if (text.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
});
