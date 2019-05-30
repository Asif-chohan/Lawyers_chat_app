import React from "react";

export const user = {
  id: 'vUAqPRNWgYdS2DyJNAC1lV5KpJF21',
  name: 'Chelsea Jones @chelsea',
  image: require('assets/images/wall/alisha.jpeg'),
  address: 'Florida, USA',
  email: '@chelsea',
};

export const userInfo = {
  followers: '2k+',
  following: 847,
  frinds: 327,
  isFollow: false
};

export const communityList = [
  {
    id: 1,
    title: 'Nature and Beaches',
    image: require('assets/images/products/wach.jpeg'),
    postCount: 25
  },
  {
    id: 2,
    title: 'Agriculture Today',
    image: require('assets/images/products/headphone.jpeg'),
    postCount: 3
  },
  {
    id: 3,
    title: 'Tools and Machines',
    image: require('assets/images/products/football.jpeg'),
    postCount: 80
  },
  {
    id: 4,
    title: 'Magic Tricks',
    image: require('assets/images/products/electronic-cigarettes.jpeg'),
    postCount: 0
  },
  {
    id: 5,
    title: 'Taj & Agara',
    image: require('assets/images/products/electric-socket.jpeg'),
    postCount: 0
  }
];

export const eventList = [
  {
    id: 1,
    image: require('assets/images/products/electric-socket.jpeg'),
    title: 'Data Visualization Summit',
    date: '1 Aug 2018',
    address: 'pugal road ,Bikaner',
  }, {
    id: 2,
    image: require('assets/images/dashboard/hotal.jpg'),
    title: 'Daily Marathon',
    date: '11 Aug 2018',
    address: 'Havens Garden, UK',
  },
];

export const newsList = [
  {
    id: 1,
    image: require('assets/images/gridList/bike.jpeg'),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
    ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' +
    ' type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  }, {
    id: 2,
    image: require('assets/images/gridList/hats.jpeg'),
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
    ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' +
    ' type and scrambled it to make a type specimen book. It has survived not only five centuries,',
  },
];

export const interestList = [
  {
    id: 1,
    interest: 'Music'
  },
  {
    id: 2,
    interest: 'Graphic Designing'
  },
  {
    id: 3,
    interest: 'Sports'
  },
  {
    id: 4,
    interest: 'Drawing'
  },
  {
    id: 5,
    interest: 'Tourism'
  }
];

export const friendList = [
  {
    id: 1,
    image: require('assets/images/userAvatar/avator6.jpg'),
    name: 'Chelsea',
    status: 'online'

  },
  {
    id: 2,
    image: require('assets/images/userAvatar/avator5.jpg'),
    name: 'Kenery Thomson',
    status: 'offline'
  },
  {
    id: 3,
    image: require('assets/images/userAvatar/avator4.jpg'),
    name: 'Amanda',
    status: 'away'

  },
  {
    id: 4,
    image: require('assets/images/userAvatar/avator3.jpg'),
    name: 'Joshua',
    status: 'away'
  },
  {
    id: 5,
    image: require('assets/images/userAvatar/avator2.jpg'),
    name: 'Alex Mulski',
    status: 'away'

  },
  {
    id: 6,
    image: require('assets/images/userAvatar/avator1.jpg'),
    name: 'Stella Johnson',
    status: 'away'
  }
];

export const postList = [
  {
    id: 1,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: require('assets/images/wall/alisha.jpeg')},
    date: 'Sun Jul 22 2018 10:02:47 GMT+0530 (India Standard Time)',
    mediaList: [{image: require('assets/images/products/football.jpeg')}, {image: require('assets/images/products/headphone.jpeg')}],
    viewCount: 350,
    likeCount: 150,
    isLike: false,
    commentCount: 0,
    commentList: [{
      user: {id: 1, name: 'Kenery Thomson', image: require('assets/images/userAvatar/chelsea-johns.jpg')},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Mon Jul 23 2018 10:02:47 GMT+0530 (India Standard Time)',
      isLike: true,
      likeCount: 2,
      commentList: []
    }]
  },
  {
    id: 2,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: require('assets/images/userAvatar/john-smith.png')},
    date: 'Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)',
    mediaList: [{image: require('assets/images/products/speaker.jpeg')}, {image: require('assets/images/products/iPhone.jpeg')}, {image: require('assets/images/products/wach.jpeg')}],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: {id: 6, name: 'Kenery Thomson', image: require('assets/images/userAvatar/steve-smith.jpg')},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  },
  {
    id: 3,
    text: '',
    user: {id: 1, name: 'Kenery Thomson', image: require('assets/images/wall/alisha.jpeg')},
    date: 'Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)',
    mediaList: [{image: require('assets/images/products/headphone.jpeg')}],
    viewCount: 350,
    likeCount: 150,
    isLike: true,
    commentCount: 0,
    commentList: [{
      user: {id: 6, name: 'Kenery Thomson', image: require('assets/images/userAvatar/domnic-harris.jpg')},
      comment: 'Wow ! Excellent I particularly like the use of whitespace here Keep it up',
      date: 'Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)',
      likeCount: 3,
      isLike: false,
      commentList: []
    }]
  }
];

export const photoList = [
  {
    id: 1,
    image: require('assets/images/wall/p1.jpeg')
  },
  {
    id: 2,
    image: require('assets/images/wall/p2.jpeg')
  },
  {
    id: 3,
    image: require('assets/images/wall/p3.jpeg')
  },
  {
    id: 4,
    image: require('assets/images/wall/p4.jpeg')
  },
  {
    id: 5,
    image: require('assets/images/wall/p5.jpeg')

  },
  {
    id: 6,
    image: require('assets/images/wall/p6.jpeg')
  },
];

export const communitiesList = [
  {
    id: 1,
    image: require('assets/images/wall/c1.jpg'),
    title: 'Layers'
  },
  {
    id: 2,
    image: require('assets/images/wall/c2.jpg'),
    title: 'play'
  },
  {
    id: 3,
    image: require('assets/images/wall/c3.jpg'),
    title: 'Fun & Tourism'
  },
  {
    id: 4,
    image: require('assets/images/wall/c4.jpg'),
    title: 'Music Lovers'
  },
  {
    id: 5,
    image: require('assets/images/wall/c5.jpg'),
    title: 'Dancing'
  },
  {
    id: 6,
    image: require('assets/images/wall/c6.jpg'),
    title: 'Fitness'
  },
];

export const recentActivity = [
  {
    id: 1,
    day: 'Today',
    tasks: [
      {
        id: 1,
        name: 'Mila Alba',
        title: [<span className="jr-link" key={1}>Mila Alba</span>, ' left a 5 star review on ',
          <span className="jr-link" key={2}>Albama’s House</span>],
        avatar: require('assets/images/userAvatar/guptil.jpg'),
        imageList: [],
      },
      {
        id: 2,
        name: 'Bob Builder',
        title: ['Callback request from ', <span key={3} className="jr-link">Bob Builder</span>, ' for the property ',
          <span className="jr-link" key={4}>Dimitri House</span>],
        avatar: require('assets/images/userAvatar/avator14.jpg'),
        imageList: [],
      },
      {
        id: 3,
        name: 'Tom Moody',
        title: ['Congratulations to ', <span key={5} className="jr-link">Tom Moody</span>,
          ' for joining 10+ club '],
        avatar: require('assets/images/userAvatar/avator13.jpg'),
        imageList: [],
      },
      {
        id: 4,
        name: 'Norman Dolphi',
        title: ['Norman Dolphi is looking for a house in New Jersy, USA'],
        avatar: '',
        imageList: [],
      }
    ]
  },
  {
    id: 2,
    day: 'Yesterday',
    tasks: [
      {
        id: 5,
        name: 'Kily Johns',
        title: ['Agent ',
          <span key={6} className="jr-link">Kily Johns</span>, ' has added 7 new photos to the property ',
          <span key={7} className="jr-link">Albama’s House</span>],
        avatar: '',
        imageList: [require('assets/images/userAvatar/jeson-born.jpg'), require('assets/images/userAvatar/ron-doe.jpg'), require('assets/images/userAvatar/stella-johnson.png')],
      },
      {
        id: 6,
        name: 'Tom Moody',
        title: ['Welcome to a new agent ', <span className="jr-link" key={8}>Tom Moody in the Company</span>],
        avatar: require('assets/images/userAvatar/joshua.jpg'),
        imageList: [],
      },
      {
        id: 7,
        name: 'Oliver Shorter',
        title: [<span key={9} className="jr-link">Oliver Shorter</span>, ' is looking for an office space in ',
          <span key={10} className="jr-link">Colorado, USA</span>],
        avatar: require('assets/images/userAvatar/michael-dogov.jpg'),
        imageList: [],
      }
    ]
  }];






