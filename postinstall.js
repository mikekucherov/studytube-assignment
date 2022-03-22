const art = require("ascii-art");

console.log(art.font("GLORY TO UKRAINE!", "Doom", (err, res) => {
  console.log(err || res);
}));
