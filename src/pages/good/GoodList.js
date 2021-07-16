import React, { useEffect, useState } from 'react'
import { QfCateSelect } from '@/components'


import {
    Table,
    Tag,
    Space,
    Row,
    Col,
    DatePicker,
    Pagination,
    Button
} from 'antd'

import { useSelector, useDispatch } from 'react-redux'
import { getGoodListAction } from '@/store/actions'

import img from '@/utils/img'

const { RangePicker } = DatePicker

export default function GoodList(props) {
    const columns = [
        {
          title: '商品',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
          render: (name, row) => {
            return(
              <div>
                <img src={img.imgBaseUrl+row.img} alt={name} />
                <div>{name}</div>
              </div>
            )
          
          },
        },
        {
          title: '描述',
          dataIndex: 'desc',
          key: 'desc',
          align: 'center',
          width: 100
        },
        {
          title: '价格',
          dataIndex: 'price',
          align: 'center',
          key: 'price',
        },
        {
          title: '是否热销',
          align: 'center',
          key: 'hot',
          dataIndex: 'hot'
        },
        {
          title: 'Action',
          align: 'center',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <span>Invite {record.name}</span>
              <span>Delete</span>
            </Space>
          ),
        },
      ]

     
    const goodList = useSelector(store=>store.good.goodList)
    
  
    

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getGoodListAction(filter))
      return undefined
    }, [])

    console.log('goodList', goodList)

    // 日期表单 moment的使用
    // let sTime = dates[0].format('YYYY-MM-DD')
    // let eTime = dates[1].valueOf()

    // 表单统一取值
    const filterChange = (key, e) => {
        switch(key) {
            case 'dates':
                e = e || []
                break
            case 'cate':
                e = e || ''
                break
            default:
        }
        filter[key] = e
        setFilter(JSON.parse(JSON.stringify(filter)))
        // dispatch(getGoodListAction(filter))
    }

    return(
        <div>
            <h1>商品列表</h1>
            <div style={{padding: '20px 0'}}>
                <Row align='middle'>
                    <Col span={2}>
                        <span className='qf-key'>日期:</span>
                    </Col>
                    <Col span={6}>
                        <RangePicker
                            onChange={(e)=>filterChange('dates', e)} 
                        />
                    </Col>
                    <Col span={2}>
                        <span className='qf-key'>品类:</span>
                    </Col>
                    <Col span={4}>
                        <QfCateSelect 
                            value={filter.cate} 
                            onChange={(e)=>filterChange('cate', e)}
                            hasAll
                        />
                    </Col>
                    <Col offset={6} span={4}>
                        <div style={{textAlign: 'right'}}>
                            <Button 
                                type='primary' 
                                onClick={()=>props.history.push('/good/detail')}
                            >
                                新增商品
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Table 
                    columns={columns} 
                    dataSource={goodList}
                    rowKey='_id'
                    pagination={{
                        pageSize: 2,
                        current: filter.page,
                        onChange: (e)=>filterChange('page', e)
                    }}
                />
            </div>
            {/*<div style={{textAlign: 'right', padding: '20px 0'}}>
                <Pagination defaultCurrent={1} total={50} />
            </div>*/}
        </div>
    )
}