import React, { useState } from 'react'

import {
    Form,
    Input,
    Button,
    InputNumber,
    Upload,
    Switch
} from 'antd'

import { QfCateSelect } from '@/components'
import img from '@/utils/img'

import { fetchGoodAdd } from '@/utils/api'

const { TextArea } = Input

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
}

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    }
}

export default function GoodDetail(props) {

    const [form] = Form.useForm()

    const [imageUrl, setImageUrl] = useState('')

    // 图片上传时
    const imgChange = e => {
      console.log('图片上传成功', e)
      if(e.file && e.file.response) {
        setImageUrl(e.file.response.data.url)
      }
    }


    // 表单提交
    const onFinish = values => {
        console.log('values', values)
        fetchGoodAdd({...values, img: imageUrl}).then(()=>{
          props.history.replace('/good/list')
        })
    }

    return(
        <div>
            <div>商品新增</div>
            <div style={{padding:'35px 0', width: '60%'}}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="good"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="name"
                        label="商品名称"
                        rules={[
                            { required: true, message: '商品名称是必填字段'},
                            { min: 2, message: '商品名称不能少于两个字' },
                            { max: 10, message: '商品名称不能多于10字' }
                            // { pattern: /^[a-zA-Z][a-zA-Z0-9\!\@\#\$\%\&\*\-\_]{5,17}$/, message: '密码错误'}
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name='desc'
                        label='商品描述'
                        rules={[
                            { min: 20, message: '商品描述不能少于20字' },
                            { required: true, message: '商品描述是必填字段'}
                        ]}
                    >
                        <TextArea rows={3} />
                    </Form.Item>

                    <Form.Item
                        name='cate'
                        label='商品品类'
                        rules={[
                            { required: true, message: '商品品类是必填字段'}
                        ]}
                    >
                      <QfCateSelect />
                    </Form.Item>

                    <Form.Item
                        name='price'
                        label='商品价格'
                        rules={[
                            { required: true, message: '商品价格是必填字段'}
                        ]}
                    >
                      <InputNumber min={0} />
                    </Form.Item>

                    <Form.Item
                        label='商品图片'
                        rules={[
                            { required: true, message: '商品图片是必填字段'}
                        ]}
                    >
                      {/* name用于后端接收图片数据，action是图片上传接口 */}
                      <Upload
                        name="file"
                        action={img.uploadImgUrl}
                        listType="picture-card"
                        showUploadList={false}
                        onChange={imgChange}
                      >
                        <img 
                          src={imageUrl ? img.imgBaseUrl+imageUrl : img.uploadImgIcon} 
                          alt="avatar" 
                          style={{ width: '100%' }} 
                        />
                      </Upload>
                    </Form.Item>

                    <Form.Item
                        name='hot'
                        label='是否热销'
                        valuePropName='checked'
                    >
                      <Switch />
                    </Form.Item>



                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            添加商品
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}