export const currentUser = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  coverImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800",
  bio: "Software Developer | Tech Enthusiast | Coffee Lover ☕",
  location: "San Francisco, CA",
  website: "johndoe.dev",
  joinDate: "March 2020",
  following: 234,
  followers: 1234,
  verified: true
};

export const users = [
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    bio: "Designer & Creator",
    verified: true
  },
  {
    id: 3,
    name: "Mike Johnson",
    username: "mikej",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    bio: "Entrepreneur | Investor",
    verified: false
  },
  {
    id: 4,
    name: "Sarah Williams",
    username: "sarahw",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Writer | Blogger",
    verified: true
  },
  {
    id: 5,
    name: "Alex Brown",
    username: "alexb",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    bio: "Developer | Open Source",
    verified: false
  }
];

export const tweets = [
  {
    id: 1,
    user: users[0],
    content: "Just launched my new portfolio website! Check it out and let me know what you think. Built with React and Tailwind CSS 🚀",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    timestamp: "2h ago",
    likes: 245,
    retweets: 45,
    replies: 12,
    liked: false,
    retweeted: false
  },
  {
    id: 2,
    user: users[1],
    content: "The best way to predict the future is to create it. 💡",
    timestamp: "4h ago",
    likes: 892,
    retweets: 156,
    replies: 34,
    liked: true,
    retweeted: false
  },
  {
    id: 3,
    user: users[2],
    content: "Morning coffee hits different when you're debugging code at 3 AM ☕😅",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    timestamp: "6h ago",
    likes: 1234,
    retweets: 234,
    replies: 56,
    liked: true,
    retweeted: true
  },
  {
    id: 4,
    user: users[3],
    content: "Writing is thinking. Good writing is clear thinking. Great writing is clear thinking about important things. ✍️",
    timestamp: "8h ago",
    likes: 567,
    retweets: 89,
    replies: 23,
    liked: false,
    retweeted: false
  },
  {
    id: 5,
    user: users[0],
    content: "Just pushed a major update to my open source project! Contributions are welcome 🎉\n\nGitHub: github.com/johndoe/awesome-project",
    timestamp: "12h ago",
    likes: 445,
    retweets: 78,
    replies: 19,
    liked: false,
    retweeted: false
  },
  {
    id: 6,
    user: users[3],
    content: "Beautiful sunset today 🌅",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600",
    timestamp: "1d ago",
    likes: 2341,
    retweets: 345,
    replies: 67,
    liked: true,
    retweeted: false
  }
];

export const trending = [
  {
    category: "Technology",
    topic: "#ReactJS",
    tweets: "125K"
  },
  {
    category: "Programming",
    topic: "#100DaysOfCode",
    tweets: "89.5K"
  },
  {
    category: "Trending",
    topic: "Artificial Intelligence",
    tweets: "234K"
  },
  {
    category: "Technology",
    topic: "#WebDevelopment",
    tweets: "67.8K"
  },
  {
    category: "Sports",
    topic: "#WorldCup",
    tweets: "1.2M"
  }
];

export const notifications = [
  {
    id: 1,
    type: "like",
    user: users[0],
    content: "liked your tweet",
    tweet: "Just launched my new portfolio...",
    timestamp: "2h ago",
    read: false
  },
  {
    id: 2,
    type: "follow",
    user: users[1],
    content: "started following you",
    timestamp: "4h ago",
    read: false
  },
  {
    id: 3,
    type: "retweet",
    user: users[2],
    content: "retweeted your tweet",
    tweet: "Morning coffee hits different...",
    timestamp: "6h ago",
    read: true
  },
  {
    id: 4,
    type: "reply",
    user: users[3],
    content: "replied to your tweet",
    tweet: "Great insights! I completely agree with your perspective.",
    timestamp: "1d ago",
    read: true
  }
];

export const messages = [
  {
    id: 1,
    user: users[0],
    lastMessage: "Thanks for reaching out! I'd love to collaborate.",
    timestamp: "2h ago",
    unread: true
  },
  {
    id: 2,
    user: users[1],
    lastMessage: "Sure, let's schedule a call tomorrow.",
    timestamp: "5h ago",
    unread: true
  },
  {
    id: 3,
    user: users[2],
    lastMessage: "That sounds great! 👍",
    timestamp: "1d ago",
    unread: false
  },
  {
    id: 4,
    user: users[3],
    lastMessage: "I'll send you the details soon.",
    timestamp: "2d ago",
    unread: false
  }
];

export const whoToFollow = [
  {
    id: 6,
    name: "Tech Daily",
    username: "techdaily",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechDaily",
    verified: true
  },
  {
    id: 7,
    name: "Code Master",
    username: "codemaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodeMaster",
    verified: false
  },
  {
    id: 8,
    name: "Design Hub",
    username: "designhub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DesignHub",
    verified: true
  }
];