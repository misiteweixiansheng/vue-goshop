import axios from "axios"
import qs from "qs"

const instance=axios.create({
  timeout:10000,
  baseURL:'/api'
})

instance.interceptors.request.use((config)=>{
  if(config.method.toUpperCase==="POST"&& config.data instanceof Object){
    config.data=qs.stringify(config.data)
  }
  return config
})
instance.interceptors.response.use(
  (response)=>{
    return  response.data
  },
  err=>{
    console.log(err.message)
    return new Promise(()=>{})
  }
)
export default instance