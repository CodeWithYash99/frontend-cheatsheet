const structure = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Page Title</title>;
      </head>
      <body>
        <h1>Main Heading</h1>;
        <p>Page content goes here.</p>;
      </body>
    </html>

`;

const comment = `
    <!-- This is a comment -->

`;

export const HTMLQuestions = [
  {
    q: "What is HTML?",
    a: (
      <>
        <p>
          - <b>HTML</b> stands for <b>HyperText Markup Language</b>.
        </p>
        <p>
          - In simple terms,
          <b>HTML is the basic structure or skeleton of a web page</b>.
        </p>
        <p>
          - It tells the browser what each piece of content is — like this is a
          heading, this is a button, this is a form, this is an image — but not
          how it should look. Styling comes from CSS, and behavior comes from
          JavaScript.
        </p>
        <p>
          - Without HTML, there would be no structured content on the web—it’s
          the backbone of every website.
        </p>
      </>
    ),
  },
  {
    q: "What are semantic HTML elements?",
    a: (
      <>
        <p>
          - Semantic HTML elements are{" "}
          <b>HTML tags that clearly describe their meaning and purpose</b>, both
          to the browser and to developers.
        </p>
        <p>
          - Instead of using generic tags like{" "}
          <code>
            <b>{"<div>"}</b>
          </code>{" "}
          or{" "}
          <code>
            <b>{"<span>"}</b>
          </code>
          everywhere, semantic elements tell what the content actually is.
        </p>
        <p>
          - For example:
          <ul>
            <li>
              <code>
                <b>{"<header>"}</b>
              </code>{" "}
              for page or section headers
            </li>
            <li>
              <code>
                <b>{"<nav>"}</b>
              </code>{" "}
              for navigation menus
            </li>
            <li>
              <code>
                <b>{"<main>"}</b>
              </code>{" "}
              for the main content
            </li>
            <li>
              <code>
                <b>{"<section>"}</b>
              </code>{" "}
              and{" "}
              <code>
                <b>{"<article>"}</b>
              </code>{" "}
              for content grouping
            </li>
            <li>
              <code>
                <b>{"<footer>"}</b>
              </code>{" "}
              for footer information
            </li>
          </ul>
        </p>
        <p>
          - In real projects, I use semantic HTML because it improves
          accessibility — screen readers can understand the page structure
          better. It also helps with SEO, since search engines can identify
          important content more easily.
        </p>
        <p>
          - Another benefit is code readability and maintenance. When someone
          else reads the code, it’s much easier to understand the layout without
          digging through multiple {"<div>"}s.
        </p>
      </>
    ),
  },
  {},
  {
    q: "HTML4 vs HTML5",
    a: (
      <>
        <p>
          - HTML5 is the modern version of HTML4. - While HTML4 focused mostly
          on structure and presentation with limited support for multimedia,
          HTML5 introduced new semantic elements like{" "}
          <code>
            <b>{"<header>, <footer>, <article>, <section>"}</b>
          </code>{" "}
          for better content structure.
        </p>
        <p>
          - It also added native support for audio, video, canvas, and offline
          storage without relying on plugins.
        </p>
        <p>
          - HTML5 improves web applications’ interactivity and
          mobile-friendliness, whereas HTML4 is mostly outdated and less
          flexible for modern web needs.
        </p>
      </>
    ),
  },
  {
    q: "What are tags in HTML? Name some commonly used tags.",
    a: (
      <>
        <p>- In HTML, tags are the building blocks of a web page.</p>
        <p>
          - They define the structure and content by marking up elements such as
          headings, paragraphs, links, images, and lists.
        </p>
        <p>
          - Tags usually come in pairs — an opening tag and a closing tag —
          though some are self-closing.
        </p>
        <p>
          <b>Commonly used HTML tags:</b>
          <li>
            <b>Structure:</b>{" "}
            <code>
              <b>{"<html>, <head>, <body>"}</b>
            </code>
          </li>
          <li>
            <b>Text formatting:</b>{" "}
            <code>
              <b>{"<h1>–<h6>, <p>, <b>, <i>, <strong>"}</b>
            </code>
          </li>
          <li>
            <b>Links and media:</b>
            <code>
              <b>{"<a>, <img>, <video>, <audio>"}</b>
            </code>
          </li>
          <li>
            <b>Lists:</b>{" "}
            <code>
              <b>{"<ul>, <ol>, <li>"}</b>
            </code>
          </li>
          <li>
            <b>Tables:</b>{" "}
            <code>
              <b>{"<form>, <input>, <button>"}</b>
            </code>
          </li>
          <li>
            <b>Forms:</b>{" "}
            <code>
              <b>{"<table>, <tr>, <td>, <th>"}</b>
            </code>
          </li>
          <li>
            <b>Semantic elements (HTML5):</b>{" "}
            <code>
              <b>{"<header>, <footer>, <article>, <section></section>"}</b>
            </code>
          </li>
        </p>
      </>
    ),
  },
  {
    q: "What is the structure of a basic HTML document?",
    a: (
      <>
        <p>
          - A basic HTML document starts with the{" "}
          <code>
            <b>{"<!DOCTYPE html>"}</b>
          </code>{" "}
          declaration, which tells the browser that this is an HTML5 page.
        </p>
        <p>
          - Then we have the{" "}
          <code>
            <b>{"<html>"}</b>
          </code>{" "}
          tag that wraps all content. Inside{" "}
          <code>
            <b>{"<html>"}</b>
          </code>
          , there’s the{" "}
          <code>
            <b>{"<head>"}</b>
          </code>{" "}
          section, which contains metadata, the page title, and links to styles
          or scripts.
        </p>
        <p>
          - The{" "}
          <code>
            <b>{"<body>"}</b>
          </code>{" "}
          section contains all the visible content of the page like text,
          images, links, and other elements.
        </p>
        <p>
          -This structure provides a clean, standard framework for any web page.
        </p>
        <pre>
          <code>{structure}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What’s the difference between <html>, <head>, and <body>?",
    a: (
      <>
        <p>
          The &lt;html&gt; element is the root of an HTML document and wraps all
          other elements. The &lt;head&gt; section contains metadata about the
          document, such as the title, character encoding, styles, and
          scripts—these are not displayed directly on the page. The &lt;body&gt;
          section holds all the visible content, like headings, paragraphs,
          images, and links, which are rendered in the browser for users to see.
        </p>
      </>
    ),
  },
  {
    q: "What are void (self-closing) elements in HTML? Give examples.",
    a: (
      <>
        <p>
          Void (self-closing) elements in HTML are elements that do not have any
          content or closing tag. They are used to insert standalone items like
          line breaks, images, or horizontal rules. Examples include &lt;br&gt;
          (line break), &lt;img&gt; (image), &lt;hr&gt; (horizontal rule),
          &lt;input&gt; (form input), &lt;meta&gt; (metadata), &lt;link&gt;
          (external resource), &lt;source&gt;, &lt;area&gt;, &lt;col&gt;,
          &lt;embed&gt;, and &lt;base&gt;. These elements are written as a
          single tag, for example: &lt;br&gt;, &lt;img src="..." alt="..."&gt;,
          &lt;hr&gt;.
        </p>
      </>
    ),
  },
  {
    q: "How do you write comments in HTML?",
    a: (
      <>
        <p>
          Comments in HTML are written by enclosing the text between{" "}
          <code>&lt;!--</code> and <code>--&gt;</code>. Anything inside these
          markers will not be displayed on the web page. For example:
          <pre>
            <code>{comment}</code>
          </pre>
          Comments are useful for adding notes or explanations to your HTML code
          for yourself or other developers.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between <div> and <span>?",
    a: (
      <>
        <li>
          The <b>&lt;div&gt;</b> element is a block-level container used to
          group larger sections of content or layout elements. It starts on a
          new line and stretches to fill the available width.
        </li>
        <li>
          The <b>&lt;span&gt;</b> element is an inline container used to group
          small pieces of text or elements within a line, without breaking the
          flow of content.
        </li>
        <li>
          Use <b>&lt;div&gt;</b> for structural grouping and layout, and
          <b>&lt;span&gt;</b> for styling or marking up inline text.
        </li>
      </>
    ),
  },
  {
    q: "What are block-level and inline elements?",
    a: (
      <>
        <p>
          <b>Block-level</b> elements are HTML elements that start on a new line
          and take up the full width available, stretching out as far as they
          can horizontally. Examples include{" "}
          <b>
            &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;–&lt;h6&gt;, &lt;ul&gt;,
            &lt;ol&gt;, &lt;li&gt;, &lt;table&gt;, &lt;form&gt;
          </b>
          . These elements are typically used for structuring the main layout
          and sections of a page.
          <br />
          <b>Inline elements</b>, on the other hand, do not start on a new line
          and only take up as much width as necessary. They flow within the
          content and do not break the layout. Examples include{" "}
          <b>
            &lt;span&gt;, &lt;a&gt;, &lt;img&gt;, &lt;strong&gt;, &lt;em&gt;,
            &lt;input&gt;
          </b>
          . Inline elements are used for formatting or marking up small portions
          of text or content within block-level elements.
        </p>
      </>
    ),
  },
  {
    q: "What is the purpose of the <title> tag?",
    a: (
      <>
        <p>
          The <b>&lt;title&gt;</b> tag defines the title of the HTML document,
          which appears in the browser tab, window title, and is used by search
          engines as the page title in search results. It helps users identify
          and switch between open pages and is important for SEO and
          accessibility.
        </p>
      </>
    ),
  },
  {
    q: "Explain the use of the <br> and <hr> tags.",
    a: (
      <>
        <li>
          The <b>&lt;br&gt;</b> tag is used to insert a line break in text,
          forcing the content that follows to start on a new line. It is
          commonly used within paragraphs or other text elements when you want
          to break lines without starting a new block.
        </li>
        <li>
          The <b>&lt;hr&gt;</b> tag creates a horizontal rule—a thematic break
          or divider—across the page. It is often used to visually separate
          sections of content.
        </li>
        <li>
          Both <b>&lt;br&gt;</b> and <b>&lt;hr&gt;</b> are void (self-closing)
          elements, meaning they do not have closing tags or contain any
          content.
        </li>
      </>
    ),
  },
  {
    q: "What are semantic HTML tags for text formatting?",
    a: <p>Using</p>,
  },
  {
    q: "Difference between <b> vs <strong>, <i> vs <em>?",
    a: <p>Using</p>,
  },
  {
    q: "How do you create hyperlinks in HTML? ",
    a: <p>Using</p>,
  },
  {
    q: "What is the target=`_blank` attribute used for in anchor tags?",
    a: <p>Using</p>,
  },
  {
    q: "How do you link to different sections within the same page?",
    a: <p>Using</p>,
  },
  {
    q: "What are the types of lists in HTML?",
    a: <p>Using</p>,
  },
  {
    q: "How do you insert an image in HTML? What are required attributes?",
    a: <p>Using</p>,
  },
  {
    q: "What is the difference between relative and absolute URLs?",
    a: <p>Using</p>,
  },
  {
    q: "How do you create a table in HTML?",
    a: <p>Using</p>,
  },
  {
    q: "What are the roles of <thead>, <tbody>, and <tfoot> in a table?",
    a: <p>Using</p>,
  },
  {
    q: "What is the purpose of the colspan and rowspan attributes?",
    a: <p>Using</p>,
  },
  {
    q: "How do you create a form in HTML?",
    a: <p>Using</p>,
  },
  {
    q: "What are common form input types?",
    a: <p>Using</p>,
  },
  {
    q: "Difference between <input type=`text`> and <textarea>?",
    a: <p>Using</p>,
  },
  {
    q: "What is the use of the action and method attributes in <form>?",
    a: <p>Using</p>,
  },
  {
    q: "How do radio buttons differ from checkboxes?",
    a: <p>Using</p>,
  },
  {
    q: "What is the required attribute used for in forms?",
    a: <p>Using</p>,
  },
  {
    q: "How can you create a drop-down menu using <select>?",
    a: <p>Using</p>,
  },
  {
    q: "What is semantic HTML and why is it important?",
    a: <p>Using</p>,
  },
  {
    q: "Explain the use of <header>, <footer>, <article>, and <section>.",
    a: <p>Using</p>,
  },
  {
    q: "What is the difference between <section> and <div>?",
    a: <p>Using</p>,
  },
  {
    q: "What is the <nav> tag used for?",
    a: <p>Using</p>,
  },
  {
    q: "When would you use <aside>?",
    a: <p>Using</p>,
  },
  {
    q: "How do you embed audio and video in HTML5?",
    a: <p>Using</p>,
  },
  {
    q: "What are the attributes of the <video> and <audio> tags?",
    a: <p>Using</p>,
  },
  {
    q: "What is the <source> tag used for?",
    a: <p>Using</p>,
  },
  {
    q: "What happens if a browser doesn’t support HTML5 media tags?",
    a: <p>Using</p>,
  },
  {
    q: "What is the purpose of the canvas element in HTML5?",
    a: <p>Using</p>,
  },
  {
    q: "Explain the use of localStorage and sessionStorage.",
    a: <p>Using</p>,
  },
  {
    q: "What is the <template> tag and how is it used?",
    a: <p>Using</p>,
  },
  {
    q: "What is the purpose of the <iframe> element?",
    a: <p>Using</p>,
  },
  {
    q: "Explain how drag-and-drop works in HTML5.",
    a: <p>Using</p>,
  },
  {
    q: "What is ARIA in HTML?",
    a: <p>Using</p>,
  },
  {
    q: "How do you make an HTML page accessible to screen readers?",
    a: <p>Using</p>,
  },
  {
    q: "Why should you use semantic tags for better accessibility?",
    a: <p>Using</p>,
  },
  {
    q: "What are alt attributes in images and why are they important?",
    a: <p>Using</p>,
  },
  {
    q: "How can you optimize HTML for SEO and performance?",
    a: <p>Using</p>,
  },
  {
    q: "What is the <meta viewport> tag and why is it important?",
    a: <p>Using</p>,
  },
  {
    q: "How can HTML be used in responsive design?",
    a: <p>Using</p>,
  },
  {
    q: "What is mobile-first design?",
    a: <p>Using</p>,
  },
  {
    q: "How do you use media queries with HTML/CSS?",
    a: <p>Using</p>,
  },
  {
    q: "What are custom data attributes in HTML5 (data-*)?",
    a: <p>Using</p>,
  },
];
