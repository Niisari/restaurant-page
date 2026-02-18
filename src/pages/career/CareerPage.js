import './CareerPage.css'
import { button } from '../../components/buttons/button.js';

export class CareerPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/career';
    }

render() {
    this.container.innerHTML = `
        <section class="careers careers--light">
            <div class="careers__container">
                <header class="careers__header">
                    <h2 class="careers__title">Join the Heritage</h2>
                    <p class="careers__subtitle">Crafting unforgettable experiences through fire, salt, and soul.</p>
                </header>

                <div class="careers__grid">
                    <article class="job-card">
                        <div class="job-card__content">
                            <h3 class="job-card__role">Grill Master</h3>
                            <span class="job-card__type">Full-Time</span>
                            <div class="job-card__divider"></div>
                            <p class="job-card__desc">Seeking a precision-focused chef experienced in wood-fired infrared broilers and dry-age management.</p>
                            <button class="btn--apply">${button('Apply Now')}</button>
                        </div>
                    </article>

                    <article class="job-card">
                        <div class="job-card__content">
                            <h3 class="job-card__role">Lead Sommelier</h3>
                            <span class="job-card__type">Full-Time</span>
                            <div class="job-card__divider"></div>
                            <p class="job-card__desc">Curate our world-class cellar and guide guests through high-end pairings of bold reds and vintage spirits.</p>
                            <button class="btn--apply">${button('Apply Now')}</button>
                        </div>
                    </article>

                    <article class="job-card">
                        <div class="job-card__content">
                            <h3 class="job-card__role">Hospitality Captain</h3>
                            <span class="job-card__type">Part-Time / Full-Time</span>
                            <div class="job-card__divider"></div>
                            <p class="job-card__desc">For those who understand the art of the 'Grand Service'. Fine dining experience required.</p>
                            <button class="btn--apply">${button('Apply Now')}</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    `;
    }
}
