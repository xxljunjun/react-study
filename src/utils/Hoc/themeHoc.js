import React from 'react'

//引入context上下文
import ThemeCtx from "../theme"

//高阶组件---可复用的逻辑
export default function themeHoc(WrappedComponent){
    return class extends React.Component{
        render(){
            return (
                <ThemeCtx.Consumer>
                    {
                        (value)=>(
                            <div style={{color:value.color,background:value.background}}>
                                <WrappedComponent {...this.props} />
                            </div>
                        )
                        
                    }
                </ThemeCtx.Consumer>
            )
        }
    }
}