import { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import profilePic from "../images/Montana_Queen.jpg";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { withStyles } from "@material-ui/core/styles";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

const AccordionSummary = withStyles({
  root: {
    flexDirection: "column",
  },
  content: {
    marginBottom: 0,
  },
  expandIcon: {
    marginRight: 0,
    paddingTop: 0,
  },
})(MuiAccordionSummary);

function Navigation() {
  const screenWidth = useScreenWidth();
  const navBar = useRef(null);
  const [isShrunk, ShrinkStuff] = useState(false);

  const [picStyle, setPic] = useState({
    height: "100px",
    width: "100px",
    transition: "0.3s ease",
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

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
      <>
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
      </>
      {screenWidth > 750 ? (
        <>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#history">History</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </>
      ) : (
        <>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />} />
            <AccordionDetails>
              <div className="collapse">
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#history">History</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </div>
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </div>
  );
}

export default Navigation;
