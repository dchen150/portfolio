import styled from 'styled-components'

const Text = styled.span`
    color: ${(props) => props.theme.SUBHEADER};
    font-size: 16px;
`

function Credit (props) {
    const { theme } = props

    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <Text theme={theme}>
                made by derek chen, &copy; 2023
            </Text>
        </div>
    )
}

export default Credit