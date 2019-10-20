import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import Popular from './components/Popular'
import Battle from './components/Battle'
import './index.css';

// 3 concerns of Compenent
// State
// LifeCycle
// UI

class App extends React.Component{
    render() {
        return (
            <div className='container'>
                {/* <Hello authed html={<h1>GOod morning</h1>}firstName="Tyler" lastName="McGinnis"/> */}
                {/* <Popular /> */}
                <Battle />
            </div>  
        )
    }
}



ReactDOM.render(
    <App />, 
    document.getElementById('app')
)