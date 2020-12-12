import React from 'react';

import s from './Section.module.css';
function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
