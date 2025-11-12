import { cart } from "./cart.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
},{
  id: '2',
  deliveryDays: 3,
  priceCents: 499
  
},{
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}]


export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if (option.id === deliveryOptionId){
      deliveryOption = option
    }
  })
  return deliveryOption || deliveryOptions[0];
}

function isWeekend(date){
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
}

export function calculateDeliveryDate(deliveryOption){
  // const date = dayjs();
  // const deliveryDate = date.add(deliveryOption.deliveryDays,'days');
  // const today = dayjs()   // using dayjs external lib to puts todays date 
  
  let remainingDays = deliveryOption.deliveryDays  // how much days use chose

  let deliveryDate = dayjs();   // updating todays date to deliverydate

  while (remainingDays > 0){                    // looping until condition met false
    deliveryDate = deliveryDate.add(1, 'day')   // updating new date orr add one date extra like 5 to 6
    const dayName = deliveryDate.format('ddd');  // geting that date day name by format()

    if (!isWeekend(deliveryDate)) {
      remainingDays --
    }

  }

  return deliveryDate.format('dddd, MMMM D')

  
}

