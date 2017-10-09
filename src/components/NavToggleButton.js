import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`
export const NavToggleButton = (props) => {
    return (
        <FloatingActionButton onClick={props.toggle} style={{
            marginLeft: '10px',
            marginTop: '10px'
        }} >
            <Menu />
        </FloatingActionButton>
    )
}
