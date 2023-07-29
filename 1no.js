function discountCalculator(totalPurchaseAmount) {

    if (totalPurchaseAmount < 50) {
      return 0; //no discount
    }
    
    if (totalPurchaseAmount <= 100) {
      discount = 0.05 * totalPurchaseAmount; // 5 % discount 
    }
    
    if (totalPurchaseAmount <= 200) {
      discount = 0.1 * totalPurchaseAmount; // 10 % discount
    }
    
    else {
      discount = 0.15 * totalPurchaseAmount; //15 % discount
    }
    
    discountedAmount = totalPurchaseAmount - discount;
    return discountedAmount;
    }
    var totalPurchaseAmount = 200;
    var discountedAmount = discountCalculator(totalPurchaseAmount);
    console.log("The discounted amount and total amount is $" + discountedAmount);