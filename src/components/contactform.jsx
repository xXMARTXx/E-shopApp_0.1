import React from "react";

const ContactForm = () => {
  return (
    <div id="contact">
      <form>
        <label>First Name</label>
        <input
          type="text"
          class="name"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          class="name"
          id="fname"
          name="lastname"
          placeholder="Your name.."
        ></input>
        <label>Country</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="spain">Spain</option>
          <option value="otherconturies">Other Conturies</option>
        </select>
        <label>Subject</label>[ complete this part]
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default ContactForm;
