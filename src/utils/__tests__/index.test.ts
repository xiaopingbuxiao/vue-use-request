


import { buildParams } from '../index'


describe('测试BuildParams', () => {
  test('BuildParams returns', () => {
    const data = {
      name: 'xiaopingbuxiao',
      age: '18',
      address: 'shanghai'
    }
    const url = `get_user_info/:name/:age`
    const { url: newUrl, data: newData } = buildParams(url, data)

    expect(newUrl === 'get_user_info/xiaopingbuxiao/18').toBeTruthy()
    expect(newData).toEqual({ address: 'shanghai' })
  })

  test('return url is encodeURIComponent', () => {
    const data = {
      name: '小平不小',
      age: '18',
      address: 'shanghai'
    }
    const url = `get_user_info/:name/:age`
    const { url: newUrl, } = buildParams(url, data)
    const equalUrl = `get_user_info/${encodeURIComponent(data.name)}/${encodeURIComponent(data.age)}`
    expect(equalUrl === newUrl).toBeTruthy()
    expect(data).toEqual({
      name: '小平不小',
      age: '18',
      address: 'shanghai'
    })
  })

  test('data is undefined',()=>{
    const data = undefined
    const url = `get_user_info/:name/:age`
    const { url: newUrl, data: newData } = buildParams(url, data)
    expect(newUrl===`get_user_info/:name/:age`).toBeTruthy()
    expect(newData).toBeUndefined()
  })
})
