import { renderOrderSummary } from "./checkout/orderSummary.js"
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts } from "../data/products.js"
//import '../data/car.js'
//import '../data/backend-practice.js'
// import '../data/cart-class.js'
// import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
// import isSatSun from "../excercises/15th.js"

//19:32:30

loadProducts(()=>{
  renderOrderSummary()

  renderPaymentSummary()

  renderCheckoutHeader()
})





// console.log(isSatSun(dayjs().add(7,'days')))