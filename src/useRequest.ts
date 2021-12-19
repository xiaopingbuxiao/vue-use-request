import { ref, shallowReactive, shallowRef } from 'vue'

import { AxiosInstance, AxiosRequestConfig } from 'axios'


// import type { ShallowRef } from 'vue'

interface Options<T> {
  cancelable?: boolean,
  immediate?: boolean,
  initialData?: T,
  before?: () => void,
  after?: () => void,
}



/* 
Î*
   useRequest(url,{})
   useRequest({methos:'',url:'',data:{}})
 */





export const useRequest = <T>(instance: AxiosInstance, config: AxiosRequestConfig | string, options?: Options<T>) => {


  const requestConfig: AxiosRequestConfig = typeof config === 'string' ? { url: config, method: 'get' } : config

  const pending = ref<boolean>(false)

  // const data = shallowRef(null)























  return {
    pending,
    // data
  }

}





