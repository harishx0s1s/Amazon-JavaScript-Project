export let cart;

loadFromStorage();

export function loadFromStorage(){
  cart =  JSON.parse(localStorage.getItem('cart')) 

if (!cart){

  cart = [
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ]

}
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}




export function addToCart(productId){
    // check item already in cart or not
    let matchingItem;    // returns truthy/Falsy value

    cart.forEach((CartItem)=>{        // looping thr an arrow to check item already there or not
      if(productId === CartItem.productId){     // if item there in cart list as an object
        matchingItem = CartItem                 // store the matching item in seprate variable
      }
    });

    // const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)
    // const quantity = Number(quantitySelector.value)
    
    const quantity = 1

    if (matchingItem){             // if matchingItem is truthy
      matchingItem.quantity += quantity     // increase the matching product quuantity +1
    } else {                       // else push the product object(productId , quantity) in cart array
      cart.push({
        productId: productId,         //productId: productId,
        quantity: quantity,            // quantity: quantity
        deliveryOptionId: '1'
      })
    }

    saveToStorage();
}
 

  
    


export function removeFromCart(productId){
  const newCart = []

  cart.forEach((cartItem)=>{
    if (cartItem.productId !== productId){
       newCart.push(cartItem)
    }
  })

  cart = newCart

  saveToStorage();
}

export function updateCartQuantity(){
 let cartQuantity = 0
    cart.forEach((CartItem)=>{
      cartQuantity += CartItem.quantity
    })
      
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}


export function updateQuantity(productId, NewQuantity){
  let matchingItem;

  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem
    }
  })

  matchingItem.quantity = NewQuantity

  saveToStorage()
  
}

export function updatedeliverOption(productId, deliveryOptionId){
   let matchingItem;

   cart.forEach((cartItem)=>{
     if (productId === cartItem.productId){
      matchingItem = cartItem
     }
   })
  
   matchingItem.deliveryOptionId = deliveryOptionId

   saveToStorage()

}

export async function loadCartFetch(){
  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  return text;
}

