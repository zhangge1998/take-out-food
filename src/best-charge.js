let buildItemTotal=(selectedItems)=> {
  let allItems = loadAllItems();
  let itemTotal = [];
  for (let cartItem of allItems) {
    if (isExit(cartItem, selectedItems)) {
      itemTotal.push({item: cartItem, count: count1, subTotal: subTotal1});
    }
  }
  return itemTotal;
};

let isExit=(allItems, selectedItems)=> {
  for (let selectedItem of selectedItems) {
    let splitInput = selectedItem.split("x");
    let id = splitInput[0].trim();
    let count=splitInput[1].trim();
    if (id === allItems.id) {
      count1 = parseInt(count);
      subTotal1 = allItems.price * count1;
      return 1;
    }
  }
};


