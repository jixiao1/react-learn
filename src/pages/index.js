import React from 'react'
import loadable from '@loadable/component'

import { MailOutlined } from '@ant-design/icons';

const TestRedux = loadable(()=>import('./home/TestRedux'))
const TestReduxHook = loadable(()=>import('./home/TestReduxHook'))

const GoodList = loadable(()=>import('./good/GoodList'))
const GoodDetail = loadable(()=>import('./good/GoodDetail'))

const routes = [
    {
        id: 11,
        text: '概况管理',
        icon: <MailOutlined />,
        children: [
            {
                id: 1101,
                path: '/',
                component: TestRedux,
                text: 'TestRedux'
            },
            {
                id: 1102,
                path: '/redux/hook',
                component: TestReduxHook,
                text: 'TestReduxHook'
            }
        ]
    },
    {
        id: 10,
        text: '商品管理',
        icon: <MailOutlined />,
        children: [
            {
                id: 1001,
                path: '/good/list',
                component: GoodList,
                text: '商品列表',
                icon: '',
                children: [
                    {
                        id: 100101,
                        path: '/good/detail',
                        component: GoodDetail,
                        text: '商品详情'
                    }
                ]
            }
        ]
    }
]


export default routes

