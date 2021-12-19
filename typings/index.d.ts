import type { Ref } from "vue";



export type MyBeRef<T> = T | Ref<T>
import type * as Axios from 'axios'



/** useRequest 的配置项  */
export interface Options<T> {
  cancelable: boolean,
  immediate: boolean,
  initialData: T,
  before: (config: Axios.AxiosRequestConfig) => Axios.AxiosRequestConfig,
  after: (response: Axios.AxiosResponse) => Axios.AxiosResponse,
  onError: (error: any) => void
}

/* useRequest 函数类型 */
export interface UseRequest<T> {
  (config: Axios.AxiosRequestConfig | string, options?: Options<T>): {
    pending: Ref<boolean>,
    data: Ref<T>
  }
}



/* 创建一个 useRequest函数的 */
export interface CreateUseRequestHelper {
  (config:Axios.AxiosRequestConfig): {
    instance: Axios.AxiosInstance,
    useRequest: UseRequest<any>
  }
}

