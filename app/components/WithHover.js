import React from 'react';

export default function WithHover (Component, propName='hovering'){
    return class extends React.Component{
        state = {
            hovering: false
        }
        
        mouseOver = () => {
            this.setState({
                hovering: true
            })
        }
        mouseOut = () => {
            this.setState({
                hovering: false
            })
        }
        render(){

            const props = {
                [propName]: this.state.hovering,
                ...this.props,
            }
            return(
                <div
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}>
                <Component {...props}/>
            </div>
            )
        }
    }
}