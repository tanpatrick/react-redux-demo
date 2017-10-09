import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
    minHeight: 100,
    width: '100%',
    padding: 20,
    textAlign: 'center'
}

const Section = (props) => (
    <Paper style={style} zDepth={1}>
        {props.children}
    </Paper>
)

export default Section
