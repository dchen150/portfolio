import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './card'
import { DARK } from '../constants/theme'

const Container = styled.div`
    padding: 10px 30px 10px 30px;
`

const FlexBox = styled.div`
    display: flex;
`

const SideBar = styled.div`
    background-color: ${(props) => props.theme.SIDE_BAR_BACKGROUND};
    width: 30%;
    padding: 30px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`

const Header = styled.p`
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 16px;
`

const SelectedItem = styled.p`
    cursor: pointer;
    border-radius: 3px;
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    padding: 6px;
    margin: 2px;
    background-color: ${(props) => props.theme.HIGHLIGHT};
`

const Tag = styled.span`
    display: inline;
    border-radius: 3px;
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    padding: 6px;
    margin: 2px;
    background-color: ${(props) => props.theme.HIGHLIGHT};
    min-width: 0;
`

const Company = styled.p`
    cursor: pointer;
    border-radius: 3px;
    color: ${(props) => props.theme.UNSELECTED};
    font-weight: bold;
    padding: 6px;
    margin: 2px;
    &:hover {
        color: ${(props) => props.theme.TEXT};
        background-color: ${(props) => props.theme.CARD_BACKGROUND};
    }
`

const ExperienceContent = styled.div`
    width: 70%;
    padding-right: 10px;
`

const Logo = styled.img`
    height: 70px;
    width: 70px;
    margin-left: 15px;
`

const HeaderContainer = styled.div`
    margin: 20px;
`

const Position = styled.p`
    color: ${(props) => props.theme.SUBHEADER}
`

const ListItem = styled.li`
    color: ${(props) => props.theme.TEXT}
`

function Experience (props) {
    const { theme, experiences, header } = props
    const [currExperience, setCurrExperience] = useState(experiences[0])

    const handleChange = (e) => {
        e.preventDefault()
        setCurrExperience(experiences.find((experience) => experience.company === e.target.textContent))
    }

    return (
        <Container>
            <Card theme={theme} width={700}>
                <FlexBox>
                    <SideBar theme={theme}>
                        <Header theme={theme}>{header}</Header>
                        {
                            experiences.map((experience) => {
                                return currExperience === experience ? (
                                    <SelectedItem theme={theme}>{experience.company}</SelectedItem>
                                ) : (
                                    <Company theme={theme} onClick={handleChange}>{experience.company}</Company>
                                )
                            })
                        }
                    </SideBar>
                    <ExperienceContent>
                        <FlexBox>
                            <Logo alt={currExperience.company} src={theme === DARK ? currExperience.dark : currExperience.light} />
                            <HeaderContainer>
                                <Header theme={theme}>{currExperience.company}</Header>
                                <Position theme={theme}>{currExperience.time} // {currExperience.title}</Position>
                            </HeaderContainer>
                        </FlexBox>
                        <ul>
                            {currExperience.description.map((point) => <ListItem theme={theme}>{point}</ListItem>)}
                        </ul>
                        <div style={{ padding: '0px 0px 15px 40px', display: 'flex' }}>
                            {currExperience.tags.map((tag) => <Tag theme={theme}>{tag}</Tag>)}
                        </div>
                    </ExperienceContent>
                </FlexBox>
            </Card>
        </Container>
    )
}

export default Experience