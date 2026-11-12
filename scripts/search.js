
const searchInput = document.getElementById("searchInput");

const searchBtn = document.getElementById("searchBtn");

const productContainer = document.getElementById("productContainer");


// Sample product database

const products = [

    {
        name: "Premium Wireless Headphones",
        category: "Audio",
        price: 2499
    },

    {
        name: "Samsung Galaxy S25",
        category: "Mobile",
        price: 80000
    },

    {
        name: "HP Pavilion Laptop",
        category: "Laptop",
        price: 65000
    },

    {
        name: "Dell Inspiron Laptop",
        category: "Laptop",
        price: 55000
    },

    {
        name: "Sony Headphones",
        category: "Accessories",
        price: 5000
    },

    {
        name: "Canon DSLR Camera",
        category: "Camera",
        price: 45000
    }

];


// Search function

function searchProducts() {

    const searchValue = searchInput.value.trim().toLowerCase();

    productContainer.innerHTML = "";

    if (searchValue === "") {

        productContainer.textContent = "Please enter a product name.";

        return;

    }


    // Filter matching products

    const filteredProducts = products.filter(function(product) {

        return (
            product.name.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue)
        );

    });


    // Display results

    if (filteredProducts.length === 0) {

        productContainer.textContent = "No products found.";

    }

    else {

        filteredProducts.forEach(function(product) {

            const productCard = document.createElement("div");

            productCard.classList.add("product-card");

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            const productCategory = document.createElement("p");
            productCategory.textContent = "Category: " + product.category;

            const productPrice = document.createElement("p");
            productPrice.textContent = "Price: ₹" + product.price.toLocaleString("en-IN");

            productCard.append(
                productName,
                productCategory,
                productPrice
            );

            productContainer.appendChild(productCard);

        });

    }

}


// Button click event

searchBtn.addEventListener("click", searchProducts);


// Enter key event

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        searchProducts();

    }

});
