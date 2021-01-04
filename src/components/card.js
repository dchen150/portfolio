import styled from 'styled-components'

const Container = styled.div`
    border-radius: 8px;
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    padding: ${(props) => props.padding}px;
    margin: 0 auto;
`
function Card (props) {
    const {
        theme,
        children,
        height,
        width,
        padding
    } = props

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