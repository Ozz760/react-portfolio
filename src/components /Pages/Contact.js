import React from "react";

export default function ContactMe() {
  return (
    <div>
      <h2> Contact</h2>

      <section>
        <h4>Name: </h4>
        <textarea placeholder="First and Last Name"></textarea>
        <h4>Email Address: </h4>
        <textarea placeholder="Email Address"></textarea>
        <h4>Message: </h4>
        <textarea placeholder="Place your message here"></textarea>
      </section>
      <button>Submit</button>
    </div>
  );
}
