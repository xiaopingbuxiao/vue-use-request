import axios from 'axios'


import { createUseRequestHelper } from '../index'


describe('createUseRequestHelper', function () {


  const { instance, useRequest } = createUseRequestHelper({})

  test('createUseRequestHelper is function', () => {
    expect(typeof createUseRequestHelper === 'function').toBeTruthy()
  })

  test('createUseRequestHelper return is correct',()=>{
    expect(typeof instance.post==='function').toBeTruthy()
    expect(typeof instance.get==='function').toBeTruthy()
    expect(typeof instance.interceptors==='object').toBeTruthy()
    expect(typeof useRequest==='function').toBeTruthy()
  })





})

