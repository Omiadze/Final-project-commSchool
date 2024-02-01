const bestSellers = document.getElementById("best-sellers");
const men = document.getElementById("men");
const women = document.getElementById("women");
const jewelery = document.getElementById("jewelry");
const electronics = document.getElementById("electronics");
const logo = document.getElementById("logo");
const checkoutIcon = document.getElementById("checkout-icon");

checkoutIcon.addEventListener("click", () => navigateToPage("./pay.html"));

const shopBtn = document.getElementById("shop-btn");

// get itemCount
let itemCount = localStorage.getItem("itemCount");
itemCount = itemCount ? parseInt(itemCount) : 0;
const checkoutCounter = document.getElementById("checkout-counter");
checkoutCounter.textContent = itemCount;

const apiUrl = "https://fakestoreapi.com/products";
getItems(apiUrl);

async function getItems(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    showTrendingItems(data);
    saveItemsInLocalStorage(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function showTrendingItems(items) {
  console.log(items);
  items.forEach((item) => {
    if (
      item.rating.rate >= 4.5 &&
      item.category != "electronics" &&
      item.category != "jewelery"
    ) {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("item-div");
      itemDiv.innerHTML = `
                <div class="item-img">
                    <img class="best-seller" src="${item.image}" alt="">
                    <button class="description-btn" id="desc-btn">Description</button>
                </div>
                <div class="short-info">
                    <p class="best-seller-p">Best Seller</p>
                    <h3>${item.title}</h3>
                    <p>GEL ${item.price}</p>
                </div>
            `;
      const descBtn = itemDiv.querySelector(".description-btn");
      descBtn.addEventListener("click", () => {
        window.location.href = `./desc.html?id=${item.id}`;
        localStorage.setItem("descItem", JSON.stringify(item));
      });

      bestSellers.appendChild(itemDiv);
    }
  });
}

function saveItemsInLocalStorage(items) {
  localStorage.setItem("savedItems", JSON.stringify(items));
}

men.addEventListener("click", () => navigateToPage("./men.html"));
women.addEventListener("click", () => navigateToPage("./women.html"));
jewelery.addEventListener("click", () => navigateToPage("./jewelry.html"));
electronics.addEventListener("click", () =>
  navigateToPage("./electronics.html")
);
logo.addEventListener("click", () => navigateToPage("./index.html"));
shopBtn.addEventListener("click", () => navigateToPage("./allItems.html"));

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
