import React, { useState, useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import ReactJson from 'react-json-view'
import { Icon } from 'semantic-ui-react'

import Derek from '../assets/derek.jpg'
import SmiskiLaptop from '../assets/smiskiLaptop.png'
import SmiskiPeeking from '../assets/smiskiPeeking.png'
import { TYPING_TEXT, BIO_INFO, CONTACT } from '../assets/data'
import Resume from '../assets/Derek-Chen-Resume-One-page.pdf'
import { COLOR } from '../constants/theme'
import Loop from './loop'
import Card from './card'

// Define the animation keyframes
const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
    @media (max-width: 770px) {
        /* Styles for mobile screens */
        padding: 45px 0px 10px 0px;
    }
    @media (min-width: 771px) {
        /* Styles for desktop screens */
        padding: 45px 30px 10px 30px;
    }
`

const FlexBox = styled.div`
    display: flex;
`

const AbsoluteFlexBox = styled.div`
    display: flex;
    position: relative;
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
    margin-left: 10px;
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

const Smiski = styled.img`
    margin-left: auto;
    margin-top: 17px;
    width: 60px;
    height: 60px;
    cursor: pointer;
`

const codeBoxStyle = {
    borderRadius: '4px',
    marginTop: '20px'
}

const rotate = keyframes`
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
`

const SongContainer = styled.div`
    padding: 10px 0px 0px 0px;
    display: flex;
`

const SongDetails = styled.div`
    margin-left: 15px;
`

const SongName = styled.h4`
    color: ${(props) => props.theme.TEXT};
    margin: 3px 0px;
`

const SongArtist = styled.p`
    color: ${(props) => props.theme.TEXT};
`

const SongImage = styled.div`
    background-image: ${(props) => `url(${props.song.img})`};
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    background-color: black;
    width: 65px;
    height: 65px;
    position: relative;
    border: 1px solid #000000;
    padding:1rem;
    background-repeat: no-repeat;
    background-size: cover;
    animation: ${rotate} 5s linear infinite;
    padding: 1rem;
`

const Hole = styled.div`
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    left: 21px;
    top: 21px;
    -moz-border-radius: 24px;
    -webkit-border-radius: 24px;
    border-radius: 24px;
`

const SmiskiPeekingSlideout = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 90px;
    height: 90px;
    transform: translate(66%, 0);
    transition: transform 0.3s ease;
    z-index: -1;

    ${({ isHovered }) =>
        isHovered &&
        css`
            animation: ${css`${slideOut}`} 0.5s forwards;
            transform: translateX(-100%);
        `
    }
`

function Intro (props) {
    const { theme, onSmiskiClick } = props
    const [isHovered, setIsHovered] = useState(false)
    const [recentSong, setRecentSong] = useState(null)

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
    };

    // https://github.com/spotify/web-api/issues/505
    useEffect(() => {
        const fetchRecentSong = async () => {
            let data = await fetch(
                "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=derekc150&api_key=bb2eb8c99413ef2694eb31690762a994&format=json&limit=2",
                { method: 'GET' }
                )
            data = await data.json()
            if (data.recenttracks &&
                data.recenttracks.track &&
                data.recenttracks.track.length > 0) {
                    const song = data.recenttracks.track[0]
                    setRecentSong({
                        name: song.name,
                        artist: song.artist['#text'],
                        songLink: song.url,
                        img: song.image[2]['#text']
                    })
            }
        }
        fetchRecentSong()
    }, [])

    return (
        <Container>
            <Card theme={theme} padding={30}>
                <AbsoluteFlexBox>
                    <ProfilePicture src={Derek} alt='Derek'/>
                    <LoopDiv>
                        <Loop typingText={TYPING_TEXT} theme={theme} />
                    </LoopDiv>
                    <Smiski
                        alt='SMISKI Researching'
                        src={SmiskiLaptop}
                        loading='lazy'
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverEnd}
                        onClick={() => {onSmiskiClick()}}
                    />
                    <SmiskiPeekingSlideout
                        alt='SMISKI Peeking'
                        src={SmiskiPeeking}
                        loading='lazy'
                        isHovered={isHovered}
                    />
                    <ResumeButton href={Resume} target="_blank" rel="noopener noreferrer">Resume</ResumeButton>
                </AbsoluteFlexBox>
                <TLDR theme={theme}>tldr: UBC BSc Computer Science Graduate | 2 years of SWE experience</TLDR>
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
                {recentSong &&
                    <SongContainer>
                        <SongImage song={recentSong}>
                            <Hole theme={theme} />
                        </SongImage>
                        <SongDetails>
                            <SongName theme={theme}>Currently Listening To...</SongName>
                            <SongName theme={theme}>{recentSong.name}</SongName>
                            <SongArtist theme={theme}>{recentSong.artist}</SongArtist>
                        </SongDetails>
                    </SongContainer>

                }
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