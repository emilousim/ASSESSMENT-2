///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

let reduceCart = cart.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.price;}, 0);

    const summedPrice = console.log(reduceCart)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax){
let grandTotal = ((cartTotal * tax) + cartTotal - (couponValue))
return grandTotal
}

console.log(calcFinalPrice(5, .07, .1))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
my customer object would contain customer id, first name, last name, and the items in cart, price of items. customer id will be an incrementing integer in case someone has the same first/last name. each customer will have an individual id. first/last name will be a string because it's a word and text can go into strings. items in cart will be a string as well because it's text. price of items will be a float because the price will always be a number. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let Customer = {
    customer_id: 1,
    first_name: "Emily",
    last_name: "Simpson",
    itemsInCart: "pizza",
    itemPrice: 9.99
}

console.log(Customer)
