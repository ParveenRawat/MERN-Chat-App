export const sampleChats = [
  {
    avatar: [
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    ],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: [
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    ],
    name: "Who else",
    _id: "2",
    groupChat: true,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: [
      "https://cdn1.iconfinder.com/data/icons/user-pictures/102/malecostume-512.png",
    ],
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: [
      "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    ],
    name: "Domisitic",
    _id: "2",
  },
];

export const sampleNotifictions = [
  {
    sender: {
      avatar: [
        "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      ],
      name: "John Doe",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: [
        "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      ],
      name: "Domisitic",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachments: [
      {
        publid_id: "asdfasdf",
        url: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      },
    ],
    content: "Hello from other side ",
    _id: "ByeBye",
    sender: {
      _id: "user_id",
      name: "Aman",
    },
    chat: "ChatId",
    createdAt: "2024-01-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        publid_id: "adslfhadsld",
        url: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
      },
    ],
    content: "How do you do?",
    _id: "ByenoBye",
    sender: {
      _id: "asdf",
      name: "Parveen",
    },
    chat: "ChatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];
export const dashboardData = {
  users: [
    {
      name: "John Doe",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },
    {
      name: "John Boi",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "john_boi",
      friends: 20,
      groups: 25,
    },
  ],

  chats: [
    {
      name: "FXI",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Doe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Thirsty Crows",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "John Boi",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "fat",
      _id: "sfnsdjkfsdnfkjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "John Doe",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "Japan",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "sfnsdjkfsdnfkdddjsbnd",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "japan",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
