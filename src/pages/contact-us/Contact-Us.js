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
                                    <p>
                                    To expose your pin number on the back of your gift card, peel/scratch the little silver box with black wavy lines. Please do not use a knife or sharp object as it can damage the number.
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                MY GIFT CARD HAS BEEN LOST, STOLEN, OR DAMAGED!
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>As stated on the back of your gift card, we are not liable for lost, stolen, or damaged gift cards, but we want to help as much as possible. Please us the contact us form below and select “Gift cards” under “What’s going on.” Please ensure all fields & proof of payment are provided so we can better assist.</p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                I ORDERED A PHYSICAL GIFT CARD, WHERE IS IT?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                I ORDERED AN E-GIFT CARD, WHERE IS IT?
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
                                CAN'T FIND MENU/PRICES? 
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check your balance here</a></p>
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

        this.setupFaq();
    }

    setupFaq() {
        const faqButtons = this.container.querySelectorAll('.faq__button');
        
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const isOpen = item.classList.contains('active');

                // Optional: Close other open items (Accordion effect)
                this.container.querySelectorAll('.faq__item').forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq__answer').style.maxHeight = null;
                });

                if (!isOpen) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq__answer');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    }
}