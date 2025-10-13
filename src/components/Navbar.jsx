import React, { useState } from 'react';
import '../styles/Navbar.css';

const TABS = ["HTML", "CSS", "JavaScript", "React", "Redux"];

export default function Navbar({ active = 'HTML', onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-root" aria-label="categories">
      <div className="nav-inner">
        <button
          className="nav-hamburger"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={"hamburger" + (open ? ' open' : '')} />
        </button>

        <ul className={"nav-list" + (open ? ' nav-open' : '')}>
          {TABS.map((t) => (
            <li key={t} className="nav-item">
              <button
                className={"nav-btn" + (t === active ? ' nav-active' : '')}
                onClick={() => {
                  onChange && onChange(t);
                  setOpen(false);
                }}
                aria-pressed={t === active}
              >
                {t}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
