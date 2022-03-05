import React from "react";
import "../styles/Contact.css";

export default function ContactMe() {
  return (
    <div>
      <h2 id="contact"> Contact</h2>

      <form>
        <div class="form-group w-50">
          <label for="exampleFormControlInput1" id="name">
            Name:{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="boxf"
            placeholder="First and Last Name"
          ></input>
        </div>

        <div class="form-group w-50">
          <label for="exampleFormControlInput1" id="email">
            Email address:{" "}
          </label>
          <input
            type="email"
            class="form-control"
            id="boxs"
            placeholder="name@example.com"
          ></input>
        </div>

        <div class="form-group w-50">
          <label for="exampleFormControlTextarea1" id="message">
            Message:{" "}
          </label>
          <textarea class="form-control" id="boxt" rows="3"></textarea>
        </div>
      </form>
      <button type="button" class="btn btn-secondary" id="submit">
        Submit
      </button>
    </div>
  );
}
