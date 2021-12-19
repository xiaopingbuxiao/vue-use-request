


/**
 * @interface BuildParams
 * @template T
 *  将url 为 /:id/:name data:{id:'11',name:'22',address:'中国'}
 *  返回为  url = /11/22 data={address:"中国"} 
 */
interface BuildParams<T extends Record<string, any>> {
  (url: string, data?: T): { url: string, data: Partial<T> }
}

export const buildParams: BuildParams<any> = (url, data) => {
  if (!data) {
    return { url, data }
  } else {
    const newData = Object.assign({}, data)
    const newUrl = url.replace(/:(\w+)/g, (math: string, key: string) => {
      const value = encodeURIComponent(newData[key])
      if (value === undefined) {
        console.error(`对象上不存在属性${key}`)
      }
      delete newData[key]
      return value
    })
    return { url: newUrl, data: newData }
  }

}



