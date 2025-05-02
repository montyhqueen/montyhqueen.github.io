import { MouseEvent, useEffect, useRef, useState } from "react";
import "./Navigation.css";
import profilePic from "../images/Montana_Queen.jpg";

function Navigation() {
  const navBar = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isShrunk, ShrinkStuff] = useState(false);
  const [height, setHeight] = useState(0);

  const [picStyle, setPic] = useState({
    height: "100px",
    width: "100px",
    transition: "0.3s ease",
  });

  const [fontStyle, setFont] = useState({
    transition: "0.3s ease",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      if (currentPosition > 100) {
        setPic({ ...picStyle, height: "0px", width: "0px" });
        ShrinkStuff(true);
      } else {
        setPic({ ...picStyle, height: "100px", width: "100px" });
        ShrinkStuff(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Navigation]);

  return (
    <div ref={navBar} className="nav-style">
      <img
        id="me"
        src={profilePic}
        className={"profile"}
        style={picStyle}
      ></img>
      <h1
        className={"name"}
        style={isShrunk ? { fontSize: "0px" } : { marginTop: "0px" }}
      >
        Montana Queen
      </h1>
      <h2
        className={"job-title"}
        style={isShrunk ? { fontSize: "0px" } : { marginTop: "0px" }}
      >
        Software Engineer
      </h2>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#history">History</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Navigation;
