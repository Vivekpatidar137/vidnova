const commentsData = [
  {
    userIcon: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice",
    comment: "This video is amazing! The cinematography blew me away.",
    reply: [
      {
        userIcon: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Bob",
        comment: "I agree! Especially the drone shots over the mountains.",
        reply: [
          {
            userIcon: "https://randomuser.me/api/portraits/men/3.jpg",
            name: "Charlie",
            comment: "Absolutely! Those shots were breathtaking.",
            reply: [
              {
                userIcon: "https://randomuser.me/api/portraits/women/4.jpg",
                name: "Diana",
                comment: "I wonder how they planned those sequences.",
              },
            ],
          },
        ],
      },
      {
        userIcon: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Ella",
        comment: "I loved the color grading too. It added so much depth.",
        reply: [],
      },
    ],
  },
  {
    userIcon: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Frank",
    comment: "Does anyone know the background music?",
    reply: [
      {
        userIcon: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Grace",
        comment:
          "It's 'Echoes of Eternity' by XYZ. You can find it on Spotify.",
        reply: [
          {
            userIcon: "https://randomuser.me/api/portraits/men/8.jpg",
            name: "Harry",
            comment: "Thanks for sharing! It's already in my playlist.",
          },
        ],
      },
      {
        userIcon: "https://randomuser.me/api/portraits/women/9.jpg",
        name: "Ivy",
        comment: "I thought it was custom-made for the video.",
        reply: [],
      },
    ],
  },
  {
    userIcon: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Jake",
    comment:
      "Can we appreciate how much effort must have gone into editing this?",
    reply: [
      {
        userIcon: "https://randomuser.me/api/portraits/women/11.jpg",
        name: "Karen",
        comment: "Absolutely! The transitions and effects were seamless.",
        reply: [
          {
            userIcon: "https://randomuser.me/api/portraits/men/12.jpg",
            name: "Leo",
            comment: "It must have taken weeks, if not months!",
          },
        ],
      },
    ],
  },
  {
    userIcon: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Mia",
    comment: "The storyline was so inspiring. It felt like a journey.",
    reply: [
      {
        userIcon: "https://randomuser.me/api/portraits/men/14.jpg",
        name: "Noah",
        comment: "Totally! It made me want to travel and explore new places.",
        reply: [
          {
            userIcon: "https://randomuser.me/api/portraits/women/15.jpg",
            name: "Olivia",
            comment: "Same here! It's a reminder to live life to the fullest.",
          },
        ],
      },
    ],
  },
];

export default commentsData;
