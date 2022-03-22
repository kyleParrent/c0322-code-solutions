var orderHistory = [
  {
    items: [{
      name: 'Javascript for Impatient programmers',
      picture: URL,
      author: 'Rauschmayer, Dr. Axel',
      windowClosed: 'Sep 7, 2020',
      price: 31.55,
      directDeliver: false,
      deliverDate: 'Aug 8, 2020',
      supportQ: false,
      orderDate: 'August 4, 2020',
      total: 34.00,
      shippedTo: 'JS Masher',
      orderNum: '114-3941689-8772232'
    }]
  },
  {
    items: [{
      name: 'The Timeless Way of Building',
      picture: URL,
      author: 'Alexander Christopher',
      windowClosed: 'Aug 19, 2020',
      price: 41.33,
      directDeliver: true,
      deliverDate: 'Jul 20, 2020',
      supportQ: false,
      orderDate: 'July 19, 2020',
      total: 44.53,
      shippedTo: 'JS Masher',
      orderNum: '113-9984268-1280257'
    }]
  },
  {
    items: [{
      name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and Vibration Features. No Drvier and No Lag-Gamecube Adapter',
      picture: URL,
      author: null,
      windowClosed: 'Aug 5, 2020',
      price: 15.98,
      directDeliver: true,
      deliverDate: 'Jul 7, 2020',
      supportQ: false,
      orderDate: 'July 4, 2020',
      total: 17.22,
      shippedTo: 'JS Masher',
      orderNum: '114-2875557-9059409'
    }]
  },
  {
    items: [{
      name: 'Gamecube Conroller - Super Smash Bros. Edition (Nintendo Switch)',
      picture: URL,
      author: null,
      windowClosed: 'Aug 4, 2020',
      price: 94.95,
      directDeliver: false,
      deliverDate: 'Jul 5, 2020',
      supportQ: true,
      orderDate: 'July 3, 2020',
      total: 138.93,
      shippedTo: 'JS Masher',
      orderNum: '113-2883177-2648248'
    }, {
      name: 'The Art of SQL',
      picture: URL,
      author: 'Faroult, Stephane',
      windowClosed: 'Aug 4, 2020',
      price: 33.99,
      directDeliver: false,
      deliverDate: 'Jul 5, 2020',
      supportQ: true,
      orderDate: 'July 3, 2020',
      total: 138.93,
      shippedTo: 'JS Masher',
      orderNum: '113-2883177-2648248'
    }]
  }
];

console.log('order 4 item 2 author: ', orderHistory[3].items[1].author);
