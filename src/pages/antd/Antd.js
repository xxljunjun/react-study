import React from 'react'
import { message, Button, Space,Popconfirm ,Carousel  } from 'antd';
import img from '@/utils/img'

export default ()=>{
    const warning = () => {
        message.warning('亲，这个按钮不能再点了哟');
    }
    function confirm(e) {
        console.log(e);
        message.success('你点击的是对的');
    }
      
    function cancel(e) {
        console.log(e);
        message.error('你点击的是错的');
    }
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return(
        <div>
            <h4>antd组件库</h4>
            <hr/>
            <h4>button按钮</h4>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <br />
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <hr/>
            <Button onClick={warning}>Warning</Button>
            <hr/>
            <Popconfirm
                title="你可真是个小傻瓜"
                onConfirm={confirm}
                onCancel={cancel}
                okText="是的"
                cancelText="错误"
            >
                <a href="#">点我有惊喜哟！</a>
            </Popconfirm>
            <hr/>
            <Carousel autoplay>
                <div>
                    <img src={img.pika} className="pikaqiu" style={{width:200+"px"}}/>
                </div>
                <div>
                    <img src={img.pika} className="pikaqiu" style={{width:200+"px"}}/>
                </div>
                <div>
                    <img src={img.pika} className="pikaqiu" style={{width:200+"px"}}/>
                </div>
                <div>
                    <img src={img.pika} className="pikaqiu" style={{width:200+"px"}}/>
                </div>
            </Carousel>

        </div>
    )
}