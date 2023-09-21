import request from '@/utils/request'

// 查询 合金成分
export function getAlloyComposition(data) {
  return request({
    url: 'material/point/select_hv',
    method: 'POST',
    data
  })
}

// 查询 static_ele
export function getacStatic_ele(query) {
  return request({
    url: 'material/point/select_attribute',
    method: 'GET',
    params: query
  })
}
