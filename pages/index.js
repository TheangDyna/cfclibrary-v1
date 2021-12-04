import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Link
} from '@material-ui/core';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

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
const useStyles = makeStyles((theme) => ({

  wel__img: {

    backgroundImage: 'url("./images/5487854.png")',
    backgroundSize: 'cover',
    height: 'calc(100vh - 200px)'
  },
  wel__text: {
    background: 'rgba(255,255,255,0.5)',
    padding: 50,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wel__button: {
    display: 'block',
    margin: '0 auto'
  },
  title: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 30,
    padding: 15,
    background: '#1eae98',
    color: '#fff',
    alignItems: 'center'
  },
  link: {
    cursor: 'pointer',
    color: '#fff'
  },
  carousel: {
    width: `calc(100vw - ${290}px)`
  },
  carousel__item: {
    width: 130,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }


}));

const home = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Grid container className={classes.wel__img}>
          <Grid item lg={6} className={classes.wel__text}>
            <div>
              <img src='./images/logo.png' alt='Logo' width='200' />
              <Typography variant='h4' color='primary'>Welcome to CFC Library</Typography>
              <Typography style={{ marginTop: 20, marginBottom: 20 }}>We believe that reading opens doors, and part of our mission is to change the way the world reads by providing a wide range of reading material in both print and audio formats at a price that is fair for both creators and consumers.</Typography>
              <Button variant='contained' color='primary'>
                Get Start
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.title}>
        <Typography variant='h6'>
          Categories Books
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography>
          <Link className={classes.link}>
            View All
          </Link>
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Carousel
          responsive={responsive}
          slidesToSlide={6}
        >
          {
            bookCategories.map((bookCategory, index) => (
              <Card key={index} style={{ width: 100, padding: 10, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Typography noWrap>
                  {bookCategory.title}
                </Typography>
              </Card>
            ))
          }
        </Carousel>
      </div>
      <div className={classes.title}>
        <Typography variant='h6'>
          New Arrival Books
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography>
          <Link className={classes.link}>
            View All
          </Link>
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Carousel
          responsive={responsive}
          slidesToSlide={6}
        >
          {
            books.map((book, index) => (
              <Card key={index} className={classes.carousel__item}>
                <CardMedia image={book.img} style={{ width: '100%', height: '100%' }} />
              </Card>
            ))
          }
        </Carousel>
      </div>
      <div className={classes.title}>
        <Typography variant='h6'>
          Top Borrow Books
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography>
          <Link className={classes.link}>
            View All
          </Link>
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Carousel
          responsive={responsive}
          slidesToSlide={6}
        >
          {
            books.map((book, index) => (
              <Card key={index} className={classes.carousel__item}>
                <CardMedia image={book.img} style={{ width: '100%', height: '100%' }} />
              </Card>
            ))
          }
        </Carousel>
      </div>
      <div className={classes.title}>
        <Typography variant='h6'>
          Recommend Books
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <Typography>
          <Link className={classes.link}>
            View All
          </Link>
        </Typography>
      </div>
      <div className={classes.carousel}>
        <Carousel
          responsive={responsive}
          slidesToSlide={6}
        >
          {
            books.map((book, index) => (
              <Card key= {index} className={classes.carousel__item}>
                <CardMedia image={book.img} style={{ width: '100%', height: '100%' }} />
              </Card>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default home;