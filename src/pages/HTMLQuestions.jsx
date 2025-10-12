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
    q: "What is HTML and why is it used?",
    a: (
      <>
        <p>
          HTML (HyperText Markup Language) is the standard language used to
          create and structure content on the web. It provides the basic
          building blocks for web pages by defining elements such as headings,
          paragraphs, links, images, and more. HTML is used because it allows
          browsers to interpret and display content in a structured and
          accessible way, making it possible for users to view and interact with
          websites.
        </p>
      </>
    ),
  },
  {
    q: "What are tags in HTML? Name some commonly used tags.",
    a: (
      <>
        <p>
          Tags in HTML are special keywords enclosed in angle brackets (e.g.,
          &lt;tag&gt;) that define the structure and content of a web page. Each
          tag represents an element, such as a heading, paragraph, image, or
          link. Commonly used tags include &lt;html&gt;, &lt;head&gt;,
          &lt;title&gt;, &lt;body&gt;, &lt;body&gt;, &lt;h1&gt;–&lt;h6&gt;
          (headings), &lt;p&gt; (paragraph), &lt;a&gt; (anchor/link),
          &lt;img&gt; (image), &lt;ul&gt; (unordered list), &lt;ol&gt; (ordered
          list), &lt;li&gt; (list item), &lt;div&gt; and &lt;span&gt;.
        </p>
      </>
    ),
  },
  {
    q: "What is the structure of a basic HTML document?",
    a: (
      <>
        <p>
          A basic HTML document has the following structure:
          <pre>
            <code>{structure}</code>
          </pre>
          This includes the doctype declaration, the root{" "}
          <code>&lt;html&gt;</code> element, a <code>&lt;head&gt;</code> section
          for metadata and title, and a <code>&lt;body&gt;</code> section for
          visible content.
        </p>
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
