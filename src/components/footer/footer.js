import './Footer.css';
import logo from '../../assets/images/logo.svg';
export class Footer {
    constructor() {
        this.container = document.getElementById('footer');
    }
    render() {
        this.container.innerHTML = `
        <div class="footer">
            <div class="footer__content">
                <div class="footer__logo">
                    <img src="${logo}" alt="Logo">
                </div>
                <div class="footer__links--container">
                    <ul class="footer__links">

                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}