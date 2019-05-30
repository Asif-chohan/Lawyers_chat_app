import React from 'react'

export const latestPostList = [
  {
    image: require('assets/images/dashboard/diy.jpg'),
    title: "5 DIY tips to use in kitchen",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    date: "28 Oct, 2016",
    color: "bg-primary"
  },

  {
    image: require('assets/images/dashboard/flowers-post.jpg'),
    title: "Flowers which keep you healthy",
    description: "There are many variations of passages of Lorem Ipsum...",
    date: "27 Feb, 2017",
    color: "bg-danger"
  },
  {
    image: require('assets/images/dashboard/a-beaches.jpg'),
    title: "Top 5 beaches in the world",
    description: "It is a long established fact that a reader will be distract...",
    date: "24 Feb, 2017",
    color: "bg-info"
  },

];


export const lableList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
export const appNotification = [
  {
    id: 1,
    title: "Invitation",
    desc: [<span className="jr-link" key={1}>Stella</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={2}>Drift</span>],
    image: require('assets/images/userAvatar/guptil.jpg')
  },
  {
    id: 2,
    title: "Message",
    desc: ["Need your help on Jumbo ", <span className="jr-link" key={3}>Martin J.</span>],
    image: require('assets/images/userAvatar/martin-j.jpg')
  },
  {
    id: 3,
    title: "Invitation",
    desc: [<span className="jr-link" key={4}>Guptil</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={5}>Flexile</span>],
    image: require('assets/images/userAvatar/guptil-1.jpg')
  },
  {
    id: 4,
    title: "Invitation",
    desc: [<span className="jr-link" key={6}>Alex</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={7}>Mouldifi</span>],
    image: require('assets/images/userAvatar/guptil-2.jpg')
  },
];

export const announcementsNotification = [
  {
    id: 5,
    title: "Invitation",
    desc: [<span className="jr-link" key={7}>Alex</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={8}>Mouldifi</span>],
    image: require('assets/images/userAvatar/alex-dolgove.png')
  },
  {
    id: 6,
    title: "Message",
    desc: ["Need your help on Jumbo", <span className="jr-link" key={9}>Jeson Born</span>],
    image: require('assets/images/userAvatar/jeson-born.jpg')
  }, {
    id: 7,
    title: "Invitation",
    desc: [<span className="jr-link" key={10}>Stella</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={11}>Drift</span>],
    image: require('assets/images/userAvatar/stella-johnson.png')
  },
  {
    id: 8,
    title: "Invitation",
    desc: [<span className="jr-link" key={12}>Guptil</span>, " has sent you an invitation to join project ",
      <span className="jr-link" key={13}>Mouldifi</span>],
    image: require('assets/images/userAvatar/john-smith.png')
  },
];

export const products = [
  {
    image: require('assets/images/products/creative-watch.jpg'),
    title: "Creactive watch",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    mrp: 250,
    offerPrice: 200
  },
  {
    image: require('assets/images/products/table-lamp.jpg'),
    title: "Table Lamp",
    description: "It is a long established fact that a reader will be distracted",
    mrp: 250,
    offerPrice: 200
  },
  {
    image: require('assets/images/products/trimmer.jpg'),
    title: "Trimmer",
    description: "There are many variations of passages of Lorem Ipsum available",
    mrp: 250,
    offerPrice: 200
  },
  {
    image: require('assets/images/products/travel-bag.jpg'),
    title: "Travel Bag",
    description: "The standard chunk of Lorem Ipsum used since the 1500s",
    mrp: 250,
    offerPrice: 200
  },
];

export const marketingData = [
  {
    id: 1,
    name: 'Facebook Ads',
    desc: '63 Likes, 387 Shares',
    icon: 'facebook-box',
    color: 'bg-indigo lighten-1',
    budget: 570,
    growth: 20
  },

  {
    id: 2,
    name: 'Twitter Ads',
    desc: '43 Likes, 545 Shares',
    icon: 'twitter-box',
    color: 'bg-light-blue accent-2',
    budget: 811,
    growth: -5
  },

  {
    id: 3,
    name: 'Instagram',
    desc: '83 Follows, 79 Likes',
    icon: 'instagram',
    color: 'bg-pink accent-3',
    budget: 685,
    growth: 20
  },

];

export const signUpData = {
  chartData: [10, 200, 75, 300, 100, 200, 70],
  labels: ['9', '10', '11', '12', '13', '14', '15'],
};

export const totalRevenueData = {
  chartData: [200, 50, 250, 100, 370, 100],
  labels: ['9', '10', '11', '12', '13', '14'],
}

export const projects = [
  {
    id: 1,
    name: "Jambo Admin",
    date: "Oct 21",
    status: "Completed",
    color: "success",
    progressValue: 98,
    teamList: [
      {id: 1, image: require('assets/images/userAvatar/avator3.jpg'), name: ''},
      {id: 2, image: require('assets/images/userAvatar/avator8.jpg'), name: ''},
      {id: 3, image: require('assets/images/userAvatar/avator10.jpg'), name: ''},
      {id: 4, image: require('assets/images/userAvatar/martin-j.jpg'), name: ''},
    ]
  },
  {
    id: 2,
    name: 'Chatbull',
    date: "Oct 22",
    status: "On Hold",
    color: "warning",
    progressValue: 70,
    teamList: [
      {id: 1, image: require('assets/images/userAvatar/avator3.jpg'), name: ''},
      {id: 2, image: require('assets/images/userAvatar/avator1.jpg'), name: ''},
      {id: 3, image: require('assets/images/userAvatar/joshua.jpg'), name: ''},
      {id: 4, image: require('assets/images/userAvatar/avator8.jpg'), name: ''},
    ]
  },
  {
    id: 3,
    name: 'Mouldifi',
    date: "Nov 12",
    status: "Delayed",
    color: "info",
    progressValue: 40,
    teamList: [
      {id: 1, image: require('assets/images/userAvatar/jonathan.jpg'), name: ''},
      {id: 2, image: require('assets/images/userAvatar/avator1.jpg'), name: ''},
      {id: 3, image: require('assets/images/userAvatar/guptil-3.jpg'), name: ''},
      {id: 4, image: require('assets/images/userAvatar/michael-dogov.jpg'), name: ''},
    ]
  },
  {
    id: 4,
    name: 'Simplify Timer',
    date: "Nov 21",
    status: "Completed",
    color: "success",
    progressValue: 98,
    teamList: [
      {id: 1, image: require('assets/images/userAvatar/avator4.jpg'), name: ''},
      {id: 2, image: require('assets/images/userAvatar/avator12.jpg'), name: ''},
      {id: 3, image: require('assets/images/userAvatar/avator1.jpg'), name: ''},
      {id: 4, image: require('assets/images/userAvatar/michael-dogov.jpg'), name: ''},
    ]
  },
];

