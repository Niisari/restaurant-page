import './MenuPage.css';
import { button } from '../../components/buttons/button.js';
export class MenuPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/menu';
    }

    render() {
        this.container.innerHTML = `
            <div class="menu__container">
                <div class="menu__header">
                    <h2>Bone-IN Ribeye</h2>
                    <p>20oz. cut of our juicy, flavorful ribeye served on the bone for extra flavor.</p>
                    <a>${button('Order Now')}</a>
                </div>
                
                <div class="menu__content">
                    <div class="menu__categories">
                        <ul class="menu__categories--list">
                            <li>
                                <a>JUST FOR STARTERS</a>
                            </li>
                            <li>
                                <a>HAND-CUT STEAKS</a>
                            </li>
                            <li>
                                <a>THE BONE RIBS</a>
                            </li>
                            <li>
                                <a>ALABAMA SIZE COMBOS</a>
                            </li>
                            <li>
                                <a>DOCKSIDE FAVORITES</a>
                            </li>
                            <li>
                                <a>CHICKEN SPECIALTIES</a>
                            </li>
                            <li>
                                <a>COUNTRY DINNERS</a>
                            </li>
                            <li>
                                <a>SALADS</a>
                            </li>
                            <li>
                                <a>BURGERS & SANDWICHES</a>
                            </li>
                            <li>
                                <a>SIDES & EXTRAS</a>
                            </li>
                            <li>
                                <a>KIDS & RANGER MEALS</a>
                            </li>
                            <li>
                                <a>BEVERAGES</a>
                            </li>
                            <li>
                                <a>DESSERTS</a>
                            </li>
                            <li>
                                <a>MARGARITAS</a>
                            </li>
                            <li>
                                <a>COCKTAILS</a>
                            </li>
                            <li>
                                <a>BEER</a>
                            </li>
                            <li>
                                <a>WINE</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}