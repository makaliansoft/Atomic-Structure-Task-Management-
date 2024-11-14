const sectionData = [
  {
    sectionName: "Section 1",
    tasks: [
      {
        id: 1,
        task: "Client Meetings",
        status: true,
        dueDate: "16/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          }
        ],
        comments: [
          {
            text: "I have a trouble with this task, can someone help me out?",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },
        ],
        tags: ["Urgent", "Finance", "Approval"]
      },
      {
        id: 2,
        task: "Kickoff Meetings",
        status: false,
        dueDate: "17/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        comments: [
          {
            text: "Looking forward to getting started with the project.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        tags: ["Pending", "Review", "High Priority", "Client Feedback"]
      },
      {
        id: 3,
        task: "Atomic Structure UI",
        status: true,
        dueDate: "18/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },
        ],
        comments: [
          {
            text: "Need some feedback on the current UI structure.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
        ],
        tags: ["Completed", "Documentation", "Follow-Up"]
      },
      {
        id: 4,
        task: "React JS Course",
        status: true,
        dueDate: "19/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
          },
        ],
        comments: [
          {
            text: "This course is very helpful for understanding React!",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
        ],
        tags: ["Maintenance", "Quality Check", "Compliance", "Low Priority", "Completed", "Archived"]
      },{
        id: 5,
        task: "Client Meetings",
        status: true,
        dueDate: "16/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          }
        ],
        comments: [
          {
            text: "I have a trouble with this task, can someone help me out?",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },
        ],
        tags: ["Urgent", "Finance", "Approval"]
      },
      {
        id: 6,
        task: "Kickoff Meetings",
        status: false,
        dueDate: "17/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        comments: [
          {
            text: "Looking forward to getting started with the project.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        tags: ["Pending", "Review", "High Priority", "Client Feedback"]
      },
      {
        id: 7,
        task: "Atomic Structure UI",
        status: true,
        dueDate: "18/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },
        ],
        comments: [
          {
            text: "Need some feedback on the current UI structure.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
        ],
        tags: ["Completed", "Documentation", "Follow-Up"]
      },
      {
        id: 8,
        task: "React JS Course",
        status: false,
        dueDate: "19/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
          },
        ],
        comments: [
          {
            text: "This course is very helpful for understanding React!",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
        ],
        tags: ["Maintenance", "Quality Check", "Compliance", "Low Priority", "Completed", "Archived"]
      },
    ],
    tags: ["All", "Attention", "Bills", "Confirmed"],
  },
  {
    sectionName: "Section 2",
    tasks: [
      {
        id: 3,
        task: "Design Review",
        status: true,
        dueDate: "20/07",
        organization: "Design Co.",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/8.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          },
        ],
        comments: [
          {
            text: "Great progress so far on the design.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          },
        ],
        tags: ["New", "Design", "Prototype", "User Testing", "Beta"]
      },
      {
        id: 4,
        task: "Client Call",
        status: false,
        dueDate: "22/07",
        organization: "Design Co.",
        assignees: [
          {
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },
        ],
        comments: [
          {
            text: "We need to address client concerns in the next call.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },
        ],
        tags: ["Research", "Marketing", "Budget", "Deadline", "In Progress"]
      },{
        id: 1,
        task: "Client Meetings",
        status: true,
        dueDate: "16/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          {
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          }
        ],
        comments: [
          {
            text: "I have a trouble with this task, can someone help me out?",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },
        ],
        tags: ["Urgent", "Finance", "Approval"]
      },
      {
        id: 2,
        task: "Kickoff Meetings",
        status: false,
        dueDate: "17/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        comments: [
          {
            text: "Looking forward to getting started with the project.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          },
        ],
        tags: ["Pending", "Review", "High Priority", "Client Feedback"]
      },
      {
        id: 5,
        task: "Atomic Structure UI",
        status: true,
        dueDate: "18/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },
        ],
        comments: [
          {
            text: "Need some feedback on the current UI structure.",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
        ],
        tags: ["Completed", "Documentation", "Follow-Up"]
      },
      {
        id: 6,
        task: "React JS Course",
        status: false,
        dueDate: "19/07",
        organization: "kate's Dog",
        assignees: [
          {
            name: "User1",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          },
          {
            name: "User2",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          },{
            name: "User3",
            avatar: "https://randomuser.me/api/portraits/men/6.jpg",
          },{
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
          },
        ],
        comments: [
          {
            text: "This course is very helpful for understanding React!",
            name: "User4",
            avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          },
        ],
        tags: ["Maintenance", "Quality Check", "Compliance", "Low Priority", "Completed", "Archived"]
      },
    ],
    tags: ["All", "Confirmed", "Attention", "Bills"],
  },
];

export default sectionData;
