import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import ThemeContext from '../themeContext'

const Container = styled.div`
    padding: 10px 0px 10px 0px;
`

const FlexBox = styled.div`
    display: flex;
    cursor: pointer;
`

const Header = styled.div`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${(props) => props.theme.HIGHLIGHT};
    padding: 10px;
    width: 100%;
    margin: 0;
`

const Name = styled.span`
    color: ${(props) => props.theme.TEXT};
    margin-bottom: 0px;
    font-size: 16px;
    font-weight: bold;
`

const SubHeader = styled.span`
    color: ${(props) => props.theme.SUBHEADER};
    font-size: 14px;
    margin-left: auto;
`

const Content = styled.div`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${(props) => props.theme.HIGHLIGHT};
    width: 100%;
    padding: 10px;
    margin: 0;
`

const Description = styled.p`
    color: ${(props) => props.theme.TEXT};
    white-space: pre-line;
`

const Tag = styled.span`
    display: inline;
    border-radius: 3px;
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    padding: 6px;
    margin: 2px;
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    min-width: 0;
`

function DropDown(props) {
    const { item } = props
    const theme = useContext(ThemeContext)
    const [showDropDown, setShowDropDown] = useState(false)

    const handleClick = () => {
        setShowDropDown(!showDropDown)
    }

    const iconStyle = {
        color: theme.TEXT,
        marginLeft: '3px'
    }

    const Icons = () => {
        return (
            <React.Fragment>
                {Object.keys(item.links).map((linkKey) => {
                    const link = item.links[linkKey]
                    return (
                        <a key={link} href={link} target="_blank" rel="noopener noreferrer">
                            <Icon
                                style={iconStyle}
                                name={linkKey}
                                size='large'
                            />
                        </a>
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <Container>
            <Header theme={theme} onClick={handleClick}>
                <FlexBox>
                    <Name theme={theme}>{item.name}</Name>
                    <Icon style={iconStyle} name={item.icon} />
                    <SubHeader theme={theme}>{item.subHeader}</SubHeader>
                    <Icon
                        style={iconStyle}
                        name={showDropDown ? 'angle up' : 'angle down'}
                    />
                </FlexBox>
            </Header>
            <SlideDown>
                {
                    showDropDown ? (
                        <Content theme={theme}>
                            <Description theme={theme}>{item.description}</Description>
                            <FlexBox>
                                <FlexBox style={{ flexWrap: 'wrap', wordWrap: 'break-word' }}>
                                    {item.tags.map((tag) => <Tag key={tag} theme={theme}>{tag}</Tag>)}
                                </FlexBox>
                                <FlexBox style={{ marginLeft: 'auto' }}>
                                    <Icons />
                                </FlexBox>
                            </FlexBox>
                        </Content>
                    ) : (
                        null
                    )
                }
            </SlideDown>
        </Container>
    )
}

export default DropDown