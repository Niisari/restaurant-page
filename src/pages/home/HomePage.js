export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '#home';
  }

    render() {
        this.container.innerHTML = 
        `<div class="home__page">
            <h1>Welcome to our restaurant!</h1>
            <p>We serve delicious food made with fresh ingredients. Come and enjoy a meal with us!</p>
        </div>`;
    }
}