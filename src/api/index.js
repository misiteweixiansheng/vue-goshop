

import ajax from "./ajax"
//根据经纬度获取位置详情
export const reqAddress=(longitude,latitude)=>ajax({
  url:`/position/${latitude},${longitude}`
})

//获取食品分类列表
export const reqFoodCategorys=()=>ajax({
  url:"/index_category"
})
// 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax({
  url:"/shops",
  params:{
    longitude,
    latitude
  }
})