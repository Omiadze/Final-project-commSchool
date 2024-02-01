const data = localStorage.getItem("savedItems");
const savedItems = JSON.parse(data);
console.log(savedItems);

let itemCount = localStorage.getItem("itemCount");
itemCount = itemCount ? parseInt(itemCount) : 0;
const checkoutCounter = document.getElementById("checkout-counter");
checkoutCounter.textContent = itemCount;

const allItemsDiv = document.getElementById("all-items-div");
showAllItems(savedItems);

function showAllItems(savedItems) {
  console.log(savedItems);
  savedItems.forEach((savedItem) => {
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
      const descItemString = JSON.stringify(savedItem);
      window.location.href = `./desc.html?id=${savedItem.id}`;
      localStorage.setItem("descItem", descItemString);
    });

    allItemsDiv.appendChild(itemDiv);
  });
}

const navigateToPage = (pageUrl) => {
  window.location.href = pageUrl;
};

const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelry = document.getElementById("jewelry");
const electronics = document.getElementById("electronics");
const logo = document.getElementById("logo");
const checkoutIcon = document.getElementById("checkout-icon");

checkoutIcon.addEventListener("click", () => navigateToPage("./pay.html"));

men.addEventListener("click", () => navigateToPage("./men.html"));
women.addEventListener("click", () => navigateToPage("./women.html"));
jewelry.addEventListener("click", () => navigateToPage("./jewelry.html"));
electronics.addEventListener("click", () =>
  navigateToPage("./electronics.html")
);
logo.addEventListener("click", () => navigateToPage("./index.html"));

// hamburger menu display
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
}
