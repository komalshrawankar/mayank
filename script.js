fetch("https://script.google.com/macros/s/AKfycbx8R3wjlBYuZBUnP2Dfd-CpDSyUnC7A7mA7PP10gkJAWqvaP1wVjdbiaR040V7ezP5fGA/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});


function speakPage() {
  const text = document.body.innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

