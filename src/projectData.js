import project1 from './assets/project1.png'
import project from './assets/project.png'
import project3 from './assets/project2.png'
import project4 from './assets/project3.png'
import project5 from './assets/project4.png'
import project6 from './assets/project5.png'

export const projectsData = [
  {
    id: 1,
    title: 'User Management Application',
    description: `The User Management System is a web application that allows administrators to manage users
        efficiently. The key pages in the application are the Login, Dashboard, and User Detail pages.
        This article covers the implementation details, including validation, filtering, searching, user
        activation, blacklisting, and pagination`,
    image: project1,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/uferekalu/lendsqr-project',
    previewUrl: 'https://kalu-ufere-lendsqr-fe-test.vercel.app/',
  },
  {
    id: 2,
    title: 'Quicksearch App',
    description:
      'A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.',
    image: project,
    tag: ['All', 'Web'],
    gitUrl: '',
    previewUrl: 'https://quicksearchplus.netlify.app/',
  },
  {
    id: 3,
    title: 'Random User App',
    description:
      'This is an application that uses a custom React Hook to fetch users from Random User API and displays the picture and their name on the page one. It shows the current user and a button for fetching the next user and a buttton for moving back to the previous user.',
    image: project6,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/uferekalu/randomuser',
    previewUrl: 'https://kalu-randomuser.vercel.app/',
  },
  {
    id: 4,
    title: 'Payroll Management System',
    description:
      'This is a payroll management system. It consists majorly of two sections in Elements and ElementLinks. You can create, update, delete and see various elements details and equally create related Element Links. ',
    image: project3,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/uferekalu/payroll',
    previewUrl: 'https://kalu-ufere-softsuite-test.vercel.app/',
  },
  {
    id: 5,
    title: 'Hotel Booking UI',
    description: 'This is a UI for a hotel booking',
    image: project4,
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/uferekalu/hotel_booking',
    previewUrl: 'https://hotel-booking-sepia.vercel.app/',
  },
  {
    id: 6,
    title: 'Employees Record',
    description:
      'This application is a good example of employees record that can be adopted by an organization to handle the record of its employees. It gives information about the employees regarding their names, date joined, role, level, country, their various departments in the organization and so much more.',
    image: project5,
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/uferekalu/records',
    previewUrl: 'https://employees-hazel.vercel.app/',
  },
]

export const skills = [
  ' React ',
  'ExpressJS ',
  'PostgreSQL',
  ' NextJS ',
  ' TailwindCSS ',
  ' MySQL',
  ' Typescript ',
  ' MaterialUI ',
  'Redis',
  ' NodeJS ',
  ' MongoDB ',
  'Cypress',
  ' HTML/CSS ',
  ' NestJS ',
  'Jest',
  ' Docker ',
  ' Kubernetes ',
  'OAuth',
  ' GitHub / GitLab / BitBucket ',
  'TypeORM ',
  'Sequelize',
]

export const workExperience = [
  {
    role: 'Full Stack JavaScript Developer',
    company: 'Saariys-II Incorporation',
    type: 'Remote',
    date: 'June 2023',
    location: 'Lagos, Nigeria',
    description: [
      `Collaborated with a dynamic team of developers to strategize, build, and implement a cutting-edge browser
            extension. This extension seamlessly searches for items on Google, extracts information from the landing
            page, saves searched links, organizes them into folders, bookmarks items, and integrates GPT functionality.
            Notably, it empowers users to save GPT responses and generate summaries with ease.`,
      `Developed the Profile, Dashboard, Save Tab, and Tabs UIs for the browser extension.`,
      `Created the GPT UI and integrated it into the extension.`,
      `Engineered an Authentication system to enhance security and user management.`,
      `Modified the existing dashboard to improve functionality and aesthetics.`,
      `Created a reusable tab section component for efficient UI development.`,
      `Fixed issues with the filter by tag pull-down menu for better usability.`,
      ` Implemented functionalities to save tabs and display them within the extension.`,
      `Implemented the retrieval of bookmarks within the dashboard UI.`,
      ` Implemented view and delete functionalities for bookmarks, enhancing user control and customization.`,
      ` Developed a cutting-edge browser extension with OCR and ChatGPT capabilities using Amazon
            Textract and Google Vision, boosting user query processing with advanced applications of GPT-3.0 and
            DALL-E.`,
      `Implemented responsive web design principles using HTML, CSS, and JavaScript to ensure optimal
            performance across desktop and mobile platforms.`,
      `Conducted cross-browser testing and debugging to ensure consistent rendering and performance
            across different web browsers.`,
      `Implemented TDD (Test-Driven Development) methods using Jest and Mocha, resulting in higher code
            quality and a 20% reduction in rolled-back changes.`,
      `Developed an online learning platform where students can quickly find and connect with top-quality
            tutors for help with homework, studying, and tests, both online and in person.`,
      `Enhanced website functionality by integrating JavaScript libraries and frameworks such as jQuery and
            Bootstrap.`,
      `Contributed significantly to frontend enhancements, focusing on improving user interfaces with
            React.js, HTML/CSS, Sass, Less, and Ant Design. Worked on a
            Node.js/Express.js/Mongoose/MongoDB backend using event-driven programming with WebRTC and
            WebSocket to support video conferencing and live chat systems.`,
      `Integrated Redis for caching and session management, significantly decreasing load times and
            enhancing user experience.`,
    ],
  },
  {
    role: 'Full Stack JavaScript Developer',
    company: 'Talosmart - Contract',
    type: 'Remote',
    date: 'Aug 2022 - Feb 2023',
    location: 'Lagos, Nigeria',
    description: [
      `Led a team of 6 developers to plan, implement and deliver a driving and car clearing application by using
      various JavaScript technologies resulting in increase in productivity.`,
      `Designed and implemented a driving and car clearing application that delivers goods locally based on
      its size.`,
      `Worked closely with clients to understand their requirements and implemented the functionalities to
      meet their needs.`,
      `Managed the software development life cycle, including code reviews, testing, and deployment.`,
      `Improved team productivity by adopting agile methodologies and conducting regular stand-up
      meetings.`,
    ],
  },
  {
    role: 'Full Stack JavaScript Developer',
    company: 'Dover, Delaware - USA',
    type: 'Remote',
    date: 'Feb 2019 - July 2022',
    location: 'USA',
    description: [
      `Collaborated with a team of 4 developers in delivering an Advertising and Surfing application by adopting agile
        methodologies which resulted in 25% increase in productivity.`,
      `Designed and developed an advertising application satisfactorily within tight deadlines.`,
      `Worked closely with clients to understand their requirements and implemented the functionalities to
        meet their needs.`,
      `Implemented automated testing and deployment processes resulting in increased software reliability
        and faster delivery.`,
      `Refactored outdated frontend code for companies’ UI, transforming it into a highly scalable,
        maintainable, and responsive design while ensuring compatibility across various browsers. Resolved
        overflow bugs, handled previously unhandled inputs, click events and animations, resulting in a
        seamless user experience.`,
      `Redesigned the UI to enhance aesthetics, creating an aesthetically pleasing interface for consumers.`,
      `Increased mobile responsiveness, resulting in a 30% rise in mobile user retention.`,
      `Accomplished a 40% decrease in customer support inquiries related to UI issues.`,
      `Improved team productivity by 20% through the adoption of agile methodologies and introduction of
        ephemeral environments, resulting in 15% reduction in software development time and a 25% decrease
        in production defects.`,
      `Developed and deployed Node.js applications with robust security measures, including implementing
        protected routes to prevent unwanted data leaks and unauthorized access. Incorporated additional
        security layers to defend against various known attacks, ensuring the integrity and confidentiality of
        sensitive data.`,
      `Reduced the number of security incidents by 30% through the implementation of comprehensive
        security measures and proactive monitoring, demonstrating a strong commitment to safeguarding user
        data and maintaining a secure environment.`,
      `Refactored legacy frontend code to create a more scalable, maintainable, responsive and
        cross-browser compatible solution, effectively eliminating overflow of bugs and ensuring robust input
        handling to prevent xss attacks.`,
      `Achieved a 40% reduction in page loading time and received positive feedback from users, resulting in
        a 17% increase in user engagement and a 12% decrease in bounce rate. Implemented clean and
        modular code architecture, contributing to a 30% decrease in bug reports and allowing for efficient
        feature additions and updates leading to a 25% increase in development speed.`,
    ],
  },
  {
    role: 'Full Stack JavaScript Developer',
    company: 'Utopia Tech Pty',
    type: 'Remote',
    date: 'Aug 2018 - Sep. 2021;',
    location: 'Sydney - Australia',
    description: [
      `Worked with a team of 10 developers to plan, design and implement an ecommerce application for buyers and
          vendors alike by adopting agile methodologies which resulted in optimal product delivery.`,
      `Orchestrated and implemented the design from Figma for various user interfaces of the ecommerce
          application through agile methodology.`,
      `Worked closely with clients to understand their requirements and implemented the functionalities to
          meet their needs.`,
      `Implemented data analysis tools to monitor and improve the performance of the ecommerce
          application.`,
    ],
  },
]
