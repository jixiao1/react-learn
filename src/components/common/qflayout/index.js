import React from 'react'
import { Layout } from 'antd'
import './style.scss'

import QfSider from './QfSider'
import QfHeader from './QfHeader'
import QfContent from './QfContent'

const { Header, Sider, Content } = Layout

export default function QfLayout(props) {
    return (
        <Layout>
            <Sider width='150'>
                <QfSider />
            </Sider>
            <Layout>
            <Header>
                <QfHeader />
            </Header>
            <Content>
                <QfContent />
            </Content>
            </Layout>
        </Layout>
    )
}