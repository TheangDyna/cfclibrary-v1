  import React, { useState } from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
} from '@material-ui/core';
import AssignmentReturnOutlinedIcon from '@material-ui/icons/AssignmentReturnOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import dynamic from 'next/dynamic';
import {
    g10y2020,
} from './components/presentaions/data'
  const PieChart = dynamic(
    () => import("./components/containers/dashboards/PieChart"),
    { ssr: false }
  );
  const LineChart = dynamic(
    () => import("./components/containers/dashboards/lineChart"),
    { ssr: false }
  );
const useStyles = makeStyles((theme) => ({
    dailyCard: {
        display: 'flex',
        height: 80
    },
    dailyCard__left: {
        height: 80,
        width: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dailyCard__icon: {
        fontSize: 50,
        fontWeight: 400,
        color: '#FFFFFF',
        opacity: 0.5
    },
    data: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    data__block: {
        textAlign: 'center',
    },
    flexGrow: {
        flexGrow: 1,
    },
    dailyDate: {
        paddingBottom: 30,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    buttonMore: {
        paddingLeft: 10,
    },
    date__block: {
        marginTop: 20
    },
    chart__block: {
        width: '100%',
        height: '50vh'
    },
    chart: {
        marginTop: theme.spacing(4)
    }

}));


const report = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={2} className={classes.date__block}>
                <Grid item lg={12}>
                    <Typography>
                        Today Stats
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Card className={classes.dailyCard}>
                        <CardMedia>
                            <div className={classes.dailyCard__left} style={{ background: '#FFBD39' }}>
                                <AssignmentReturnOutlinedIcon className={classes.dailyCard__icon} />
                            </div>
                        </CardMedia>
                        <CardContent className={classes.data}>
                            <div className={classes.data__block}>
                                <Typography variant='h5'>
                                    20
                                </Typography>
                                <Typography color='textSecondary'>
                                    Borrow
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card className={classes.dailyCard}>
                        <CardMedia>
                            <div className={classes.dailyCard__left} style={{ background: '#84D270' }}>
                                <AssignmentTurnedInOutlinedIcon className={classes.dailyCard__icon} />
                            </div>
                        </CardMedia>
                        <CardContent className={classes.data}>
                            <div className={classes.data__block}>
                                <Typography variant='h5'>
                                    15
                                </Typography>
                                <Typography color='textSecondary'>
                                    Retern
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    <Card className={classes.dailyCard}>
                        <CardMedia>
                            <div className={classes.dailyCard__left} style={{ background: '#FF4848' }}>
                                <AssignmentLateOutlinedIcon className={classes.dailyCard__icon} />
                            </div>
                        </CardMedia>
                        <CardContent className={classes.data}>
                            <div className={classes.data__block}>
                                <Typography variant='h5'>
                                    5
                                </Typography>
                                <Typography color='textSecondary'>
                                    Expired
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.chart}>
                <Grid item lg={12}>
                    <Typography>
                        10th grade statistics for 2021
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card className={classes.chart__block}>
                        <LineChart data={g10y2020} text= {'10th Grade'}/>
                    </Card>
                </Grid>

            </Grid>
            <Grid container spacing={2} className={classes.chart}>
                <Grid item lg={12}>
                    <Typography>
                        11th grade statistics for 2021
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card className={classes.chart__block}>
                        <LineChart data={g10y2020} text= {'11th Grade'}/>
                    </Card>
                </Grid>

            </Grid>
            <Grid container spacing={2} className={classes.chart}>
            <Grid item lg={12}>
                <Typography>
                    112th grade statistics for 2021
                </Typography>
            </Grid>
            <Grid item lg={12}>
                <Card className={classes.chart__block}>
                    <LineChart data={g10y2020} text= {'12th Grade'}/>
                </Card>
            </Grid>

        </Grid>
        </div>
    );
}

export default report;