try {
  if (window.speechSynthesis && window.speechSynthesis.getVoices) {
    window.speechSynthesis.getVoices();
  }
} catch (_) {}

function speakText(text, options = {}) {
  const { rate = 0.9 } = options;
  const synth = window.speechSynthesis;
  if (!synth) return null;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;

  function go() {
    synth.cancel();
    if (synth.paused) synth.resume();
    synth.speak(utterance);
  }

  if (synth.getVoices().length > 0) {
    go();
  } else {
    function onReady() {
      synth.removeEventListener('voiceschanged', onReady);
      go();
    }
    synth.addEventListener('voiceschanged', onReady);
  }
  return utterance;
}

function cancelSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}
