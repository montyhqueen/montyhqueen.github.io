import UB from "./images/UB_Sign.jpg";
import UM from "./images/Ultra-Maritime-Operations.webp";
import webStock from "./images/web-stock-image.png";
import Greetings from "./components/Greetings";
import "./App.css";
import Navigation from "./components/Navigation";
import Paragraph from "./components/Paragraph";
import SectionHeader from "./components/SectionHeader";
import ContactForm from "./components/ContactForm";
import MCLogo from "./images/MyChatLogo.png";
import { useEffect, useState } from "react";

function App() {
  //const [count, setCount] = useState(0);

  var jobContent = [
    <br />,
    "August 2020 - Current",
    <br />,
    <b>Languages:</b>,
    "  C#, C++, Java",
    <br />,
    <b>Tools:</b>,
    "  Visual Studio, Eclipse, Jira, SVN",
  ];

  var jobDetails = [
    "-  Collaborates with team to create deliverables for customers",
    <br />,
    "-  Designs and develops applications based on a set of user requirements",
    <br />,
    "-  Maintains software from past projects and delivers version updates",
    <br />,
    "-  Utilizes project management tools to track task progress and bug revisions",
    <br />,
    "-  Installs and configures operating systems",
    <br />,
  ];

  return (
    <>
      <Navigation />
      <div className="main">
        <SectionHeader title="Greetings" id="about" />
        <div className="fade-in">
          <Greetings />
        </div>
        <SectionHeader title="Education" id="education" />
        <div className="fade-in">
          <Paragraph
            visible={true}
            title="University at Buffalo"
            subtitle="Bachelor's of Science in Computer Science"
            photo={UB}
            detailed={[<br />, "August 2016 - May 2020"]}
            content={[
              "At the University at Buffalo, I majored in Computer Science.  Over four years I attended various classes that focused on the fundementals of programming, such as data structures, software/project management, collaboration, and documentation.  I also explored various languages including, C++, C#, Python, and Java, which I still use in my current occupation.",
            ]}
          />
        </div>
        <SectionHeader title="History" id="history" />
        <Paragraph
          title="Ultra Maritime"
          subtitle="Software Engineer"
          detailed={jobContent}
          photo={UM}
          side="right"
          content={jobDetails}
        />
        <SectionHeader title="Projects" id="projects" />
        <Paragraph
          title="Web Development"
          detailed={[
            <b>Languages:</b>,
            "  HTML, CSS, SQL, React, TypeScript,JavaScript, PHP",
          ]}
          photo={webStock}
          content={[
            "I am independently studying tools and languages for web development to build web applications.  With knowledge of HTML, PHP and CSS, I've built basic websites for small organizations in the past.  I've also played around with SQL to get an understanding of working with databases.  As I would love to expand my skills in web development, I build this website utilizing React and TypeScript.  Feeling comfortable with these tools, I am currently developing a more complex website allowing users to rate movies.  In this project I am also incorporating API usages to retrieve movie information as needed to further understand API's.",
          ]}
        />
        <div className="spacer" />
        <Paragraph
          title="Chat Application"
          detailed={[<b>Languages:</b>, "  C#, SQL"]}
          photo={MCLogo}
          content={[
            "I am also applying my knowledge of C# and SQL to develop a chat application.  I created a user registration and login system for user accounts, a server for the application that handles the communications, and basic functionality for the user experience (adding friends, blocking users, account preferences, etc.).  Information is stored in a database, with necessary information being encrypted for security purposes.",
            <br />,
            <br />,
          ]}
          side="right"
        />
        <SectionHeader title="Contact" id="contact" />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
