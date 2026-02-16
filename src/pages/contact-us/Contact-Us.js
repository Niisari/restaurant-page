import "./Contact-Us.css"
import { FoodImages } from '../../assets/images/images.js';
import { button } from '../../components/buttons/button.js';

export class ContactUsPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/contactUs';
    }

    render() {
        this.container.innerHTML = `
        <section class="contact__page">
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

                        <div class="carousel__info">
                            <h3 class="carousel__title">Career Opportunities</h3>
                            <p class="carousel__text">Join our team and work with the best chefs in the industry.</p>
                            <a href="/careers" class="btn__reservation--link">${button('Apply Now')}</a>
                        </div>
                    </div>

                    <div class="contact__frequent--questions">
                        <h1 class="contact__frequent--title">Frequently Asked Questions</h1>
                        
                        
                    </div>

                </div>
            </div>
        </section>
        `
    }
}