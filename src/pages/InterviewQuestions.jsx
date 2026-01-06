import React, { useState } from "react";
import QuestionItem from "../components/QuestionItem";
import Navbar from "../components/Navbar";
import { HTMLQuestions } from "./HTMLQuestions";
import { CSSQuestions } from "./CSSQuestions";
import { JavaScriptQuestions } from "./JavaScriptQuestions";
import { ReactQuestions } from "./ReactQuestions";
import { ReduxQuestions } from "./ReduxQuestions";
import { TypeScriptQuestions } from "./TypeScriptQuestions";

import "../styles/InterviewQuestions.css";

const QUESTION_BANK = {
  HTML: [...HTMLQuestions],
  CSS: [...CSSQuestions],
  JavaScript: [...JavaScriptQuestions],
  React: [...ReactQuestions],
  Redux: [...ReduxQuestions],
  TypeScript: [...TypeScriptQuestions]
};

// QUESTION_BANK holds categorized questions; `list` is derived from it at runtime

export default function InterviewQuestions() {
  // default active tab is HTML to match Navbar default
  const [active, setActive] = useState("HTML");
  const list = QUESTION_BANK[active] || [];

  return (
    <main className="iq-root">
      <Navbar active={active} onChange={setActive} />
      <h1 className="heading">{active} Interview Questions</h1>
      <p className="iq-intro">Tap a question to reveal the answer.</p>
      <section className="iq-list">
        {list.map((t, i) => (
          <QuestionItem key={i} number={i + 1} question={t.q} answer={t.a} />
        ))}
      </section>
    </main>
  );
}
