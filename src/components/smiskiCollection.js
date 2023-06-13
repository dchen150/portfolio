import styled from 'styled-components'
import Card from './card'
import { COLOR } from '../constants/theme'
import { SMISKI_COLLECTION } from '../assets/data'
import SmiskiSeries from './smiskiSeries'

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

const Header = styled.h3`
    color: ${(props) => props.theme.TEXT_COLOR};
    margin-bottom: 0px;
`

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding-bottom: 10px;
`

const FlexBox = styled.div`
    display: flex;
`

const Close = styled.p`
    margin: 7px 20px 0px auto;
    cursor: pointer;
    font-weight: bold;
    color: ${(props) => props.theme.TEXT_COLOR};
    font-size: 20px;
`

const Description = styled.div`
    color: ${(props) => props.theme.TEXT_COLOR};
    padding-bottom: 15px
`

function SmiskiCollection (props) {
    const { setShowSmiskiCollection } = props
    const theme = {
        CARD_BACKGROUND: COLOR.SMISKI_BACKGROUND_LIGHT_GREEN,
        TEXT_COLOR: COLOR.WHITE
    }

    const groupByCurrency = (accumulator, data) => {
        return (
            data.reduce((result, item) => {
                if (item["paidAmount"] === null) {
                    return result
                }

                return ({
                ...result,
                [item["paidCurrency"]]: (result[item["paidCurrency"]] || 0) + item["paidAmount"]
            })}, accumulator)
        )
    }

    let acc = {}

    SMISKI_COLLECTION.forEach((series) => {
        acc = groupByCurrency(acc, series.data)
    })

    const handleClose = () => {
        setShowSmiskiCollection(false)
    }

    return (
        <Container id="SMISKI Collection">
            <Card theme={theme} padding={15}>
                <FlexBox>
                    <Header theme={theme}>SMISKI Collection</Header>
                    <Close theme={theme} onClick={handleClose}>x</Close>
                </FlexBox>

                <Description theme={theme}>
                    Smiski are curious little creatures that love hiding in small spaces and corners of your room. You might discover one at night as they mysteriously glow in the dark. I first got interested in SMISKI on my trip to Japan in 2023. Currently looking forward to purchasing the SMISKI Exercising series.
                    <br />
                    <br />
                    Note: all weights shown are independent of the box + wrapper
                    <br />
                    <br />
                    Total Spent:
                    <br />
                    {Object.entries(acc).map((entry) => {
                        return (
                            <div key={entry[0]}>
                                {entry[0]}: {entry[1]}
                                <br/>
                            </div>
                        )
                    })}
                </Description>

                <RowContainer>
                    {SMISKI_COLLECTION.map((series, idx) => <SmiskiSeries key={series.name + idx} series={series} />)}
                </RowContainer>
            </Card>
        </Container>
    )
}

export default SmiskiCollection