import "./Contact-Us.css"
import { FoodImages } from '../../assets/images/images.js';

export class ContactUsPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/contactUs';
    }

    render() {
        this.container.innerHTML = `
        <section>
            <div class="contact__container">
                <div class="contact__content"> 

                    <div class="background__image--intro">
                    </div>

                    <div class="carousel__container">
                        <ul class="carousel">
                            <li>
                                <img src="${FoodImages.contactCarousel03}" alt="Opening Intro" />
                            </li>
                            <li>
                                <img src="${FoodImages.contactCarousel02}" alt="Premium Steak Intro" />
                            </li>
                            <li>
                                <img src="${FoodImages.contactCarousel01}" alt="Steak Sale Intro" />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
        `
    }
}