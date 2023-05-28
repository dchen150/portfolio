import styled from 'styled-components'
import { COLOR } from '../constants/theme'
import { useRef } from 'react'

const Container = styled.div`
    width: 97%;
    margin: 0 auto;
`

const FlexBox = styled.div`
    display: flex;
`

const Card = styled.div`
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    border-radius: 8px;
    position: relative;
    padding: 0px 20px;
`

const Header = styled.h3`
    color: ${(props) => props.theme.TEXT_COLOR};
    padding: 10px 10px;
    margin: 0px;
`

const SmiskiContainer = styled.div`
    background-color: ${(props) => props.theme.CARD_BACKGROUND};
    display: flex;
    overflow-x: scroll;
    gap: 5px;
    white-space: nowrap;
    margin: 0px 5px;
`

const SmiskiCard = styled.div`
    display: inline-block;
    width: 250px;
    border-radius: 8px;
    background-color: ${COLOR.SMISKI_BACKGROUND_LIGHT_GREEN};
`

const SmiskiImg = styled.img`
    object-fit: contain;
    filter: brightness(${(props) => props.isOwned ? '100%' : '40%'});
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    height: 100px;
    margin-top: 10px;
`

const SmiskiDescription = styled.div`
    padding: 5px 10px;
`

const SmiskiName = styled.p`
    font-weight: bold;
    color: ${(props) => props.theme.TEXT_COLOR};
`

const Description = styled.p`
    white-space: normal;
    color: ${(props) => props.theme.TEXT_COLOR};
`

const CountOwned = styled.h3`
    margin: 0px 0px 0px auto;
    padding: 10px 10px;
    color: ${(props) => props.theme.TEXT_COLOR};
`

const NavLeftArrow = styled.p`
    color: ${(props) => props.theme.TEXT_COLOR};
    font-weight: bold;
    position: absolute;
    top: 42%;
    left: 3px;
    font-size: 30px;
    margin: 0px;
    cursor: pointer;
`

const NavRightArrow = styled.p`
    color: ${(props) => props.theme.TEXT_COLOR};
    font-weight: bold;
    position: absolute;
    top: 45%;
    right: 3px;
    font-size: 30px;
    margin: 0px;
    cursor: pointer;
`

function SmiskiSeries (props) {
    const scrollable = useRef(null)
    const { series } = props
    const theme = {
        CARD_BACKGROUND: COLOR.SMISKI_BACKGROUND_DARK_GREEN,
        TEXT_COLOR: COLOR.WHITE
    }
    const totalSmiskis = series.data.length;
    const ownedSmiskis = series.data.filter((smiski) => smiski.isOwned).length

    const scroll = (isRight) => {
        const scrollLength = '200'
        scrollable.current.scrollBy({
            left: scrollLength * (isRight ? 1 : -1),
            behavior: 'smooth'
        })
    }

    return (
        <Container>
            <Card theme={theme}>
                <FlexBox>
                    <Header theme={theme}>{series.name}</Header>
                    <CountOwned theme={theme}>{ownedSmiskis} / {totalSmiskis} owned</CountOwned>
                </FlexBox>

                <NavLeftArrow theme={theme} onClick={() => scroll(false)}>&lt;</NavLeftArrow>
                <NavRightArrow theme={theme} onClick={() => scroll(true)}>&gt;</NavRightArrow>

                <SmiskiContainer theme={theme} ref={scrollable}>
                    {series.data.map((smiski) => {
                        return (
                            <SmiskiCard theme={theme}>
                                <ImgContainer>
                                    <SmiskiImg
                                        alt={smiski.name}
                                        src={smiski.icon}
                                        isOwned={smiski.isOwned}
                                        loading='lazy'
                                    />
                                </ImgContainer>

                                <SmiskiDescription>
                                    <SmiskiName theme={theme}>{smiski.name}</SmiskiName>
                                    <Description theme={theme}>{smiski.details}</Description>
                                </SmiskiDescription>
                            </SmiskiCard>
                        )
                    })}
                </SmiskiContainer>
            </Card>
        </Container>
    )
}

export default SmiskiSeries