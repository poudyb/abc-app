function speakText(text, options = {}) {
  const { rate = 0.9 } = options;
  const synth = window.speechSynthesis;
  if (!synth) return null;
  synth.cancel();
  if (synth.paused) synth.resume();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  synth.speak(utterance);
  return utterance;
}

function cancelSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}
