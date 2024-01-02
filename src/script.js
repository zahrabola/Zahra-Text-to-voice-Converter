let speech = new SpeechSynthesisUtterance();

let audio = [];
let audioSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    audio = window.speechSynthesis.getVoices()
    speech.voice = audio[0];
    audio.forEach((audio, i) => (audioSelect.options[i] = new Option(audio.name, i)))
}

audioSelect.addEventListener("change", () => {
    speech.voice = audio[audioSelect.value];
})

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})