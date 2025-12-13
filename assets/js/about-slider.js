function initAboutSlider() {
  const slideContentInner = document.getElementById("slide-content-inner");
  const slideDotsContainer = document.getElementById("slide-dots");
  const mainImage = document.getElementById("mainImage");
  const secondaryImage = document.getElementById("secondaryImage");
  const mainImageContainer = document.getElementById("mainImageContainer");
  const secondaryImageContainer = document.getElementById("secondaryImageContainer");

  if (!slideContentInner) return;

  const slides = [
    {
      title: "Visionary Strategy",
      subtitle: "We define the future.",
      text: "We begin every project...",
      mainImage: "https://images.unsplash.com/photo-1542744196-18a72982d61b",
      secondaryImage:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      title: "Precision Engineering",
      subtitle: "Code that delivers.",
      text: "Our engineers follow...",
      mainImage: "https://images.unsplash.com/photo-1542831371-29b0f74f945e",
      secondaryImage:
        "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2",
    },
  ];

  let currentSlide = 0;

  function renderSlide(i) {
    const slide = slides[i];
    slideContentInner.innerHTML = `
            <p class="text-opti-blue fw-bold mb-2">${slide.subtitle}</p>
            <h2 class="display-4 fw-bold mb-4">${slide.title}</h2>
            <p class="fs-5 text-secondary">${slide.text}</p>
        `;
    mainImage.src = slide.mainImage;
    secondaryImage.src = slide.secondaryImage;
    updateDots();
  }

  function createDots() {
    slideDotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "slide-dot";
      dot.addEventListener("click", () => switchTo(i));
      slideDotsContainer.appendChild(dot);
    });
    updateDots();
  }

  function updateDots() {
    const dots = slideDotsContainer.children;
    [...dots].forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function switchTo(i) {
    currentSlide = i;
    renderSlide(i);
  }

  createDots();
  renderSlide(0);

  setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    switchTo(next);
  }, 7000);
}
