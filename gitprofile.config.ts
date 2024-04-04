// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'DhavalTank01', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/DhavalTank01/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/DhavalTank01/portfolio, then set base to '/portfolio/'.
   */
  base: '/dhavaltank/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/dhavaltank', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'K-Link App',
          description:
            'This project have admin penal crud and uploading feature with firebase cloud function with firebase database and real time data reading.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Percentology',
          description:
            `Get key insight from your dental office bookkeeping when it's done right for a dental practice.`,
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'E-learning platform in Python (Django)',
          description:
            'In this project, students can learn a video tutorial course and e-books. Faculty and admin can upload video courses and ebook.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'E-Commerce website in PHP',
          description:
            'Customers can purchase products with online payment system. Customers can add products to cart and wish list. It also can track orders. Project.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Website templates in ReactJS',
          description:
            'Responsive website templates using ReactJS and bootstrap and MUI.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Weather App in ReactJS',
          description:
            'weather app in ReactJS with searching facilities',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Todo list in ReactJS',
          description:
            'Todo list in ReactJS with edit and delete functionality',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
        {
          title: 'Ecommerce website in MERN',
          description:
            'frontend of  e-commerce website. This website have home, category, product details, cart, Wishlist, login, signup etc. using ReactJs, NodeJS, Express JS and MongoDB.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Dhaval Tank',
    description: 'Portfolio of Dhaval Tank',
    imageURL: '',
  },
  social: {
    linkedin: 'dhaval-tank-0950ba177',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // researchGate: '',
    // facebook: '',
    // instagram: '',
    // youtube: '',
    // dribbble: '',
    // behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    // stackoverflow: '', // example: '1/jeff-atwood'
    // skype: '',
    // telegram: '',
    website: 'https://dhavaltank01.github.io/dhavaltank/',
    phone: '919904924102',
    whatsapp: 'https://wa.me/919904924102',
    email: 'dhavaltank2001@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1rkmhgsyVxivJ8PPgA7jSPrBmn69l3vJl',
  },
  skills: [
    "C",
    "C++",
    "Core Java",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "SCSS",
    "Bootstrap",
    "Material UI",
    "ReactJs",
    "Express Js",
    "NodeJs",
    "Python",
    "Django",
    "PHP",
    "MySQL",
    "Mongodb",

  ],
  experiences: [
    {
      company: 'TechCompose Solutions Pvt. Ltd.',
      position: 'React Js Intern',
      from: 'January 2023',
      to: 'June 2023',
      companyLink: 'https://www.techcompose.com/',
    },
    {
      company: 'TechCompose Solutions Pvt. Ltd.',
      position: 'Jr. React Js Developer',
      from: 'July 2023',
      to: 'Working',
      companyLink: 'https://www.techcompose.com/',
    },
  ],
  certifications: [
    {
      name: 'React + Redux course',
      body: 'By SoloLearn',
      year: 'January 2022',
      link: '',
    },
    {
      name: 'Python 101 for Data science provide by cognitive class',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'January 2022',
      link: '',
    },
    {
      name: 'Google Digital Garage',
      body: 'By Google',
      year: 'March 2021',
      link: '',
    },
    {
      name: 'HTML + CSS + JavaScript',
      body: 'By SoloLearn',
      year: 'January 2021',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'K S School of Business Management and Information Technology',
      degree: 'M. Sc. (CA&IT) ',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'K S School of Business Management and Information Technology',
      degree: 'B. Sc. (CA&IT) ',
      from: '2018',
      to: '2021',
    },
  ],
  publications: [
    {
      title: '@dhavaltank/js-utils',
      conferenceName: '',
      journalName: 'NPM Package',
      authors: 'Dhaval Tank',
      link: 'https://www.npmjs.com/package/@dhavaltank/js-utils',
      description: `JavaScript Utility Package. In this package a collection of functions i use regularly and don't want to write again`,
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/DhavalTank01/dhavaltank"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
