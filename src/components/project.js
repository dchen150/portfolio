import React from 'react'
import styled from 'styled-components'

import Card from './card'
import DropDown from './dropdown'
import { PROJECTS } from '../assets/data'

const Container = styled.div`
    @media (max-width: 770px) {
        /* Styles for mobile screens */
        padding: 10px 0px 10px 0px;
    }
    @media (min-width: 771px) {
        /* Styles for desktop screens */
        padding: 10px 30px 10px 30px;
    }
`

const Header = styled.p`
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 16px;
`

function Project (props) {
    const { theme } = props

    return (
        <Container>
            <Card theme={theme} padding={30}>
                <Header theme={theme}>Projects</Header>
                {PROJECTS.map((project) => <DropDown theme={theme} item={project} />)}
            </Card>
        </Container>
    )
}

export default Project