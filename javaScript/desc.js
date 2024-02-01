const data = localStorage.getItem("descItem");
const descItem = JSON.parse(data);
console.log(descItem);

const descItemsDiv = document.getElementById("desc-items-div");
showDescItem(descItem);

function showDescItem(descItem) {
  console.log(descItem);

  const itemDiv = document.createElement("div");
  itemDiv.classList.add("desc-container");
  itemDiv.innerHTML = `
    <div class="desc-div">
      <img class="desc-img" src="${descItem.image}" alt="">
    </div>
    <div class="desc-info">
      <h1>${descItem.title}</h1>
      <p>Category: ${descItem.category}</p>
      <p>Price: GEL ${descItem.price}</p>
      <p>DESCRIPTION: ${descItem.description}</p>
      <button class="add-to-cart" id="add-to-cart">Add to cart</button>
    </div>
  `;
  descItemsDiv.appendChild(itemDiv);
}

const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelry = document.getElementById("jewelry");
const electronics = document.getElementById("electronics");
const checkoutIcon = document.getElementById("checkout-icon");
checkoutIcon.addEventListener("click", () => navigateToPage("./pay.html"));

men.addEventListener("click", () => navigateToPage("./men.html"));
women.addEventListener("click", () => navigateToPage("./women.html"));
jewelry.addEventListener("click", () => navigateToPage("./jewelry.html"));
electronics.addEventListener("click", () =>
  navigateToPage("./electronics.html")
);
logo.addEventListener("click", () => navigateToPage("./index.html"));

// Display checkout
let itemCount = localStorage.getItem("itemCount");
const addToCart = document.getElementById("add-to-cart");

addToCart.addEventListener("click", () => {
  itemCount++;
  localStorage.setItem("itemCount", itemCount);
  updateItemCount();
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(descItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

updateItemCount();

function updateItemCount() {
  if (itemCount) {
    const checkoutCounter = document.getElementById("checkout-counter");
    checkoutCounter.textContent = itemCount.toString();
  }
}

function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

// hamburger menu display
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}
