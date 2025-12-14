import { renderOrderSummary } from "./checkout/orderSummary.js"
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts} from "../data/products.js"
import { loadCart } from "../data/products.js"
//import '../data/car.js'
//import '../data/backend-practice.js'
// import '../data/cart-class.js'
// import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
// import isSatSun from "../excercises/15th.js"


// new Promise((resolve)=>{

//   console.log("promise started") // synchronize code

//   // loadProducts(()=>{        // asynchronize code
//   //   resolve()
//   // })

//   setTimeout(()=>{
//     console.log("3 seconds over");      // asynchronize code
//     resolve()
//   },3000)

// }).then(()=>{                   // next step after promise is resolved
//   console.log("next step sfter resolve is called")
// })

// promise is a class that runs asynchronously 



// loadProducts(()=>{
//   renderOrderSummary()

//   renderPaymentSummary()

//   renderCheckoutHeader()
// })

// calling  LoadProducts function using Promise

/*
new Promise((resolve)=>{
  console.log("promise started") // synchronize code

  loadProducts(()=>{
    resolve()
  })

}).then(()=>{
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
})

new Promise((resolve)=>{
  console.log("cart promise started")

  loadCart(()=>{
    resolve()
  })

}).then(()=>{
  console.log("cart loaded")
})
*/

// callback hell example

// loadProducts(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
//   })
// })

Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{             // asynchronize function
      resolve('proucts loaded')
    })
  }),
  new Promise((resolve)=>{        // asynchronized function
    loadCart(()=>{
      resolve('cart loaded')
    })
  })
]).then((values)=>{
  console.log(values)
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
}) 

 //synchronized code runs immediately

/*

new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('resolve: products loaded')
  })
 
}).then((value)=>{
  console.log(value)
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve('resolve: cart loaded')
    })
  })
  
}).then((value)=>{
  console.log(value)
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
})

*/



// console.log(isSatSun(dayjs().add(7,'days')))