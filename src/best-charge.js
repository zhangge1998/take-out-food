let save=[];
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

let buildNowTotal=(itemTotal)=> {
  let total = 0;
  for (let itemTotal1 of itemTotal) {
    total += itemTotal1.subTotal;
  }
  return {list: itemTotal, nowTotal: total};
};

let buildFinalTotal=(nowTotal)=> {
  let save = sSave(nowTotal);
  let finalTotal = nowTotal.nowTotal - save;
  return {nowTotal: nowTotal, save: save, finalTotal: finalTotal};
};

let sSave=(nowTotal)=> {
  let promotions = loadPromotions();
  if (nowTotal.finalTotal >= 30) {
    let save1 = 6;
    let save2 = 0;
    for (let now of nowTotal.list) {
      if (isHalfPrice(now.item, promotions)) {
        save2 += now.subTotal / 2;
      }
    }
    if (save1 > save2) {
      nowTotal.type = "满30减6元，省6元";
      return save1;
    }
    else {
      nowTotal.type = "指定菜品半价";
      return save2;
    }
  }
  else {
    let save3 = 0;
    for (let now of nowTotal.list) {
      if (isHalfPrice(now.item, promotions)) {
        save3 += now.subTotal / 2;
        nowTotal.type = "指定菜品半价";
      }
    }
    return save3;
  }
};

let isHalfPrice=(nowTotal, promotions)=> {
  for (let item of promotions[1].items) {
    if (item === nowTotal.id) {
      save.push(nowTotal.name);
      return 1;
    }
  }
};

let output=(final)=> {
  let string = "============= 订餐明细 =============";
  for (let temp of final.nowTotal.list) {
    string += "\n" + temp.item.name + " x " + temp.count + " = " + temp.subTotal + "元";
  }
  string += "\n-----------------------------------";
  if (final.nowTotal.type === "指定菜品半价") {
    string += "\n使用优惠:\n" + final.nowTotal.type + "(";
    for (var j = 0; j < save.length; j++) {
      if (j < save.length - 1)
        string += save[j] + '，';
      else
        string += save[j];
    }
    string += ")，" + "省" + final.save + "元" + "\n-----------------------------------" + "\n总计：" + final.finalTotal + "元" + "\n===================================";
  }
  else if (final.nowTotal.type === "满30减6元，省6元") {
    string += "\n使用优惠:\n" + final.nowTotal.type + "\n-----------------------------------" + "\n总计：" + final.finalTotal + "元" + "\n===================================";
  }
  else {
    string += "\n总计：" + final.finalTotal + "元" + "\n===================================";
  }
  return string;
};


