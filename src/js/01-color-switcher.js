
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  let colorChangeInterval = null;
  
  startButton.addEventListener('click', () => {
    startButton.disabled = true; // Wyłączenie przycisku Start
    stopButton.disabled = false; // Włączenie przycisku Stop
  
    colorChangeInterval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  stopButton.addEventListener('click', () => {
    clearInterval(colorChangeInterval); // Zatrzymanie zmiany koloru
    startButton.disabled = false; // Włączenie przycisku Start
    stopButton.disabled = true; // Wyłączenie przycisku Stop
  });

  