import styled from 'styled-components'

function Card (props) {
    const { 
        theme, 
        children,
        height,
        width,
        padding 
    } = props

    const Container = styled.div`
        border-radius: 8px;
        background-color: ${theme.CARD_BACKGROUND};
        height: ${height}px;
        width: ${width}px;
        padding: ${padding}px;
        margin: 0 auto;
    `

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Card