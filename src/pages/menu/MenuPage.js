import './MenuPage.css';
import { button } from '../../components/buttons/button.js';
import menuData from '../../data/menuData.json';

export class MenuPage {
    constructor() {
        this.container = document.getElementById('main');
        this.activeCategory = 'all'; // Default state is the overview
    }

    render() {
        this.container.innerHTML = `
            <div class="menu__container">
                <section class="menu__header">
                    <h2>Bone-IN Ribeye</h2>
                    <p>20oz. cut of our juicy, flavorful ribeye served on the bone for extra flavor.</p>
                    ${button('Order Now')}
                </section>
                
                <nav class="menu__content">
                    <div class="menu__categories">
                        <ul class="menu__categories--list">
                            <li class="menu__category-item active" data-id="all">
                                <a href="javascript:void(0)">ALL CATEGORIES</a>
                            </li>
                            ${menuData.map(cat => `
                                <li class="menu__category-item" data-id="${cat.id}">
                                    <a href="javascript:void(0)">${cat.categoryName}</a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </nav>

                <div id="menu-items-grid" class="menu__grid">
                    </div>
            </div>
        `;

        const params = new URLSearchParams(window.location.search);
        const catId = params.get('cat');
        if (catId) {
            this.setActiveCategory(catId);
        }

        this.updateGrid();
        this.initEventListeners();
    }

    updateGrid() {
        const grid = document.getElementById('menu-items-grid');
        if (!grid) return;

        if (this.activeCategory === 'all') {
            // VIEW 1: Show only Category Names and Images
            grid.innerHTML = menuData.map(cat => `
                <div class="category__card" data-id="${cat.id}">
                    <div class="category__card--image">
                        <img src="${cat.categoryImage}" alt="${cat.categoryName}">
                    </div>
                    <div class="category__card--overlay">
                        <h3>${cat.categoryName}</h3>
                    </div>
                </div>
            `).join('');

            // Click events for the Category Cards
            grid.querySelectorAll('.category__card').forEach(card => {
                card.addEventListener('click', () => {
                    this.setActiveCategory(card.dataset.id);
                });
            });

        } else {
            // VIEW 2: Show specific items for the selected category
            const category = menuData.find(cat => cat.id === this.activeCategory);
            const items = category ? category.items : [];

            grid.innerHTML = items.map(item => `
                <div class="menu__card">
                    <div class="menu__card--image">
                        <img src="${item.itemImage || 'https://via.placeholder.com/300x200?text=No+Image'}" alt="${item.itemName}">
                    </div>
                    <div class="menu__card--info">
                        <div class="menu__card--header">
                            <h3>${item.itemName}</h3>
                            <span class="price">$${item.itemPrice}</span>
                        </div>
                        <p>${item.itemDescription}</p>
                        <div class="menu__card--nutrition">
                            <span>🔥 ${item.nutritionalInfo.calories} Cal | ${item.nutritionalInfo.allergens}</span>
                        </div>
                        ${button('Add to Order')}
                    </div>
                </div>
            `).join('');
        }
    }

    setActiveCategory(id) {
        this.activeCategory = id;

        // Update Navigation Bar UI
        const navItems = document.querySelectorAll('.menu__category-item');
        navItems.forEach(nav => {
            nav.classList.toggle('active', nav.dataset.id === id);
        });

        // Re-render the grid
        this.updateGrid();
        
        // Scroll to top of the menu grid area
        const grid = document.getElementById('menu-items-grid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    initEventListeners() {
        // Listen for clicks on the TOP Navigation Bar
        const navItems = document.querySelectorAll('.menu__category-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                this.setActiveCategory(item.dataset.id);
            });
        });
    }
}