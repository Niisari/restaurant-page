import { FoodImages } from '../../assets/images/images.js';
export class ComingSoonPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/coming-soon';
    }

    render() {
        this.container.innerHTML = `<img src="${FoodImages.ComingSoon}"/>`
    }
}