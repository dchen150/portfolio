import styled from 'styled-components'
import ReactJson from 'react-json-view'
import { Icon } from 'semantic-ui-react'

import Derek from '../assets/derek.jpg'
import { TYPING_TEXT, BIO_INFO, CONTACT } from '../assets/data'
import Resume from '../assets/Derek-Chen-Resume-One-page.pdf'
import { COLOR } from '../constants/theme'
import Loop from './loop'
import Card from './card'

const Container = styled.div`
    padding: 45px 30px 10px 30px;
`

const FlexBox = styled.div`
    display: flex;
`

const LoopDiv = styled.div`
    margin-top: 35px;
    margin-left: 10px;
`

const ProfilePicture = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

const TLDR = styled.p`
    color: ${props => props.theme.TEXT};
    margin-top: 10px;
`

const ResumeButton = styled.a`
    margin-left: auto;
    margin-top: 25px;
    background-color: ${COLOR.GREEN};
    color: ${COLOR.WHITE};
    border-radius: 4px;
    height: 40px;
    width: 80px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
    &:hover {
        color: ${COLOR.WHITE};
        background-color: ${COLOR.DARK_GREEN};
    }
`

const codeBoxStyle = {
    borderRadius: '4px',
    marginTop: '20px'
}

function Intro (props) {
    const { theme } = props

    return (
        <Container>
            <Card theme={theme} width={700} padding={30}>
                <FlexBox>
                    <ProfilePicture src={Derek} alt='Derek'/>
                    <LoopDiv>
                        <Loop typingText={TYPING_TEXT} theme={theme} />
                    </LoopDiv>
                    <ResumeButton href={Resume} target="_blank" rel="noopener noreferrer">Resume</ResumeButton>
                </FlexBox>
                <TLDR theme={theme}>tldr: 4th yr cs student | experienced with Java, C++, JavaScript | 16 months of industry expeirence </TLDR>
                <FlexBox>
                    {
                        CONTACT.map((platform) => {
                            return (
                                <a key={platform.link} href={platform.link} target="_blank" rel="noopener noreferrer">
                                    <Icon style={{ color: theme.SUBHEADER }} name={platform.iconName} size='large' />
                                </a>
                            )
                        })
                    }
                </FlexBox>
                <ReactJson
                    src={BIO_INFO}
                    theme='monokai'
                    name={false}
                    style={codeBoxStyle}
                    iconStyle='square'
                    collapsed={1}
                    enableClipboard={false}
                    displayDataTypes={false}
                />
            </Card>
        </Container>
    )
}

export default Intro