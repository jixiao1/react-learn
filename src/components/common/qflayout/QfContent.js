import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/pages'

export default function QfContent(props) {
    // 生成视图容器列表
    function createRoutes() {
        let res = []
        // 封装递归函数
        function recursion(arr) {
            arr.map(ele=>{
                res.push(
                    <Route
                        exact
                        key={ele.id}
                        path={ele.path}
                        component={ele.component}
                    />
                )
                // 递归一定要有终止条件
                if(ele.children) recursion(ele.children)
                return false
            })
            
        }
        routes.map(ele=>{
            // 使用递归函数
            recursion(ele.children)
            return false
        })
        return res
    }
    return (
        <div className='qf-content'>
            <Switch>
                { createRoutes() }
                <Redirect from='/*' to='/' />
            </Switch>
            
        </div>
    )
}