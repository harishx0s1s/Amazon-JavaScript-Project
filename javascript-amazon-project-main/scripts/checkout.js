import { renderOrderSummary } from "./checkout/orderSummary.js"
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts} from "../data/products.js"
import { loadCart } from "../data/products.js"
import { loadProductsFetch} from "../data/products.js"
import { loadCartFetch } from "../data/cart.js"


async function loadPage(){
  try{
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
  } catch(error){
    console.log('Unexpecte error. Please try again later')
  }
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  console.log('checkout page loaded')
}

loadPage()
