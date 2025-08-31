const sparkleTrail = [];

document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("img");
  sparkle.src = chrome.runtime.getURL("sparkle.png");
  sparkle.style.position = "fixed";
  sparkle.style.pointerEvents = "none";
  sparkle.style.width = "16px";
  sparkle.style.height = "16px";
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;
  sparkle.style.zIndex = 9999;
  sparkle.style.transition = "opacity 0.5s ease-out";
  document.body.appendChild(sparkle);

  sparkleTrail.push(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = "0";
    setTimeout(() => sparkle.remove(), 500);
  }, 100);
});
