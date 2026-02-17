import './Made-From-Scratch.css';
import { FoodImages } from '../../assets/images/images.js';
import AlabamaIcon from '../../assets/images/icons/alabama-icon.png';
import { button } from '../../components/buttons/button.js';

export class MadeFromScratchPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/made-from-scratch';
    }

    render() {
        this.container.innerHTML = `
        <section class="made__from--scratch">
            <div class="header">
                <div class="header__image--bg">
                    <h1 class="header__title">WE'RE PROUD OF THE FOOD WE SERVE</h1>
                    <p class="header__description">Texas Roadhouse was founded upon providing fresh, quality food for a value, which is why we make our food from scratch, even the bacon bits, croutons, and dressings.</p>
                </div>

 <section class="carousel__section">
                    <ul class="carousel">
                        <li class="carousel__item">
                            <div class="carousel__overlay">
                                <h2 class="carousel__title">FRESH-BAKED BREAD</h2>
                                <p class="carousel__description">Every table is seated with Fresh-Baked Bread and honey cinnamon butter.  It's our way of welcoming you.</p>
                            </div>
                            <img src="${FoodImages.aboutUsCarousel01}" alt="Opening Intro" />
                        </li>
                        <li class="carousel__item">
                            <div class="carousel__overlay">
                                <h2 class="carousel__title">HAND-CUT STEAKS</h2>
                                <p class="carousel__description">We proudly serve USDA Choice steaks, hand-cut by our in-house Meat Cutters. Always fresh, never frozen.</p>
                            </div>
                            <img src="${FoodImages.aboutUsCarousel02}" alt="Premium Steak Intro" />
                        </li>
                        <li class="carousel__item">
                            <div class="carousel__overlay">
                                <h2 class="carousel__title">FALL-OFF-THE-BONE RIBS</h2>
                                <p class="carousel__description">From the 3-day preparation process to our signature BBQ sauce, our ribs are flavorful and fork-tender.</p>
                            </div>
                            <img src="${FoodImages.aboutUsCarousel03}" alt="Steak Sale Intro" />
                        </li>
                    </ul>

                    <div class="learn__more--info">
                        <div class="learn__more--image">
                            <img 
                            src="${AlabamaIcon}" 
                            alt="Alabama Map" 
                            width="100"
                            height="100"/>
                        </div>
                        <h3 class="learn__more--title">IT'S ALL FROM SCRATCH</h3>
                        <p class="learn__more--text">Legendary Food, Legendary Service® starts with taking no shortcuts. We take great pride in every plate we serve, every time.</p>
                    </div>   
            </div>
        </section>
        `;
    }
}