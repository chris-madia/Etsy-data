// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);


// 1: Show me how to calculate the average price of all items.
function question1() {
  let total = 0

  for (let i = 0; i < data.length; i++) {
    total = total + data[i].price;
  }
  let average = total / data.length;
  console.log(average);

}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  let newitems = []
  for(let i = 0; i < data.length; i++){
    if ((data[i].price >= 14.00) && (data[i].price <= 18.00)){
      newitems.push(data[i].title);

    }
  }
  // if ((data.price >= 14.00) || (data.price <= 18.00)){
    console.log(newitems);
    // newitems.push(data);
  }






// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  let gbp = []
  for (let i = 0; i < data.length; i++){
    if(data[i].currency_code === 'GBP'){
      gbp.push(data[i].title);
    }

  }
  console.log(gbp);
}


// 4: Display a list of all items who are made of wood.
function question4() {
  let woodenItems = []
  for (let i = 0; i < data.length; i++){
  if(/wood/.test(data[i].materials)){
    woodenItems.push(data[i].title);
  }
}
console.log(woodenItems);
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  let totalParts = []
  for (let i = 0; i < data.length; i ++){
    if(data[i].materials.length >= 8){
      totalParts.push(data[i].title + "has" + data[i].materials.length + "materials");
    }
  }
  console.log(totalParts);
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  let Selleritems = []
  for(let i = 0; i < data.length; i ++){
    if(data[i].who_made === "i_did"){
      Selleritems.push(data[i].title);

    }
  }
  console.log(Selleritems.length + " " + " items were made by their sellers.");

}
