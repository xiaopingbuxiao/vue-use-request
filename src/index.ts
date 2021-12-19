/* eslint-disable @typescript-eslint/no-unused-vars */



import type * as Axios from 'axios'
import axios from 'axios/dist/axios.min.js'


import {
  Options,
  UseRequest,
  CreateUseRequestHelper,
  MyBeRef
} from '../typings/index'

import { buildParams } from '@/utils/index'
import {
  ref,
  shallowReactive,
  shallowRef,
  onMounted,
  unref
} from 'vue'



const defaultOptions: Options<any> = {
  cancelable: false,
  immediate: true,
  initialData: null,
  before: config => config,
  after: response => response,
  onError: error => ({})
}











export const createUseRequestHelper: CreateUseRequestHelper = (config: Axios.AxiosRequestConfig) => {

  const instance: Axios.AxiosInstance = axios.create(config)


  /* 如果是get 请求参数同样从data中获取 */
  instance.interceptors.request.use((config: Axios.AxiosRequestConfig) => {
    if (config.method?.toLocaleLowerCase() === 'get') {
      config.params = config.data
    }
    return config
  })


  return {
    instance,
    useRequest: <T>(config:Axios.AxiosRequestConfig | string, options: Options<T> = { ...defaultOptions }) => {
      let requestConfig:Axios.AxiosRequestConfig = typeof config === 'string' ? { url: config, method: 'get' } : config

      const pending = ref<boolean>(false) // loading 状态
      const data = shallowRef<T | null>(options?.initialData || null) //data
      const error = ref<Error | null>(null) // error
      const cancel = ref<Axios.Canceler>() //取消请求函数

      const requestOptions = { ...defaultOptions, options }

      /* 如果需要支持取消 */
      if (requestOptions.cancelable) {
        const cancelToken: Axios.CancelTokenStatic = axios.CancelToken;
        const source = cancelToken.source();
        requestConfig = { ...requestConfig, cancelToken: source.token }
      }


      const execute: (data:any) => void = () => {
        console.log(requestConfig.url)

        // const url = buildParams(unref(requestConfig.url),requestConfig.data)


      }





      // onMounted(async () => {
      //   try {
      //     pending.value = true
      //     const res = await instance(requestConfig)
      //     const { data } = res
      //     data.value = data
      //   } catch (err) {
      //     requestOptions.onError(err)
      //     error.value = err as Error
      //   } finally {
      //     pending.value = false
      //   }
      // })


      return {
        pending,
        data,
        cancel
      }
    }

  }
}
