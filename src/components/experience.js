import React, { useState } from 'react'
import styled from 'styled-components'

import Card from './card'
import { DARK } from '../constants/theme'
import { getFormattedTimeDuration, getDateRange } from '../constants/utils'

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

const FlexBox = styled.div`
    display: flex;
`

const SideBar = styled.div`
    @media (max-width: 770px) {
        /* Styles for mobile screens */
        margin: 0px;
        padding: 10px;
    }
    @media (min-width: 771px) {
        /* Styles for desktop screens */
        margin: 0 auto;
        padding: 30px;
    }
    background-color: ${(props) => props.theme.SIDE_BAR_BACKGROUND};
    width: 30%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    word-wrap: break-word;
`

const Header = styled.p`
    color: ${(props) => props.theme.TEXT};
    font-weight: bold;
    margin-bottom: 0px;
    font-size: 16px;
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

const SubHeader = styled.p`
    color: ${(props) => props.theme.SUBHEADER};
    margin: 0px;
`

const ListItem = styled.li`
    color: ${(props) => props.theme.TEXT}
`

const ExperienceHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`

const SideBarItem = styled.div`
    display: flex;
    border-radius: 3px;
    cursor: pointer;
    align-items: center;
    width: 100%;
    padding: 6px 0px;
    margin: 2px;
    font-weight: bold;
    ${(props) => props.isSelected ? (
        `
        background-color: ${props.theme.HIGHLIGHT};
        color: ${props.theme.TEXT};
        `
    ) : (
        `
        color: ${props.theme.UNSELECTED};
        &:hover {
            color: ${props.theme.TEXT};
            background-color: ${props.theme.CARD_BACKGROUND};
        }
        `
    )}
`

const SideBarLogo = styled.img`
    width: 20px;
    height: 20px;
    margin: 0px 4px;
`

const Company = styled.p``

const DOUBLE_SLASH = '//'

function Experience (props) {
    const { theme, experiences, header } = props
    const [currExperience, setCurrExperience] = useState(experiences[0])

    const handleChange = (idx) => {
        setCurrExperience(experiences[idx])
    }

    return (
        <Container>
            <Card theme={theme}>
                <FlexBox>
                    <SideBar theme={theme}>
                        <Header theme={theme}>{header}</Header>
                        {
                            experiences.map((experience, idx) => {
                                const isSelected = currExperience === experience
                                return (
                                    <SideBarItem key={experience.company + idx} theme={theme} isSelected={isSelected} onClick={() => handleChange(idx)}>
                                        <SideBarLogo
                                            alt={experience.company}
                                            src={theme === DARK ? experience.dark : experience.light}
                                            loading='eager'
                                        />
                                        <Company theme={theme}>{experience.company}</Company>
                                    </SideBarItem>
                                )
                            })
                        }
                    </SideBar>
                    <ExperienceContent>
                        <ExperienceHeaderContainer>
                            <Logo
                                alt={currExperience.company}
                                src={theme === DARK ? currExperience.dark : currExperience.light}
                                loading='eager'
                            />
                            <HeaderContainer>
                                <Header theme={theme}>{currExperience.title}</Header>
                                <SubHeader theme={theme}>{currExperience.company}</SubHeader>
                                <SubHeader theme={theme}>
                                    {getDateRange(currExperience.startTime, currExperience.endTime)}
                                    {` ${DOUBLE_SLASH} `}
                                    {getFormattedTimeDuration(currExperience.startTime, currExperience.endTime)}
                                </SubHeader>

                            </HeaderContainer>
                        </ExperienceHeaderContainer>
                        <ul>
                            {currExperience.description.map((point) => <ListItem key={point} theme={theme}>{point}</ListItem>)}
                        </ul>
                        <div style={{ flexWrap: 'wrap', padding: '0px 0px 15px 40px', display: 'flex' }}>
                            {currExperience.tags.map((tag) => <Tag key={tag} theme={theme}>{tag}</Tag>)}
                        </div>
                    </ExperienceContent>
                </FlexBox>
            </Card>
        </Container>
    )
}

export default Experience