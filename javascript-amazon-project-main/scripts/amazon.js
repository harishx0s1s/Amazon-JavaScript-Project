const products = [
  {
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',         //1. we creating sample hard code js-product-grid products object into list
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 1090

  },
  {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating:{
      stars: 4,
      count: 127
    },
    priceCents: 2095
  },{
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799
  }
]

let productsHTML = '';                                // we are using acumalator pattern here its just creating a variable to store a value ffor late use after looping thr an array

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
            <select>
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

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`
       
})

console.log(productsHTML)  

document.querySelector('.js-products-grid')    // using DOM to get html element by elementsclass name and changing the innnrHTML property with our generated sample code
 .innerHTML = productsHTML

