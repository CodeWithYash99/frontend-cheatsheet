export const ReduxQuestions = [
  {
    q: "What is Redux? Why is it used?",
    a: (
      <>
        <p>
          Redux is a state management library used to manage global state in a
          predictable way. It keeps all shared data in one store and updates
          happen through actions and reducers. It helps avoid prop drilling,
          makes debugging easier, and is very useful in large or complex
          applications.
        </p>
        <br />
        <p>
          In short, Redux is used when an application becomes large and many
          components need to access or update the same data. It keeps the app
          more organized, maintainable, and easier to debug.
        </p>
      </>
    ),
  },
  {
    q: "What are the core principles of Redux?",
    a: (
      <>
        <p>
          Redux is built on three principles:
          <ol>
            <li>
              <b>Single source of truth</b> — all application state is stored in
              one store.
            </li>
            <li>
              <b>State is read-only</b>— the only way to change state is by
              dispatching actions.
            </li>
            <li>
              <b>Changes are made with pure functions</b> — reducers take the
              old state and action and return a new state, making updates
              predictable.
            </li>
          </ol>
        </p>
      </>
    ),
  },
  {
    q: "Explain the Redux data flow?",
    a: (
      <>
        <p>
          Redux follows a <b>unidirectional (one-way) data flow</b>, which means
          data always moves in a single direction through the application. The
          flow consists of <b>four main steps</b>:
          <ol>
            <li>UI Dispatches an Action</li>
            <li>Action Goes to the Reducer</li>
            <li>Store Updates the State</li>
            <li>UI Re-renders with Updated State</li>
          </ol>
        </p>
      </>
    ),
  },
  {
    q: "What are Actions in Redux?",
    a: (
      <>
        <p>
          In Redux, Actions are plain objects that describe what event happened
          in the app. They are the <b>only source of information</b> for the
          Redux store. Every action has a <b>type</b> field and can include
          additional data in a <b>payload</b>. Actions are dispatched to
          reducers, which use them to update the store.
        </p>
      </>
    ),
  },
  {
    q: "What is a Reducer in Redux?",
    a: (
      <>
        <p>
          A Reducer in Redux is a <b>pure function</b> that takes the{" "}
          <b>current state</b> and an <b>action</b>, and returns a{" "}
          <b>new state</b>. Reducers handle how the state changes in response to
          actions, and they must always return a new immutable state.
        </p>
      </>
    ),
  },
  {
    q: "What is the Redux store?",
    a: (
      <>
        <p>
          The Redux store is the centralized container where the entire
          application state is stored. It manages the state, allows components
          to access it, and updates state only through dispatched actions and
          reducers.
        </p>
      </>
    ),
  },
  {
    q: "Why must reducers be pure functions?",
    a: (
      <>
        <p>
          Reducers must be pure functions because Redux relies on predictable
          and consistent state updates. <br />A pure function:
          <ul>
            <li>
              <b>Returns the same output</b> for the same input
            </li>
            <li>
              <b>Does not modify the original state (no mutations)</b>
            </li>
            <li>
              <b>Has no side effects</b> (no API calls, no timers, no random
              values)
            </li>
          </ul>
          This ensures that state updates are{" "}
          <b>reliable, testable, and traceable</b>.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between Redux and React’s local state?",
    a: (
      <>
        <ul>
          <li>
            React’s local state is component-specific and used for UI-related
            data. Redux provides a global centralized store that manages shared
            state across the app.
          </li>
          <li>
            Local state is simple and isolated, while Redux is better for large
            apps where many components need to access or update the same data.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "How do you update state in Redux?",
    a: (
      <p>
        In Redux, state is updated by dispatching actions, which reducers use to
        compute and return a new immutable state. We never modify the state
        directly.
      </p>
    ),
  },
  {
    q: "What is middleware in Redux?",
    a: (
      <p>
        Middleware in Redux is a function that sits between dispatching an
        action and the moment it reaches the reducer. It allows you to run
        custom logic or side effects like API calls, logging, or async logic
        during this process.
      </p>
    ),
  },
  {
    q: "What is Redux-Thunk and How does it work?",
    a: (
      <>
        <p>
          Redux Thunk is a middleware for Redux that allows you to write
          asynchronous logic (like API calls) inside your action creators.
          Normally Redux only accepts plain objects, but with thunk you can
          return a function. That function receives <b>dispatch</b> and{" "}
          <b>getState</b> and can perform async operations like API calls, then
          dispatch normal actions based on the result.
        </p>
      </>
    ),
  },
  {
    q: "What is Redux Saga, and how is it different from Redux Thunk?",
    a: (
      <>
        <p>
          Redux Saga is a middleware used to handle complex asynchronous
          operations using generator functions. It listens to actions and runs
          sagas where you can yield effects like API calls, delays, retries, or
          cancellations.
        </p>
        <br />
        <p>
          The main difference is that{" "}
          <b>Redux Thunk lets you write async logic as functions</b>, which is
          easier for simple tasks, while{" "}
          <b>
            Redux Saga uses generator functions and is much better for complex
            async workflows
          </b>{" "}
          — like handling race conditions, sequencing, parallel API calls, or
          cancelable tasks.
        </p>
        <strong>SHORT VERSION:</strong>
        <p>
          <b>
            Thunk is simple async logic inside functions. <br />
            Saga is advanced async logic using generator functions with built-in
            control like cancel, retry, debounce, and parallel execution.
          </b>
        </p>
      </>
    ),
  },
  {
    q: "What is Redux Saga, and how is it different from Redux Thunk?",
    a: <p>Using</p>,
  },
  {
    q: "What is the purpose of the connect() function in react-redux?",
    a: <p>Using</p>,
  },
  {
    q: "What are selectors in Redux?",
    a: <p>Using</p>,
  },
  {
    q: "How do you handle asynchronous operations in Redux?",
    a: <p>Using</p>,
  },
  {
    q: "What is immutability, and why is it important in Redux?",
    a: <p>Using</p>,
  },
  {
    q: "What is the purpose of combineReducers()?",
    a: <p>Using</p>,
  },
  {
    q: "What is the difference between mapStateToProps and mapDispatchToProps?",
    a: <p>Using</p>,
  },
  {
    q: "Can you explain the concept of store enhancers?",
    a: <p>Using</p>,
  },
  {
    q: "What is the difference between controlled and uncontrolled state in Redux?",
    a: <p>Using</p>,
  },
  {
    q: "Difference between Redux and Redux Toolkit (RTK)?",
    a: (
      <>
        <strong>REDUX:</strong>
        <ul>
          <li>Requires a more boilerplate or manual setup.</li>
          <li>
            Need to write action types, action creators, switch reducers,
            immutable update logic, store configuration, etc.
          </li>
          <li>You must write immutable update logic yourself.</li>
          <li>Mistakes are easy (accidental mutation).</li>
          <li>Configure middleware, devtools, and enhancers manually.</li>
          <li>No built-in async support.</li>
          <li>Must manually use redux-thunk or redux-saga.</li>
          <li>Requires extra boilerplate for loading/error states.</li>
        </ul>

        <strong>REDUX TOOLKIT:</strong>
        <ul>
          <li>Drastically reduces boilerplate.</li>
          <li>
            Provides createSlice, configureStore, and createAsyncThunk to
            generate actions + reducers automatically.
          </li>
          <li>Uses Immer under the hood.</li>
          <li>
            You write “mutating” code, but it stays immutable automatically.
          </li>
          <li>
            configureStore includes:
            <li>Redux DevTools enabled by default</li>
            <li>Thunk middleware</li>
            <li>Better defaults for performance checks</li>
          </li>
          <li>
            Built-in createAsyncThunk
            <li>Automatically generates pending/fulfilled/rejected actions</li>
            <li>Simplifies async logic greatly</li>
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What is Redux Toolkit (RTK), and why was it introduced?",
    a: (
      <p>
        Redux Toolkit is the officially recommended way to write Redux code. It
        was introduced to reduce boilerplate, simplify immutable updates, handle
        async logic more easily, and provide a standardized, modern development
        experience compared to traditional Redux.
      </p>
    ),
  },
  {
    q: "What are slices in Redux Toolkit?",
    a: (
      <p>
        A slice in Redux Toolkit is a module that contains the state and
        reducers for a specific feature, and{" "}
        <code>
          <b>createSlice</b>
        </code>{" "}
        automatically generates the actions and action types for those reducers.
        It helps organize Redux logic cleanly and reduces a lot of boilerplate.
      </p>
    ),
  },
  {
    q: "How does RTK handle immutability internally?",
    a: (
      <p>
        RTK handles immutability using a library called <b>Immer</b>. Immer
        allows you to write <b>“mutating”</b> code inside reducers, but it
        <i> automatically produces a safe, immutable state update</i> behind the
        scenes.
      </p>
    ),
  },
  {
    q: "What is createAsyncThunk and how does it work?",
    a: (
      <p>
        <code>
          <b>createAsyncThunk</b>
        </code>{" "}
        is a helper function in Redux Tool Kit used to handle async logic like
        API calls. It automatically generates pending, fulfilled, and rejected
        actions, runs your async function, and simplifies async state handling
        in reducers.
      </p>
    ),
  },
  {
    q: "Explain RTK Query. How is it different from traditional Redux?",
    a: <p>Using</p>,
  },
  {
    q: "What are the performance optimization techniques in Redux?",
    a: <p>Using</p>,
  },
  {
    q: "How do you prevent unnecessary re-renders in components using Redux?",
    a: <p>Using</p>,
  },
  {
    q: "What is Normalization in Redux state, and why is it important?",
    a: <p>Using</p>,
  },
  {
    q: "How do you persist Redux state?",
    a: <p>Using</p>,
  },
  {
    q: "What are the downsides of Redux?",
    a: <p>Using</p>,
  },
  {
    q: "How do you handle multiple API calls and store responses in Redux?",
    a: (
      <p>
        In Redux, multiple API calls are handled using middleware like Thunk,
        Saga, or RTK. For sequential calls, I execute one API after the other
        and dispatch actions to store each response. For parallel calls, I use
        Promise.all or Saga’s all() to run multiple requests simultaneously.
        Once responses arrive, reducers update the Redux store. This keeps async
        logic outside components and ensures a predictable, centralized data
        flow.
      </p>
    ),
  },
  {
    q: "How would you design a Redux store for a large application?",
    a: (
      <p>
        In a large application, I design the Redux store using a feature-based
        architecture, split data into slices using Redux Toolkit, normalize
        state to avoid deep nesting, and separate server cache from client state
        using RTK Query. I keep UI-specific state local and use middleware like
        Thunk or Saga for async workflows. This ensures scalability,
        maintainability, and predictable data flow.
      </p>
    ),
  },
  {
    q: "If two reducers need to update based on a single action, how do you handle it?",
    a: (
      <p>
        Redux allows multiple reducers to respond to the same action. As long as
        both reducers are combined in the root reducer, they can simply handle
        the same action type in their switch cases or createSlice reducers. This
        keeps the logic independent while reacting to the same event.
      </p>
    ),
  },
  {
    q: "What would you do if your Redux store becomes too deeply nested?",
    a: (
      <p>
        To avoid deeply nested state, I normalize the structure into flat entity
        maps, use Redux Toolkit’s createEntityAdapter, split the store into
        logical slices, and keep only minimal required data. This makes updates
        easier, improves performance, and keeps reducers clean and predictable.
      </p>
    ),
  },
  {
    q: "How do you debug a Redux application?",
    a: (
      <p>
        I debug a Redux application using Redux DevTools, logging middleware,
        checking action flow, verifying reducer purity, inspecting selectors,
        and validating async flows with Thunk/Saga debugging tools.
      </p>
    ),
  },
];
