export type WorkImageType = {
  subTitle: string;
  thumbnail?: string;
  fullSize: string;
  caption: string;
};

export type WorkLinkType = {
  title: string;
  url: string;
};

export type WorkDataType = {
  id: string;
  workLabel: string;
  workTitle: string;
  tags: string[];
  skills: string[];
  summary: string;
  description: string;
  images: WorkImageType[];
  links?: WorkLinkType[];
};

export const WorkData: WorkDataType[] = [
  {
    id: 'tabletoptown',
    workLabel: 'TabletopTown',
    workTitle: 'Mobile App Development',
    tags: ['Development'],
    skills: ['Flutter', 'AWS', 'GraphQL', 'Firebase', 'Google Cloud Functions'],
    summary: 'Developing an Android and iOS app that allows users to play tabletop roleplaying games anytime, anywhere.',
    description: 'TabletopTown is an Android and iOS application that <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a> and I began working on in 2020, eventually bringing on other folks to help build it, and we launched the app in 2023. At its core, it is an instant messaging app that allows users to play tabletop roleplaying games asynchronously. The app includes a set of creator tools that empower users to modify game systems and other content in their library, mod games on the fly while playing, and even publish original content to the marketplace. It uses Flutter for the UI, AWS for the database, Hasura to generate a GraphQL API to interface with the database, and Firebase for user authentication.',
    images: [
      {
        subTitle: 'Game Chat',
        fullSize: '/tabletoptown/t3-chat-screen.jpg',
        caption: 'The core of the experience revolves around the chat screen, where users can interact with each other, speak in character or out of character, access their character sheet and notes, roll dice, and more.',
      },
      {
        subTitle: 'Dice Roller',
        fullSize: '/tabletoptown/t3-dice-roller.jpg',
        caption: 'The dice roller is a key feature of the app, allowing users to roll dice and see the results in the chat.',
      },
      {
        subTitle: 'Creator Tools',
        fullSize: '/tabletoptown/t3-creator-tools.jpg',
        caption: 'The creator tools are what give users the ability to modify the game and any content they own.',
      },
      {
        subTitle: 'Marketplace',
        fullSize: '/tabletoptown/t3-marketplace.jpg',
        caption: 'The marketplace empowers creators to share their work with the world, and other users can buy their content to use in their own games.',
      },
    ],
    links: [
      {
        title: 'Live site',
        url: 'https://www.tabletop.town/',
      },
    ],
  },
  {
    id: 'udemy-web-dev-course',
    workLabel: 'Udemy Web Dev Course',
    workTitle: 'Face detect app',
    tags: ['Development'],
    skills: [
      'React',
      'JavaScript',
      'AJAX',
      'Clarifai API',
      'CSS',
      'Express.js',
      'PostgreSQL',
    ],
    summary: 'Building an app that lets users see if a provided picture has a detectable face in it.',
    description: 'This was the final project for the Complete Web Developer in 2018 course on Udemy. I started by creating a static front end in React and added most of the styling with the Tachyons library and some custom CSS. Then, I built out the backend API using Express.js and tested the endpoints with Postman. After that, I structured the database using PostgreSQL and used knex.js to do SQL queries. Finally, I deployed the application to Heroku.',
    images: [
      {
        subTitle: 'Login view',
        thumbnail: '/face-detect/face-detect-login-thumbnail.jpg',
        fullSize: '/face-detect/face-detect-login-full-size.jpg',
        caption: 'The logged out view for the face detect app.',
      },
      {
        subTitle: 'Home view',
        thumbnail: '/face-detect/face-detect-home-thumbnail.jpg',
        fullSize: '/face-detect/face-detect-home-full-size.jpg',
        caption: 'The home page for the face detect app.',
      },
    ],
    links: [
      {
        title: 'Front end repository',
        url: 'https://github.com/mikkelsandberg/face-detect-front-end',
      },
      {
        title: 'Back end repository',
        url: 'https://github.com/mikkelsandberg/face-detect-api',
      },
    ],
  },
  {
    id: 'codecademy-intensive-jammming',
    workLabel: 'Codecademy Intensive',
    workTitle: 'Jammming',
    tags: ['Design', 'Development'],
    skills: ['React', 'JavaScript', 'AJAX', 'Spotify API', 'CSS'],
    summary: 'Creating an app that allows users to build custom playlists with content from Spotify.',
    description: 'This was the final project for the Build Front End Web Applications from Scratch course on Codecademy. I bootstrapped the application using Create React App and built components using ES6 class structure. Then, I integrated with the Spotify API to allow users to login to their account, search for content on Spotify, build a playlist, and save the playlist to their profile.',
    images: [
      {
        subTitle: 'Search results view',
        thumbnail: '/jammming/jammming-search-results-thumbnail.jpg',
        fullSize: '/jammming/jammming-search-results-full-size.jpg',
        caption: 'The search results view for the Jammming app.',
      },
      {
        subTitle: 'Playlist view',
        thumbnail: '/jammming/jammming-playlist-thumbnail.jpg',
        fullSize: '/jammming/jammming-playlist-full-size.jpg',
        caption: 'The playlist view for the Jammming app.',
      },
    ],
    links: [
      {
        title: 'Live site',
        url: 'http://msandberg-jammming.surge.sh',
      },
    ],
  },
  {
    id: 'experts-exchange-profile-page-redesign',
    workLabel: 'Experts Exchange',
    workTitle: 'Profile page redesign',
    tags: ['Design', 'Development'],
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: 'Revamping the user profile page on Experts Exchange.',
    description: 'This is the new profile page that I built with my colleagues. Our goal was to have an initial &ldquo;business card&rdquo; view that would display information about the user&rsquo;s areas of expertise and skills. Farther down in the overview section, the user can give information on their background (work history, education, and biography) to serve as a r&eacute;sum&eacute;. There are four other sections that asynchronously load in, which are: the user&rsquo;s recent contributions on the site, certifications earned, ratings from Live or Gigs interactions, and endorsements that the user has given or received. On the right side, one can see the overall &ldquo;level&rdquo; of that user, see if the user has a &ldquo;verified&rdquo; account, and one can share the profile on social media. The profile owner also has a &ldquo;preview&rdquo; button. My role in this project was to create the HTML, CSS, and JS for more advanced user interactions &mdash; beyond what pure HTML and CSS can provide.',
    images: [
      {
        subTitle: 'Profile page redesign',
        thumbnail: '/ee/ee-profile-page-thumbnail.jpg',
        fullSize: '/ee/ee-profile-page-full-size.jpg',
        caption: 'The new profile page that my team and I designed and built.',
      },
    ],
    links: [
      {
        title: 'Live site',
        url: 'https://www.experts-exchange.com/members/MikkelSandberg.html',
      },
    ],
  },
  {
    id: 'experts-exchange-live-product-redesign',
    workLabel: 'Experts Exchange',
    workTitle: 'Live product redesign',
    tags: ['Design', 'Development'],
    skills: ['HTML', 'CSS'],
    summary: 'Giving Experts Exchange&rsquo;s Live product a UX facelift by simpifying the interface and creating a new flow.',
    description: 'The Live product allows clients to connect with consultants in a one-on-one conversation to get help with coding problems. The problem we were facing was that clients didn&rsquo;t know how to get started with the product. Previously, we showed a list of all available consultants and allowed clients to connect with anyone they chose, so the requests were not always a good fit and both sides got frustrated. To solve this problem, we streamlined the whole process by making the help request form front and center for the client. We also gave consultants the ability to specify which topics they were willing to help in. My role in this project was to mock up the initial designs in Photoshop for the help request page that lists the consultants available for a given request, and then to code all of the CSS to pull it off. I also provided new HTML structure when the need arose to work beyond what was already in place.',
    images: [
      {
        subTitle: 'Main dashboard',
        thumbnail: '/ee/ee-live-logged-in-thumbnail.jpg',
        fullSize: '/ee/ee-live-logged-in-full-size.jpg',
        caption: 'The revamped interface for the Live product.',
      },
      {
        subTitle: 'Help request interface',
        thumbnail: '/ee/ee-live-help-request-thumbnail.jpg',
        fullSize: '/ee/ee-live-help-request-full-size.jpg',
        caption: 'The improved interface for finding consultants.',
      },
    ],
  },
  {
    id: 'apc-entertainment-website-design-and-development',
    workLabel: 'APC Entertainment',
    workTitle: 'Website design and development',
    tags: ['Design', 'Development'],
    skills: [
      'HTML',
      'Sass',
      'JavaScript',
      'jQuery',
      'Illustrator',
      'Photoshop',
    ],
    summary: 'Making a new website for a business owner to allow them to acquire more customers.',
    description: 'This is a website that I designed and coded for an acquaintance. The client was a DJ and needed a site that would showcase the services he provided, allow potential customers to get a price quote through an interactive &ldquo;quote calculator,&rdquo; provide a way for users to book an event, display a media gallery, and have a contact form for general inquiries.',
    images: [
      {
        subTitle: 'Splash screen',
        thumbnail: '/apc-entertainment/1-splashscreen-thumbnail.jpg',
        fullSize: '/apc-entertainment/1-splashscreen-full-size.jpg',
        caption: 'The splash screen for APC Entertainment.',
      },
      {
        subTitle: 'Booking section',
        thumbnail: '/apc-entertainment/2-booking-thumbnail.jpg',
        fullSize: '/apc-entertainment/2-booking-full-size.jpg',
        caption: 'The booking section for APC Entertainment.',
      },
      {
        subTitle: 'Services section',
        thumbnail: '/apc-entertainment/3-services-thumbnail.jpg',
        fullSize: '/apc-entertainment/3-services-full-size.jpg',
        caption: 'The services section for APC Entertainment.',
      },
      {
        subTitle: 'Testimonial section',
        thumbnail: '/apc-entertainment/4-testimonial-thumbnail.jpg',
        fullSize: '/apc-entertainment/4-testimonial-full-size.jpg',
        caption: 'The testimonial section for APC Entertainment.',
      },
      {
        subTitle: 'Pricing section',
        thumbnail: '/apc-entertainment/5-pricing-thumbnail.jpg',
        fullSize: '/apc-entertainment/5-pricing-full-size.jpg',
        caption: 'The pricing section for APC Entertainment.',
      },
      {
        subTitle: 'Media section',
        thumbnail: '/apc-entertainment/6-media-thumbnail.jpg',
        fullSize: '/apc-entertainment/6-media-full-size.jpg',
        caption: 'The media section for APC Entertainment.',
      },
      {
        subTitle: 'Contact section',
        thumbnail: '/apc-entertainment/7-contact-thumbnail.jpg',
        fullSize: '/apc-entertainment/7-contact-full-size.jpg',
        caption: 'The contact section for APC Entertainment.',
      },
    ],
    links: [
      {
        title: 'Live site',
        url: 'http://apcentertainment.net',
      },
    ],
  },
  {
    id: 'friend-quest-podcast-production',
    workLabel: 'Friend Quest',
    workTitle: 'Podcast production',
    tags: ['Podcast production'],
    skills: ['Audition', 'Premiere'],
    summary: 'Producing a podcast where my friends and I collaborate to tell interesting stories with great characters.',
    description: 'Friend Quest is a podcast that I do with my friends where we play tabletop role playing games. We each record our audio separately and then I edit all of the tracks in Audition to get the final cut. Then, I add the intro and outro music, record voiceovers for the intro and outro, and add some basic EQ and noise filtering. Finally, I export the final audio and bring it into Premiere to create a video version of the episode as well. The cover artwork was done by <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a>.',
    images: [
      {
        subTitle: 'Cover artwork',
        thumbnail: '/friend-quest/friend-quest-artwork-thumbnail.jpg',
        fullSize: '/friend-quest/friend-quest-artwork-full-size.jpg',
        caption: 'The cover artwork for Friend Quest.',
      },
    ],
    links: [
      {
        title: 'Podcast website',
        url: 'https://anchor.fm/friend-quest',
      },
      {
        title: 'Friend Quest Twitter',
        url: 'https://twitter.com/friendquestpod',
      },
    ],
  },
];
