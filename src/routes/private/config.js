import React from 'react'
import DashboardIcon from 'material-ui/svg-icons/action/dashboard'
import ReportsIcon from 'material-ui/svg-icons/file/folder-open'
import SettingsIcon from 'material-ui/svg-icons/action/settings'

import Dashboard from '../../containers/Dashboard'
import Reports from '../../containers/Reports'
import Settings from '../../containers/Settings'

const routes = [
    {
        path: '/dashboard',
        component: Dashboard,
        label: 'Dashboard',
        icon: <DashboardIcon />
    }, {
        path: '/reports',
        component: Reports,
        label: 'Reports',
        icon: <ReportsIcon />
    }, {
        path: '/settings',
        component: Settings,
        label: 'Settings',
        icon: <SettingsIcon />
    }
]

export default routes
