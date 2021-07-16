import {
    fetchQQ,
    fetchCates,
    fetchGoodList
} from '@/utils/api'

export const CHANGE_MSG = 'CHANGE_MSG'
export const CHANGE_MSG_ASYNC = 'CHANGE_MSG_ASYNC'
export const GET_QQ_MUSIC = 'GET_QQ_MUSIC'

export const GET_ALL_CATES = 'GET_ALL_CATES'
export const GET_GOOD_LIST = 'GET_GOOD_LIST'


// redux 的action生成器
export function changeMsgAction(payload) {
    return {
        type: CHANGE_MSG,
        payload
    }
}

// 这是一个异步的action生成器
// redux默认不支持异步的actions生成器
export function changMsgAsyncAction(payload) {
    // 实现原理：通过redux-thunk中间把一个异步的action转化了多个同步的action
    // redux只支持同步的action
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type: CHANGE_MSG,
                payload
            })
        }, 2000)
    }
}

export function getQqMusicAaction(params) {
    return (dispatch)=>{
        fetchQQ(params).then(res=>{
            dispatch({
                type: GET_QQ_MUSIC,
                payload: res.song.list
            })
        })
    }
}

// 获取品类列表
export function getCatesAction(params) {
    return (dispatch)=>{
        fetchCates(params).then(res=>{
            console.log('品类列表', res)
            dispatch({
                type: GET_ALL_CATES,
                payload: res.list
            })
        })
    }
}

// 获取商品列表
export function getGoodListAction(params) {
    return (dispatch)=>{
        fetchGoodList(params).then(res=>{
            console.log('商品列表', res)
            dispatch({
                type: GET_GOOD_LIST,
                payload: res.list
            })
        })
    }
}