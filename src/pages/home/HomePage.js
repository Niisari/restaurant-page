// Images Imports
import OpeningIntro from '../../assets/images/opening-intro.png';
import premiumSteakIntro from '../../assets/images/premium-steak-intro.png';
import steakSaleIntro from '../../assets/images/steak-sale-intro.png';

import './HomePage.css';

export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '#home';
  }

    render() {
        this.container.innerHTML = 
        `<div class="home__page">

            <div class="home__page--intro">
              <img src="${OpeningIntro}" alt="Opening Intro" class="home__page--intro-image">

                <div class="carousel">
                <div class="carousel__item active">
                    <img src="${steakSaleIntro}" alt="Steak Sale Intro" class="carousel-image">
                  </div>
                  <div class="carousel__item">
                    <img src="${premiumSteakIntro}" alt="Premium Steak Intro" class="carousel-image">
                  </div>
                </div>    

            </div>

        </div>`;
    }
}