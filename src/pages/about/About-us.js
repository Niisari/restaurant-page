import "./About-us.css";
import { FoodImages } from '../../assets/images/images.js';

export class AboutPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/about-us';
    }
    render() {
        this.container.innerHTML = `
        <section class="about__page">
            <div class="about__content">

                <div class="about__image--bg">
                </div>

                <div class="timeline__section">
                    <div class="timeline__item text__box">
                        <h2>IF IT DOESN'T SAY ALABAMA, IT'S NOT VARXY STEAKHOUSE®</h2>
                        <p>Legendary means Hand-Cut Steaks, 
                        Fall-Off-The-Bone Ribs, Made-From-Scratch Sides, Ice-Cold Beer, and of course, 
                        our irresistible Fresh-Baked Bread.
                        </p>   
                    </div>
                    
                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg01}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">    
                        <h3>The Beginning</h3>
                        <p>Varxy Steakhouse® is a family-owned and operated restaurant located in Birmingham, Alabama.</p>          
                    </div>
                </div>

            </div>

        </section>
        `
    }
}