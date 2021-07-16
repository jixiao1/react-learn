import React from 'react';
import '@/assets/css/app.scss'
import 'antd/dist/antd.css'

// 路由
import { HashRouter } from 'react-router-dom'
// 状态管理
import { Provider } from 'react-redux'
import store from '@/store'

import { QfLayout } from '@/components'

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="app">
          <QfLayout />
        </div>
      </Provider>      
    </HashRouter>
  )
}

export default App;
