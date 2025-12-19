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
    
    let matchingItem;    

    cart.forEach((CartItem)=>{        
      if(productId === CartItem.productId){     
        matchingItem = CartItem               
      }
    });


    
    const quantity = 1

    if (matchingItem){            
      matchingItem.quantity += quantity  
    } else {                      
      cart.push({
        productId: productId,        
        quantity: quantity,           
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

