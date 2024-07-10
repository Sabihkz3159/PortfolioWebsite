// cursor

var cursor = document.querySelector('.cursor')
document.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x - 10 + 'px'
    cursor.style.top = dets.y - 10 + 'px'

})




// JavaScript for typing effect
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.explore-button');

    // Smooth scroll to about section
    exploreButton.addEventListener('click', function(e) {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const jobTitle = document.querySelector('.job-title');
    const jobTitles = ["Designer", "Developer"];
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentTitle = jobTitles[currentTitleIndex];
        if (isDeleting) {
            jobTitle.textContent = currentTitle.substring(0, currentCharIndex - 1);
        } else {
            jobTitle.textContent = currentTitle.substring(0, currentCharIndex + 1);
        }

        if (!isDeleting && currentCharIndex === currentTitle.length) {
            isDeleting = true;
            setTimeout(type, 2000); // Pause before deleting
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
            setTimeout(type, 800); // Delay before typing next title
        } else {
            setTimeout(type, isDeleting ? 50 : 150); // Typing speed
            currentCharIndex += isDeleting ? -1 : 1;
        }
    }

    type(); // Start typing animation
});


document.addEventListener('DOMContentLoaded', function() {
    const scaleOnScroll = document.querySelector('.scale-on-scroll');
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function addAnimationClass() {
        if (isInViewport(scaleOnScroll)) {
            scaleOnScroll.classList.add('animate');
        } else {
            scaleOnScroll.classList.remove('animate');
        }
    }

    // Initial check when DOM is loaded
    addAnimationClass();

    // Check on scroll
    window.addEventListener('scroll', addAnimationClass);
});

document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.row-numbers');
    const initialValues = [7, 70, 4, 75]; // Adjust initial values here
    
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateNumbers() {
        numbers.forEach((number, index) => {
            const initialValue = initialValues[index];
            let current = 0;
            const increment = Math.ceil(initialValue / 50); // Adjust speed of animation here

            const timer = setInterval(() => {
                number.innerText = `${current}+`; // Add '+' sign
                current += increment;

                if (current >= initialValue) {
                    clearInterval(timer);
                    number.innerText = `${initialValue}+`; // Ensure final value has '+'
                }
            }, 20); // Adjust timing here
        });
    }

    function addAnimationClass() {
        if (isInViewport(document.querySelector('.scale-on-scroll'))) {
            document.querySelector('.scale-on-scroll').classList.add('animate');
            animateNumbers();
        } else {
            document.querySelector('.scale-on-scroll').classList.remove('animate');
            numbers.forEach((number, index) => number.innerText = '0');
        }
    }

    // Initial check when DOM is loaded
    addAnimationClass();

    // Check on scroll
    window.addEventListener('scroll', addAnimationClass);
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollUpButton = document.getElementById('scroll-up-btn');

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Show scroll-up button when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollUpButton.style.display = 'block';
        } else {
            scrollUpButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when scroll-up button is clicked
    scrollUpButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const progressContainers = document.querySelectorAll('.progress-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                const progressText = container.querySelector('.progress-text');
                const progress = parseInt(progressText.getAttribute('data-progress'));
                const circle = container.querySelector('.progress');
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;

                const offset = circumference - (progress / 100) * circumference;
                circle.style.strokeDashoffset = offset;

                // Unobserve the element after the progress is set
                observer.unobserve(container);
            }
        });
    }, { threshold: 0.1 });

    progressContainers.forEach(container => {
        observer.observe(container);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const progressContainers = document.querySelectorAll('.progress-container');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const progress = parseInt(container.getAttribute('data-progress'));
          const circle = container.querySelector('.progress');
          const radius = circle.r.baseVal.value;
          const circumference = 2 * Math.PI * radius;
  
          const offset = circumference - (progress / 100) * circumference;
          circle.style.strokeDashoffset = offset;
  
          // Add visible class to trigger scale animation
          container.classList.add('visible');
  
          // Unobserve the element after the progress is set
          observer.unobserve(container);
        }
      });
    }, { threshold: 0.1 });
  
    progressContainers.forEach(container => {
      observer.observe(container);
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectItems = document.querySelectorAll('.project-item');
  
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
  
            // Add active class to the clicked button
            button.classList.add('active');
  
            // Get the category to filter
            const category = button.getAttribute('data-category');
  
            // Show/hide project items based on category
            projectItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
  
                if (category === 'all' || itemCategory === category) {
                    item.classList.add('show'); // Show matching items
                    item.classList.remove('hidden'); // Ensure hidden class is removed
                } else {
                    item.classList.remove('show'); // Hide non-matching items
                    item.classList.add('hidden');
                }
            });
        });
    });
  
    // Initially show all projects
    document.querySelector('.category-btn[data-category="all"]').click();
});

document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-content');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const close = document.querySelector('.close');

    let currentIndex = 0;
    let images = [];

    projectImages.forEach((img, index) => {
        images.push(img);
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.style.display = 'block';
        updateLightbox();
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function updateLightbox() {
        lightboxImg.src = images[currentIndex].src;
        lightboxCaption.innerHTML = images[currentIndex].alt;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    close.addEventListener('click', closeLightbox);
    prev.addEventListener('click', showPrev);
    next.addEventListener('click', showNext);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});


// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.footer-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// scripts.js


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });
});
