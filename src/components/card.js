import styled from 'styled-components'
import {
    MOBILE,
    TABLET,
    DESKTOP
} from './../constants/theme'
import { useContext } from 'react'
import ThemeContext from '../themeContext'

const Container = styled.div`
    @media ${MOBILE} {
        /* Styles for mobile screens */
        width: 100vw;
        margin: 0px;
    }
    @media ${TABLET} {
        /* Styles for tablet screens */
        width: 60vw;
        margin: 0 auto;
    }
    @media ${DESKTOP} {
        /* Styles for desktop screens */
        width: 45vw;
        margin: 0 auto;
    }
    border-radius: 8px;
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    height: ${(props) => props.height}px;
    padding: ${(props) => props.padding}px;
`

function Card(props) {
    const {
        children,
        height,
        width,
        padding
    } = props

    let theme = useContext(ThemeContext);

    if (props.theme) {
        theme = props.theme;
    }

    return (
        <Container
            theme={theme}
            height={height}
            width={width}
            padding={padding}>
            {children}
        </Container>
    )
}

export default Card