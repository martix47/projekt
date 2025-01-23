document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const toggleButton = document.getElementById("toggleButton");
  const sidePanel = document.getElementById("sidePanel");

  let currentIndex = 0;
  let isPanelOpen = false;

 
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  });

  
  toggleButton.addEventListener("click", () => {
    if (isPanelOpen) {
      sidePanel.style.transform = "translateX(100%)";
      toggleButton.textContent = "Otwórz panel";
    } else {
      sidePanel.style.transform = "translateX(0)";
      toggleButton.textContent = "Zamknij panel";
    }
    isPanelOpen = !isPanelOpen;
  });

  
  setInterval(() => {
    nextBtn.click();
  }, 6000);
});