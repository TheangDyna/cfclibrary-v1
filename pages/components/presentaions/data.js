const dailyData = [
    {
        name: 'Mon',
        return: 1,
        borrow: 2,
    },
    {
        name: 'Tue',
        return: 8,
        borrow: 1,
    },
    {
        name: 'Wed',
        return: 0,
        borrow: 9,
    },
    {
        name: 'Thu',
        return: 2,
        borrow: 8,
    },
    {
        name: 'Fri',
        return: 1,
        borrow: 4,
    },
    {
        name: 'Sat',
        return: 2,
        borrow: 3,
    },
    {
        name: 'Sun',
        return: 3,
        borrow: 4,
    },
];
const weeklyData = [
    {
        name: 'Week 1',
        return: 12,
        borrow: 13,
    },
    {
        name: 'Week 2',
        return: 18,
        borrow: 11,
    },
    {
        name: 'Week 3',
        return: 14,
        borrow: 15,
    },
    {
        name: 'Week 4',
        return: 12,
        borrow: 18,
    }
];
const monthlyData = [
    {
        name: 'Jan',
        return: 112,
        borrow: 113,
    },
    {
        name: 'Feb',
        return: 118,
        borrow: 111,
    },
    {
        name: 'Mar',
        return: 114,
        borrow: 115,
    },
    {
        name: 'Apr',
        return: 112,
        borrow: 118,
    },
    {
        name: 'May',
        return: 112,
        borrow: 113,
    },
    {
        name: 'Jun',
        return: 118,
        borrow: 111,
    },
    {
        name: 'Jul',
        return: 114,
        borrow: 115,
    },
    {
        name: 'Aug',
        return: 112,
        borrow: 118,
    },
    {
        name: 'Sep',
        return: 112,
        borrow: 113,
    },
    {
        name: 'Oct',
        return: 118,
        borrow: 111,
    },
    {
        name: 'Nov',
        return: 14,
        borrow: 15,
    },
    {
        name: 'Dec',
        return: 112,
        borrow: 118,
    },
];
const yearlyData = [
    {
        name: '2020',
        return: 1112,
        borrow: 1113,
    },
    {
        name: '2021',
        return: 1118,
        borrow: 1111,
    },
];

function createData(date, borrow, returned) {
    return { date, borrow, returned};
  }
  
  const rows = [
    createData('01-01-2021', 3, 6),
    createData('01-02-2021', 4, 5),
    createData('01-03-2021', 26, 2),
    createData('02-01-2021', 3, 6),
    createData('02-02-2021', 4, 5),
    createData('02-03-2021', 26, 2),
    createData('03-01-2021', 3, 6),
    createData('03-02-2021', 4, 5),
    createData('03-03-2021', 26, 2),
  ];
  

export {
    dailyData,
    weeklyData,
    monthlyData,
    yearlyData,
    rows
}