

export function formatCurrency(priceCents){
  return (Math.round(priceCents)/100).toFixed(2)
}
export default formatCurrency;

//  this is called default export when u need only one thing to export u can mention it as default
// so thatwhen u importing this no need to use {} curly brackets around them