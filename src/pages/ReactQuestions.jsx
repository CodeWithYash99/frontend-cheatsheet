export const ReactQuestions = [
  {
    q: "What is React JS?",
    a: (
      <p>
        React JS is a free and open-source JavaScript library to develop user
        interfaces based on components, it is particularly used for single page
        applications. It is developed and maintained by Facebook along with
        community of developers.
      </p>
    ),
  },
  {
    q: "What are the Key Features of React JS?",
    a: (
      <p>
        Components based architecture, Declaration syntax, Virtual DOM, JSX,
        Uni-directional data flow, React hooks.
      </p>
    ),
  },
  {
    q: "What is virtual DOM?",
    a: (
      <>
        <p>
          <li>
            Virtual DOM is a key concept in React JS. It is a light weight copy
            of actual DOM that React uses renders and performance optimization.
          </li>
        </p>
        <p>
          <li>
            It minimizes the number of DOM manipulations by comparing the new
            virtual DOM with previous one and applying differences.
          </li>
        </p>
      </>
    ),
  },
  {
    q: "What is Reconciliation?",
    a: (
      <>
        <p>
          Reconciliation is the process through which React updates the DOM with
          changes in the component's state or props. React uses a diffing
          algorithm to compare the new virtual DOM with the previous one and
          determines the most efficient way to update the actual DOM. This
          process helps optimize performance by minimizing direct DOM
          manipulations.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          Reconciliation is a process in React uses to update the DOM
          efficiently when your application changes state or props.  When
          component change state or props, React creates a new virtual DOM tree
          representation the updated UI.  React identifies what exactly
          changed, then updates only those changed parts in the real DOM. This
          process is called reconciliation.
        </p>
      </>
    ),
  },
  {
    q: "Difference between virtual DOM & shadow DOM?",
    a: (
      <p>
        <strong>Virtual DOM:</strong> A lightweight copy of the real DOM used by
        libraries like React to optimize UI updates. <br /> <br />
        <strong>Shallow DOM:</strong> A browser feature used to encapsulate
        styles and markup inside Web Components, preventing them from affecting
        or being affected by the rest of the page.
      </p>
    ),
  },
  {
    q: "What is JSX",
    a: (
      <p>
        JSX stands for JavaScript XML. It's a syntax extension for JavaScript
        that allows you to write HTML-like code directly inside your JavaScript
        files, particularly in React components. JSX makes it easier to
        visualize the structure of your UI and how it relates to the underlying
        logic.
      </p>
    ),
  },
  {
    q: "What is Babel?",
    a: (
      <>
        <p>
          Babel is a JavaScript compiler. It is a tool chain that is mostly used
          to convert ECMAScript 2015 code into the backwards compatible of
          JavaScript in current & older browsers.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          to use the latest JavaScript features without worrying about browser
          support.
        </p>
      </>
    ),
  },
  {
    q: "What is Webpack?",
    a: (
      <>
        <p>
          Webpack in React is JavaScript module bundler is commonly used with
          React to bundle and manage with dependencies.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          Webpack takes modules with dependencies and generates static assets
          (such as bundled JavaScript, CSS, images) that can be served to the
          browser. It analyzes your application's dependency graph and combines
          files efficiently for optimized delivery.
        </p>
      </>
    ),
  },
  {
    q: "What is React Portal?",
    a: (
      <p>
        React Portal is a feature that allows you to render a component's
        children into a DOM node that exists outside the DOM hierarchy of the
        parent component. This is useful for modals, tooltips, and other UI
        elements that need to visually break out of their parent container.
      </p>
    ),
  },
  {
    q: "Stateless and Stateful Components",
    a: (
      <p>
        Stateless components are functional components that do not manage their
        own state. They receive data via props and render UI based on that data.
        Stateful components, on the other hand, are class-based components that
        can manage their own state using the `this.state` object and can respond
        to user interactions and lifecycle events.
      </p>
    ),
  },
  {
    q: "What is Fragment in React JS?",
    a: (
      <>
        <p>
          A Fragment is a common pattern in React that allows you to group a
          list of children without adding extra nodes to the DOM. It is useful
          when you want to return multiple elements from a component without
          wrapping them in a parent element like a <code>div</code>.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          A Fragment in React lets you group multiple JSX elements to the DOM
          without adding extra nodes. It keeps the DOM clean and avoid layout or
          styling issues caused by extra nodes.
        </p>
      </>
    ),
  },
  {
    q: "What are components in React JS?",
    a: (
      <p>
        Components are the building blocks of a React application. They are
        reusable, self-contained pieces of UI that can manage their own state
        and props. Components can be functional or class-based.
      </p>
    ),
  },
  {
    q: "Difference between Functional and Class components?",
    a: (
      <p>
        Functional components are simpler and are defined as JavaScript
        functions. They can use React hooks to manage state and lifecycle
        methods. Class components are more complex, defined as ES6 classes,
      </p>
    ),
  },
  {
    q: "What is Pure component?",
    a: (
      <>
        <p>
          <li>
            A Pure Component in React is a component that implements a shallow
            comparison on props and state to decide whether it should re-render.
          </li>
          <li>
            This helps optimize performance by preventing unnecessary renders.
          </li>
        </p>
      </>
    ),
  },
  {
    q: "What are Higher Order Components?",
    a: (
      <>
        <p>
          Higher Order Components are functions in React that take a component
          and return a new component with additional props. <br />
          <br /> It’s a pattern for reusing component logic.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <br />
        <p>
          A Higher-Order Component (HOC) is a function that takes a component as
          an argument and returns a new component with enhanced functionality.
          HOCs are commonly used for code reuse, logic abstraction, and
          manipulating props. For example:
        </p>
      </>
    ),
  },
  {
    q: "What is Controlled component vs uncontrolled component in React JS",
    a: (
      <p>
        A controlled component in React is a form input element where the value
        is controlled by React’s state. This allows real-time validation,
        dynamic updates, and better control. An uncontrolled component, relies
        on the DOM to handle its state using refs. While uncontrolled components
        may require less code for simple forms, controlled components are
        preferred for complex, interactive forms because they offer better
        control and flexibility.
        <strong>or</strong>
        <li>
          A Controlled Component is a form element whose value is controlled by
          React state.
        </li>
        <li>
          An Uncontrolled Component is managed by the DOM itself, and React does
          not directly control its state.
        </li>
      </p>
    ),
  },
  {
    q: "What is prop drilling? How to overcome it?",
    a: (
      <>
        <p>
          Prop drilling in React refers to the process of passing data from a
          top-level component to deeply nested child components via props, even
          if some components in between don’t use that data. This makes the code
          harder to maintain. <br /> <br /> To overcome prop drilling, we can
          use Context API, which lets us share data globally across components,
          or use state management libraries like Redux or Zustand when the app
          grows larger.
        </p>
      </>
    ),
  },
  {
    q: "What is a Presentational vs Container Component?",
    a: (
      <>
        <p>
          <li>
            Presentational components focus on how things look. They receive
            data and callbacks exclusively via props and rarely manage their own
            state.
          </li>
          <li>
            Container components, on the other hand, handle how things work—they
            manage state, fetch data, and pass props down to presentational
            components. This separation helps keep UI logic and business logic
            organized.
          </li>
        </p>
      </>
    ),
  },
  {
    q: "What are Props & State?",
    a: (
      <>
        <p>
          In React, props and state are used to manage data in components.
          <br />
          <strong>Props:</strong>
          <li>
            Props are read-only inputs passed from a parent component to a child
            component.
          </li>
          <li>
            Props allow components to be reusable and dynamic. <br />
          </li>
          <strong>State:</strong>
          <li>
            State, is managed within the component and can be changed over time
            using “setState” in class components or “useState” in functional
            components.
          </li>
          <li>State is used for handling data that changes.</li>
        </p>
      </>
    ),
  },
  {
    q: "What is conditional rendering?",
    a: (
      <>
        <p>
          <li>
            Conditional rendering in React is the process of displaying
            different UI elements based on certain conditions.
          </li>
          <li>
            We can use standard JavaScript operators like if, ternary (?:), or
            && to render content based on state or props. This makes the UI
            dynamic and interactive.
          </li>
        </p>
      </>
    ),
  },
  {
    q: "What are Lists & Keys?",
    a: (
      <>
        <p>
          <li>
            In React, lists are used to render multiple elements by mapping over
            an array.
          </li>
          <li>
            For each item rendered, React requires a key prop, which is a unique
            identifier.
          </li>
          <li>
            Keys help React identify which items have changed, been added, or
            removed, and improve performance during re-renders.
          </li>
          <li>Using proper keys is important for efficient DOM updates.</li>
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between props and state?",
    a: (
      <>
        <p>
          <strong>Props:</strong> Props (short for properties) are read-only
          attributes passed from a parent component to a child component. They
          allow data to flow down the component tree and are immutable within
          the child component.
          <br />
          <strong>State:</strong> State is a mutable data structure that is
          managed within a component. It can be updated using the setState
          method in class components or the useState hook in functional
          components. State changes trigger re-renders of the component to
          reflect the updated data.
        </p>
      </>
    ),
  },
  {
    q: "What is life cycle methods in React JS?",
    a: (
      <p>
        Lifecycle methods in React are special methods in class components that
        run at specific points in a component’s life—from when it mounts,
        updates, to when it unmounts. These methods allow developers to run code
        at those key moments.
      </p>
    ),
  },
  {
    q: "Explain the concept of error boundaries in React?",
    a: (
      <>
        <p>
          Error boundaries are React components that catch JavaScript errors
          anywhere in their child component tree during rendering or in
          lifecycle methods. They allow you to display a fallback UI instead of
          crashing the whole app.
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          Error boundaries are special React components that catch JavaScript
          errors in their child component tree. They prevent the entire app from
          crashing by displaying a fallback UI when an error occurs. Error
          boundaries can be created by defining a class component with the
          static method getDerivedStateFromError and the lifecycle method
          componentDidCatch.
        </p>
      </>
    ),
  },
  {
    q: "What are the phases of the React lifecycle? (Mounting, Updating, Unmounting)",
    a: (
      <>
        <p>
          The React component lifecycle consists of three main phases: Mounting,
          Updating, and Unmounting.
          <li>
            <b>Mounting:</b>
          </li>
          This phase occurs when a component is being created and inserted into
          the DOM. Key lifecycle methods in this phase include: constructor,
          static getDerivedStateFromProps, render, and componentDidMount.
          <li>
            <b>Updating:</b>
          </li>
          This phase happens when a component's props or state change, leading
          to a re-render. Important lifecycle methods here are static
          getDerivedStateFromProps, shouldComponentUpdate, render,
          getSnapshotBeforeUpdate, and componentDidUpdate.
          <li>
            <b>Unmounting:</b>
          </li>
          This phase occurs when a component is being removed from the DOM. The
          primary lifecycle method in this phase is componentWillUnmount, which
          is used for cleanup tasks like invalidating timers or canceling
          network requests.
        </p>
      </>
    ),
  },
  {
    q: "What is React Router?",
    a: (
      <p>
        React Router is a standard library for routing in React. It allows you
        to define navigation between different components or pages in a
        single-page application without reloading the entire page. Using
        components like{" "}
      </p>
    ),
  },
  {
    q: "How do you handle protected routes in React Router?",
    a: (
      <>
        <p>
          Protected routes are routes that only authenticated users can access.
          In React Router, they are handled by wrapping the route in a custom
          component that checks if the user is authenticated and either renders
          the page or redirects to login.
        </p>
        <strong>or</strong>
        <p>
          Protected routes in React Router can be handled by creating a custom
          route component that checks for authentication before rendering the
          desired component. If the user is not authenticated, you can redirect
          them to a login page or show an access denied message. Here's a simple
          example:
        </p>
      </>
    ),
  },
  {
    q: "Difference between BrowserRouter and HashRouter?",
    a: (
      <>
        <p>
          BrowserRouter uses the HTML5 history API to keep your UI in sync with
          the URL, enabling clean URLs and navigation without page reloads.
          HashRouter uses the hash portion of the URL (window.location.hash) to
          simulate navigation, which is useful for static sites or environments
          where server-side routing isn’t supported. HashRouter URLs include a #
          (e.g., /#/about), while BrowserRouter URLs are clean (e.g., /about).
        </p>
        <strong>or</strong>
        <p>
          BrowserRouter uses the HTML5 history API to create clean URLs without
          a hash (#) symbol. It requires server configuration to handle
          client-side routing. HashRouter uses the URL hash to simulate
          different routes and does not require server configuration, but
          results in URLs with a # symbol.
        </p>
      </>
    ),
  },
  {
    q: "How to use useNavigate, useParams, useLocation hooks?",
    a: (
      <>
        <p>
          <li>
            <b>useNavigate:</b>
          </li>
          The useNavigate hook is used to programmatically navigate between
          routes in a React application. It returns a function that can be
          called with a path to navigate to that route. Example:
          <pre>{`const navigate = useNavigate(); navigate('/home');`}</pre>
          <li>
            <b>useParams:</b>
          </li>
          The useParams hook is used to access the parameters of the current
          route. It returns an object containing key-value pairs of the route
          parameters. Example:
          <pre>
            {`const {id} = useParams();`} `// if route is /user/:id id will hold
            the value of the parameter`
          </pre>
          <li>
            <b>useLocation:</b>
          </li>
          The useLocation hook is used to access the current location object,
          which contains information about the current URL, including pathname,
          search, and hash. Example:
          <pre>
            const location = useLocation();
            <br />
            console.log(location.pathname);
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "Explain the concept of context API in React?",
    a: (
      <p>
        The Context API is a feature in React that allows you to share data
        (like global state) across the component tree without passing props
        manually at every level. <br />
        <strong>or</strong>
        <br /> The Context API in React is used to manage global data that needs
        to be accessed by many components without passing props manually. It
        helps eliminate prop drilling. We create a context using
        React.createContext, wrap the relevant components with a Provider, and
        then access the shared data using either useContext in functional
        components or a Consumer in class components. It's useful for themes,
        user authentication, or language settings.
      </p>
    ),
  },
  {
    q: "Difference between context API & useContext?",
    a: (
      <p>
        <li>
          The Context API is React’s built-in way to share data globally across
          the component tree without passing props manually. It includes
          creating a context using React.createContext() and providing it using
          a Provider component.
        </li>
        <li>
          The useContext hook is used inside functional components to access the
          current value of that context.
        </li>
      </p>
    ),
  },
  {
    q: "When to use context over Redux or other state management libraries?",
    a: (
      <p>
        Context is suitable for simple, low-frequency updates like themes or
        user settings. For complex state management with frequent updates,
        consider Redux or similar libraries. Redux is preferred for large-scale
        applications with complex state logic, frequent updates, or when you
        need advanced features like middleware, time-travel debugging, and
        predictable state management.
      </p>
    ),
  },
  {
    q: "What is Event handling?",
    a: (
      <>
        <p>
          <li>
            Event handling in React is the process of managing user to user
            actions like clicking, typing with React components.
          </li>
          <li>
            Event names are written in camelCase, and we pass a function to
            handle the event.
          </li>
        </p>
        <br />
        <strong>or</strong>
        <br />
        <p>
          Event handling in React is similar to handling events on DOM elements.
          You attach event listeners (like onClick, onChange) directly to JSX
          elements and provide a callback function to handle the event. For
          example:
        </p>
      </>
    ),
  },
  {
    q: "How to pass parameters to event handlers?",
    a: (
      <>
        <p>
          You can pass parameters to event handlers in React by using an arrow
          function or by binding the function in the constructor (for class
          components). For example, using an arrow function:
        </p>
        <pre>
          {" "}
          {`<button onClick={() => handleClick(param)}>Click Me</button>`}
        </pre>
        <p>
          Or by binding in the constructor (for class components):
          <pre>
            {`constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this, param);
          }`}
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "Synthetic events in React JS?",
    a: (
      <>
        <p>
          Synthetic events in React are a cross-browser wrapper around the
          browser's native event system. They provide a consistent interface for
          handling events across different browsers. Synthetic events are
          pooled, meaning that the event object is reused for performance
          reasons. This means that the event properties will be nullified after
          the event handler has been called, so if you need to access the event
          properties asynchronously, you should call event.persist() to remove
          the event from the pool.
        </p>
      </>
    ),
  },
  {
    q: "What are hooks? And its rules?",
    a: (
      <p>
        Hooks are special functions that let you use React features like state
        and lifecycle methods inside functional components. They simplify
        component logic and promote code reuse. <br />
        <strong>Rules:</strong>
        <li>Hooks must be called inside React function components.</li>
        <li>
          Hooks must be called at the top level of a React function component.
        </li>
        <li>
          Hooks cannot be inside loops, conditions, or regular JavaScript
          functions.
        </li>
      </p>
    ),
  },
  {
    q: "useState hook?",
    a: (
      <p>
        The useState hook is a built-in React hook that allows you to add state
        to functional components. It returns an array with two elements: the
        current state value and a function to update that state. For example:
        <pre>
          <code>const [count, setCount] = useState(0);</code>
        </pre>
        Here, <code>count</code> is the state variable, and {""}
        <code>setCount</code> is the function to update it. You can call {""}
        <code>setCount</code> to change the value of <code>count</code>, which
        will trigger a re-render of the component.
      </p>
    ),
  },
  {
    q: "useEffect hook?",
    a: (
      <p>
        useEffect lets you perform side effects in functional components, like
        fetching data or updating the DOM. It runs after rendering and can be
        configured to run only when specific values change. For example,
        fetching user data on mount with an empty dependency array:
        <pre>{`useEffect(() => { fetchUserData(); }, []);`}</pre>
        Here, the effect runs only once when the component mounts. You can also
        return a cleanup function from useEffect to clean up resources when the
        component unmounts or before the effect runs again.
      </p>
    ),
  },
  {
    q: "useContext hook?",
    a: (
      <p>
        useContext is a hook to consume data from React’s Context API inside
        functional components. It helps avoid passing props down many levels
        (prop drilling) by providing global state like themes or authentication
        info.
        <pre>{`const value = useContext(MyContext);`}</pre>
        Here, MyContext is a context object created with React.createContext.
      </p>
    ),
  },
  {
    q: "useRef hook?",
    a: (
      <p>
        useRef returns a mutable object that persists across renders, commonly
        used to directly access DOM elements or store mutable variables that
        don’t trigger re-renders. <br /> Example: You can use it to focus an
        input element with inputRef.current.focus().
        <strong>or</strong>
        React's useRef is a hook that lets you: <br />
        1. Access and interact with DOM elements directly. <br />
        2. Store a mutable value that doesn’t cause a re-render when changed
        <pre>const myRef = useRef(initialValue);</pre>
        3. myRef.current holds the value Unlike state, updating myRef.current
        won’t cause a re-render.
      </p>
    ),
  },
  {
    q: "useReducer hook?",
    a: (
      <p>
        useReducer is a hook for managing complex state logic with a reducer
        function and dispatch actions, similar to Redux but built into React.
        It’s useful when your state depends on previous states or has multiple
        sub-values.
        <pre>
          <code>
            const [state, dispatch] = useReducer(reducer, initialState);
          </code>
        </pre>
        <li>
          <b>reducer:</b> A function that decides how to update the state.
        </li>
        <li>
          <b>initialState:</b> The starting value for your state.
        </li>
        <li>
          <b>dispatch:</b> A function to send actions (instructions to update
          state)
        </li>
      </p>
    ),
  },
  {
    q: "useCallback hook?",
    a: (
      <p>
        The useCallback hook in React is used to memoize functions, preventing
        them from being recreated on every render. This is particularly useful
        when passing functions as props to child components, as it helps avoid
        unnecessary re-renders and improves performance. You can use useCallback
        by wrapping your function definition with it and specifying dependencies
        that, when changed, will cause the function to be recreated. For
        example:
        <pre>
          {`const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);`}
        </pre>
      </p>
    ),
  },
  {
    q: "useMemo hook?",
    a: (
      <p>
        useMemo memoizes the result of an expensive computation and recalculates
        it only when its dependencies change, helping avoid unnecessary
        recalculations on every render.
        <pre>
          {`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
        </pre>
      </p>
    ),
  },
  {
    q: "custom hooks?",
    a: (
      <p>
        A custom hook is a reusable function that starts with use and can call
        other hooks. It helps encapsulate and share logic like fetching data or
        form handling across components, improving code reusability and
        cleanliness.
      </p>
    ),
  },
  {
    q: "What is useLayoutEffect in React and how different from useEffect?",
    a: (
      <>
        <p>
          The useLayoutEffect hook in React is similar to useEffect, but it
          fires synchronously after all DOM mutations. This means that it blocks
          the browser from painting until the effect has run, making it useful
          for reading layout from the DOM and synchronously re-rendering. In
          contrast, useEffect is asynchronous and does not block the browser
          from painting, making it suitable for operations that do not require
        </p>
      </>
    ),
  },
  {
    q: "Why were custom hooks introduced in React, even though we already have built-in hooks like useState, useEffect, etc.?",
    a: (
      <p>
        Custom hooks were introduced to enable you to reuse logic built with
        existing hooks. While useState, useEffect, and others give you low-level
        capabilities, custom hooks let you organize and reuse those capabilities
        across multiple components. This promotes cleaner code, better
        separation of concerns, and easier maintenance.
      </p>
    ),
  },
  {
    q: "useTransistion hook?",
    a: (
      <p>
        The useTransition hook in React is used to manage state updates that can
        be deferred, allowing for smoother user experiences during transitions.
        It helps prioritize urgent updates (like typing) over non-urgent ones
        (like rendering a list), preventing UI jank. You can use useTransition
        by calling it to get a startTransition function and an isPending boolean
        that indicates if a transition is ongoing. For example:
        <pre>{`const [isPending, startTransition] = useTransition();`}</pre>
        You can then wrap non-urgent state updates inside startTransition to
        defer them.
      </p>
    ),
  },
  {
    q: "What is useImperativeHandle and when to use it?",
    a: (
      <p>
        The useImperativeHandle hook in React is used to customize the instance
        value that is exposed to parent components when using refs. It allows
        you to control what methods and properties are accessible on a child
        component when a parent component uses a ref to interact with it. This
        is particularly useful when you want to expose specific functionality
        from a child component while keeping its internal implementation
        private. You typically use useImperativeHandle in conjunction with
        forwardRef to create a component that can be referenced by its parent.
      </p>
    ),
  },
  {
    q: "Difference between useEffect and useLayoutEffect? (already partially covered)",
    a: (
      <p>
        The main difference between useEffect and useLayoutEffect is the timing
        of their execution. useEffect runs asynchronously after the browser has
        painted, making it suitable for operations that do not require immediate
        DOM updates, such as data fetching or subscriptions. In contrast,
        useLayoutEffect runs synchronously after all DOM mutations but before
        the browser has painted. This makes useLayoutEffect ideal for operations
        that need to read layout from the DOM and make synchronous updates, such
        as measuring the size of an element or applying styles that depend on
        the layout.
      </p>
    ),
  },
  {
    q: "useForm in React?",
    a: (
      <p>
        useForm is a custom React hook provided by the library React Hook Form
        (react-hook-form). It simplifies form state management, validation, and
        submission handling in React applications. It provides an easy way to
        manage form inputs, track their values, and handle validation rules with
        minimal boilerplate code.
      </p>
    ),
  },
  {
    q: "How to handle controlled vs uncontrolled inputs in forms?",
    a: (
      <p>
        Controlled inputs are form elements where the value is managed by React
        state. You set the value prop to a state variable and update it with an
        onChange handler. This allows for real-time validation and dynamic UI
        updates. Uncontrolled inputs, on the other hand, rely on the DOM to
        manage their state. You use a ref to access the input's value when
        needed, typically on form submission. Controlled inputs provide more
        control and are preferred for complex forms, while uncontrolled inputs
        are simpler for basic use cases.
      </p>
    ),
  },
  {
    q: "How to validate forms in React (with or without libraries like Formik or Yup)?",
    a: (
      <p>
        Form validation in React can be done using controlled components by
        managing input values in state and validating them on change or submit.
        You can implement custom validation logic or use libraries like Formik
        or Yup for more complex scenarios. Formik simplifies form state
        management and validation, while Yup provides a schema-based approach to
        define validation rules. Both libraries help reduce boilerplate code and
        improve form handling in React applications. These libraries provide
        built-in support for validation, error messages, and form submission,
        making it easier to build robust forms with less manual code. You can
        also combine custom validation logic with these libraries for advanced
        use cases.
      </p>
    ),
  },
  {
    q: "What is Lazy loading in React?",
    a: (
      <p>
        Lazy loading in React is a technique that allows you to load components
        or resources only when they are needed, rather than loading everything
        upfront. This helps improve the initial load time of your application by
        reducing the amount of code that needs to be downloaded and parsed at
        startup. In React, you can implement lazy loading using the React.lazy
        function and the Suspense component. React.lazy allows you to define a
        component that is loaded dynamically, while Suspense provides a way to
        show a fallback UI (like a loading spinner) while the lazy-loaded
        component is being fetched. This approach is particularly useful for
        large applications with many routes or components that are not always
        needed, as it helps optimize performance and resource usage.
      </p>
    ),
  },
  {
    q: "What is Code Splitting in React?",
    a: (
      <p>
        Code splitting in React is a technique that allows you to split your
        application into smaller chunks or bundles, which can be loaded on
        demand. This helps improve the performance of your application by
        reducing the initial load time and allowing users to download only the
        code they need for the current view. In React, code splitting can be
        achieved using dynamic imports and the React.lazy function, along with
        the Suspense component to handle loading states. By splitting your code,
        you can optimize resource usage and enhance the user experience,
        especially in large applications with many routes or components.
      </p>
    ),
  },
  {
    q: "React Suspense and how it works?",
    a: (
      <p>
        React Suspense is a feature that allows you to handle loading states for
        components that are being loaded asynchronously. It works by wrapping
        components that may take time to load (like those using React.lazy for
        code splitting) in a <code>&lt;Suspense&gt;</code> component. You
        provide a fallback UI (like a loading spinner) that will be displayed
        while the component is being fetched. Once the component is loaded,
        React will replace the fallback with the actual component. This helps
        improve the user experience by providing visual feedback during loading
        times and allows for smoother transitions between different parts of
        your application.
      </p>
    ),
  },
  {
    q: "What is JWT token?",
    a: (
      <>
        <p>
          JWT stands for JSON Web Token. It is a compact, secure way to transmit
          information between parties as a JSON object. It is often used for
          authentication and authorization.
        </p>
        <strong>or</strong>
        <p>
          A JWT token consists of three parts: a header, a payload, and a
          signature. The header contains metadata about the token, the payload
          contains the claims (user data), and the signature is used to verify
          the token's integrity.
        </p>
      </>
    ),
  },
  {
    q: "Where to store JWT tokens in React (localStorage vs cookies)?",
    a: (
      <>
        <p>
          Storing JWT tokens in localStorage is simple and allows easy access
          from JavaScript, but it is vulnerable to XSS attacks. Storing tokens
          in cookies can be more secure, especially with HttpOnly and Secure
          flags, but requires careful handling to prevent CSRF attacks. The
          choice depends on your application's security needs and architecture.
        </p>
      </>
    ),
  },
  {
    q: "Difference between default export & named export?",
    a: (
      <p>
        <li>
          A default export allows you to export a single value from a module.
        </li>
        <li>
          A named export allows you to export multiple values with specific
          names from the same module.
        </li>
        <br />A default export is used to export a single value or component
        from a file, and it can be imported without curly braces and can be
        renamed freely. A named export allows you to export multiple values by
        name, and when importing, you must use the exact name inside curly
        braces. Named exports are helpful when you want to export several
        functions, constants, or components from one file.
      </p>
    ),
  },

  {
    q: "Can we have multiple default exports in a file?",
    a: (
      <p>
        No, a file can only have one default export. However, you can have
        multiple named exports in the same file. Named exports let you export
        several values from a file, each with its own name, and import them
        individually using curly braces.
      </p>
    ),
  },
  {
    q: "What is React StrictMode and why use it?",
    a: (
      <p>
        React StrictMode is a tool for highlighting potential problems in an
        application. It activates additional checks and warnings for its
        descendants, helping developers identify unsafe lifecycle methods,
        deprecated APIs, and other issues. It does not render any visible UI and
        is only active in development mode. Using StrictMode can help improve
        code quality and ensure that your application adheres to best practices.
      </p>
    ),
  },
  {
    q: "What is hydration in React (esp. with SSR)",
    a: (
      <p>
        Hydration in React refers to the process of attaching event listeners
        and making a server-rendered HTML page interactive on the client side.
        When using Server-Side Rendering (SSR), the initial HTML is generated on
        the server and sent to the client. React then "hydrates" this HTML by
        attaching the necessary event handlers and making the components
        functional. This allows for a faster initial load time and improved SEO,
        as the content is already rendered when it reaches the browser.
      </p>
    ),
  },
  {
    q: "What is Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)",
    a: (
      <p>
        Server-Side Rendering (SSR) is a technique where the server generates
        the full HTML for a page and sends it to the client, allowing for faster
        initial load times and better SEO. Client-Side Rendering (CSR), on the
        other hand, involves rendering the HTML in the browser using JavaScript,
        which can lead to slower initial loads but allows for more dynamic and
        interactive user experiences. SSR is often used for content-heavy sites,
        while CSR is common in single-page applications.
      </p>
    ),
  },
  {
    q: "What is Concurrent Mode in React?",
    a: (
      <p>
        Concurrent Mode is an experimental feature in React that allows for more
        responsive user interfaces by enabling React to interrupt and prioritize
        rendering tasks. It helps improve the performance of applications by
        allowing React to work on multiple tasks simultaneously, such as
        rendering updates, fetching data, and handling user input. This results
        in smoother transitions and a better overall user experience, especially
        in complex applications with heavy rendering workloads.
      </p>
    ),
  },
];
