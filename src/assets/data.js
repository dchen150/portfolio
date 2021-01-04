import HuaweiDark from './huaweiDark.png'
import HuaweiLight from './huawei.png'

import SAP from './sap.png'

import UBC from './ubc.png'
import UBCDark from './ubcDark.png'

import BizTech from './biztech.png'
import BizTechDark from './biztechDark.png'

import nwPlusDark from './nwPlus.png'

export const TYPING_TEXT = [
    {
        text: 'hello :) i\'m drek',
        backspaceCount: 3
    },
    {
        text: 'erek',
        backspaceCount: 5
    },
    {
        text: 'a 3rd year CS student @ UBC',
        backspaceCount: 25
    },
    {
        text: 'developer',
        backspaceCount: 9
    }
]

export const BIO_INFO = {
    'name': 'Derek Chen',
    'bio': 'SWE intern @ huawei | ubc cs\' 22',
    'location': 'Vancouver, Canada',
    'contact': {
        'email': 'derekc150@gmail.com',
        'github': 'dchen150',
        'linkedin': 'www.linkedin.com/in/drek/',
        'instagram': 'www.instagram.com/drekchen_/'
    },
    'hobbies': [
        'badminton',
        'hiking',
        'skiing',
        'video games',
        'videography/photography'
    ],
    'interests': [
        'keyboards',
        'pc builds',
        'music (piano & ukulele)'
    ]
}

export const CONTACT = [
    {
        iconName: 'github square',
        link: 'https://github.com/dchen150'
    },
    {
        iconName: 'linkedin',
        link: 'https://www.linkedin.com/in/drek/'
    },
    {
        iconName: 'instagram',
        link: 'https://www.instagram.com/drekchen_/'
    },
    {
        iconName: 'envelope',
        link: 'mailto:derekc150@gmail.com'
    }
]

export const EXPERIENCES = [
    {
        title: 'Software Engineer Intern',
        company: 'Huawei',
        time: 'Jan 2021 - present',
        location: 'Vancouver, Canada',
        description: ['i just started'],
        light: HuaweiLight,
        dark: HuaweiDark,
        tags: ['C++']
    },
    {
        title: 'Developer (Volunteer)',
        company: 'nwPlus',
        time: 'May 2020 - present',
        location: 'Vancouver, Canada',
        description: [
            'Developed websites that allow execs to manage hackathons, event websites, and application evaluation portal using React, yarn, and Firebase Storage/Firestore',
            'Implemented a pipeline by writing scripts on Github Actions and Travis CI/CD that reduced regression'
        ],
        light: nwPlusDark,
        dark: nwPlusDark,
        tags: ['JavaScript', 'React', 'Redux', 'Firebase', 'Github Actions']
    },
    {
        title: 'Developer Lead (Volunteer)',
        company: 'BizTech',
        time: 'Sept 2019 - present',
        location: 'Vancouver, Canada',
        description: [
            'Managing a team of 8 developers for a React/Redux web app with tasks involving development, collaboration with design and marketing teams, and onboarding',
            'Created a custom API on a serverless backend by leveraging cloud tools such as AWS Lambda, DynamoDB, API Gateway, and S3 buckets',
            'Implemented infrastructure tools using React, Redux, JavaScript, and Node.js that allows executives to manage and create events 30% more efficiently'
        ],
        light: BizTech,
        dark: BizTechDark,
        tags: ['JavaScript', 'React', 'Redux', 'AWS', 'Severless', 'DynamoDB']
    },
    {
        title: 'Agile Developer Intern',
        company: 'SAP',
        time: 'May 2020 - Dec 2020',
        location: 'Vancouver, Canada',
        description: [
            'Worked on HANA & Analytics - User Management, Licensing, Core UI',
            'Reduced runtime of external facing REST API by 30% by optimizing backend logic',
            'Designed and implemented data pipeline using Apache Airflow for workflow management',
            'Led the overhaul and redesign of regression autmoation tests written using Python, Selenium, and Jenkins which improved consistency by 80%',
            'Increased reliability in unit tests by mocking database calls and refactoring JavaScript production code'
        ],
        light: SAP,
        dark: SAP,
        tags: ['JavaScript', 'Docker', 'Python', 'Selenium', 'SQL']
    },
    {
        title: 'Teaching Assistant',
        company: 'UBC',
        time: 'Sept 2019 - May 2020',
        location: 'Vancouver, Canada',
        description: [
            'Led programming labs for over 100 students, explaning programming concepts in Java including OOP, writing tests (JUnit), design patterns, and type hierarchies',
            'Guided students with semester-long personal projects that applies SOLID design principles and GUI Development (JavaFX)'
        ],
        light: UBC,
        dark: UBCDark,
        tags: ['Java', 'SOLID', 'Design Principles']
    }
]

export const PROJECTS = [
    {
        name: 'first hello',
        icon: 'trophy',
        subHeader: 'hackathon winner // mobile app',
        description: 'first hello is a project I built with a team of 4 peers at nwHacks 2020, Western Canada\'s largest hackathon (24 hrs). My team was awared the Best use of Google Cloud award and the Wolfram award. \n\n The mobile app aims to bring conversations with new people to a more relaxed and conversational level. The app registers people\'s face and personal information (e.g. interests, hobbies, pronouns) into Firebase Storage and Firebase FireStore (given their consent!), which is then compared to a real time camera for facial verification via the Microsoft Azure Face API . If any of the faces on the screen match one of the faces in the data base, an elegant rendering of the user\'s information is displayed on the screen so that you can learn about that person\'s passions and interests!',
        tags: ['Firebase', 'Azure', 'Java', 'Android Studio', 'XML'],
        links: {
            'github': 'https://github.com/dchen150/first-hello',
            'linkedin': 'https://www.linkedin.com/feed/update/urn:li:activity:6632351283951087617/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A6632087074113761280%2C6632351213138644993)',
            'linkify': 'https://devpost.com/software/first-hello'
        }
    },
    {
        name: 'NBA Stats',
        icon: null,
        subHeader: 'web scraper // data visulization',
        description: 'This project runs in the command terminal - prompting the user to enter an NBA player\'s team and name. ESPN will then be scraped for this player\'s stats for the past 50 games. The stats are saved in a CSV file which is visualized on a graph that allows users to specify data that they may or may not want to see.',
        tags: ['JavaScript', 'Node.js', 'HTTP', 'cheerio.js', 'jQuery'],
        links: {
            'github': 'https://github.com/dchen150/NBAFavoritePlayers'
        }
    },
    {
        name: 'ChatrMaps',
        icon: null,
        subHeader: 'hackathon // web app',
        description: 'ChatrMaps is a web app developed at UBC\'s Local Hack Day 2019 (12 hours). In a team of 4, we developed a convenient chatroom app that allows users to create and join chatrooms based on geolocation anonymously. The aim of the project is to increase inclusivity for people at events! \n\nI primarily implemented the Scaledrone chatroom and the interface that allows users to see who else is in the room. I also contributed in integrating the Google Maps API.',
        tags: ['JavaScript', 'React', 'Redux', 'Scaledrone', 'Google Maps API'],
        links: {
            'github': 'https://github.com/dchen150/LHD_BUILD1.0',
            'linkify': 'https://devpost.com/software/chatrmaps'
        }
    },
    {
        name: 'UBC Course Query Engine',
        icon: null,
        subHeader: 'pc app',
        description: 'Built a query engine that supports its own syntax for searching for UBC courses based on average, number of seats, and several other fields. Developed REST API to communicate with UBC backend to grab course info.',
        tags: ['TypeScript', 'REST'],
        links: {}
    },
    {
        name: 'Fitness Log',
        icon: null,
        subHeader: 'android app',
        description: 'Developed a mobile app that generates a comprehensive routine to workout major muscle groups. Integrated SQLite to store and query hundreds of data points to track workouts via a Calendar API. Implemented an algorithm that determines goal weights for workouts based on previous data',
        tags: ['SQL', 'Java', 'XML', 'Android Studio'],
        links: {
            'github': 'https://github.com/dchen150/FitnessLog',
            'linkify': 'https://play.google.com/store/apps/details?id=com.fitloggers.fitnesslog&hl=en&fbclid=IwAR3UWM-rpwN0Gg1BIFT-Kbog2a9D1LP-HHlRhu14dBW9hb1BerOB-XjtmeI'
        }
    },
    {
        name: 'Context',
        icon: null,
        subHeader: 'hackathon // web app',
        description: 'In a group of 4, developed an app that stores and compiles typed notes to generate an elegant rendering with additional functionality. Primarily worked front end - designing the UI with CSS3 and HTML5. Implemented methods to parse user\'s document and identify previously defined words.',
        tags: ['JavaScript', 'React', 'HTML5', 'CSS3'],
        links: {
            'github': 'https://github.com/dchen150/context',
            'linkify': 'https://vyzw.github.io/context/'
        }
    },
    {
        name: 'Pomodoro',
        icon: null,
        subHeader: 'pc app',
        description: 'Developed an app inspired by the Pomodoro time management strategy, which allows users to organize projects and tasks, along with respective due date, priority, and tags. Designed robust code by implementing exceptions, try/catch statements, and using design patterns. Implemented data persistence using a JSON folder that is written to and read from efficiently.',
        tags: ['Java', 'JavaFX'],
        links: {
            'github': 'https://github.com/dchen150/Pomodoro'
        }
    },
    {
        name: 'Personal Website',
        icon: null,
        subHeader: 'web app',
        description: 'made with love :)',
        tags: ['JavaScript', 'React', 'HTML', 'CSS'],
        links: {
            'github': 'https://github.com/dchen150/portfolio'
        }
    }
]