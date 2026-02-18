import "./About-us.css";
import { FoodImages } from '../../assets/images/images.js';
import AlabamaIcon from '../../assets/images/icons/alabama-icon.png';
import { button } from '../../components/buttons/button.js';

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

                <section class="timeline__section">
                    <div class="timeline__title">
                        <h2 class="timeline__subtitle">IF IT DOESN'T SAY ALABAMA, IT'S NOT VARXY STEAKHOUSE®</h2>
                        <p class="timeline__description">Legendary means Hand-Cut Steaks, 
                        Fall-Off-The-Bone Ribs, Made-From-Scratch Sides, Ice-Cold Beer, and of course, 
                        our irresistible Fresh-Baked Bread.
                        </p>   
                    </div>
                    
                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg01}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">    
                        <h3 class="timeline__subtitle">HOW IT ALL STARTED</h3>
                        <p class="timeline__description">In a small, dusty shack in Montgomery, 
                        Alabama, the very first Varxy Steakhouse opened its doors in 1993. With just five tables and a grill fueled by hickory wood.</p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg02}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">
                        <h3 class="timeline__subtitle">GROWING THE FAMILY</h3>
                        <p class="timeline__description">Word traveled fast. By the early 2000s, the "Varxy Secret Spice" had become a southern staple. We expanded beyond Alabama.
                        </p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg03}" alt="Local Stories"/>
                    </div>

                    <div class="timeline__item text__box">
                        <h3 class="timeline__subtitle">A NEW EXPERIENCE</h3>
                        <p class="timeline__description">As tastes evolved, so did we. In 2015, we introduced our "Modern Ranch" design—featuring open kitchens, multi-level dining, and a premium bar experience.</p>          
                    </div>

                    <div class="timeline__item image__box">
                        <img src="${FoodImages.timelineImg04}" alt="Local Stories"/>
                    </div>
                    
                    <div class="timeline__item text__box">
                        <h3 class="timeline__subtitle">VARXY TODAY</h3>
                        <p class="timeline__description">Today, Varxy Steakhouse stands as a beacon of quality and hospitality. With our sleek, modern flagship locations and a dedicated team of over 200 chefs and servers, we continue to honor our roots while pushing the boundaries of what a great steakhouse experience can be.</p>          
                    </div>
                </section>

                <section class="carousel__section">
                    <ul class="from__scratch--carousel">
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
                        <a href="/made-from-scratch" class="learn__more--link">${button('Learn More')}</a>
                    </div>   

                    <div class="local__stories--container">
                        <h2 class="local__stories--title">LOCAL STORIES</h2>
                        <ul class="local__stories--list">
                            <li class="local__stories--item">
                                <img src="${FoodImages.localStories}" alt="Tip A Cop" />
                                <h3 class="local__stories--title">Tip A Cop for Special Olympics</h3>
                            </li>
                            <li class="local__stories--item">
                                <img src="${FoodImages.localStories02}" alt="Feeding Families" />
                                <h3 class="local__stories--title">Feeding Families in Need</h3>
                            </li>
                            <li class="local__stories--item">
                                <img src="${FoodImages.localStories03}" alt="Camp Sunshine" />
                                <h3 class="local__stories--title">Supporting Camp Sunshine</h3>
                            </li>
                        </ul>
                    </div>
                 </section>

                 <section class="community__impact--section">

                    <div class="community__impact--container">
                        <h2 class="community__impact--title">COMMUNITY IMPACT</h2>
                        <div class="community__impact--content">
                            <div class="community__impact--item">
                                <img src="${FoodImages.communityImpact01}"/>
                                <h2>GIVING BACK TO COMMUNITIES WE SERVE</h2>
                            </div>

                            <div class="community__impact--item">
                                <img src="${FoodImages.communityImpact02}"/>
                                <h2>EVERY LITTLE BIT HELPS</h2>
                            </div>

                            <div class="community__impact--item">
                                <img src="${FoodImages.communityImpact03}"/>
                                <h2>WE HONOR HEROES</h2>
                            </div>

                            <div class="community__impact--item">
                                <img src="${FoodImages.communityImpact04}"/>
                                <h2>PLANTING IT FORWARD</h2>
                            </div>

                            <a href="/community-impact"><button>${button('Learn More')}</button></a>
                        </div>
                    </div>

                 </section>

            </div>
        </section>
       `
    }
}