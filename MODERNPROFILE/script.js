const titles = [
  'Web Developer',
  'Graphic Designer',
  'Front-End Developer',
  'Video Production Editor',
  'Photographer',
];

const titleElement = document.querySelector('.title');
let currentTitleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 300; // average speed for typing
let deletingSpeed = 200; // slightly faster speed for deleting

function getRandomSpeed(baseSpeed) {
  return baseSpeed + Math.random() * 100 - 50; // Vary speed by +/- 50ms
}

function typeTitle() {
  const currentTitle = titles[currentTitleIndex];
  if (isDeleting) {
    // Delete character
    currentCharIndex--;
    titleElement.textContent = currentTitle.substring(0, currentCharIndex);
    setTimeout(typeTitle, getRandomSpeed(deletingSpeed));
  } else {
    // Add character
    currentCharIndex++;
    titleElement.textContent = currentTitle.substring(0, currentCharIndex);
    setTimeout(typeTitle, getRandomSpeed(typingSpeed));
  }

  // Check if word is completely typed out
  if (!isDeleting && currentCharIndex === currentTitle.length) {
    // Start deleting after a pause
    setTimeout(() => {
      isDeleting = true;
      setTimeout(typeTitle, deletingSpeed);
    }, 1500); // Longer pause at the end of typing
  }

  // Check if word is completely deleted
  if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentTitleIndex = (currentTitleIndex + 1) % titles.length;
    setTimeout(typeTitle, typingSpeed);
  }
}

// Start the typing effect
typeTitle();

document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation links from both the main nav and the footer nav
  const links = document.querySelectorAll('.nav-links a, .footer-nav a');

  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default anchor behavior
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed
    }
  );

  const experienceImages = document.querySelectorAll('.experience-image');
  experienceImages.forEach((img, index) => {
    setTimeout(() => {
      observer.observe(img);
    }, index * 300); // Delay for each item
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Select the scroll arrow
  const scrollArrows = document.querySelectorAll('.scroll-arrow');

  for (const arrow of scrollArrows) {
    arrow.addEventListener('click', function () {
      // Directly select the About section
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.rotating-image');
  const totalImages = images.length;

  function rotateImage() {
    images[currentImageIndex].classList.remove('active');

    currentImageIndex = (currentImageIndex + 1) % totalImages;
    images[currentImageIndex].classList.add('active');
  }

  // Change image every 3 seconds
  setInterval(rotateImage, 3000);

  // Initialize the first image
  images[0].classList.add('active');
});
