import React, { useState } from 'react';
import {
    makeStyles,
    TextField,
    Grid,
    FormControl,
    FormControlLabel,
    RadioGroup,
    FormLabel,
    Radio,
    Typography,
    IconButton,
    InputAdornment,
    FormHelperText,
    Divider,
    MenuItem,
    Card,
    Link,
    Button,
    Dialog,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const addBookCategories = [
    {
        title: 'Arts & Music',
    },
    {
        title: 'Biographies',
    },
    {
        title: 'Business',
    },
    {
        title: 'Comics',
    },
    {
        title: 'Computers & Tech',
    },
    {
        title: 'Cooking',
    },
    {
        title: 'Edu & Reference',
    },
    {
        title: 'Entertainment',
    },
    {
        title: 'Health & Fitness',
    },
    {
        title: 'History',
    },
    {
        title: 'Hobbies & Crafts',
    },
    {
        title: 'Home & Garden',
    },
    {
        title: 'Horror',
    },
    {
        title: 'Kids',
    },
    {
        title: 'Literature & Fiction',
    },
    {
        title: 'Medical',
    },
    {
        title: 'Mysteries',
    },
    {
        title: 'Parenting',
    },
    {
        title: 'Religion',
    },
    {
        title: 'Romance',
    },
    {
        title: 'Science & Math',
    },
    {
        title: 'Self-Help',
    },
    {
        title: 'Social Sciences',
    },
    {
        title: 'Sports',
    },
    {
        title: 'Teen',
    },
    {
        title: 'Travel',
    },
    {
        title: 'Website',
    },
    {
        title: 'Other',
    },
];


const useStyles = makeStyles((theme) => {
    return {
        addBook__form: {
            width: `100%`,
            // margin: '0 auto'
        },
        addBook__button: {
            display: 'block',
            margin: '0 auto'
        },
        addBook__card: {
            padding: 20
        },
        body: {
            marginTop: theme.spacing(4)
        },
        divider: {
            marginTop: 10
        },
        phoneNumber__divider: {
            height: 20,
            marginLeft: 10,
            marginRight: 5,
            color: '#000000',
            background: '#808080',
        },
        amount: {
            '& input[type=number]': {
                '-moz-appearance': 'textfield'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            }
        },
        radio: {
            paddingLeft: 14
        },
        bottomLink: {
            display: 'flex',
            justifyContent: 'center',
        },
        closeDialogButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
        },
        link: {
            cursor: 'pointer'
        }

    }
});

const AddBooks = ({ close }) => {
    const classes = useStyles();
    const [values, setValues] = useState({
        title: '',
        url: '',
        author: '',
        sponsor: '',
        categories: '',
        subCategories: '',
        condition: '',
        amount: '',
        descripsion: '',

    });
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
    };
    const handleSubmit = (e) => {
        if (localStorage.getItem("books") == null || undefined) {
            localStorage.setItem("books", "[]");
        }
        var getBooks = localStorage.getItem("books");
        var objBooks = JSON.parse(getBooks);
        let newBook = {
            title: values.title,
            url: values.url,
            gender: values.author,
            author: values.sponsor,
            grade: values.categories,
            phoneNumber: values.subCategories,
            password: values.condition,
            profile: values.amount,
            address: values.descripsion
        };
        objBooks.push(newBook);
        localStorage.setItem("books", JSON.stringify(objBooks));
        e.preventDefault();
    }
    return (
        <div>
            <div className={classes.addBook__form}>
                <Card className={classes.addBook__card}>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div className={classes.head}>
                            <IconButton className={classes.closeDialogButton} onClick={close}>
                                <CloseIcon />
                            </IconButton>
                            <Typography variant='h5'>
                                Adding New Book
                            </Typography>
                            <Typography color='textSecondary'>
                                Adding the new book(s) by filling the form below.
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <div className={classes.body}>
                            <Grid container spacing={4}>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        // value={values.title}
                                        onChange={handleChange('title')}
                                        required
                                        label='Title'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        type='url'
                                        size='small'
                                        // value={values.url}
                                        onChange={handleChange('url')}
                                        required
                                        label='Image URL'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        // value={values.author}
                                        onChange={handleChange('author')}
                                        label='Author'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        // value={values.sponsor}
                                        onChange={handleChange('sponsor')}
                                        required
                                        label='Sponsor'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        select
                                        required
                                        label='Category'
                                        fullWidth
                                        size='small'
                                        onChange={handleChange('categories')}
                                        value={values.categories}
                                    >
                                        {addBookCategories.map((bookCategory, index) => (
                                            <MenuItem
                                                key={index}
                                                value={bookCategory.title}
                                            >
                                                {bookCategory.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        select
                                        label='Sub Category'
                                        fullWidth
                                        size='small'
                                        onChange={handleChange('subCategories')}
                                        value={values.subCategories}
                                    >
                                        {addBookCategories.map((bookCategory, index) => (
                                            <MenuItem
                                                key={index}
                                                value={bookCategory.title}
                                            >
                                                {bookCategory.title}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        select
                                        size='small'
                                        required
                                        label='Condition'
                                        // helperText= '^0^'
                                        fullWidth
                                        value={values.condition}
                                        onChange={handleChange('condition')}
                                    >
                                        <MenuItem value='new'>New</MenuItem>
                                        <MenuItem value='medium'>Medium</MenuItem>
                                        <MenuItem value='old'>Old</MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item sm={12} md={12} lg={6}>
                                    <TextField
                                        variant='outlined'
                                        type='number'
                                        size='small'
                                        className={classes.amount}
                                        // value={values.amount}
                                        onChange={handleChange('amount')}
                                        required
                                        label='Amount'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12} md={12} lg={12}>
                                    <TextField
                                        variant='outlined'
                                        type='text'
                                        size='small'
                                        multiline
                                        rows={5}
                                        // value={values.descripsion}
                                        onChange={handleChange('descripsion')}
                                        required
                                        label='Descripsion'
                                        // helperText= '^0^'
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='outlined' color='primary' className={classes.addBook__button} onClick={close}>
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item sm={6} md={6} lg={6}>
                                    <Button variant='contained' color='primary' type='submit' className={classes.addBook__button}>
                                        Add
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default AddBooks;