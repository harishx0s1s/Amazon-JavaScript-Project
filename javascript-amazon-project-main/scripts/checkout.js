import { renderOrderSummary } from "./checkout/orderSummary.js"
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js"
import { loadProducts} from "../data/products.js"
import { loadCart } from "../data/products.js"
import { loadProductsFetch} from "../data/products.js"
import { loadCartFetch } from "../data/cart.js"

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

/*

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
*/

/*

Promise.all([
  new Promise((resolve)=>{
    loadProducts(()=>{
      resolve('load products')
    })
  }),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('load cart')
    })
  })
]).then((values)=>{
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();

})

*/

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


// aync wait example

// async makes function return promise

// function loadPage(){
//   return new Promise((resolve)=>{
//     console.log("page loaded")
//     resolve()
//   })
// }

// loadPage()

// using async await

// async function loadPage(){
//   console.log("page loaded")

//   loadCartFetch
//   return 'harish'   // if we return somethingg from the function thats wraped by async it returns the resolve value we can catch it by then method
// }

// loadPage().then((name)=>{
//   console.log(name)
//   console.log("next step after page loaded")
// })
           // async wraps tha function and makes the function to return promise
           // so we can use then method in async wrapped function
           // we can make wait or dellay to asynchronize function to run by await 
           // we only use await inside of sync function
/*
async function loadPage() {
  console.log("load Page")

  await loadProductsFetch()

  return 'value2'
}

loadPage().then((value)=>{
  console.log("next step")
  console.log(value)
})
*/

// loading page using async await with primise
  
// Error hanling in async await try{} catch{}

// if you want to create an error in synchtronise code use throw
// if you  want to create error in asynchronise code or create an error in future use reject inside promises
/*
async function loadPage(){
  try {
    //throw 'error111'    // throw keyword uded to throw an error voluntearly which skips all the line in try block and go into catch block

    await loadProductsFetch();
      
    await loadCartFetch();

  } catch(error) {
    console.log(`Unexpected error cant render checkout page Error: ${error}`)
  }

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

*/

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

/*

Promise.all([
   new Promise((resolve)=>{
    loadProductsFetch().then(()=>{
      resolve('products loaed')
    })
  }),
    new Promise((resolve)=>{
      loadCartFetch().then(()=>{
        resolve('cart loaded')
      })
    })
]).then((value)=>{
  console.log(value);

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
  
})

*/

/*

// catchin error using try/catch in reular or normal code 
try{
  doesNotExists();   // we catch the error if try block is fail or throw an error
  console.log('next line')
} catch(error){
  console.log(error)
}

*/




// console.log(isSatSun(dayjs().add(7,'days')))
/*
Promise.all([
  loadProductsFetch(),
  loadCartFetch()
]).then(()=>{
  renderOrderSummary()
  renderPaymentSummary()
  renderCheckoutHeader()
})
  */

