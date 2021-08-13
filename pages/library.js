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
import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
    },
    container: {
        marginTop: 20
    },
    card__img: {
        height: 200,
        width: '100%',
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

const library = () => {
    const books = [
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Anna Karenina',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'To Kill a Mockingbird',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'The Great Gatsby',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'One Hundred Years of Solitude',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'A Passage to India',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Invisible Man',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Don Quixote',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Beloved',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Mrs. Dalloway',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Things Fall Apart',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'The Color Purple',
        },
        {
            img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
            title: 'Follow Your Heard',
        },

    ]

    const bookCategories = [
        {
            title: 'All',
            path: ''
        },
        {
            title: 'Arts & Music',
            path: ''
        },
        {
            title: 'Biographies',
            path: ''
        },
        {
            title: 'Business',
            path: ''
        },
        {
            title: 'Comics',
            path: ''
        },
        {
            title: 'Computers & Tech',
            path: ''
        },
        {
            title: 'Cooking',
            path: ''
        },
        {
            title: 'Edu & Reference',
            path: ''
        },
        {
            title: 'Entertainment',
            path: ''
        },
        {
            title: 'Health & Fitness',
            path: ''
        },
        {
            title: 'History',
            path: ''
        },
        {
            title: 'Hobbies & Crafts',
            path: ''
        },
        {
            title: 'Home & Garden',
            path: ''
        },
        {
            title: 'Horror',
            path: ''
        },
        {
            title: 'Kids',
            path: ''
        },
        {
            title: 'Literature & Fiction',
            path: ''
        },
        {
            title: 'Medical',
            path: ''
        },
        {
            title: 'Mysteries',
            path: ''
        },
        {
            title: 'Parenting',
            path: ''
        },
        {
            title: 'Religion',
            path: ''
        },
        {
            title: 'Romance',
            path: ''
        },
        {
            title: 'Science & Math',
            path: ''
        },
        {
            title: 'Self-Help',
            path: ''
        },
        {
            title: 'Social Sciences',
            path: ''
        },
        {
            title: 'Sports',
            path: ''
        },
        {
            title: 'Teen',
            path: ''
        },
        {
            title: 'Travel',
            path: ''
        },
        {
            title: 'Website',
            path: ''
        },
    ]
    const [categories, setCategories] = useState('');
    const handleChangeCategories = (e) => {
        setCategories(e.target.value);
    };
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={8}>
                    <Autocomplete
                        freeSolo
                        options={books.map((option, index) => ('book ' + index))}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label='Search'
                                variant='outlined'
                                fullWidth
                                size='small'
                            />
                        )}
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

export default library;