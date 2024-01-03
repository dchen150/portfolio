import React, { useContext } from 'react'
import styled from 'styled-components'

import Card from './card'
import DropDown from './dropdown'
import { PROJECTS } from '../assets/data'
import SmiskiLaptop from '../assets/smiskiLaptop.png'
import ThemeContext from '../themeContext'

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

const Smiski = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
`

const CollectionContainer = styled.div`
    width: 100%;
    text-align: center;
`

const CallToAction = styled.p`
    margin-top: 17px;
    color: ${(props) => props.theme.TEXT};
    margin: 0px;
    font-weight: bold;
`

function Project(props) {
    const { onSmiskiClick } = props
    const theme = useContext(ThemeContext)

    return (
        <Container>
            <Card padding={30}>
                <Header theme={theme}>Projects</Header>
                {PROJECTS.map((project) => <DropDown key={project.name} item={project} />)}
                <CollectionContainer>
                    <CallToAction theme={theme}>
                        Click Me!
                    </CallToAction>
                    <Smiski
                        alt='SMISKI Researching'
                        src={SmiskiLaptop}
                        loading='lazy'
                        onClick={() => { onSmiskiClick() }}
                    />

                </CollectionContainer>
            </Card>
        </Container>
    )
}

export default Project