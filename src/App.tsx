//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
import UB from "./images/UB_Sign.jpg";
import UM from "./images/Ultra-Maritime-Operations.webp";
import webStock from "./images/web-stock-image.png";
import Greetings from "./components/Greetings";
import "./App.css";
import Navigation from "./components/Navigation";
import Paragraph from "./components/Paragraph";
import SectionHeader from "./components/SectionHeader";
import ContactForm from "./components/ContactForm";
import { useRef, useState, useEffect } from "react";

function App() {
  //const [count, setCount] = useState(0);

  var content = "";
  var jobContent = [
    "August 2020 - Current",
    <br />,
    <b>Languages:</b>,
    " C#, C++, Java",
    <br />,
    <b>Tools:</b>,
    "Visual Studio, Eclipse, Jira, SVN",
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
            dates="August 2016 - May 2020"
            content={[
              "I attended the University at Buffalo where I majored in Computer Science. While there, I took classes that focused on programming fundementals, data structures, project management, and software development. I explored languages such as C++, C#, Python, and JavaScript.",
            ]}
          />
        </div>
        <div className="spacer" />
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
          dates="Languages: HTML, CSS, SQL, React, TypeScript,JavaScript, PHP"
          photo={webStock}
          content={[
            "Currently independently studying and trying my hand at using web development tools.  I started with making basic websites for local organizations before expanding my knowledge to incorporate PHP and JavaScript.  This website, however, includes React.  I am applying my knowledge to build a movie rating website that includes user registration/login functionality, API calls, and more.",
          ]}
        />
        <br />
        <Paragraph
          title="Chat Application"
          dates="Languages: C#, SQL"
          photo={webStock}
          content={[
            "Currently developing a chatting application for Windows.  I am creating both a servier-side app and a client-side app using C# to implement a registration/login system and message transmition between users.  User accounts have functionality beyond messaging, as they can add friends, block users, and set preperences for their accounts.",
          ]}
          side="right"
        />
        <div className="spacer" />
        <SectionHeader title="Contact" id="contact" />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
