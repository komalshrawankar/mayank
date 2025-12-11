fetch("https://script.google.com/macros/s/AKfycbx8R3wjlBYuZBUnP2Dfd-CpDSyUnC7A7mA7PP10gkJAWqvaP1wVjdbiaR040V7ezP5fGA/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
});
