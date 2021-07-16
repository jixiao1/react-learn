import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCatesAction
} from '@/store/actions'

import { Select } from 'antd'
const { Option } = Select

export default props => {

    const cateList = useSelector(store=>store.good.cateList)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCatesAction({}))
        return undefined
    }, [])

    return(
        <div className='qf-cate-select'>
            <Select 
                value={props.value||''} 
                style={{ width: '120px' }}
                onChange={(e)=>props.onChange(e)}
                allowClear>
                {props.hasAll && <Option value=''>全部</Option>}
                {
                    cateList.map(ele=>(
                        <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
                    ))
                }
            </Select>
        </div>
    )
}