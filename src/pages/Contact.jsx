import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${name}!`);

    setName("");
    setMessage("");
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br /><br />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;