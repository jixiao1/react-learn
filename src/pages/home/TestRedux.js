import React, {useEffect} from 'react'

import { connect } from 'react-redux'
import { 
    changeMsgAction,
    changMsgAsyncAction,
    getQqMusicAaction
} from '@/store/actions'

// connect(fn1, fn2)(Home)

// 作用：把状态管理工具中的state映射到当前组件的props上
function mapStateToProps(store) {
    return {
        msg: store.study.msg,
        goodMsg: store.good.msg,
        list: store.study.list
    }
}

// 作用：把actions映射到当前组件的props上
// dispatch 派发，派发action
function mapActionsToProps(dispatch) {
    return {
        changeMsg: payload=>dispatch(changeMsgAction(payload)),
        changMsgAsync: payload=>dispatch(changMsgAsyncAction(payload)),
        getMusic: params=>dispatch(getQqMusicAaction(params))
    }
}


function TestRedux(props) {
    
    /* eslint-disable */
    useEffect(()=>{
        let params = {}
        let str = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=70297795649882252&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E7%8E%8B%E8%8F%B2&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
        str.split('&').map(ele=>{
            let arr = ele.split('=')
            params[arr[0]] = arr[1]
            return false
        })
        params.w = decodeURI(params.w)
        // props.getMusic(params)
        return undefined
    }, [])
    /* eslint-enable */


    function handleClick() {
        // 把'hello 2006' 传递到reducer中去
        props.changeMsg('hello 2006')
    }
    function handleClick2() {
        props.changMsgAsync('hello 2007')
    }
    return(
        <div>
            <div>首页</div>
            <h1>{props.goodMsg}</h1>
            <h1>{props.msg}</h1>
            <button onClick={handleClick}>修改msg</button>
            <button onClick={handleClick2}>异步地修改msg</button>
            <hr />
            {
                props.list.map(ele=>(
                    <div key={ele.id}>{ele.name}</div>
                ))
            }

        </div>
    )
}

export default connect(mapStateToProps, mapActionsToProps)(TestRedux)