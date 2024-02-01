const data = localStorage.getItem("savedItems");
const savedItems = JSON.parse(data);
console.log(savedItems);

// Get itemCount
let itemCount = localStorage.getItem("itemCount");
itemCount = itemCount ? parseInt(itemCount) : 0;
const checkoutCounter = document.getElementById("checkout-counter");
checkoutCounter.textContent = itemCount;

const menItemsDiv = document.getElementById("men-items-div");
showMensItems(savedItems);

function showMensItems(savedItems) {
  console.log(savedItems);
  savedItems.forEach((savedItem) => {
    if (savedItem.category === "men's clothing") {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");
      itemDiv.innerHTML = `
        <div class="item-img">
          <img class="best-seller" src="${savedItem.image}" alt="">
          <button class="description-btn">Description</button>
        </div>
        <div class="short-info">
          <h3>${savedItem.title}</h3>
          <p>GEL ${savedItem.price}</p>
        </div>
      `;

      const descBtn = itemDiv.querySelector(".description-btn");
      descBtn.addEventListener("click", () => {
        window.location.href = `./desc.html?id=${savedItem.id}`;
        localStorage.setItem("descItem", JSON.stringify(savedItem));
      });

      menItemsDiv.appendChild(itemDiv);
    }
  });
}

const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelry = document.getElementById("jewelry");
const electronics = document.getElementById("electronics");
const logo = document.getElementById("logo");

const checkoutIcon = document.getElementById("checkout-icon");
checkoutIcon.addEventListener("click", () => navigateToPage("./pay.html"));

women.addEventListener("click", () => navigateToPage("./women.html"));
jewelry.addEventListener("click", () => navigateToPage("./jewelry.html"));
electronics.addEventListener("click", () =>
  navigateToPage("./electronics.html")
);
logo.addEventListener("click", () => {
  console.log("clicked");
  navigateToPage("./index.html");
});

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
