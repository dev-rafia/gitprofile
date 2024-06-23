// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dev-rafia', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
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
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
    },
  },
  seo: {
    title: 'Website of Rafia',
    description: 'Rafia is a good girl born in Bangladesh',
    imageURL: '',
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100072359490583',
    instagram: 'https://www.instagram.com/rafu._.afrida/',
    threads: 'https://www.threads.net/@rafu._.afrida',
    website: 'https://rafia.web.app',
    email: 'afridarafia@proton.me',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Art',
    'Singing',
    'Sports',
    'Dancing',
    'Design'
  ],
  experiences: [],
  certifications: [
    {
      name: 'Dhrubo Porishod',
      body: 'Dhrubo Porishod Bangladesh Upadhi Potro',
      year: 'October 2021',
      link: 'https://f005.backblazeb2.com/file/mezbatheking/rfc1.jpg',
    },
    {
      name: "Dhrubo Porishod",
      body: "Dhrubo Porishod Bangladesh Upadhi Potro",
      year: "July 2023",
      link: 'https://f005.backblazeb2.com/file/mezbatheking/rfc2.jpg'
    },
    {
      name: "Free being me",
      body: "Certificate of participation awarded to AFRIDHA RAFIA for active participation in one day training and compititon of the activities on Free being Me organized by Bangladesh Girls Association.",
      year: "April 2022",
      link: 'https://f005.backblazeb2.com/file/mezbatheking/rfc3.jpg'
    }
  ],
  educations: [
    {
      institution: 'Saint Joseph',
      degree: 'Class 1',
      from: '2014',
      to: '2015',
    },
    {
      institution: 'Dinajpur Govt. Girls High School',
      degree: 'Class 3 to Class 9',
      from: '2016',
      to: '2024',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)

  themeConfig: {
    defaultTheme: 'synthwave',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
  footer: `Thanks for visiting my site`,

  enablePWA: true,
};

export default CONFIG;
