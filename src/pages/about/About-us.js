import "./About-us.css";
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

            </div>

        </section>
        `
    }
}