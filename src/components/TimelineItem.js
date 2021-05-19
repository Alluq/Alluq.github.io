const TimelineItem = ({ text, active }) => {
    return (
        <div>
            {text}
            {active && "active"}
        </div>
    )
}

export default TimelineItem
