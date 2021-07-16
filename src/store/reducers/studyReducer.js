import {
    CHANGE_MSG,
    GET_QQ_MUSIC
} from '../actions'

let initState = {
    msg: 'hello 2005',
    list: [],
    foo: true
}

// 纯函数
// state，表示可被组件共享的数据
// action，是改变state的信号（数据）
export default function reducer(state=initState, action) {
    // state.msg = action.payload
    // 对这个不能被修改的state，进行深复制，我们再去改其副本
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_MSG:
            newState.msg = action.payload
            return newState  // 快照、副本
        case GET_QQ_MUSIC:
            newState.list = action.payload
            return newState
        default:
            return newState
    }
}