class Cart {

      cartItems;
      #localStorageKey;      // undefine variables

      constructor(localStorageKey){
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
      }


      #loadFromStorage(){     //  function
        this.cartItems =  JSON.parse(localStorage.getItem(this.#localStorageKey))

        if (!this.cartItems){

          this.cartItems = [{
              productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
              quantity: 2,
              deliveryOptionId: '1'
            },{
              productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
              quantity: 1,
              deliveryOptionId: '2'
            }]
        } // condition blocks ends
      }// local storage functions ends


      saveToStorage(){
        localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems))
      }


      addToCart(productId){
        let matchingItem;    // returns truthy/Falsy value

        this.cartItems.forEach((CartItem)=>{        // looping thr an arrow to check item already there or not
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
        this.cartItems.push({
          productId: productId,         //productId: productId,
          quantity: quantity,            // quantity: quantity
          deliveryOptionId: '1'
        })
      }

      this.saveToStorage();
      }


      removeFromCart(productId){

        const newCart = []

        this.cartItems.forEach((cartItem)=>{
          if (cartItem.productId !== productId){
            newCart.push(cartItem)
          }
        })

        this.cartItems = newCart

        this.saveToStorage();
            
      }


      updateCartQuantity(){
        let cartQuantity = 0
        this.cartItems.forEach((CartItem)=>{
          cartQuantity += CartItem.quantity
        })
          
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
      }


      updateQuantity(productId, NewQuantity){
        let matchingItem;

        this.cartItems.forEach((cartItem)=>{
          if(productId === cartItem.productId){
            matchingItem = cartItem
          }
        })

        matchingItem.quantity = NewQuantity

        this.saveToStorage()
      }


      updatedeliverOption(productId, deliveryOptionId){
        let matchingItem;

        this.cartItems.forEach((cartItem)=>{
          if (productId === cartItem.productId){
            matchingItem = cartItem
          }
        })
        
        matchingItem.deliveryOptionId = deliveryOptionId

        this.saveToStorage()
      }

}


// create multiple objects by class

const cart = new Cart('cart-oop');
const businessCart = new Cart('business-cart')

console.log(cart)
console.log(businessCart)

console.log(cart instanceof Cart)
console.log(businessCart instanceof Cart)

