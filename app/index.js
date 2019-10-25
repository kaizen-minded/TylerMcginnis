import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

// import Popular from './components/Popular'
// import Battle from './components/Battle'
// import Results from './components/Results'
// 3 concerns of Compenent
// State
// LifeCycle
// UI

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

class App extends React.Component {
    state = {
        theme: 'light',
        toggleTheme: () => {
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light'
            }))
        }
    }
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state} >
                    <div className={this.state.theme}>
                        <div className='container'>
                            <Nav />
                            {/* <Hello authed html={<h1>GOod morning</h1>}firstName="Tyler" lastName="McGinnis"/> */}
                            <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact path='/' component={Popular} />
                                <Route exact path='/battle' component={Battle} />
                                <Route path='/battle/results' component={Results} />
                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('app')
)