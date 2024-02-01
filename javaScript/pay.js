const totalH1 = document.getElementById("total-h1");
const checkoutContainer = document.getElementById("checkout-container");

const data = localStorage.getItem("cartItems");
const cartItems = JSON.parse(data);

let total = 0;

displayTotalPrice(cartItems);

function displayTotalPrice(cartItems) {
  if (cartItems) {
    cartItems.forEach((cartItem) => {
      total += cartItem.price;
    });
    total = total.toFixed(2);
    totalH1.textContent = `Total price: Gel ${total}`;
  }
}

function submitPayment() {
  const form = document.getElementById("paymentForm");
  if (form.checkValidity()) {
    // Handling the payment
    checkoutContainer.style.display = "none";
    localStorage.removeItem("cartItems");
    localStorage.removeItem("itemCount");
    alert("Payment submitted!");
  } else {
    // If form is not valid
    alert("Please fill in all required fields.");
  }

  total = 0;
}

function cancel() {
  localStorage.removeItem("cartItems");
  localStorage.removeItem("itemCount");
  total = 0;
  totalH1.textContent = `Total price: Gel ${total}`;
  checkoutContainer.style.display = "none";
}

displayCartItems(cartItems);

function displayCartItems(cartItems) {
  console.log(cartItems);
  if (cartItems) {
    cartItems.forEach((cartItem) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item-div");
      itemDiv.innerHTML = `
      <div class="cart-item-img">
        <img src="${cartItem.image}" alt="">
      </div>
      <div class="short-info">
        <h3>${cartItem.title}</h3>
        <p>GEL ${cartItem.price}</p>
      </div>
    `;
      checkoutContainer.appendChild(itemDiv);
    });
  }
}
