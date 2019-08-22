import React from 'react';
import data from 'data/johnayeni.json';

const renderItemLinks = (links = []) => (
  <React.Fragment>
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.to} target="_blank" rel="noopener noreferrer">{link.text}</a>
      </li>
    ))}
  </React.Fragment>
);

const renderItems = (works = []) => (
  <React.Fragment>
    {works.map((work, index) => (
      <div className="item" key={index}>
        <h2 className="item-title">{work.title}</h2>
        <p className="item-description">{work.description}</p>
        <ul className="item-links">{renderItemLinks(work.links)}</ul>
      </div>
    ))}
  </React.Fragment>
);

const WorkSection = () => {
  const { works, resume } = data;
  return (
    <div id="works" className="section">
      <h1>Works</h1>
      <div className="items">{renderItems(works)}</div>
      <div className="more-works">
        <p>
          Check out my{' '}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>{' '}
          for more stuff
        </p>
      </div>
    </div>
  );
};

export default WorkSection;
