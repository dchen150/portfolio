import { useCallback, useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import ThemeContext from '../themeContext'

const Title = styled.h3`
    color: ${props => props.theme.TEXT};
    margin: 2px 0px;
`

const ListItem = styled.li`
    font-size: 14px;
    color: ${(props) => props.theme.TEXT};
`

const SeeMoreButton = styled.p`
    cursor: pointer;
    float: right;
    text-decoration: underline;
    color: ${(props) => props.theme.TEXT};
`

const PARTITION_SIZE = 2
/**
 * List of bullet points.
 */
export default function List(props) {
    const { description } = props
    const { title, points } = description
    const theme = useContext(ThemeContext)

    const [isSeeingMore, setIsSeeingMore] = useState(false);
    const [partition, setPartition] = useState({
        shouldPartition: false,
        partitionOne: points,
        partitionTwo: undefined
    })

    useEffect(() => {
        const shouldPartition = points.length > PARTITION_SIZE
        let newPartition = { shouldPartition }
        if (shouldPartition) {
            // the points that will be displayed regardless of whether See More has been pressed or not
            newPartition = { ...newPartition, partitionOne: points.slice(0, PARTITION_SIZE) }

            // the points that will only be displayed if See More has been pressed
            newPartition = { ...newPartition, partitionTwo: points.slice(PARTITION_SIZE, points.length) }
        } else {
            newPartition = { ...newPartition, partitionOne: points }
        }
        setPartition(newPartition)
        setIsSeeingMore(false)
    }, [points])

    const getListItem = useCallback((partition) => {
        if (!partition) {
            return
        }
        return partition.map((point) => <ListItem key={point} theme={theme}>{point}</ListItem>)
    }, [theme])

    const onSeeMoreClick = useCallback(() => { setIsSeeingMore(!isSeeingMore) }, [isSeeingMore])

    return (
        <>
            <Title theme={theme}>{title}</Title>

            <ul>
                {getListItem(partition.partitionOne)}
                {partition.shouldPartition && !isSeeingMore && <SeeMoreButton theme={theme} onClick={onSeeMoreClick}>see more</SeeMoreButton>}
                {isSeeingMore && getListItem(partition.partitionTwo)}
                {partition.shouldPartition && isSeeingMore && <SeeMoreButton theme={theme} onClick={onSeeMoreClick}>see less</SeeMoreButton>}
            </ul>
        </>
    )
}