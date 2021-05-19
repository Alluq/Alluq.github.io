import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Timeline from '@material-ui/lab/Timeline'
import TimelineContent from '@material-ui/lab/TimelineContent'
import { Paper } from '@material-ui/core'



const TimelineMenu = ({ data }) => {
    // Commented out code is to flip the timeline
    const useStyles = makeStyles({
        timelineMenu: {
            display: 'flex',
            alignSelf: 'left',
            justifyContent: 'left',
            alignItems: 'left',
            float: 'left'
        },
        timeline: {
            // transform: "rotate(90deg)"
        },
        timelineContentContainer: {
             // textAlign: "left" 
        },
        timelineContent: {
            display: "inline-block",
            textAlign: "center",
            minWidth: 50,
            whiteSpace: 'nowrap',
            padding: '3px',
            // transform: "rotate(-90deg)",
        },
        timelineIcon: {
            // transform: "rotate(-90deg)"
        },
        timelineItem: {

        },
        timelineSeparator: {

        }
    });

    const classes = useStyles();

    return (
        <div className={classes.timelineMenu}>
            <Timeline className={classes.timeline} align='left'>
                {data.map((item, index) => (
                    <React.Fragment>
                        <TimelineItem className={classes.timelineItem} >
                            <TimelineSeparator className={classes.timelineSeparator}>
                                <TimelineDot variant={ item.active ? 'default' : 'outlined'} />
                                {index !== data.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent className={classes.timelineContentContainer} >
                                <Paper className={classes.timelineContent} elevation={1}>
                                    {item.text}
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </React.Fragment>
                ))}
            </Timeline> 
        </div>
    )
}

export default TimelineMenu
