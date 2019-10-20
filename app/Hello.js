import React from 'react';

class Hello extends React.Component {
    
    render(){
        const {firstName, lastName, html, authed} = this.props
        return(
            <div>
                Hello {firstName} {lastName}, {html}, {authed ? 'happy' : 'sad'} 
            </div>
        )
    }
}

export default Hello