import "./Greetings.css";
import Paragraph from "./Paragraph";
import linkedIn from "../images/LinkedIn_icon.png";
import resumeIcon from "../images/resume-7.png";

function Greetings() {
  var cont = [
    "Welcome to my website!  My name is Montana Queen, and I am currently working as a software engineer at Ultra Maritime.  While my position encompasses many tasks, my main responsibilities are to create software for customers and simulators for data transmission.",
    <br />,
    <br />,
    <a
      href="https://www.linkedin.com/in/montana-queen-a5527a161/"
      target="_blank"
    >
      <img src={linkedIn} className="icons" title="My LinkedIn" />
    </a>,
    <a href="assets/Montana-Queen-Resume.pdf" rel="noreferrer" target="_blank">
      <img src={resumeIcon} className="icons" title="My Resume" />
    </a>,
  ];

  return (
    <div className="greet">
      <Paragraph content={cont} visible={true} />
    </div>
  );
}

export default Greetings;
