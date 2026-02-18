import './Waitlist.css';

export class WaitlistPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/waitlist';
    }

    render() {
        this.container.innerHTML = `
        <section class="waitlist">
            <div class="waitlist__content">
                <div class="waitlist__info">
                    <h2>Table's Almost Ready</h2>
                    <p>Don't stand in the lobby. Join our digital queue and we'll notify you when your prime cut is calling.</p>
                    <div class="waitlist__timer">
                        <span class="timer__label">Est. Wait:</span>
                        <span class="timer__time">15-30 MINS</span>
                    </div>
                </div>

                <form class="waitlist__form">
                    <input type="text" placeholder="Full Name" required>
                    <input type="tel" placeholder="Phone Number" required>
                    <select>
                        <option value="2">Party of 2</option>
                        <option value="4">Party of 4</option>
                        <option value="6">Party of 6+</option>
                    </select>
                    <button type="submit" class="btn--primary">Join the Waitlist</button>
                </form>
            </div>
        </section>
            `;
    }
}