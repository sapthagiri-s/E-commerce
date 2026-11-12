
// ======================================
// ELECTROHUB PRODUCT DATABASE
// ======================================

const products = [

    {
        id: 1,
        name: "iPhone 16 Pro",
        category: "Mobiles",
        price: 119900,
        oldPrice: 129900,
        rating: 4.8,
        discount: "8% OFF",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
    },

    {
        id: 2,
        name: "Samsung Galaxy S25",
        category: "Mobiles",
        price: 79999,
        oldPrice: 89999,
        rating: 4.7,
        discount: "11% OFF",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },

    {
        id: 3,
        name: "MacBook Air M3",
        category: "Laptops",
        price: 99900,
        oldPrice: 114900,
        rating: 4.9,
        discount: "13% OFF",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
    },

    {
        id: 4,
        name: "HP Pavilion 15",
        category: "Laptops",
        price: 64999,
        oldPrice: 74999,
        rating: 4.5,
        discount: "13% OFF",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },

    {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "Audio",
        price: 29990,
        oldPrice: 34990,
        rating: 4.8,
        discount: "14% OFF",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },

    {
        id: 6,
        name: "JBL Wireless Speaker",
        category: "Audio",
        price: 4999,
        oldPrice: 6999,
        rating: 4.4,
        discount: "28% OFF",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    },

    {
        id: 7,
        name: "Canon EOS Camera",
        category: "Cameras",
        price: 54999,
        oldPrice: 64999,
        rating: 4.6,
        discount: "15% OFF",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },

    {
        id: 8,
        name: "Gaming Controller",
        category: "Gaming",
        price: 3999,
        oldPrice: 4999,
        rating: 4.3,
        discount: "20% OFF",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500"
    },

    {
        id: 9,
        name: "Apple Watch Series",
        category: "Accessories",
        price: 32999,
        oldPrice: 39999,
        rating: 4.7,
        discount: "17% OFF",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },

    {
        id: 10,
        name: "Apple iPad",
        category: "Tablets",
        price: 39900,
        oldPrice: 44900,
        rating: 4.6,
        discount: "11% OFF",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    },

    {
        id: 11,
        name: "Smart Home Speaker",
        category: "Smart Home",
        price: 5999,
        oldPrice: 7999,
        rating: 4.4,
        discount: "25% OFF",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500"
    },

    {
        id: 12,
        name: "Wireless Earbuds",
        category: "Audio",
        price: 2499,
        oldPrice: 3499,
        rating: 4.5,
        discount: "28% OFF",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500"
    }

];


// ======================================
// DOM ELEMENTS
// ======================================

const productContainer = document.getElementById("productContainer");

const filterButtons = document.querySelectorAll(".filter-btn");

const productSearch = document.getElementById("productSearch");

const sortProducts = document.getElementById("sortProducts");

const noProducts = document.getElementById("noProducts");

const categoryCards = document.querySelectorAll(".category-card");


// ======================================
// CURRENT FILTER
// ======================================

let selectedCategory = "All";


// ======================================
// DISPLAY PRODUCTS
// ======================================

function displayProducts(productList) {

    productContainer.innerHTML = "";

    noProducts.hidden = productList.length !== 0;

    productList.forEach(function(product) {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <div class="product-image">

                <span class="discount-tag">
                    ${product.discount}
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.name}</h3>

                <span class="product-rating">
                    ★ ${product.rating}
                </span>

                <div class="product-price">

                    ₹${product.price.toLocaleString("en-IN")}

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>

                <button class="product-btn">
                    Add to Cart
                </button>

            </div>
        `;

        productContainer.appendChild(card);

    });

}


// ======================================
// FILTER AND SEARCH FUNCTION
// ======================================

function filterAndSearch() {

    const searchValue = productSearch.value
        .trim()
        .toLowerCase();

    let filteredProducts = products.filter(function(product) {

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue);

        return matchesCategory && matchesSearch;

    });


    // SORT PRODUCTS

    const sortValue = sortProducts.value;

    if (sortValue === "low") {

        filteredProducts.sort(function(a, b) {
            return a.price - b.price;
        });

    }

    else if (sortValue === "high") {

        filteredProducts.sort(function(a, b) {
            return b.price - a.price;
        });

    }

    else if (sortValue === "name") {

        filteredProducts.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

    }


    displayProducts(filteredProducts);

}


// ======================================
// CATEGORY FILTER BUTTONS
// ======================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory = this.dataset.filter;

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        filterAndSearch();

    });

});


// ======================================
// CATEGORY CARD CLICK
// ======================================

categoryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        selectedCategory = this.dataset.category;

        filterButtons.forEach(function(button) {

            button.classList.toggle(
                "active",
                button.dataset.filter === selectedCategory
            );

        });

        filterAndSearch();

        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ======================================
// SEARCH EVENT
// ======================================

productSearch.addEventListener("input", function() {

    filterAndSearch();

});


// ======================================
// SORT EVENT
// ======================================

sortProducts.addEventListener("change", function() {

    filterAndSearch();

});


// ======================================
// INITIAL PRODUCT DISPLAY
// ======================================

displayProducts(products);
