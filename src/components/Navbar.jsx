import React from 'react';
import '../styles/Navbar.css';

const TABS = ["HTML", "CSS", "JavaScript", "React", "Redux"];

export default function Navbar({ active = 'HTML', onChange }) {
  return (
    <nav className="nav-root" aria-label="categories">
      <ul className="nav-list">
        {TABS.map((t) => (
          <li key={t} className="nav-item">
            <button
              className={"nav-btn" + (t === active ? ' nav-active' : '')}
              onClick={() => onChange && onChange(t)}
              aria-pressed={t === active}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
