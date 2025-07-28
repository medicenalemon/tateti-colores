// src/utils/confetti.js
import confetti from "canvas-confetti";

export function launchConfetti(color) {
  const confettiColors = {
    R: ["#ff0000", "#ff4d4d", "#cc0000"], // Rojos
    G: ["#00cc00", "#33ff33", "#009900"], // Verdes
  };

  const colors = confettiColors[color] || ["#ffffff"];

  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors,
  });
}
