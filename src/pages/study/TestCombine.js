import React from 'react'
//// 在React中，实现组件复用，使用的是组合思想，不是继承思想
class TestCombine extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    onOkHandle(){
        console.log('你点击了确定按钮')
    }
    onOkCancle(){
        console.log('你点击了取消按钮')
    }
    onOkdel(){
        console.log('你点击了删除按钮')
    }
    onClose(){
        console.log('你点击了关闭弹窗按钮')
    }
    render(){
        return (
           <div>
                <h4>测试组合与继承</h4>
                <hr/>
                {/* 删除框 */}
                <QfModal 
                    tips="你确定要删除这个可爱又实用的商品吗？"
                    type='del'
                    onOkCancle={()=>this.onOkCancle()}
                    onOkdel={()=>this.onOkdel()}
                    onClose={()=>this.onClose()}

                >
                    <div>
                        <div>
                                <span>用户名：</span>
                                <input type="text"/>
                        </div>
                        <div>
                                <span className='psword'>密码:</span>
                                <input type="password"/>
                        </div>
                        <div>
                                <span>确认密码:</span>
                                <input type="password"/>
                        </div>
                    </div>
                </QfModal>
                {/* 确认框 */}
                <QfModal 
                    tips="你个憨批快点点确认！！！"
                    type='comfirm'
                    onOk={()=>this.onOkHandle()}
                    onOkCancle={()=>this.onOkCancle()}
                    onClose={()=>this.onClose()}
                >
                    我是一颗小小的视图
                </QfModal>
                {/* 其他框 */}
                <QfModal 
                    tips="你只能点确认，不是耶稣说的，是我说的！！！"
                    onOk={()=>this.onOkHandle()}
                    onClose={()=>this.onClose()}
                >
                    别爱我没结果
                </QfModal>
                {/* 小小框 */}
                <QfModal 
                    type='del'
                    onOkdel={()=>this.onOkdel()}
                    onOkCancle={()=>this.onOkCancle()}
                >
                    你确定要删除这个迷人的反派角色吗
                </QfModal>
           </div>
        )
    }
}



//自定义Modal组件---------子组件
function QfModal(props){
    let {tips,type,onOk,onOkCancle,onOkdel,onClose} =props
    function renderBtns(type){
        switch (type) {
            case 'comfirm':
                return (
                    <div>
                        <span onClick={()=>onOkCancle()}>取消</span>
                        <span className="info" onClick={()=>onOk()}>确认</span>
                    </div>
                )
                break;
            case 'del':
                return (
                    <div>
                        <span onClick={()=>onOkCancle()}>取消</span>
                        <span className="del" onClick={()=>onOkdel()}>删除</span>
                    </div>
                )
                break;
            default:
                return (
                    <div>
                        <span className="info" onClick={()=>onOk()}>确认</span>
                    </div>
                )
                break;
        }
    }
    return (
        <div className="qf-combine" style={{width:tips ? '520px':'410px'}}>
            {
                tips && <div className="qf-top">
                <span>{tips}</span>
                <span onClick={()=>onClose()}>x</span>
            </div>
            }
            <div className="qf-middle">
                {props.children}
            </div>
            <div className="qf-buttom">
                {renderBtns(type)}
            </div>
        </div>
    )
}


export default TestCombine