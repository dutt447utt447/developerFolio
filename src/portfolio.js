/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sunil Dutt",
  title: "Hi all, I'm Sunil Dutt",
  subTitle: emoji(
    "A passionate Full Stack Developer  👨‍💻 Information security Analyst 🤖 |A Learner  ✍️ With several years of experience in the tech industry, I have developed a keen understanding of the latest technologies and trends. On this website, you'll find a collection of my work, skills, and achievements, as well as a glimpse into my professional journey. As a tech enthusiast, I am always eager to take on new challenges and explore new areas of interest. So, take a look around and get to know me better!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1s8YiHqZInuDYghiPbGHbCdAETI0l842A/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dutt447utt447",
  linkedin: "https://www.linkedin.com/in/sunil-dutt-b2125ba3",
  gmail: "dutt447@gmail.com",
  facebook: "https://www.facebook.com/dutt123",
  twitter: "https://twitter.com/SunilDutt447",
  medium: "https://medium.com/@dutt447",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Full-stack web development using modern technologies like Node.js, React, and MongoDB."
    ),
    emoji("⚡ Managing the web Servers IIS, Apache, TomCat"),
    emoji(
      "⚡ Developed SANTOS, an innovative web portal and mobile app for personnel transfers in CRPF"
    ),
    emoji(
      "⚡ Passionate about learning new technologies and staying up-to-date with industry trends"
    ),
    emoji(
      "⚡  Committed to delivering high-quality work that meets or exceeds client expectations"
    ),
    emoji(
      "⚡ Worked on various IT initiatives for CRPF, including the CRPF SAMBHAV App, SANTOS, and the Intranet Based Web App"
    ),
   
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Window Server",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "YouTube",
      fontAwesomeClassname: "fab fa-youtube"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cyber Security",
      progressPercentage: "70%"
    },
    {
      Stack: "Digital Marketing",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack software Developer",
      company: "TechView",
      companylogo: require("./assets/images/logo.webp"),
      date: "July 2015 – Present",
      desc: "more than 6 year experience in software developement",
      descBullets: [
        "60+ software developed",
        "Full stack solution"
      ]
    },
    {
      role: "Information Security Analyst",
      company: "TechView",
      companylogo: require("./assets/images/logo.webp"),
      date: "May 2018 – Present",
      desc: "4 year experience in cyber crime investigation and analysis"
    },
    {
      role: "Digital Marketer",
      company: "TechView",
      companylogo: require("./assets/images/logo.webp"),
      date: "Jan 2021 – Present",
      desc: "Campaign of total 2L+ were run successfully"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/khabrana.webp"),
      projectName: "Khabrana News",
      projectDesc: "Khabrana News portal and android App",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://khabrana.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jscure.webp"),
      projectName: "JsCureMedical",
      projectDesc: "E-commerce Website",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://jscuremedical.com/"
        }
      ]
    },
    {
      image: require("./assets/images/santos_logo.jpg"),
      projectName: "SANTOS",
      projectDesc: "CRPF's Innovative Transfer Software ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://crpf.gov.in/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Certified Digital Marketer",
      subtitle:
        "Certified in Digital Marketting Fundamental year 2018",
      image: require("./assets/images/digital.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15QFrmH7_9YQh6gCmsQN9msvxuk6FG3rX/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "Cyber Crime Investigation",
      subtitle:
        "National cybercrime training center (NCRB)",
      image: require("./assets/images/ncrb.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1xxZm1YS0TZ-zcHR5jMxy4VkJgZCZm1dP/view?usp=sharing"
        }
      ]
    },

    {
      title: "Ethical Hacking",
      subtitle: "Completed Certifcation from IIT khargpur, India for Ethical Hacking",
      image: require("./assets/images/iit.webp"),
      footerLink: [
        
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/19ThCwV4sjljt53RKrXfYx9tOFEyXRI5G/view?usp=sharing"
        }
      ]
    },
    {
      title: "Google Analytics",
      subtitle: "Completed Certifcation from Google academy for Google Analytics",
      image: require("./assets/images/analytic.webp"),
      footerLink: [
        
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1yoA4hHQGTdHZQmOjbiGiGZne-SUWdEwX/view?usp=sharing"
        }
      ]
    },
    {
      title: "Internet Of Things",
      subtitle: "Completed Certifcation from CISCO academy for IoT",
      image: require("./assets/images/cisco.webp"),
      footerLink: [
        
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1wBGLj_CB2kR7nWkFs3SyfmVDtdUdICBS/view?usp=sharing"
        }
      ]
    },
    {
      title: "TechView Team",
      subtitle: "In Year 2020 , started IT Learning Portal which provides Free Certification",
      image: require("./assets/images/logo.webp"),
      footerLink: [
        {
          name: "Learning Portal",
          url: "https://www.techviewteam.com"
        },
        {
          name: "Know All About Me",
          url: "https://drive.google.com/file/d/1s8YiHqZInuDYghiPbGHbCdAETI0l842A/view?usp=sharing"
        }
      ]
    },
    {
      title: "Developed SANTOS",
      subtitle: "In Year 2022 , System for Annual Transfer Over Software (SANTOS) Developed By SUNIL DUTT for CRPF ",
      image: require("./assets/images/santos_logo.jpg"),
      footerLink: [
        
        {
          name: "Know More",
          url: "https://techviewteam.blogspot.com/2023/04/crpfs-innovative-transfer-software.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "http://techviewteam.blogspot.com/2018/08/how-to-send-confidential-mail-using-g.html",
      title: "How to send confidential message using Gmail",
      description:
        "Do you want to send confidential message using Gmail then this article is for you"
    },
    {
      url: "http://techviewteam.blogspot.com/2018/07/check-your-email-address-password.html",
      title: "How to check your Password is Safe?",
      description:
        "Article is about to know how can we check our password is safe."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "YouTube",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE THROUGH YOUTUBE ALSO😅"
  ),

  talks: [
    {
      title: "Visit Our YouTube Channel",
      subtitle: "YouTube",
      slides_url: "https://www.youtube.com/channel/UCRI10CdtQJMFzHcxbuHSe8Q",
      event_url: "https://www.youtube.com/channel/UCRI10CdtQJMFzHcxbuHSe8Q?sub_confirmation=1"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("YouTube 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT CYBER AWARENESS AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://youtu.be/lOqHTpG-DkM"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8619333672",
  email_address: "dutt447@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SunilDutt447", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
