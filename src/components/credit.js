import { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../themeContext'

const Text = styled.span`
    color: ${(props) => props.theme.SUBHEADER};
    font-size: 16px;
`

function Credit() {
    const theme = useContext(ThemeContext)

    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <Text theme={theme}>
                made by derek chen, &copy; 2023
            </Text>
        </div>
    )
}

export default Credit