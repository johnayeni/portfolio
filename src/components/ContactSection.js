import React from 'react';
import data from 'data/johnayeni.json';

const images = require.context('assets/img', true);

const renderContacts = (contacts = []) => (
  <React.Fragment>
    {contacts.map((contact, index) => {
      const img = images(`./${contact.logo}`);
      return (
        <a
          href={contact.link}
          key={index}
          className="item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} alt={contact.name} width="150" />
        </a>
      );
    })}
  </React.Fragment>
);

const ContactSection = () => {
  const { contacts, email } = data;
  return (
    <div id="contact" className="section">
      <h1>Contact</h1>
      <p>
        Find me on the following platforms to see more of my work or to know
        more about me.
        <br /> You can also shoot me an email at{' '}
        <a href={`mailto:${email}`}>{email}.</a>
      </p>
      <div className="items">{renderContacts(contacts)}</div>
    </div>
  );
};
export default ContactSection;
