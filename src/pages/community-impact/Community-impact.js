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
                        <h2 class="community__header--title">TEAMING UP FOR GOOD</h2>
                        <p class="community__header--description">
                        At Varxy Steakhouse, we believe in the power of local partnerships. Our restaurants actively host fundraising nights and dine-to-donate events, helping to generate vital funds for schools, youth programs, and non-profit organizations right in our own backyards.
                        Beyond financial support, our dedicated team members are passionate about giving back. Through local initiatives and national programs, we help coordinate the donation of millions of meals to families in need across the country. We know that real change starts locally, and we are proud to stand behind the communities we call home.                        
                        </p>
                    </div>

                    <div class="community__content">
                        <div class="community__content--item">
                            <div class="community__content--image">
                                <img src="${FoodImages.CommunityPhoto01}"/>
                            </div>
                            <div class="community__content--text">
                                <h3>OUR COMMITMENT TO COMMUNITY</h3>
                                <p>
                                At Varxy Steakhouse, 
                                our passion for serving goes beyond the table. 
                                Through our "Steakhouse Cares" initiative, we are dedicated to nourishing our neighbors. 
                                We regularly donate fresh produce and pantry staples to local food banks, partnering with organizations like Community Harvest to ensure that no one in our community goes hungry.
                                </p>
                            </div>
                        </div>

                        <div class="community__content--reverse">
                            <div class="community__content--image">
                                <img src="${FoodImages.CommunityPhoto02}"/>
                            </div>
                            <div class="community__content--text">
                                <h3>GROWING A GREENER FUTURE</h3>
                                <p>
                               Sustainability is at the heart of our mission at Varxy Steakhouse. We are committed to protecting the environment and enhancing the natural beauty of the neighborhoods we serve. Through our hands-on "Green Initiative," our team members step out of the kitchen and into the community to lead park clean-ups and restoration projects.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `;
    }
}