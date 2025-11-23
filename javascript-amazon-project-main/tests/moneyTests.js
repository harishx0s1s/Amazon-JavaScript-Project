import {formatCurrency} from "../scripts/utils/money.js"

// a jasmine is javascript testing framework which let us write tests easily we can describe function to create test suits
// we can pass the value into it function after we pass it gives object with metods we  can use it
// we use toEqual to see expected value 


describe('test suits: FormatCurrency',()=>{
  it('converrts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95')
  }),
  it('work with 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00')
  }),
  it('round ups if decimal above 5',()=>{
    expect(formatCurrency(2000.6)).toEqual('20.01')
  }),
  it('round downs to nearest num',()=>{
    expect(formatCurrency(2000.4)).toEqual('20.00')
  })
})


