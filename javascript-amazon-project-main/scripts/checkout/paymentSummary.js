import { cart } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary(){

  let productPriceCents = 0
  let ShippingPriceCents = 0
  let ItemsCount = 0
  
  cart.forEach((cartItem)=>{
   
   ItemsCount += cartItem.quantity
    
   const product = getProduct(cartItem.productId)

   const productPriceEach = product.priceCents * cartItem.quantity

   productPriceCents += productPriceEach;

   const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)

   ShippingPriceCents += deliveryOption.priceCents

  })
   
   const totalBeforeTaxCents = productPriceCents + ShippingPriceCents
   
   const taxCents = totalBeforeTaxCents * 10/100    // you can also say * 0.1

   const totalCents = totalBeforeTaxCents + taxCents


   const paymentSummaryHTML = 
   
   `

   <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${ItemsCount}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(ShippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
   `

   document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML

}

