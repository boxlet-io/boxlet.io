(() => {
  // ---- boxlets on the quay, in front of the harbour skyline ----
  let seed = 7; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  let tile = "", x = 4;
  while (x < 628) {
    const cols = 1 + Math.floor(r() * 4), rows = 1 + Math.floor(r() * 3);
    for (let c = 0; c < cols; c++) for (let k = 0; k < rows - (c % 2); k++)
      tile += `<rect x='${x + c * 9}' y='${18 - k * 6}' width='8' height='5' rx='1' fill='%238F7CFF' fill-opacity='${(0.55 + r() * 0.35).toFixed(2)}'/>`;
    x += cols * 9 + 14 + Math.floor(r() * 40);
  }
  document.getElementById("quay").style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='24'%3E${tile.replace(/</g, "%3C").replace(/>/g, "%3E")}%3C/svg%3E")`;
})();
