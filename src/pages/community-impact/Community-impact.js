import './Community-Impact.css';

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
                </div>
            </section>
        `;
    }
}