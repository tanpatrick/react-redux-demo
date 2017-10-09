import React from 'react'
import { Provider, connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { AppRoutes as PrivateAppRoutes } from './routes/private'
import store from './store'

import './styles/main.css'

const history = createHistory()

const PrivateApp = connect(state => ({
    location: state.location,
}))(PrivateAppRoutes)

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PrivateApp />
        </ConnectedRouter>
    </Provider>
)

export default App
