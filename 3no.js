function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
      const product = number * i;
      const formattedProduct = `${number} x ${i} = ${product}`;
      console.log(formattedProduct);
    }
  }
  
  multiplicationTable(5);
  