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
                <h1>Menu</h1>
            </div>
        `;
    }
}