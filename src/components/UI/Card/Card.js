import React from 'react';
import {styled} from '@mui/material/styles';
import {Card, CardActions, CardContent, Icon, Typography} from "@mui/material";
import {Star, StarBorderRounded, VisibilityOff, VisibilityRounded} from "@mui/icons-material";


const PREFIX = 'Card';

const classes = {
    root: `${PREFIX}-root`,
    title: `${PREFIX}-title`,
    description: `${PREFIX}-description`,
    pos: `${PREFIX}-pos`,
    count: `${PREFIX}-count`,
    icon: `${PREFIX}-icon`
};

const StyledCard = styled(Card)({
    [`&.${classes.root}`]: {
        minWidth: 275,
        fontSize: '2rem'
    },
    [`& .${classes.title}`]: {
        fontSize: '4rem',
        marginBottom: 3
    },
    [`& .${classes.description}`]: {
        fontSize: '2rem'
    },
    [`& .${classes.pos}`]: {
        fontSize: '2rem',
        marginBottom: 12
    },
    [`& .${classes.count}`]: {
        display: 'inline-block',
        marginLeft: '0.5rem',
        marginRight: '1rem'
    },
    [`& .${classes.icon}`]: {
        fontSize: '2rem'
    }
});

export default function OutlinedCard({repository, viewerHasStarred, viewerSubscription, starToogler, watchToggler, starCount, watchCount}) {

    let StarComponent = viewerHasStarred ? Star : StarBorderRounded
    let WatchComponent = viewerSubscription === 'SUBSCRIBED' ? VisibilityOff : VisibilityRounded
    return (
        <StyledCard className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} component="h2" gutterBottom>
                    {repository.name}
                </Typography>
                <Typography component="p" color="textSecondary" className={classes.description}>
                    {repository.description}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Repo Link: <a target="_blank" rel="noopener noreferrer" href={repository.url}>{repository.url}</a>
                </Typography>
            </CardContent>
            <CardActions>

                <Icon component={StarComponent} onClick={starToogler} className={classes.icon}/>
                <span className={classes.count}>{starCount}</span>


                <Icon component={WatchComponent} onClick={watchToggler} className={classes.icon}/>
                <span className={classes.count}>{watchCount}</span>


            </CardActions>
        </StyledCard>
    );
}