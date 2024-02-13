export type WorkImageType = {
  subTitle: string;
  thumbnail: string;
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
    workTitle: 'Tabletop RPG Mobile App',
    tags: ['Development'],
    skills: ['Flutter', 'AWS', 'GraphQL', 'Firebase', 'Google Cloud Functions'],
    summary: 'Developing an Android and iOS app that allows users to play tabletop roleplaying games anytime, anywhere.',
    description: '<a href="https://www.tabletop.town/" target="_blank" rel="noopener noreferrer">TabletopTown</a> is an Android and iOS application that <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a> and I began working on in 2020, eventually bringing on other folks to help build it, and we launched the app in 2023. At its core, it is an instant messaging app that allows users to play tabletop roleplaying games asynchronously. The app includes a set of creator tools that empower users to modify game systems and other content in their library, mod games on the fly while playing, and even publish original content to the marketplace. It uses Flutter for the UI, AWS for the database, Hasura to generate a GraphQL API to interface with the database, and Firebase for user authentication.',
    images: [
      {
        subTitle: 'Game Chat',
        thumbnail: '/tabletoptown/t3-chat-screen-thumbnail.jpg',
        fullSize: '/tabletoptown/t3-chat-screen-full-size.jpg',
        caption: 'The core of the experience revolves around the chat screen, where users can interact with each other, speak in character or out of character, access their character sheet and notes, roll dice, and more.',
      },
      {
        subTitle: 'Dice Roller',
        thumbnail: '/tabletoptown/t3-dice-roller-thumbnail.jpg',
        fullSize: '/tabletoptown/t3-dice-roller-full-size.jpg',
        caption: 'The dice roller is a key feature of the app, allowing users to roll dice and see the results in the chat.',
      },
      {
        subTitle: 'Creator Tools',
        thumbnail: '/tabletoptown/t3-creator-tools-thumbnail.jpg',
        fullSize: '/tabletoptown/t3-creator-tools-full-size.jpg',
        caption: 'The creator tools are what give users the ability to modify the game and any content they own.',
      },
      {
        subTitle: 'Marketplace',
        thumbnail: '/tabletoptown/t3-marketplace-thumbnail.jpg',
        fullSize: '/tabletoptown/t3-marketplace-full-size.jpg',
        caption: 'The marketplace empowers creators to share their work with the world, and other users can buy their content to use in their own games.',
      },
    ],
  },
  {
    id: 'sounding-board',
    workLabel: 'Sounding Board',
    workTitle: 'Leadership Coaching Web App',
    tags: ['Development', 'Design'],
    skills: ['React', 'TypeScript', 'GraphQL', 'MongoDB', 'Node.js'],
    summary: 'Building a note-taking feature for a leadership coaching platform.',
    description: '<a href="https://soundingboardinc.com/" target="_blank" rel="noopener noreferrer">Sounding Board</a> is a leadership coaching platform that gives users access to top-tier leadership coaches so that they can uplevel their leadership capabilities. The note-taking feature was a key part of the platform, allowing users to take notes on their coaching sessions and share them with their coach. I built the feature using React and TypeScript for the front end, GraphQL to interact with the database, and Node.js and MongoDB for the back end. The feature also included a rich text editor, and I used the Quill.js library to build it.',
    images: [
      {
        subTitle: 'Notes list',
        thumbnail: '/sounding-board/sounding-board-notes-private-tab-thumbnail.jpg',
        fullSize: '/sounding-board/sounding-board-notes-private-tab-full-size.jpg',
        caption: 'Users are able to view private notes that they have taken on their coaching sessions.',
      },
      {
        subTitle: 'View note',
        thumbnail: '/sounding-board/sounding-board-notes-view-thumbnail.jpg',
        fullSize: '/sounding-board/sounding-board-notes-view-full-size.jpg',
        caption: 'From here, users can view the full note and edit it if they need to.',
      },
      {
        subTitle: 'Shared notes',
        thumbnail: '/sounding-board/sounding-board-notes-shared-tab-thumbnail.jpg',
        fullSize: '/sounding-board/sounding-board-notes-shared-tab-full-size.jpg',
        caption: 'Users also have the ability to share their notes with their coach, and have coaches share notes with them in return.',
      },
      {
        subTitle: 'Add a new note',
        thumbnail: '/sounding-board/sounding-board-notes-add-new-thumbnail.jpg',
        fullSize: '/sounding-board/sounding-board-notes-add-new-full-size.jpg',
        caption: 'Users can add new notes, specify if it is for a particular coaching session, and control privacy settings.',
      },
    ],
  },
  {
    id: 'choice-hotels',
    workLabel: 'Choice Hotels',
    workTitle: 'Hotel Search Mobile Web Redesign',
    tags: ['Development'],
    skills: ['React', 'JavaScript'],
    summary: 'Redesigning the mobile web experience for Choice Hotels.',
    description: '<a href="https://choicehotels.com/" target="_blank" rel="noopener noreferrer">Choice Hotels</a> needed to implement a new design for their mobile web experience to be more performant and responsive. I built new features like the search results page and property details page using React and JavaScript. Another aspect of this project was to speed up performance for the site as a whole by using server-side rendering. With this in place, the load speeds across the site saw a significant improvement.',
    images: [
      {
        subTitle: 'Search results',
        thumbnail: '/choice-hotels/choice-hotels-mobile-search-results-thumbnail.jpg',
        fullSize: '/choice-hotels/choice-hotels-mobile-search-results-full-size.png',
        caption: 'From this screen, users can browse a list of hotels that match their search criteria.',
      },
      {
        subTitle: 'Search widget',
        thumbnail: '/choice-hotels/choice-hotels-mobile-search-widget-thumbnail.jpg',
        fullSize: '/choice-hotels/choice-hotels-mobile-search-widget-full-size.png',
        caption: 'The search criteria can be adjusted from this search widget overlay.',
      },
      {
        subTitle: 'Property details',
        thumbnail: '/choice-hotels/choice-hotels-mobile-property-view-thumbnail.jpg',
        fullSize: '/choice-hotels/choice-hotels-mobile-property-view-full-size.png',
        caption: 'Users can view details about a property from this screen.',
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
    description: 'This was the final project for the Complete Web Developer <a href="https://zerotomastery.io/" target="_blank" rel="noopener noreferrer">Zero to Mastery</a> course. I started by creating a static <a href="https://github.com/mikkelsandberg/face-detect-front-end" target="_blank" rel="noopener noreferrer">front end in React</a> and added most of the styling with the Tachyons library and some custom CSS. Then, I built out the <a href="https://github.com/mikkelsandberg/face-detect-api" target="_blank" rel="noopener noreferrer">backend API</a> using Express.js and tested the endpoints with Postman. After that, I structured the database using PostgreSQL and used knex.js to do SQL queries. Finally, I deployed the application to Heroku.',
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
  },
  {
    id: 'codecademy-intensive-jammming',
    workLabel: 'Codecademy Intensive',
    workTitle: 'Jammming',
    tags: ['Design', 'Development'],
    skills: ['React', 'JavaScript', 'AJAX', 'Spotify API', 'CSS'],
    summary: 'Creating an app that allows users to build custom playlists with content from Spotify.',
    description: 'This was the <a href="https://msandberg-jammming.surge.sh/" target="_blank" rel="noopener noreferrer">final project</a> for the Build Front End Web Applications from Scratch course on <a href="https://www.codecademy.com/learn/paths/build-web-apps-with-react" target="_blank" rel="noopener noreferrer">Codecademy</a>. I bootstrapped the application using Create React App and built components using ES6 class structure. Then, I integrated with the Spotify API to allow users to login to their account, search for content on Spotify, build a playlist, and save the playlist to their profile.',
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
  },
  {
    id: 'experts-exchange-profile-page-redesign',
    workLabel: 'Experts Exchange',
    workTitle: 'Profile page redesign',
    tags: ['Design', 'Development'],
    skills: ['HTML', 'CSS', 'JavaScript'],
    summary: 'Revamping the user profile page on Experts Exchange.',
    description: 'This is the <a href="https://www.experts-exchange.com/members/MikkelSandberg.html" target="_blank" rel="noopener noreferrer">new profile page</a> that I built with my colleagues. Our goal was to have an initial &ldquo;business card&rdquo; view that would display information about the user&rsquo;s areas of expertise and skills. Farther down in the overview section, the user can give information on their background (work history, education, and biography) to serve as a r&eacute;sum&eacute;. There are four other sections that asynchronously load in, which are: the user&rsquo;s recent contributions on the site, certifications earned, ratings from Live or Gigs interactions, and endorsements that the user has given or received. On the right side, one can see the overall &ldquo;level&rdquo; of that user, see if the user has a &ldquo;verified&rdquo; account, and one can share the profile on social media. The profile owner also has a &ldquo;preview&rdquo; button. My role in this project was to create the HTML, CSS, and JS for more advanced user interactions &mdash; beyond what pure HTML and CSS can provide.',
    images: [
      {
        subTitle: 'Profile page redesign',
        thumbnail: '/ee/ee-profile-page-thumbnail.jpg',
        fullSize: '/ee/ee-profile-page-full-size.jpg',
        caption: 'The new profile page that my team and I designed and built.',
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
    description: 'The Live product allowed users to connect with consultants in a one-on-one conversation to get help with coding problems. The problem we were facing was that users didn&rsquo;t know how to get started with the product. Previously, we showed a list of all available consultants and allowed users to connect with anyone they chose, so the requests were not always a good fit and both sides got frustrated. To solve this problem, we streamlined the whole process by making the help request form front and center for the user. We also gave consultants the ability to specify which topics they were willing to help in. My role in this project was to mock up the initial designs in Photoshop for the help request page that lists the consultants available for a given request, and then to code all of the CSS to pull it off. I also provided new HTML structure when the need arose to work beyond what was already in place.',
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
    description: 'This is a website that I designed and coded for a local DJ who runs <a href="http://apcentertainment.net" target="_blank" rel="noopener noreferrer">APC Entertainment</a>. They needed a site that would showcase the services provided, allow users to get a price quote through an interactive quote calculator, provide a way for users to book an event, display a media gallery, and have a contact form for general inquiries.',
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
  },
  {
    id: 'friend-quest-podcast-production',
    workLabel: 'Friend Quest',
    workTitle: 'Podcast production',
    tags: ['Podcast production'],
    skills: ['Audition', 'Premiere'],
    summary: 'Producing a podcast where my friends and I collaborate to tell interesting stories with great characters.',
    description: '<a href="https://anchor.fm/friend-quest" target="_blank" rel="noopener noreferrer">Friend Quest</a> is a podcast that I do with my friends where we play tabletop role playing games. We each record our audio separately and then I edit all of the tracks in Audition to get the final cut. Then, I add the intro and outro music, record voiceovers for the intro and outro, and add some basic EQ and noise filtering. Finally, I export the final audio and bring it into Premiere to create a video version of the episode as well. The cover artwork was done by <a href="http://www.peterfreeby.com" target="_blank" rel="noopener noreferrer">Peter Freeby</a>.',
    images: [
      {
        subTitle: 'Cover artwork',
        thumbnail: '/friend-quest/friend-quest-artwork-thumbnail.jpg',
        fullSize: '/friend-quest/friend-quest-artwork-full-size.jpg',
        caption: 'The cover artwork for Friend Quest.',
      },
    ],
  },
];
