const products = [
    { 
        id: 1, 
        title: 'Calathea plant', 
        image: 'fff/f2.svg', 
        info: 'Living art for homes, businesses, and events.', 
        price: 40 
    },
    { 
        id: 2, 
        title: 'Monstera Deliciosa', 
        image: 'fff/f3.svg', 
        info: 'Living art for homes, businesses, and events.', 
        price: 55 
    },
    { 
        id: 3, 
        title: 'Snake Plant', 
        image: 'fff/f4.svg', 
        info: 'Living art for homes, businesses, and events.', 
        price: 35 
    },
    { 
        id: 4, 
        title: 'Fiddle Leaf Fig', 
        image: 'fff/f5.svg', 
        info: 'Living art for homes, businesses, and events.', 
        price: 75 
    };

const cartIconSVG = `
<svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="46" height="38" rx="7" stroke="black" stroke-width="2"/>
    <path d="M19.2 12.6667H28.8C33.3334 12.6667 33.7867 14.7867 34.0934 17.3734L35.2933 27.3734C35.68 30.6534 34.6667 33.3334 30 33.3334H18.0133C13.3333 33.3334 12.32 30.6534 12.72 27.3734L13.92 17.3734C14.2133 14.7867 14.6667 12.6667 19.2 12.6667Z" stroke="black" stroke-width="1.5"/>
    <path d="M18.6667 14.6667V10.0001C18.6667 8.00008 20 6.66675 22 6.66675H26C28 6.66675 29.3333 8.00008 29.3333 10.0001V14.6667" stroke="black" stroke-width="1.5"/>
</svg>`;

const container = document.getElementById('topSellingItems');

if (container) {
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card__image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <h3 class="card__title">${product.title}</h3>
            <div class="card__info">${product.info}</div>
            <div class="card__action">
                <div class="card__price">$${product.price}</div>
                <button class="card__atc">${cartIconSVG}</button>
            </div>
        `;
        container.appendChild(card);
    });
}