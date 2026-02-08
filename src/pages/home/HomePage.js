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

        </div>`;
    }
}