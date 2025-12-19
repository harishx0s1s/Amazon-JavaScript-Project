import {formatCurrency} from "../../scripts/utils/money.js"

// writing code to test code - test cases

// testing a every possible situation is called testcase

console.log("test suite: FormatCurrency")

console.log("convvert Cents into dollars")

if (formatCurrency(2095) === '20.95'){
  console.log("passed")
} else {
  console.log('failed')
}

console.log('Works with 0')

if (formatCurrency(0) === '0.00'){
  console.log("passed")
} else {                              
  console.log("failed")
}

console.log("roundds up to the nearest number")

if (formatCurrency(2000.5) === '20.01'){
  console.log("passed")
} else {
  console.log("failed")
} 

console.log("round downs to the nearest number")

if (formatCurrency(2000.4) === '20.00'){
  console.log('passed')
} else {
  console.log('failed')
}