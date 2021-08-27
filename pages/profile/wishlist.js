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
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import { books, bookCategories } from '../components/presentaions/data';


const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
    },
    container: {
        marginTop: 20
    },
    card__img: {
        width: '100%',
        height: 230,
        marginBottom: theme.spacing(1)
    },
    card__content: {
        padding: 0
    },
    search: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    search__input: {
        marginLeft: theme.spacing(3),
        flex: 1,
    },
    search__icon: {
        padding: 10,
    },
    search__divider: {
        height: 28,
        margin: 4,
    },
}));

const wishlist = () => {
    const [categories, setCategories] = useState('');
    const handleChangeCategories = (e) => {
        setCategories(e.target.value);
    };
    const classes = useStyles();
    const [valueSearch, setValueSearch] = useState('');

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item sm={12} md={12} lg={8}>
                    <TextField
                        variant='outlined'
                        type='text'
                        size='small'
                        onChange={(e) => setValueSearch(e.target.value)}
                        value={valueSearch}
                        label='Search'
                        fullWidth
                        InputProps={{
                            endAdornment: valueSearch && (
                                <IconButton
                                    size='small'
                                    aria-label='toggle password visibility'
                                    onClick={() => setValueSearch('')}
                                >
                                    <ClearOutlinedIcon />
                                </IconButton>
                            )
                        }}
                    />
                </Grid>
                <Grid item lg={4}>
                    <TextField
                        variant='outlined'
                        select
                        label='Categories'
                        fullWidth
                        size='small'
                        value={categories}
                        onChange={handleChangeCategories}
                    >
                        {bookCategories.map((bookCategory, index) => (
                            <MenuItem
                                key={index}
                                value={bookCategory.title}
                            >
                                {bookCategory.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.container}>
                {books.map((book, index) => (
                    <Grid item lg={2} key={index}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.card__img}
                                image={book.img}
                            />
                            <CardContent className={classes.card__content}>
                                <Grid container>
                                    <Grid item lg={12}>
                                        <Typography variant='h6' noWrap>
                                            {book.title}
                                        </Typography>
                                    </Grid>
                                    <Grid container alignItems='center'>
                                        <Grid item lg={10}>
                                            <Typography variant='subtitle1' color='textSecondary' noWrap>
                                                {book.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={2}>
                                            <IconButton color='primary' size='small'>
                                                <BookmarkBorderOutlinedIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' color='primary'>
                                    detail
                                </Button>
                                <Button variant='contained' color='primary'>
                                    Borrow
                                </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default wishlist;