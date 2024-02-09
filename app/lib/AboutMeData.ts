import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faBriefcase, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

type AboutMeDataType = {
  profilePic: string;
  stats: { stat: string; icon: IconDefinition }[];
  introText: string;
  bodyContent: string;
};

const AboutMeData: AboutMeDataType = {
  profilePic: '/mikkel-portrait-med.jpg',
  stats: [
    {
      stat: 'Mikkel Sandberg',
      icon: faUser
    },
    {
      stat: 'Full Stack Developer',
      icon: faBriefcase
    },
    {
      stat: 'California, US',
      icon: faMapMarkerAlt
    }
  ],
  introText: 'I am a detail-oriented full stack developer with a strong design sense, skilled at creating beautiful and clean applications.',
  bodyContent: 'I excel at collaborating across teams to deliver robust user experiences, leveraging modern and secure infrastructure to increase developer productivity and drive user growth. I am well-versed in a range of technologies, including React, Flutter, MongoDB, PostgreSQL, GraphQL, Firebase, Google Cloud, and AWS. With these tools, I have worked on a variety of products and services: a mobile app that allows users to play tabletop role playing games whenever and wherever they are, a leadership coaching platform that gives users access to highly skilled coaching to uplevel their leadership skills, and a hotel franchise&rsquo;s main search and booking experience.<br/>You can find more of my work on <a href="/my-work">My Work</a> page.',
};

export default AboutMeData;
