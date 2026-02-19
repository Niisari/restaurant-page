import { FoodImages } from '../../assets/images/images.js';
import "./Coming-soon.css";
export class ComingSoonPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/coming-soon';
    }

    render() {
        this.container.innerHTML = `
        <div class="coming__soon">
        <img src="${FoodImages.ComingSoon}"/>
        </div>
        `
    }
}