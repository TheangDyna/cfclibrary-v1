import React, { useState } from 'react';
import {
    makeStyles,
    Button,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    TextField,
    MenuItem,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { useRouter } from 'next/router';
import DateFnsUtils from '@date-io/date-fns';
import AssignmentReturnOutlinedIcon from '@material-ui/icons/AssignmentReturnOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import {
    dailyData,
    weeklyData,
    monthlyData,
    yearlyData,
} from './components/presentaions/data';
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
    selectedDate: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonMore: {
        paddingLeft: 10,
    },
    date__block: {
        marginTop: 20
    },
    statsContainer: {
        width: '80%',
        margin: '0 auto',
        height: 400,
        paddingTop: 40,
        paddingBottom: 20
    }

}));


const report = () => {
    const router = useRouter();
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div>
            <Grid container>
                <Grid item lg={12} className={classes.selectedDate}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            required
                            variant='inline'
                            inputVariant='outlined'
                            label='Date'
                            size='small'
                            format='dd/MMMM/yyyy'
                            // helperText= '^0^'
                            fullWidth
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>
                    <div className={classes.buttonMore}>
                        <IconButton onClick={() => router.push('/reportlist')}>
                            <ArrowForwardIosOutlinedIcon />
                        </IconButton>
                    </div>
                </Grid>
            </Grid>
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
            <ResponsiveContainer>
                <div />
            </ResponsiveContainer>
            <Grid container spacing={2} className={classes.date__block}>
                <Grid item lg={12}>
                    <Typography>
                        Daily Stats
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card>
                        <div className={classes.statsContainer}>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    data={dailyData}
                                    style={{ fontFamily: 'Viga' }}
                                >
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type='monotone' dataKey='borrow' stroke='#FFBD39' activeDot={{ r: 4 }} strokeWidth={2}/>
                                    <Line type='monotone' dataKey='return' stroke='#84D270' activeDot={{ r: 4 }} strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.date__block}>
                <Grid item lg={12}>
                    <Typography>
                        Weekly Stats
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card>
                        <div className={classes.statsContainer}>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    data={weeklyData}
                                    style={{ fontFamily: 'Viga' }}
                                >
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type='monotone' dataKey='borrow' stroke='#FFBD39' activeDot={{ r: 4 }} strokeWidth={2} />
                                    <Line type='monotone' dataKey='return' stroke='#84D270' activeDot={{ r: 4 }} strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.date__block}>
                <Grid item lg={12}>
                    <Typography>
                        Monthly Stats
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card>
                        <div className={classes.statsContainer}>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    data={monthlyData}
                                    style={{ fontFamily: 'Viga' }}
                                >
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type='monotone' dataKey='borrow' stroke='#FFBD39' activeDot={{ r: 4 }} strokeWidth={2} />
                                    <Line type='monotone' dataKey='return' stroke='#84D270' activeDot={{ r: 4 }} strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.date__block}>
                <Grid item lg={12}>
                    <Typography>
                        Yearly Stats
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Card>
                        <div className={classes.statsContainer}>
                            <ResponsiveContainer width='100%' height='100%'>
                                <LineChart
                                    data={yearlyData}
                                    style={{ fontFamily: 'Viga' }}
                                >
                                    <CartesianGrid strokeDasharray='3 3' />
                                    <XAxis dataKey='name' padding={{ left: 30, right: 30 }} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type='monotone' dataKey='borrow' stroke='#FFBD39' activeDot={{ r: 4 }} strokeWidth={2} />
                                    <Line type='monotone' dataKey='return' stroke='#84D270' activeDot={{ r: 4 }} strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default report;