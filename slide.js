document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const toggleButton = document.getElementById("toggleButton");
  const sidePanel = document.getElementById("sidePanel");

  let currentIndex = 0;
  let isPanelOpen = false;

  // Funkcja do wyświetlania odpowiedniego slajdu
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  // Obsługa przycisku "Następny"
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  // Obsługa przycisku "Poprzedni"
  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  });

  // Obsługa przycisku do chowania/pokazywania panelu
  toggleButton.addEventListener("click", () => {
    if (isPanelOpen) {
      sidePanel.classList.remove("open"); // Ukryj panel
      
    } else {
      sidePanel.classList.add("open"); // Pokaż panel
      
    }
    isPanelOpen = !isPanelOpen;
  });

  // Automatyczne przełączanie slajdów co 6 sekund
  setInterval(() => {
    nextBtn.click();
  }, 6000);
});