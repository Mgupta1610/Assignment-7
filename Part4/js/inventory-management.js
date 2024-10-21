/*eslint-env browser*/

const inventory = [
  [4824, "Shirt", 10, 15.99],
  [6343, "Jeans", 22, 39.99],
  [3223, "Socks", 36, 9.99],
  [2233, "Hat", 12, 14.99],
  [9382, "Jacket", 5, 49.99]
];

function display() {
  console.log("Product Inventory:");
  for (const product of inventory) {
    console.log(`${product[0]} ${product[1]} (${product[2]}) $${product[3].toFixed(2)}`);
  }
}

function update() {
  const sku = parseInt(prompt("Enter the SKU of the product to update:"));
  const quantity = parseInt(prompt("Enter the new stock quantity:"));

  for (const product of inventory) {
    if (product[0] === sku) {
      product[2] = quantity;
      console.log(`Stock quantity for SKU ${sku} updated to ${quantity}.`);
      return;
    }
  }

  console.log(`Product with SKU ${sku} not found.`);
}

function mainMenu() {
  while (true) {
    window.console.log("\nInventory Management \n");
    window.console.log("Command Menu");
    window.console.log("view : View all products");
    window.console.log("update : Update any product's quantity by entering sku");
    window.console.log("exit : Terminate program\n");
    const choice = prompt("Choose an option:\n1. View all products\n2. Update product inventory\n3. Exit");
    switch (choice) {
      case "1":
        display();
        break;
      case "2":
        update();
        break;
      case "3":
        return;
      case null:
        return;
      default:
        console.log("Invalid option. Please choose a valid option.");
    }
  }
}

console.log("Product Inventory Management System");
mainMenu();

  


