import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavDrawer from '../components/NavDrawer'
class Layout extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <NavDrawer />
                    <main className="content-wrapper" style={{
                        textAlign: 'center'
                    }}>
                        {this.props.children}
                    </main>
                    <footer style={{
                        textAlign: 'center'
                    }}>
                        &copy; Copyright 2017
                    </footer>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Layout
