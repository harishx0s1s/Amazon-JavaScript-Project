import {cart} from '../data/cart.js'
import { products } from '../data/products.js';

let productsHTML = '';                                // we are using acumalator pattern here its just creating a variable to store a value ffor later use after looping thr an array

products.forEach((product,index)=>{                    // we are loop thr an array by using forEach() so that we can get elements in array one by one medjing value with html 
  productsHTML += `                                    
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>           

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
           data-product-id="${product.id}"> 
            Add to Cart
          </button>
        </div>`
       
})       
  

document.querySelector('.js-products-grid')    // using DOM to get html element by elementsclass name and changing the innnrHTML property with our generated sample code
 .innerHTML = productsHTML

 const addedMessageTimeouts = {};

 document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click',()=>{

      const {productId} = button.dataset;

      document.querySelector(`.js-added-to-cart-${productId}`).classList.add('after-added-to-cart')

      const previusTimeoutId = addedMessageTimeouts[productId]

      if (previusTimeoutId){
        clearTimeout(previusTimeoutId)
      };

      const timeoutId = setTimeout(()=>{
        document.querySelector(`.js-added-to-cart-${productId}`).classList.remove('after-added-to-cart')
      },2000)

      addedMessageTimeouts[productId] = timeoutId






      // check item already in cart or not
      let matchingItem;    // returns truthy/Falsy value

      cart.forEach((item)=>{        // looping thr an arrow to check item already there or not
        if(productId === item.productId){     // if item there in cart list as an object
          matchingItem = item                  // store the matching item in seprate variable
        }
      });

      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`)

      const quantity = Number(quantitySelector.value)

      if (matchingItem){             // if matchingItem is truthy
        matchingItem.quantity += quantity     // increase the matching product quuantity +1
      } else {                       // else push the product object(productId , quantity) in cart array
        cart.push({
          productId,         //productId: productId,
          quantity             // quantity: quantity
        })
      }

       
      let cartQuantity = 0
      cart.forEach((item)=>{
        cartQuantity += item.quantity
      })
      
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
    })
  })

