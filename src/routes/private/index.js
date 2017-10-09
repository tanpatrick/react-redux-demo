import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Layout from '../../containers/Layout'
import routes from './config'

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch)

const AppRoutes = () => (
    <Layout>
        <ConnectedSwitch>
            {routes.map((config, index) => (
                <Route exact={config.exact} key={index} path={config.path} component={config.component} />
            ))}
        </ConnectedSwitch>
    </Layout>
)

export { AppRoutes, routes }
