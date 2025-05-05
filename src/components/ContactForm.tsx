import "./ContactForm.css";
import Swal from "sweetalert2";
import ScrollAnimation from "react-animate-on-scroll";
import { SetStateAction, useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSub] = useState("");
  const [msg, setMsg] = useState("");

  function changeName(event: { target: { value: SetStateAction<string> } }) {
    setName(event.target.value);
  }
  function changeEmail(event: { target: { value: SetStateAction<string> } }) {
    setEmail(event.target.value);
  }
  function changeSub(event: { target: { value: SetStateAction<string> } }) {
    setSub(event.target.value);
  }
  function changeMsg(event: { target: { value: SetStateAction<string> } }) {
    setMsg(event.target.value);
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7bb2a043-a0da-45f3-a16e-cb0e7332a512");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Email sent",
        text: "Thank you for filling out my contact form!  I'll be sure to reach out to you.",
        icon: "success",
      });
      setName("");
      setEmail("");
      setSub("");
      setMsg("");
    } else {
      Swal.fire({
        title: "Uh oh...",
        html: 'The message didn\'t send...sorry about that.  The API is likely marking your email as spam...sorry about that!  You can still email me at <a href="mailto:monhqueen@gmail.com">monhqueen@gmail.com</a>.',
        icon: "error",
      });
    }
  };

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <form className="contact-form" onSubmit={onSubmit}>
        <center>
          <fieldset className="contact-fieldset">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={changeName}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeEmail}
              required
            />
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={changeSub}
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              rows={10}
              value={msg}
              onChange={changeMsg}
              required
            />
            <button name="submit-form" type="submit">
              Submit
            </button>
          </fieldset>
        </center>
      </form>
    </ScrollAnimation>
  );
}

export default ContactForm;
