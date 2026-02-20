import "./Contact-us.css"
import { FoodImages } from '../../assets/images/images.js';
import { button } from '../../components/buttons/button.js';

export class ContactUsPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/contact-us';
    }

    render() {
        this.container.innerHTML = `
        <section class="contact__page">
            <div class="contact__container">
                <div class="contact__content"> 

                    <div class="contact__header--image">

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
                            ${button('Apply Now', "/career")}
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
                                    <p>Currently, we are experiencing long delays in order processing and shipping.  Additionally, gift cards ordered with USPS shipping do not have a tracking number.  To ensure that your gift card reaches the recipient in a timely manner, please consider sending an electronic gift card.</p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                I ORDERED AN E-GIFT CARD, WHERE IS IT?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>Your gift card was sent from 
                                    <a>varxysteakhousegiftcards@cashstar.com</a>
                                    You might need to add this email address to your list of trusted senders or check your spam folder.
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                ARE THERE ANY GIFT CARD SPECIALS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    Our gift card specials normally run during the holidays. Keep an eye on our website and touch base every now and then with your favorite location as they might offer specials specific to their location. 
                                    <a>https://www.varxysteakhouse.com/gift-cards</a>
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                WHERE CAN I PURCHASE VARXY STEAKHOUSE GIFT CARDS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    Here is the link to purchase our electronic or physical gift cards, 
                                    <a>https://www.varxysteakhouse.com/gift-cards</a>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                Need to check avalaibility?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Check our waitlist here</a></p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                HOW DO I GET FREE LEGENDARY OFFERS?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p><a>Sign up for our VIP Club</a>
                                     you will receive a free appetizer within the first 24-48hrs. Then you will receive goodies every year on your birthday, anniversary of when you sign up and if your location decides to send anything else out. You can also text VIP to 68984.
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                NEED STEAK SAUCE OR SEASONING? 
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    Our signature seasoning and sauce is now on Amazon! Just click this link: 
                                    <a>https://www.amazon.com/s?k=texas+roadhouse&ref=nb_sb_noss_2</a>
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                WANT A RECIPE?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>As much as we would love to share our recipes with you, all of our recipes are proprietary. But you can still absolutely call your local Texas Roadhouse to see if they can provide you with your favorite menu item to use at home for your dinner!  </p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                CAN'T FIND MENU/PRICES? 
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    <a href="/menu">view our menu.</a>
                                    </p>
                                </div>
                            </div>                             

                            <div class="faq__item">
                                <button class="faq__button">
                                DO WE OFFER POINTS FOR VISITS ON OUR MOBILE APP?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    We do not have a reward program with our mobile app, but if you go to 
                                    <a>https://www.varxysteakhouse.com/vip-club</a>
                                     and sign up for our VIP Club you will receive a free appetizer within the first 24-48hrs. Additionally, you will receive goodies every year on your birthday and anniversary of sign-up date.
                                    </p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                HAVING TROUBLE WITH OUR TEXT TO WAIT PROGRAM?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>It’s possible that you have replied “Stop” to our messages in the past and thus have stopped receiving them. You can reply to our company number: 999-999-9991 with the word “Start” and that will allow the text messages to come through again.</p>
                                </div>
                            </div>

                            <div class="faq__item">
                                <button class="faq__button">
                                CONCERNED ABOUT OUR PACKAGING?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>
                                    We are testing and researching alternative options at this very moment. We just moved to paper bags to pack our fresh-baked bread as well as some locations using paper cups instead of Styrofoam! We too want to do what is best for our guests and the environment. Please 
                                    <a>Learn more about our sustainability efforts.</a>
                                    </p>
                                </div>
                            </div>
                            
                            <div class="faq__item">
                                <button class="faq__button">
                                LOVE OUR THEME SONG?
                                    <span class="faq__arrow"></span>
                                </button>

                                <div class="faq__answer">
                                    <p>The artist for our VARXY STEAKHOUSE theme song is Kendrick Lamar.</p>
                                </div>
                            </div>
                        </div>   
                            
                            <form action="https://formsubmit.co" method="POST">
                                <div class="form__container">
                                    <h2 class="form__title">CONTACT US</h2>

                                        <label for="firstName" class="label">First Name: *</label>
                                        <input type="text" name="firstName" placeholder="Barrack" required>

                                        <label for="lastName" class="label">Last Name: *</label>
                                        <input type="text" name="lastName" placeholder="Obama" required>

                                        <label for="phone" class="label">Phone Number: *</label>
                                        <input type="number" name="phone" placeholder="640-123-4567" required>

                                        <label for="email" class="label">Email: *</label>
                                        <input type="email" name="email" placeholder="BarrackObama@gmail.com" required>

                                        <label for="confirmEmail" class="label">Confirm Email: *</label>
                                        <input type="email" name"confirmEmail" placeholder="Confirm Email" required>

                                        <label for="subject" class="label">What's Going on? *</label>
                                        <select name="subject" id="subject" required>
                                            <option value="Recent Order">Recent Order</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Gift Cards">Gift Cards</option>
                                            <option value="Manage my account">Manage my account</option>
                                        </select>
                                    <div class="form__button--container">
                                        <button type="submit" value="Submit" class="form__button">${button("Send Message")}</button>
                                    </div>            
                            </form>
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