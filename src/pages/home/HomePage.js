import './HomePage.css';
// Images Imports
import OpeningIntro from '../../assets/images/opening-intro.png';
import premiumSteakIntro from '../../assets/images/premium-steak-intro.png';
import steakSaleIntro from '../../assets/images/steak-sale-intro.png';
import reservationBg from '../../assets/images/reservation-bg.png';

export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '#home';
  }

    render() {
        this.container.innerHTML = 
        `<div class="home__page">

          <ul class="carousel">
            <li>
              <img src="${OpeningIntro}" alt="Opening Intro" />
            </li>
            <li>
              <img src="${premiumSteakIntro}" alt="Premium Steak Intro" />
            </li>
            <li>
              <img src="${steakSaleIntro}" alt="Steak Sale Intro" />
            </li>
          </ul>

          <section class="reservation">
            <div class="reservation__content">
              <h2>Make a reservation</h2>
              <button>Book Now</button>
              <img src="${reservationBg}" alt="">
              </div>
          </section>

        </div>`;

        this.initCarousel();
    }

initCarousel() {
  const carousel = this.container.querySelector('.carousel');
  const slides = carousel.children;
  let index = 0;

  const startCarousel = () => {
    if (this.interval) return;

    this.interval = setInterval(() => {
      index = (index + 1) % slides.length;
      slides[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'center'
      });
    }, 4000);
  };

  const stopCarousel = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  // Safety: clear old interval if re-rendered
  stopCarousel();

  // Observe visibility
  const observer = new IntersectionObserver(
    ([entry]) => {
      entry.isIntersecting ? startCarousel() : stopCarousel();
    },
    { threshold: 0.9 } // at least 90% visible
  );

  observer.observe(carousel);

  // Stop when tab is inactive
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopCarousel() : startCarousel();
  });

  // Stop carousel when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!carousel.contains(event.target)) {
      stopCarousel();
    } else {
      // If user clicks on carousel, restart
      startCarousel();
    }
  });
}

}
