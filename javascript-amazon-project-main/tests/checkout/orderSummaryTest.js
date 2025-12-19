import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";
import { loadProducts, loadProductsFetch }  from "../../data/products.js";
          //  Integration Test - tests many units/pieces of code working together

describe('Test suite: renderOrderSummary',()=>{ 

  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'

  beforeAll(async ()=>{
    await loadProductsFetch();
  })


  beforeEach(()=>{
    spyOn(localStorage, 'setItem')

    document.querySelector('.js-test-container').innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>        
      <div class="js-checkout-header"></div>
    `

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([
        {
          productId: productId1,       
          quantity: 2,
          deliveryOptionId: '1'
        },{
          productId:productId2,
          quantity: 1,
          deliveryOptionId: '2'
        }
      ]);
    });
   
    loadFromStorage();
    renderOrderSummary();
  })
  

  it('display the cart ',()=>{
  
    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(2)
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2')      
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1')

    document.querySelector('.js-test-container').innerHTML = ''    // clearing the html we put in contasiner thst we created in test.html file 
  });

  it('removes a prouct from container', ()=>{

    document.querySelector(`.js-delete-link-${productId1}`).click();   // this is use to delete (we del the first product that we created in cart)

    expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1)   // after deletin we checking the length (2-1=1) so true its passed

    expect(document.querySelector(`.js-cart-item-container-${productId1}`)).toEqual(null)  // after deleted we make sure the product we passed in click to delete is deleted ? if its it return null so its passed the test

    expect(document.querySelector(`.js-cart-item-container-${productId2}`)).not.toEqual(null)   // jasmine gives property not to check item not deleted

    expect(cart.length).toEqual(1)  // checking the cart length 

    expect(cart[0].productId).toEqual(productId2)

    document.querySelector('.js-test-container').innerHTML = ''
  });

})
