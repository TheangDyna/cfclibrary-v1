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
    Fab,
    Dialog,
} from '@material-ui/core';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import AddIcon from '@material-ui/icons/Add';
import { bookCategories, books } from './components/presentaions/data'
import AddBooks from './components/containers/AddBooks'


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
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

const library = () => {
    const [categories, setCategories] = useState('');
    const classes = useStyles();
    const [openAddBooks, setOpenAddBooks] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const usered = true;
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
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        {bookCategories.map((bookCategory, index) => (
                            <MenuItem
                                key={index}
                                value={bookCategory.value}
                            >
                                {bookCategory.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.container}>
                {books.filter((book) => book.category.toLowerCase().includes(categories.toLowerCase())
                    || book.subcategory.toLowerCase().includes(categories.toLowerCase())
                ).filter((book) => book.title.toLowerCase().includes(valueSearch.toLowerCase())
                    || book.author.toLowerCase().includes(valueSearch.toLowerCase())
                ).map((book, index) => (
                    valueSearch == '' ?
                    (
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
                                                {book.author}
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
                    ) : (
                        null
                    )
                ))}
            </Grid>
            {
                usered ? (
                    null
                ) : (
                    <Fab color='primary' className={classes.fab} onClick={() => setOpenAddBooks(true)}>
                        <AddIcon />
                    </Fab>
                )
            }
            <Dialog open={openAddBooks}>
                <AddBooks close={() => setOpenAddBooks(false)} />
            </Dialog>
        </div>
    );
}

export default library;