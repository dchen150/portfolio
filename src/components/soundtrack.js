import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components'
import ThemeContext from '../themeContext';

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

export default function SoundTrack() {
    const theme = useContext(ThemeContext)
    const [recentSong, setRecentSong] = useState(null)

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
        recentSong &&
        <SongContainer>
            <a href={recentSong.songLink} target="_blank" rel="noreferrer noopener">
                <SongImage song={recentSong}>
                    <Hole theme={theme} />
                </SongImage>
            </a>
            <SongDetails>
                <SongName theme={theme}>Currently Listening To...</SongName>
                <SongName theme={theme}>{recentSong.name}</SongName>
                <SongArtist theme={theme}>{recentSong.artist}</SongArtist>
            </SongDetails>
        </SongContainer>

    )
}