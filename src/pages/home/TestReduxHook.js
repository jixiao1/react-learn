
import React, { useState, useCallback, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
// useSelector，作用是快捷地使用redux中的状态数据

import {
    changeMsgAction,
    changMsgAsyncAction,
    getQqMusicAaction
} from '@/store/actions'


// React建议，一切外部数据都最好从props进来
export default (props)=>{

    // connect(mapStateToProps, fn2)
    const msg = useSelector(store=>store.study.msg)
    const msg1 = useSelector(state=>state.good.msg)
    const musicList = useSelector(store=>store.study.list)

    const [newMsg, setNewMsg] = useState('')

    // connect(fn1, mapDispatchToProps)
    const dispatch = useDispatch() // 引入dispatch，派发action
    // const changeMsg = (payload)=>dispatch(changeMsgAction(payload))
    const changeMsg = useCallback((payload)=>dispatch(changeMsgAction(payload)), [dispatch])
    const changeMsgAsync = useCallback((payload)=>dispatch(changMsgAsyncAction(payload)), [dispatch])
    const getMusic = useCallback((params)=>dispatch(getQqMusicAaction(params)), [dispatch])

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
        // getMusic(params)
        return undefined
    }, [])
    /* eslint-enable */

    // 受控表单取值
    function newMsgChange(e) {
        setNewMsg(e.target.value)
    }
    // 点击事件
    function handleClick(num) {
        // console.log('---------', num)
        if(!newMsg.trim()) return
        if (num===1) {
            changeMsg(newMsg)
        } else {
            changeMsgAsync(newMsg)
        }
        setNewMsg('')
    }

    return(
        <div>
            <div>test redux hooks</div>
            <h1>{msg1}</h1>
            <hr />
            <h1>{msg}</h1>
            {/*<input value={newMsg} onChange={(e)=>setNewMsg(e.target.value)} />
            <button onClick={()=>dispatch(changeMsgAction(newMsg))}>修改msg</button>*/}

            <input value={newMsg} onChange={newMsgChange} />
            <button onClick={()=>handleClick(1)}>修改msg</button>
            <button onClick={()=>handleClick(2)}>异步修改msg</button>

            <hr/>
            {
                musicList.map(ele=>(
                    <div key={ele.id}>{ele.name}</div>
                ))
            }

        </div>
    )
}