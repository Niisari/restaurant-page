export class MadeFromScratchPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/made-from-scratch';
    }

    render() {
        this.container.innerHTML = `
        <section class="made__from--scratch">
            <h1 class="made-from-scratch__title">Made From Scratch</h1>
            <img src="" alt="Made From Scratch" />
        </section>
        `;
    }
}