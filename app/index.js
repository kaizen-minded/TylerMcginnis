import React from 'react';
import ReactDOM from 'react-dom';
import Popular from './components/Popular'
import Battle from './components/Battle'
import './index.css';
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'

// 3 concerns of Compenent
// State
// LifeCycle
// UI

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === 'light' ? 'dark' : 'light'
                }))
            }
        }
    }
    render() {
        return (
            <ThemeProvider value={this.state} >
                <div className={this.state.theme}>
                    <div className='container'>
                        <Nav />
                        {/* <Hello authed html={<h1>GOod morning</h1>}firstName="Tyler" lastName="McGinnis"/> */}
                        <Popular />
                        {/* <Battle /> */}
                    </div>
                </div>

            </ThemeProvider>

        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
)