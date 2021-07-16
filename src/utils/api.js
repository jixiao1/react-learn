import axios from './axios'


export function fetchQQ(params) {
    return axios({
        url: '/soso/fcgi-bin/client_search_cp',
        method: 'GET',
        params
    })
}


// 获取所有品类
export function fetchCates(params) {
    return axios({
        url: '/jd/cates',
        method: 'GET',
        params
    })
}

// 添加商品
export function fetchGoodAdd(data) {
    return axios({
        url: '/jd/good/update',
        method: 'POST',
        data
    })
}

// 商品列表
export function fetchGoodList(params) {
    return axios({
        url: '/jd/good/list',
        method: 'GET',
        params
    })
}
