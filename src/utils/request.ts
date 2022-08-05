import axios from "axios";
import config from '@/config'
import { getSession } from '../utils/tool'
import { message } from 'antd'

let http = axios.create({
  baseURL: config.backend,
  timeout: 5000
})

http.interceptors.request.use(
  (config:any) => {    
    if(getSession('token')){
      config.headers['authorization'] = `Bearer ${getSession('token')}`
    } 
    return config
  },
  (err:any) => {
    console.log(err)
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (response:any) => {
    let res = response.data
    if(res.code !== 200){
      message.error(res.message)
      return Promise.reject(res)
    }
    message.success(res.message)
    return Promise.resolve(res.data)
  },
  (err:any) => {
    console.log(err);
    return Promise.reject(err)
  }
)

export default http