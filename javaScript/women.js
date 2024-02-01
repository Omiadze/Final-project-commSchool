const data = localStorage.getItem("savedItems");
const savedItems = JSON.parse(data);
console.log(savedItems);

// get itemCount
let itemCount = localStorage.getItem("itemCount");
itemCount = itemCount ? parseInt(itemCount) : 0;
const checkoutCounter = document.getElementById("checkout-counter");
checkoutCounter.textContent = itemCount;

const womenItemsDiv = document.getElementById("women-items-div");
showWomensItems(savedItems);

function showWomensItems(savedItems) {
  console.log(savedItems);
  savedItems.forEach((savedItem) => {
    if (savedItem.category === "women's clothing") {
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

      womenItemsDiv.appendChild(itemDiv);
    }
  });
}

const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelery = document.getElementById("jewelry");
const electronics = document.getElementById("electronics");
const logo = document.getElementById("logo");
const checkoutIcon = document.getElementById("checkout-icon");
checkoutIcon.addEventListener("click", () => navigateToPage("./pay.html"));

jewelery.addEventListener("click", () => navigateToPage("./jewelry.html"));
electronics.addEventListener("click", () =>
  navigateToPage("./electronics.html")
);
logo.addEventListener("click", () => navigateToPage("./index.html"));
men.addEventListener("click", () => navigateToPage("./men.html"));
women.addEventListener("click", () => navigateToPage("./women.html"));

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
