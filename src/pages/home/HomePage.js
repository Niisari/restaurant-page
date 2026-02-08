import './HomePage.css';
// Images Imports
import OpeningIntro from '../../assets/images/opening-intro.png';
import premiumSteakIntro from '../../assets/images/premium-steak-intro.png';
import steakSaleIntro from '../../assets/images/steak-sale-intro.png';

export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '#home';
  }

    render() {
        this.container.innerHTML = 
        `<div class="home__page">

            <div class="slideshow__container">          

              <div class="slide__image fade">
                <img src="${OpeningIntro}" alt="Opening Intro">
              </div>

              <div class="slide__image fade">
                <img src="${premiumSteakIntro}" alt="Premium Steak Intro">
              </div>

              <div class="slide__image fade">
                <img src="${steakSaleIntro}" alt="Steak Sale Intro">
              </div>

              <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
              <a class="next" onclick="plusSlides(1)">&#10095;</a>
      
            </div>

          <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
          </div>

        </div>`;
    }
}