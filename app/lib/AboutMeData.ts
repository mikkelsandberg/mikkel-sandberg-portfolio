import { IconDefinition, faBriefcase, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

type AboutMeDataType = {
  profilePic: string;
  stats: { stat: string; icon: IconDefinition }[];
  introText: string;
  bodyContent: string;
};

const AboutMeData: AboutMeDataType = {
  profilePic: '/mikkel-profile-pic.jpg',
  stats: [
    {
      stat: 'Mikkel Sandberg',
      icon: faUser
    },
    {
      stat: 'Software Engineer',
      icon: faBriefcase
    },
    {
      stat: 'California, US',
      icon: faMapMarkerAlt
    }
  ],
  introText: 'I am a detail-oriented software engineer with a strong design sense, skilled at creating beautiful and clean applications.',
  bodyContent: 'I excel at collaborating across teams to deliver robust user experiences, leveraging modern and secure infrastructure to increase developer productivity and drive user growth. I am well-versed in a range of technologies, including React, Flutter, MongoDB, PostgreSQL, GraphQL, Firebase, Google Cloud, and AWS. With these tools, I have worked on a variety of products and services: a mobile app that allowed users to <a href="/my-work/tabletoptown-tabletop-rpg-mobile-app">play tabletop role playing games</a> whenever and wherever they were, a <a href="/my-work/sounding-board-leadership-coaching-web-app">leadership coaching platform</a> that gives users access to highly skilled coaching to uplevel their leadership capabilities, and a <a href="/my-work/choice-hotels-hotel-search-mobile-web-redesign">hotel franchise&rsquo;s main search</a> and booking experience.<br/>You can find more of my work on <a href="/my-work">My Work</a> page.',
};

export default AboutMeData;
