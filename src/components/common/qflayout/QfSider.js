import React from 'react'

import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import routes from '@/pages'
import img from '@/utils/img'

const { SubMenu } = Menu


export default function QfSider(props) {

    function createMenu() {
        return routes.map(ele=>(
            <SubMenu key={ele.id} title={ele.text} icon={ele.icon}>
                {
                    ele.children && ele.children.map(ele=>(
                        <Menu.Item key={ele.id}>
                            <NavLink exact to={ele.path}>{ele.text}</NavLink>
                        </Menu.Item>
                    ))
                }
            </SubMenu>
        ))
    }

    return (
        <div className='qf-sider'>
            <img className='logo' src={img.logo} alt='qf' />
            <Menu
                style={{ width: 150 }}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme='dark'
                >
                    { createMenu() }
            </Menu>
        </div>
    )
}