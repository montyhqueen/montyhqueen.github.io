import { JSX } from "react";
import "./Paragraph.css";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

interface Info {
  title?: string;
  subtitle?: string;
  content: (string | JSX.Element)[];
  photo?: string;
  dates?: string;
  side?: string;
  detailed?: (string | JSX.Element)[];
  visible?: boolean;
}

function Paragraph({
  title,
  subtitle,
  content,
  photo,
  dates,
  detailed,
  side = "left",
  visible = false,
}: Info) {
  var fSide = "photo-" + side;

  return (
    <ScrollAnimation
      animatePreScroll={visible}
      initiallyVisible={visible}
      animateIn={visible ? "" : "fadeIn"}
      animateOnce={true}
    >
      {photo != null ? <img src={photo} className={fSide} /> : null}
      {title != null ? <h2 className="adjust">{title}</h2> : null}
      {subtitle ? (
        <>
          <b>{subtitle}</b>
          <br />
        </>
      ) : null}
      {detailed != null ? (
        <>
          <i>{detailed}</i>
          <br />
        </>
      ) : null}
      {dates ? <i>{dates}</i> : null}
      <p className="content">{content}</p>
    </ScrollAnimation>
  );
}

export default Paragraph;
