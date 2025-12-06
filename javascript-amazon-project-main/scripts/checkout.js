import { renderOrderSummary } from "./checkout/orderSummary.js"
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
import isSatSun from "../excercises/15th.js"
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import '../data/cart-class.js'

renderOrderSummary()

renderPaymentSummary()

renderCheckoutHeader()




// console.log(isSatSun(dayjs().add(7,'days')))