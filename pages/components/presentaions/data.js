import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';


function createDataReportList(month, g10, g11, g12, total) {
    return { month, g10, g11, g12, total };
}

const y2021 = [
    createDataReportList('01',10, 11, 12, 50),
    createDataReportList('02',10, 11, 12, 50),
    createDataReportList('03',10, 11, 12, 50),
    createDataReportList('04',10, 11, 12, 50),
    createDataReportList('05',10, 11, 12, 50),
    createDataReportList('06',10, 11, 12, 50),
    createDataReportList('07',10, 11, 12, 50),
    createDataReportList('08',10, 11, 12, 50),
    createDataReportList('09',10, 11, 12, 50),
    createDataReportList('10',10, 11, 12, 50),
    createDataReportList('11',10, 11, 12, 50),
    createDataReportList('12',10, 11, 12, 50),
];

function createDataUserHistoryList(date, bookTitle, action) {
    return { date, bookTitle, action };
}

const historyCurrentUser = [
    createDataUserHistoryList('08-01-2021', 'Hello kid1', 'Borrow'),
    createDataUserHistoryList('08-05-2021', 'Hello kid2', 'Return'),
    createDataUserHistoryList('08-06-2021', 'Hello kid3', 'Return'),
    createDataUserHistoryList('08-07-2021', 'Hello kid4', 'Return'),
    createDataUserHistoryList('08-08-2021', 'Hello kid5', 'Expired'),
    createDataUserHistoryList('08-10-2021', 'Hello kid6', 'Expired'),
];

function createDataUserList(id, fname, lname, gender, grade, birthdate, phoneNumber, password, address) {
    return { id, fname, lname, gender, grade, birthdate, phoneNumber, password, address };
};
const userList = [
    createDataUserList('000001', 'Teang', 'Dyna', 'Male', '12 A', '09-04-2003', '15 367 150', 'Bad Boy 365?', 'Aranh, Siem Reap, Siem Reap'),
    createDataUserList('000002', 'Teang', 'Dyna', 'Male', '12 A', '09-04-2003', '15 367 150', 'Bad Boy 365?', 'Por, Siem Reap, Siem Reap'),
    createDataUserList('000003', 'Teang', 'Dyna', 'Male', '12 A', '09-04-2003', '15 367 150', 'Bad Boy 365?', 'Phnom Krom, Siem Reap, Siem Reap'),
    
];

function createDataBookList(id, title, author, sponsor, category, subCategory, condition, amount, img, descripsion, date, stock) {
    return { id, title, author, sponsor, category, subCategory, condition, amount, img, descripsion, date, stock };
};

const bookList = [
    createDataBookList('000001', 'Title', 'Author', 'CFC', 'Kids', 'Maths', 'New', '10', 'imgurl','hello 1 2 3', '08-08-2021', 5),
    
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
       value: ''
    },
    {
        title: 'Social Sciences',
       value: 'Self-Help'
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

const addBookCategories = [
    {
        title: 'Arts & Music',
       value: ''
    },
    {
        title: 'Biographies',
       value: ''
    },
    {
        title: 'Business',
       value: ''
    },
    {
        title: 'Comics',
       value: ''
    },
    {
        title: 'Computers & Tech',
       value: ''
    },
    {
        title: 'Cooking',
       value: ''
    },
    {
        title: 'Edu & Reference',
       value: ''
    },
    {
        title: 'Entertainment',
       value: ''
    },
    {
        title: 'Health & Fitness',
       value: ''
    },
    {
        title: 'History',
       value: ''
    },
    {
        title: 'Hobbies & Crafts',
       value: ''
    },
    {
        title: 'Home & Garden',
       value: ''
    },
    {
        title: 'Horror',
       value: ''
    },
    {
        title: 'Kids',
       value: ''
    },
    {
        title: 'Literature & Fiction',
       value: ''
    },
    {
        title: 'Medical',
       value: ''
    },
    {
        title: 'Mysteries',
       value: ''
    },
    {
        title: 'Parenting',
       value: ''
    },
    {
        title: 'Religion',
       value: ''
    },
    {
        title: 'Romance',
       value: ''
    },
    {
        title: 'Science & Math',
       value: ''
    },
    {
        title: 'Self-Help',
       value: ''
    },
    {
        title: 'Social Sciences',
       value: ''
    },
    {
        title: 'Sports',
       value: ''
    },
    {
        title: 'Teen',
       value: ''
    },
    {
        title: 'Travel',
       value: ''
    },
    {
        title: 'Website',
       value: ''
    },
    {
        title: 'Other',
       value: ''
    },
];

const menuItems = [
    {
        text: 'home',
        icon: <HomeOutlinedIcon />,
        path: '/',
        sublist: 0
    },
    {
        text: 'Library',
        icon: <LibraryBooksOutlinedIcon />,
        path: '/library',
        sublist: 0
    },
    {
        text: 'Profile',
        icon: <AccountCircleOutlinedIcon />,
        sublist: 1,
        subListMenu: [
            {
                text: 'History',
                icon: <HistoryOutlinedIcon />,
                path: '/profile/history',
            },
            {
                text: 'Wish List',
                icon: <BookmarkOutlinedIcon />,
                path: '/profile/wishlist',
            },
            {
                text: 'Account',
                icon: <SettingsOutlinedIcon />,
                path: '/profile/account',
            }
        ],
        subListAdmin: [
            {
                text: 'Book List',
                icon: <LibraryBooksOutlinedIcon />,
                path: '/profile/bookList',
            },
            {
                text: 'Student List',
                icon: <GroupOutlinedIcon />,
                path: '/profile/userList',
            },
            {
                text: 'Account',
                icon: <SettingsOutlinedIcon />,
                path: '/profile/account',
            }
        ]
    },
    {
        text: 'Report',
        icon: <AssessmentOutlinedIcon />,
        path: '/report',
        sublist: 0
    },
    {
        text: 'About',
        icon: <InfoOutlinedIcon />,
        path: '/about',
        sublist: 0
    },
    {
        text: 'Contact',
        icon: <ForumOutlinedIcon />,
        path: '/contact',
        sublist: 0
    }
];

const currentUser = {
    fname: 'Theang',
    lname: 'Dyna',
    profile: 'https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/05/30/Pictures/_19298b80-a255-11ea-b043-295af9ca78f2.jpg',
    password: 'Bad Boy 365?',
    phoneNumber: 153657150,
    gender: 'Male',
    birthDate: '04/September/2003',
    grade: '12 A',
    address: '',
    history: [],
    wishlist: [],
    notification: [],
};

const g10y2020 = [
    {
      "id": "Male",
      "data": [
        {
          "x": "Jan",
          "y": 2
        },
        {
          "x": "Feb",
          "y": 7
        },
        {
          "x": "Mar",
          "y": 1
        },
        {
          "x": "Apr",
          "y": 1
        },
        {
          "x": "May",
          "y": 1
        },
        {
          "x": "Jun",
          "y": 0
        },
        {
          "x": "Jul",
          "y": 8
        },
        {
          "x": "Aug",
          "y": 0
        },
        {
          "x": "Sep",
          "y": 2
        },
        {
          "x": "Oct",
          "y": 2
        },
        {
          "x": "Nov",
          "y": 1
        },
        {
          "x": "Dec",
          "y": 1
        }
      ]
    },
    {
        "id": "Female",
        "data": [
          {
            "x": "Jan",
            "y": 5
          },
          {
            "x": "Feb",
            "y": 6
          },
          {
            "x": "Mar",
            "y": 4
          },
          {
            "x": "Apr",
            "y": 2
          },
          {
            "x": "May",
            "y": 2
          },
          {
            "x": "Jun",
            "y": 2
          },
          {
            "x": "Jul",
            "y": 2
          },
          {
            "x": "Aug",
            "y": 7
          },
          {
            "x": "Sep",
            "y": 3
          },
          {
            "x": "Oct",
            "y": 3
          },
          {
            "x": "Nov",
            "y": 3
          },
          {
            "x": "Dec",
            "y": 3
          }
        ]
      },
      {
        "id": "Total",
        "data": [
          {
            "x": "Jan",
            "y": 15
          },
          {
            "x": "Feb",
            "y": 16
          },
          {
            "x": "Mar",
            "y": 14
          },
          {
            "x": "Apr",
            "y": 12
          },
          {
            "x": "May",
            "y": 12
          },
          {
            "x": "Jun",
            "y": 12
          },
          {
            "x": "Jul",
            "y": 12
          },
          {
            "x": "Aug",
            "y": 17
          },
          {
            "x": "Sep",
            "y": 13
          },
          {
            "x": "Oct",
            "y": 13
          },
          {
            "x": "Nov",
            "y": 13
          },
          {
            "x": "Dec",
            "y": 13
          }
        ]
      },
     
  ];

export {
    
    books,
    bookCategories,
    addBookCategories,
    menuItems,
    currentUser,
    y2021,
    historyCurrentUser,
    userList,
    bookList,
    g10y2020,
}