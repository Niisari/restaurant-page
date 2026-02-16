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

                    <section class="faq__section">
                        <h1 class="faq__title">Frequently Asked Questions</h1>
                        <div class="faq__container">

                            <div class="faq__item">
                                <button class="faq__button">
                                Need to check a gift card balance?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                Where is my PIN number?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                MY GIFT CARD HAS BEEN LOST, STOLEN, OR DAMAGED!
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                I ORDERED A PHYSICAL GIFT CARD FROM VARXYSTEAKHOUSE.COM, WHERE IS IT?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                I ORDERED AN E-GIFT CARD FROM VARXYSTEAKHOUSE.COM, WHERE IS IT?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                ARE THERE ANY GIFT CARD SPECIALS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                WHERE CAN I PURCHASE VARXY STEAKHOUSE GIFT CARDS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                Need to check a gift card balance?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                HOW DO I GET FREE LEGENDARY OFFERS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                NEED STEAK SAUCE OR SEASONING? 
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                WANT A RECIPE?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                CAN’T FIND MENU/PRICES? 
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>                             
                        </div>
                            <div class="faq__item">
                                <button class="faq__button">
                                DO WE OFFER POINTS FOR VISITS ON OUR MOBILE APP?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                HAVING TROUBLE WITH OUR TEXT TO WAIT PROGRAM?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                CONCERNED ABOUT OUR PACKAGING?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                LOVE OUR THEME SONG?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>                         

                    </section>

                </div>
            </div>
        </section>
        `
    }
}