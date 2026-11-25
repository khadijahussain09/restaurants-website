let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
  alert(name + " added to your cart!");
}

function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

function showCart() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add something first!");
    return;
  }

  let message = "YOUR OLIVE & AMBER CART\n\n";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `${item.name} x ${item.quantity} = Rs. ${itemTotal}\n`;
  });

  message += `\nTotal: Rs. ${total}`;
  message += "\n\nThis is a demo checkout. No real order has been placed.";

  alert(message);
}