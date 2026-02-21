import './Community-impact.css';
import { FoodImages } from '../../assets/images/images.js';

export class CommunityImpactPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/community-impact';
    }

    render() {
        this.container.innerHTML = `
            <section class="community-impact">
                <div class="community__header">

                    <div class="community__header--bg">
                    </div>

                    <div class="community__header--content">
                        <h2 class="community__header--title">EVERY LITTLE BIT HELPS</h2>
                        <p class="community__header--description">Local Varxy Steakhouse locations offer fundraising opportunities, 
                        which help raise thousands of dollars for local non-profits, causes, and schools. 
                        In addition to funds, millions of meals are donated in Varxy Steakhouse communities across the country.
                        </p>
                    </div>

                    <div class="community__content">
                        <div class="community__content--item">
                            <div class="community__content--image">
                                <img src="${FoodImages.CommunityPhoto01}"/>
                            </div>
                            <div class="community__content--text">
                                <h3>WE HONOR HEROES</h3>
                                <p>We've been a national partner with Homes For Our Troops (HFOT) for more than 17 years, 
                                completing over 300 mortgage-free, custom-built homes for the most severely injured post-9/11 veterans. And on Veterans Day, 
                                we're honored to to offer free meals to veterans and active military members across the country.</p>
                            </div>
                        </div>

                        <div class="community__content--reverse">
                            <div class="community__content--image">
                                <img src="${FoodImages.CommunityPhoto02}"/>
                            </div>
                            <div class="community__content--text">
                                <h3>PLANTING IT FORWARD</h3>
                                <p>
                                As part of our Corporate Sustainability program, we have been proud to partner with the Arbor Day Foundation since 2017. Each year, we donate $50,000 to support the Arbor Day Foundation's Community Tree Recovery Campaign and host tree distribution events in communities across the country.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `;
    }
}