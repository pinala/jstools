import { isSymbol } from '../src'
describe("test: isSymbol",()=>{
  test("isSymbol",()=>{
    expect(isSymbol('test')).toBe(false)
    expect(isSymbol(Symbol('test'))).toBe(true)
  })
})