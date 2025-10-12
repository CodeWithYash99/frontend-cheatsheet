import React, { useState } from "react";
import "../styles/QuestionItem.css";

export default function QuestionItem({ question, answer, number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="qi-item">
      <button
        className="qi-question"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="qi-num" aria-hidden>{number}</span>
        <span className="qi-text">{question}</span>
        <span className="qi-toggle">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="qi-answer">{answer}</div>}
    </div>
  );
}
