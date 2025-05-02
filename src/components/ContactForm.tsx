import React from "react";
import "./ContactForm.css";
import Swal from "sweetalert2";
import ScrollAnimation from "react-animate-on-scroll";

interface fillIn {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
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
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Subject</label>
            <input type="text" name="subject" required />
            <label>Message</label>
            <textarea name="message" rows={4} required />
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
