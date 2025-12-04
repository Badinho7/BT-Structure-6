window.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  const startButton = document.getElementById("start-button");
  const sky = document.getElementById("sky");
  const narration = document.getElementById("narration");

  startButton.addEventListener("click", () => {

    // Ocultar pantalla de inicio
    startScreen.style.opacity = 0;
    setTimeout(() => (startScreen.style.display = "none"), 600);

    // Cambiar a un color más iluminado
    sky.setAttribute("color", "#202840");

    // Reproducir narración
    narration.components.sound.playSound();
  });
});
