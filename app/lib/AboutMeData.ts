import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faBriefcase, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

type AboutMeDataType = {
  profilePic: string;
  stats: { stat: string; icon: IconDefinition }[];
  introText: string;
  bodyContent: string[];
};

const AboutMeData: AboutMeDataType = {
  profilePic: '/mikkel-portrait-med.jpg',
  stats: [
    {
      stat: 'Mikkel Sandberg',
      icon: faUser
    },
    {
      stat: 'Web Developer,<br>Designer, and<br>Podcast Producer',
      icon: faBriefcase
    },
    {
      stat: 'California, US',
      icon: faMapMarkerAlt
    },
    {
      stat: '<a href="https://github.com/mikkelsandberg" target="_blank" rel="noopener noreferrer">Github profile</a>',
      icon: faGithub
    }
  ],
  introText: 'Hi there! My name is Mikkel and I am a web and mobile application developer, as well as a podcast producer, based in California.',
  bodyContent: [
    'Most of my <a href="/my-work">professional work</a> has been as a front&ndash;end web developer, but I have a curiosity and hunger to learn. From supporting a community of professionals by <a href="/my-work/experts-exchange-live-product-redesign">improving user experience</a> and building <a href="/my-work/apc-entertainment-website-design-and-development">websites for small businesses</a>, to <a href="/my-work/friend-quest-podcast-production">making podcasts</a> to tell a good story and making mobile apps to enable people to <a href="/my-work/tabletop-town-mobile-app-development">play tabletop games over chat</a> and tell their own stories, my guiding principle is to make sure that my work makes a positive impact on the world.'
  ]
};

export default AboutMeData;
