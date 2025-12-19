import { loadProductsFetch } from "../data/products.js";
import { getProduct } from "../data/products.js";
import { getOrder } from "../data/orders.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

async function loadPage(){
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId')
  console.log(orderId)
  console.log(productId)


  const product = getProduct(productId);
  const order = getOrder(orderId)


  let productDetails;
  order.products.forEach((details)=>{
    if (details.productId === product.id){
      productDetails = details
    }
  })

  const orderTimeString = dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')
  const productName = product.name

  const today = dayjs();
  const orderTime = dayjs(order.orderTime)
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime)

  const percentProgress = ((today - orderTime) / (deliveryTime - orderTime)) * 100
  
  const trackingHTML = `
      <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${orderTimeString}
        </div>

        <div class="product-info">
          ${productName}
        </div>

        <div class="product-info">
          Quantity: ${productDetails.quantity}
        </div>

        <img class="product-image" src="${product.image}">

        <div class="progress-labels-container">
          <div class="progress-label ${
            percentProgress < 50 ? 'current-status' : ''
          }">
            Preparing
          </div>
          <div class="progress-label ${
            (percentProgress < 100) ? 'current-status': ''
          }">
            Shipped
          </div>
          <div class="progress-label ${
            percentProgress >= 100 ? 'current-status' : ''
          }">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width:${percentProgress + 10}%"></div>
        </div>
      </div>
  `

  document.querySelector('.js-order-tracking').innerHTML = trackingHTML

  console.log(percentProgress)
  
}

loadPage()