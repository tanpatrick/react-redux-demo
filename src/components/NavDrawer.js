import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'

import { NavToggleButton } from './NavToggleButton'
import { routes } from '../routes/private'
class NavDrawer extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        open: false,
        width: 265
    }

    toggle = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open={this.state.open}
                />

                <Drawer open={this.state.open}>
                    <div style={{
                        padding: '20px 10px'
                    }}>
                        <strong>App Name</strong>
                    </div>

                    <Divider />

                    {routes.map((config, index) => (
                        <NavLink to={config.path} key={index}>
                            <MenuItem primaryText={config.label} onClick={this.toggle} leftIcon={config.icon} />
                        </NavLink>
                    ))}
                </Drawer>
            </div>
        )
    }
}

export default NavDrawer
