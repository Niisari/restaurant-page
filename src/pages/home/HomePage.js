import './HomePage.css';
import { button } from '../../components/buttons/button.js';
import menu from '../../data/menuData.json';
// Images Imports
import { FoodImages } from '../../assets/images/images.js';


export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '/';
  }

    render() {
      // Featured Items
        const featuredCategories = ["category-starters", "hand-Cut-steaks", "Fall-Off-The-Bone-Ribs", "alabama-size-combos", "dockside-favorites", "chicken-specialties"];
        const categoriesToDisplay = menu.filter(cat => 
        featuredCategories.includes(cat.id));
      
      // Render Home Page
        this.container.innerHTML = 
        `<div class="home__page">

        <div class="homePage__carousel--container">
          <ul class="home__page--carousel">
            <li>
              <picture class="homePage__carousel--image">
                <source srcset="${FoodImages.OpeningIntroDesktop}" type="image/png" media="(min-width: 768px)"/>
                <img src="${FoodImages.OpeningIntro}" alt="Home Page Carousel 01"/>
              </picture>
            </li>
            <li>
              <picture class="homePage__carousel--image">
                <source srcset="${FoodImages.premiumSteakIntroDesktop}" type="image/png" media="(min-width: 768px)"/>
                <img src="${FoodImages.premiumSteakIntro}" alt="Home Page Carousel 02"/>
              </picture>
            </li>
            <li>
              <picture class="homePage__carousel--image">
                <source srcset="${FoodImages.steakSaleIntroDesktop}" type="image/png" media="(min-width: 768px)"/>
                <img src="${FoodImages.steakSaleIntro}" alt="Home Page Carousel 03"/>
              </picture>
            </li>
          </ul>
          <div>
          
          <section class="reservation">
            <div class="reservation__content">
              <div class="reservation__text">
                <h2 class="reservation__title">DINING IN?</h2>
                ${button("Join Waitlist", "/waitlist")}
              </div>

              <div class="reservation__image--bg">
                <img 
                src="${FoodImages.reservationBg}" 
                alt=""
                width="900"
                height="auto">
              </div>

              </div>
          </section>

          <section class="menu__featured">
            <div class="menu__content--featured">
              <h2 class="menu__title">START YOUR ORDER</h2>
              
              <div class="menu__preview--featured">
                  ${categoriesToDisplay.map(category => `
                    <button data-path="/menu?cat=${category.id}" class="category__card" data-category-id="${category.id}">
                      <div class="category__card--featured" data-category-id="${category.id}">
                          <div class="category__image-container">
                              <img src="${category.categoryImage || 'default-category.jpg'}" alt="" />
                          </div>
                          <div class="category__info--featured">
                              <h3 class="category__name">${category.categoryName}</h3>
                          </div>
                      </div>
                    </button>
                  `).join('')}
              </div>

              <div class="menu__action">
                  ${button("See Full Menu", "/menu")}
              </div>
            </div>
          </section>

          <section class="learn__more--section">
            <div class="learn__more--flex">

              <div class="learn__more--info section__one">
                <div class="learn__more--image">
                  <img src="${FoodImages.freshBeef}" alt="Fresh Beef" />
                </div>
                <div class="learn__more--content">
                <div class="learn__more--icon">
                  <img 
                  src="${FoodImages.freshSteak}"
                  class="learn__more--freshSteak" 
                  alt="Fresh Beef" 
                  width="80"
                  height="auto"/>
                </div>
                  <h3 class="learn__more--title">HOSPITALITY FROM THE HEART</h3>
                  <p class="learn__more--text">At Varxy Steakhouse, we believe legendary service starts the moment you walk through our doors. That’s why every guest is greeted with a warm basket of our Fresh-Baked Bread, served alongside our signature honey cinnamon butter. It’s more than just a starter; it’s our way of welcoming you to the family.

We take the "ground up" approach seriously, which means taking zero shortcuts. From our daily-kneaded dough to our hand-selected ingredients, we take immense pride in every plate we serve.</p>
                  ${button("Learn More", "/made-from-scratch")}
                </div>
              </div>

              <div class="learn__more--info section__two">
                <div class="learn__more--image margin__md">
                  <img src="${FoodImages.localStories}" alt="Fresh Beef" />
                </div>
                <div class="learn__more--content">
                  <div class="learn__more--icon">
                    <img src="${FoodImages.restaurant}" class="learn__more--freshSteak" alt="Fresh Beef" width="80" height="auto"/>
                  </div>
                  <h3 class="learn__more--title">WHERE EVERY NEIGHBOR HAS A STORY</h3>
                  <p class="learn__more--text">At Varxy Steakhouse, we believe that the best ingredients in any recipe are the people sitting around the table. Serving our community goes far beyond our signature Hand-Cut Steaks; it’s about the roots we plant and the connections we build in every neighborhood we call home.

We take pride in being more than just a restaurant—we are a gathering place for the milestones, celebrations, and everyday moments that make our towns special.</p>
                  ${button("Learn More", "/about-us")}
                </div>
              </div>

            </div>                
          </section>

          <section class="instagram">
          <div class="instagram__content"> 
              <h2 class="instagram__title">Follow Us On Instagram</h2>
              <div class="instagram__images--carousel">
                <img src="${FoodImages.insta01}" alt="Instagram 1" />
                <img src="${FoodImages.insta02}" alt="Instagram 2" />
                <img src="${FoodImages.insta03}" alt="Instagram 3" />
                <img src="${FoodImages.insta04}" alt="Instagram 4" />
                <img src="${FoodImages.insta05}" alt="Instagram 5" />
                <img src="${FoodImages.insta06}" alt="Instagram 6" />
              </div>  
              ${button('Follow Us', "/coming-soon")}
          </div>
          </section>
          
        </div>`;

        this.initCarousel();
    }

// Carousel Method to automatically scroll
initCarousel() {
  const carousel = this.container.querySelector('.home__page--carousel');
  const slides = carousel.children;
  let index = 0;

// Start and stop the carousel
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
      { threshold: 0.5 } 
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
