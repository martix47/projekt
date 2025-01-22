document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0;
  
    // Funkcja do wyświetlania odpowiedniego slajdu
    function showSlide(index) {
      // Ukrywamy wszystkie slajdy
      slides.forEach(slide => slide.classList.remove("active"));
      // Pokazujemy wybrany slajd
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
  
    // Opcjonalnie: automatyczne przełączanie slajdów co 3 sekundy
    setInterval(() => {
      nextBtn.click();
    }, 3000);
  });