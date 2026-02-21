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
                <p class="header__description">Varxy Steakhouse was founded upon providing fresh, quality food for a value, which is why we make our food from scratch, even the bacon bits, croutons, and dressings.</p>
                </div>
            </div>

            <div class="carousel__section">
                <ul class="from__scratch--carousel">
                <li class="carousel__item">
                    <div class="carousel__overlay">
                    <h2 class="carousel__title">FRESH-BAKED BREAD</h2>
                    <p class="carousel__description">Every table is seated with Fresh-Baked Bread and honey cinnamon butter.</p>
                    </div>
                    <img src="${FoodImages.aboutUsCarousel01}" alt="Bread" />
                </li>
                <li class="carousel__item">
                    <div class="carousel__overlay">
                    <h2 class="carousel__title">HAND-CUT STEAKS</h2>
                    <p class="carousel__description">We proudly serve USDA Choice steaks, hand-cut by our in-house Meat Cutters.</p>
                    </div>
                    <img src="${FoodImages.aboutUsCarousel02}" alt="Steak" />
                </li>
                <li class="carousel__item">
                    <div class="carousel__overlay">
                    <h2 class="carousel__title">FALL-OFF-THE-BONE RIBS</h2>
                    <p class="carousel__description">Our ribs are flavorful and fork-tender.</p>
                    </div>
                    <img src="${FoodImages.aboutUsCarousel03}" alt="Ribs" />
                </li>
                </ul>

                <div class="learn__more--info">
                <div class="learn__more--image">
                    <img src="${AlabamaIcon}" alt="Alabama Map" width="100" height="100" />
                </div>
                <h3 class="learn__more--title">ALL FRESHLY MADE</h3>
                <p class="learn__more--text">
                At Varxy Steakhouse, we believe legendary service starts the moment you walk through our doors. That’s why every guest is greeted with a warm basket of our Fresh-Baked Bread, served alongside our signature honey cinnamon butter. It’s more than just a starter; it’s our way of welcoming you to the family.

We take the "ground up" approach seriously, which means taking zero shortcuts. From our daily-kneaded dough to our hand-selected ingredients, we take immense pride in every plate we serve.
                </p>
                </div>
            </div>
            </section>
`;
    }
}