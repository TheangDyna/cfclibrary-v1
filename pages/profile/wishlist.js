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
import Banner from '../components/presentaions/Banner';

const bookCategories = [
    {
        title: 'All',
        value: ''
    },
    {
        title: 'Arts & Music',
        value: 'Arts & Music'
    },
    {
        title: 'Biographies',
        value: 'Biographies'
    },
    {
        title: 'Business',
        value: 'Business'
    },
    {
        title: 'Comics',
        value: 'Comics'
    },
    {
        title: 'Computers & Tech',
        value: 'Computers & Tech'
    },
    {
        title: 'Cooking',
        value: 'Cooking'
    },
    {
        title: 'Edu & Reference',
        value: 'Edu & Reference'
    },
    {
        title: 'Entertainment',
        value: 'Entertainment'
    },
    {
        title: 'Health & Fitness',
        value: 'Health & Fitness'
    },
    {
        title: 'History',
        value: 'History'
    },
    {
        title: 'Hobbies & Crafts',
        value: 'Hobbies & Crafts'
    },
    {
        title: 'Home & Garden',
        value: 'Home & Garden'
    },
    {
        title: 'Horror',
        value: 'Horror'
    },
    {
        title: 'Kids',
        value: 'Kids'
    },
    {
        title: 'Literature & Fiction',
        value: 'Literature & Fiction'
    },
    {
        title: 'Medical',
        value: 'Medical'
    },
    {
        title: 'Mysteries',
        value: 'Mysteries'
    },
    {
        title: 'Parenting',
        value: 'Parenting'
    },
    {
        title: 'Religion',
        value: 'Religion'
    },
    {
        title: 'Romance',
        value: 'Romance'
    },
    {
        title: 'Science & Math',
        value: 'Science & Math'
    },
    {
        title: 'Self-Help',
        value: 'Self-Help'
    },
    {
        title: 'Social Sciences',
        value: 'Social Sciences'
    },
    {
        title: 'Sports',
        value: 'Sports'
    },
    {
        title: 'Teen',
        value: 'Teen'
    },
    {
        title: 'Travel',
        value: 'Travel'
    },
    {
        title: 'Website',
        value: 'Website'
    },
    {
        title: 'Other',
        value: 'Other'
    },
];

const books = [
    {
        title: 'title',
        img: 'https://www.writersdigest.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTcxMDY1ODEzNjcxMDk0MjU3/image-placeholder-title.jpg',
        author: 'author',
        sponsor: '',
        category: 'Website',
        subcategory: 'subcategory',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: 'descripsion',
    },
    {
        title: 'Anna Karenina',
        img: 'https://i.guim.co.uk/img/media/0e25ba53087c9ebdbd370d0bd1c19ba21798de4f/0_0_6912_10800/master/6912.jpg?width=700&quality=85&auto=format&fit=max&s=d115b179c86b2a211c354bda18f95bcc',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://i.pinimg.com/originals/25/97/b2/2597b2893650940c0cdcd0d6e947e1df.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://edit.org/img/blog/t9i-edit-book-covers-online.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUIlTBAsKjwUrAsN5LAxnfaK4J7zdALtDPA&usqp=CAU',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://marketplace.canva.com/EAD7YH8bebE/1/0/1003w/canva-white-bold-text-thriller-mystery-book-cover-9g0hPVfwFlI.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },

    {
        title: 'Anna Karenina',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7WK2nTkpmtUsLYgV1jdECPedSrE0vt7PNxfJvJYV7OxxiUqfkcWvO3Q4KPWap6heAxs&usqp=CAU',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1594616847',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/71A8HHN+PgS._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/81EWdX2J6gL._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/81BdMSuI5ZS._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/914BkcGCNgS._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://m.media-amazon.com/images/I/91kB0uzAglL._AC_UL320_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81zZK03SIUS._AC_UL160_SR160,160_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81xfbcYf98L._AC_UL160_SR160,160_.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'http://www.designbookcover.pt/uploads/media/photos/cache/b1_only_words_72_media_huge_thumbnail.jpg',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
    {
        title: 'Anna Karenina',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaDLeYPDuStnWJEp1I94ohysN-5MGygsewth2Mp8jSVDZDrU0CyHMEop3jNq1AKuuGWc0&usqp=CAU',
        author: '',
        sponsor: '',
        category: '',
        subcategory: '',
        condition: '',
        amount: '',
        id: '',
        popular: '',
        newArrival: '',
        recommend: '',
        descripsion: '',
    },
];


const useStyles = makeStyles((theme) => ({
    card: {
        padding: 10,
    },
    container: {
        marginTop: 20
    },
    card__img: {
        width: '100%',
        height: 200,
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
    card__imgSearch: {
        width: '90%',
        height: 120,
        margin: 10
    },
}));

const wishList = () => {
    const [categories, setCategories] = useState('');
    const classes = useStyles();
    const [valueSearch, setValueSearch] = useState('');
    return (
        <div>
            <Banner title='Wish List Page' img='url(".././images/wishList.jpg")' />
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
            <Grid container spacing={3} className={classes.container}>
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
                                                <Typography noWrap>
                                                    {book.title}
                                                </Typography>
                                            </Grid>
                                            <Grid container alignItems='center'>
                                                <Grid item lg={10}>
                                                    <Typography variant='subtitle1' color='textSecondary' noWrap>
                                                        {book.author == '' ? 'none' : book.author}
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
                            <Grid item lg={12}>
                                <Card>
                                    <Grid container spacing={2}>
                                        <Grid item lg={1}>
                                            <CardMedia
                                                className={classes.card__imgSearch}
                                                image={book.img}
                                            />
                                        </Grid>
                                        <Grid item lg={11} style={{ display: 'flex' }}>
                                            <CardContent>
                                                <Typography variant='h6' noWrap>
                                                    {book.title}
                                                </Typography>
                                                <Typography variant='subtitle1' color='textSecondary' noWrap>
                                                    {book.author == '' ? 'none' : book.author}
                                                </Typography>
                                                <IconButton color='primary' size='small'>
                                                    <BookmarkBorderOutlinedIcon />
                                                </IconButton>
                                            </CardContent>
                                            <div style={{ flexGrow: 1 }} />
                                            <CardActions>
                                                <div>
                                                    <div align='center'>
                                                        <Button variant='outlined' color='primary'>
                                                            detail
                                                        </Button>
                                                    </div>
                                                    <div style={{ height: 20 }} />
                                                    <div align='center' >
                                                        <Button variant='contained' color='primary'>
                                                            Borrow
                                                        </Button>
                                                    </div>

                                                </div>

                                            </CardActions>
                                        </Grid>



                                    </Grid>
                                </Card>

                            </Grid>
                        )
                ))}
            </Grid>
        </div>
    );
}

export default wishList;