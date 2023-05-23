import { USERS } from './Users';

export const POSTS = [
  {
    imageUrl:
      'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Building the Netflix clone with React JS 🚀. This is going to be a fun build. #reactjs #firebase #dev',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about',
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up",
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/02vj5cw/Post-Copy.png',
    user: USERS[1].user,
    likes: 5650,
    caption: 'Train Ride tp Hogwarts. 😂🚆',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'cleverqazl',
        comment: 'Wow! This build looks fire.',
      },
      {
        user: 'amaanath.dev',
        comment: "I'M SLEEPING!!!",
      },
    ],
  },
]
