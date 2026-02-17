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
                        <h3>HOW IT ALL STARTED</h3>
                        <p>In a small, dusty shack in Montgomery, 
                        Alabama, the very first Varxy Steakhouse opened its doors in 1993. With just five tables and a grill fueled by hickory wood.</p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg02}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">
                        <h3>GROWING THE FAMILY</h3>
                        <p>Word traveled fast. By the early 2000s, the "Varxy Secret Spice" had become a southern staple. We expanded beyond Alabama.
                        </p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg03}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">
                        <h3>A NEW EXPERIENCE</h3>
                        <p>As tastes evolved, so did we. In 2015, we introduced our "Modern Ranch" design—featuring open kitchens, multi-level dining, and a premium bar experience.</p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg04}" alt="Local Stories"/>
                    </div>
                    
                    <div class="timeline__item text__box">
                        <h3>VARXY TODAY</h3>
                        <p>Today, Varxy Steakhouse stands as a beacon of quality and hospitality. With our sleek, modern flagship locations and a dedicated team of over 200 chefs and servers, we continue to honor our roots while pushing the boundaries of what a great steakhouse experience can be.</p>          
                    </div>

                </div>

            </div>

        </section>
        `
    }
}