const strictLoose = `
    console.log(5 == "5"); // true 
    console.log(5 === "5"); // false

`;

const undefinedd = `
    let a;
    console.log(a); // 👉 undefined

    function test() {}
    console.log(test()); // 👉 undefined

`;

const nulll = `
    let b = null;
    console.log(b); // 👉 null

    if (b === null) {
      console.log("Value is intentionally set to null");
    }

`;

const notDefined = `
    console.log(c); // ❌ ReferenceError: c is not defined

`;

const namedFunctions = `
    function greet() {
      console.log("Hello!");
    }

    greet(); // Output: Hello!

  Example with Parameters:

    function add(a, b) {
      return a + b;
    }

    console.log(add(5, 3)); // Output: 8

`;

const anonymousFun = `
    const greet = function() {
      console.log("Hello from anonymous function");
    };

    greet(); // Output: Hello from anonymous function

  Immediately Invoked Function Expression (IIFE):

    (function() {
      console.log("IIFE running");
    })(); // Output: IIFE running

`;

const callbackFn = `
    function greet(name, callback) {
      console.log("Hello " + name); // Hello Alice
      callback();
    }

    function sayBye() {
      console.log("Goodbye!");  // Goodbye!
    }

    greet("Alice", sayBye);  
    
`;

const cbHell = `
    console.log("Start");

    setTimeout(() => {
      console.log("1️⃣ Fetched user");

      setTimeout(() => {
        console.log("2️⃣ Fetched user's posts");

        setTimeout(() => {
          console.log("3️⃣ Fetched comments on the first post");

          // Imagine more nested calls here...
        }, 1000);

      }, 1000);

    }, 1000);

    console.log("End");

    Output:
    Start
    End
    1️⃣ Fetched user
    2️⃣ Fetched user's posts
    3️⃣ Fetched comments on the first post

`;

const currying = `
    function add(a) { 
      return function(b) { 
        if (b !== undefined) { 
          return add(a + b); 
        } else { 
          return a; 
        } 
      }; 
    } 

    console.log(add(2)(3)(4)()); // 9

`;

const hof = `
    function greet(name) {
      return \`Hello, \${name}\`; 
    }

    function processUserInput(callback) {
      const name = "Alice";
      console.log(callback(name));
    }

    processUserInput(greet); // Output: Hello, Alice

`;

const hoisting = `
  Variable Hoisting (Using var):
    console.log(a); // Output: undefined
    var a = 5;

    var a;
    console.log(a); // undefined
    a = 5;

  ❗ let and const are not hoisted the same way:

    console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
    let b = 10;

  ✅ Function Declaration is fully hoisted:
    sayHi(); // Output: Hello!

    function sayHi() {
      console.log("Hello!");
    }

  ❌ Function Expression is not hoisted:
    sayHello(); // ❌ TypeError: sayHello is not a function

    var sayHello = function() {
      console.log("Hello!");
    };

`;

const lexical = `
    let x = 10;

    function outer() {
      let x = 20;

      function inner() {
        console.log(x); // Looks for x in inner scope → outer scope → global scope
      }

      inner();
    }

    outer(); // Output: 20

`;

const closures = `
    function outer() {
      let count = 0;

      function inner() {
        count++;
        console.log(count);
      }

      return inner;
    }

    const counter = outer();
    counter(); // Output: 1
    counter(); // Output: 2
    counter(); // Output: 3

`;

const thiss = `
    // 1. Global Context (in browsers, this refers to the window object)
      console.log(this); // In browser: Window object; in Node.js: global object

      function globalFunc() {
        console.log(this); // In non-strict mode: window/global; strict mode: undefined
      }
      globalFunc();

    // 2. Object Method Context
      const obj = {
        name: "Alice",
        greet: function() {
          console.log(this.name);
        }
      };

      obj.greet(); // Output: Alice

    // 3. Arrow Function this (lexical binding)
      const arrowObj = {
        name: "Charlie",
        greet: () => {
          console.log(this.name);
        }
      };
      arrowObj.greet(); // Output: undefined (or global name), because arrow functions don’t have their own this
`;

const apb = `
    🔹 Sample Object and Function
        const person = {
          name: "Alice",
        };

        function greet(greeting, punctuation) {
          console.log(greeting + ", " + this.name + punctuation);
        }

    🔹 Using call()
        greet.call(person, "Hello", "!"); // Output: Hello, Alice!

    🔹 Using apply()
        greet.apply(person, ["Hi", "!!"]); // Output: Hi, Alice!!

    🔹 Using bind()
        const greetPerson = greet.bind(person, "Hey");
        greetPerson("?");   // Output: Hey, Alice?

`;

const iife = `
    const result = (function() {
    const name = "Alice";
      return \`Hello, \${name}!\`;
    })();

    console.log(result); // Output: Hello, Alice!

`;

const fdfe = `
  // 1. Function declaration:
      sayHello(); // Works because of hoisting

      function sayHello() {
        console.log("Hello from function declaration!");
      }

  // 2. Function Expression:
      // sayHi(); // Uncaught ReferenceError: Cannot access 'sayHi' before initialization (if using let/const)

      const sayHi = function() {
        console.log("Hello from function expression!");
      };

      sayHi(); // Works here

`;

const arr = `
    // Using array literal (most common)
      const fruits = ["apple", "banana", "cherry"];

    // Using Array constructor
      const numbers = new Array(1, 2, 3, 4);

    // Empty array with length 3
      const emptyArr = new Array(3);

`;

const obj = `
    const person = {
      name: "Alice",
      age: 30,
      isStudent: false,
      greet: function() {
        console.log("Hello, " + this.name);
      }
    };

`;

const arrBuffer = `
    const buffer = new ArrayBuffer(16); // Creates a buffer of 16 bytes
    console.log(buffer.byteLength); // Output: 16

`;

const map = `
    const numbers = [1, 2, 3]; 
    const doubled = numbers.map(num => num * 2); 
    console.log(doubled); // [2, 4, 6]

`;

const filter = `
    const numbers = [1, 2, 3, 4]; 
    const evens = numbers.filter(num => num % 2 === 0); 
    console.log(evens); // [2, 4]

`;

const find = `
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

    const user = users.find(u => u.id === 2);
    console.log(user); // Output: { id: 2, name: 'Bob' }

`;

const forEach = `
    const numbers = [1, 2, 3]; 
    numbers.forEach(num => console.log(num)); // Output: // 1

`;

const reducer = `
    // Initial state
      const initialState = { count: 0 };

    // Reducer function
      function counterReducer(state = initialState, action) {
        switch(action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          case 'DECREMENT':
            return { count: state.count - 1 };
          default:
            return state; // Return current state if no matching action
        }
      }

`;

const sliceSplice = `
    🔹 slice() Example:
        const arr = ['a', 'b', 'c', 'd', 'e'];

        const sliced = arr.slice(1, 4);
        console.log(sliced); // ['b', 'c', 'd']
        console.log(arr);    // ['a', 'b', 'c', 'd', 'e'] (unchanged)

    🔹 splice() Example:
        const arr = ['a', 'b', 'c', 'd', 'e'];

        // Remove 2 elements starting from index 1 and insert 'x' and 'y'
        const removed = arr.splice(1, 2, 'x', 'y');

        console.log(removed); // ['b', 'c'] (elements removed)
        console.log(arr);     // ['a', 'x', 'y', 'd', 'e'] (original array modified)

`;

const createObjects = `
    1. Object Literal (most common):                              5. Using ES6 class Syntax:
        const obj = {                                                 class Person {
          name: "Alice",                                                constructor(name, age) {
          age: 25                                                          this.name = name;
        };                                                                 this.age = age;
                                                                        }
    2. Using new Object() Constructor:                                }
        const obj = new Object();                                     
        obj.name = "Bob";                                             const person2 = new Person("Diana", 28);
        obj.age = 30;

    3. Using Object.create() (prototype-based creation):          6. Using Factory Functions (functions that return objects):
        const proto = {                                               function createPerson(name, age) {
          greet() {                                                     return {
            console.log("Hello!");                                        name,
          }                                                               age,
        };                                                                greet() {
                                                                              console.log(\`Hi, I am \${name}\`);
        const obj = Object.create(proto);                                 }
        obj.name = "Eve";                                               };
        obj.greet(); // Output: Hello!                                }

    4. Using a Constructor Function:                                  const person3 = createPerson("Frank", 40);
        function Person(name, age) {                                  person3.greet(); // Hi, I am Frank
          this.name = name;
          this.age = age;
        }

        const person1 = new Person("Charlie", 35);

`;

const shallowDeep = `
    1. Shallow clone:
        const original = { name: "Alice", address: { city: "NY" } };
        const shallowClone = { ...original };

        shallowClone.name = "Bob";
        shallowClone.address.city = "LA";

        console.log(original.name);         // "Alice" (not affected)
        console.log(original.address.city); // "LA" (affected — shared reference!)

    2. Deep clone:
        const original = { name: "Alice", address: { city: "NY" } };
        const deepClone = JSON.parse(JSON.stringify(original));

        deepClone.address.city = "LA";

        console.log(original.address.city); // "NY" (not affected)

`;

const eventHandling = `
    element.addEventListener(eventType, callbackFunction);

    eventType: like "click", "submit", "keydown", etc.
    callbackFunction: function to run when the event occurs.

`;

const eventDelegation = `
    <ul id="list">
      <li>Item A</li>
      <li>Item B</li>
      <li>Item C</li>
    </ul>

    <script>
      const list = document.getElementById("list");

      list.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {          // Check if a <li> was clicked
          alert("You clicked: " + event.target.textContent);
        }
      });
    </script>

`;

const eventBubbling = `
    <button id="child">Click Me</button>

    <script>
      document.getElementById("child").addEventListener("click", function () {
        console.log("Child clicked");
      });

      document.getElementById("parent").addEventListener("click", function () {
        console.log("Parent clicked");
      });

      document.body.addEventListener("click", function () {
        console.log("Body clicked");
      });
    </script>

`;

const eventCapturing = `
    div id="parent" style="padding: 30px; background: lightblue;">
      Parent
      <button id="child">Click Me</button>
    </div>

    <script>
      const parent = document.getElementById("parent");
      const child = document.getElementById("child");

      // Capturing phase
      parent.addEventListener("click", () => {
        console.log("Parent capture");
      }, true); // 👈 true enables capture phase

      // Bubbling phase
      parent.addEventListener("click", () => {
        console.log("Parent bubble");
      });

      child.addEventListener("click", () => {
        console.log("Child clicked");
      });
    </script>

`;

const errorHandling = `
    try {
      console.log("Try block");
      throw new Error("Oops!");
    } catch (e) {
      console.log("Caught:", e.message);
    } finally {
      console.log("Finally block always runs");
    }

`;

const errorTypes = `
    ✅ 1. ReferenceError
            function printName() {
              console.log(userName); // userName is not defined anywhere
            }

            printName(); // 🔴 ReferenceError: userName is not defined

    ✅ 2. TypeError
            let num = 5;
            num(); // 🔴 TypeError: num is not a function

    ✅ 3. SyntaxError
            function greet() {
              console.log("Hello"  // 🔴 SyntaxError: missing ) after argument list
            }
            
`;

const tryCatchFinally = `
    function test() {
      try {
        console.log("In try block");
        let result = riskyOperation(); // Not defined – will throw
      } catch (error) {
        console.log("Caught an error:", error.message);
      } finally {
        console.log("Finally block always runs");
      }
    }

    test();

    Output:
    In try block
    Caught an error: riskyOperation is not defined
    Finally block always runs

`;

const promise = `
    ✅ Example 1: Simple Promise:
        let promise = new Promise((resolve, reject) => {
          let success = true;
          setTimeout(() => {
            if (success) {
              resolve("Data fetched successfully");
            } else {
              reject("Failed to fetch data");
            }
          }, 1000);
        });

        promise
          .then(result => console.log("✅", result))
          .catch(error => console.error("❌", error))
          .finally(() => console.log("🔁 Operation complete"));

    ✅ Example 2: Function That Returns a Promise:
        function fetchData() {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve("Here is your data");
            }, 500);
          });
        }

        fetchData()
          .then(data => console.log("Received:", data))
          .catch(err => console.error("Error:", err));

`;

const promiseChaining = `
  ✅ Simple Example: Chaining with .then()                                               ✅ Example with Async Function in Chain
      new Promise((resolve, reject) => {                                                      function doubleAsync(n) {
        setTimeout(() => resolve(1), 1000); // Step 1: Resolve with 1 after 1s                  return new Promise(resolve => {
      })                                                                                          setTimeout(() => resolve(n * 2), 500);
        .then(result => {                                                                       });
          console.log("Step 1:", result); // 1                                                }
          return result * 2;
        })                                                                                    doubleAsync(2)
        .then(result => {                                                                       .then(result => {
          console.log("Step 2:", result); // 2                                                    console.log("First:", result); // 4
          return result * 3;                                                                      return doubleAsync(result);    // 8
        })                                                                                      })
        .then(result => {                                                                       .then(result => {
          console.log("Step 3:", result); // 6                                                    console.log("Second:", result); // 8
        });                                                                                       return doubleAsync(result);     // 16
                                                                                                })
                                                                                                .then(result => {
                                                                                                  console.log("Third:", result); // 16
                                                                                                });
`;

const asyncAwait = `
    function getData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("📦 Data received");
        }, 1000);
      });
    }

    async function fetchData() {
      console.log("🔄 Fetching...");
      const data = await getData();
      console.log("✅ Result:", data);
    }

    fetchData(); 

    Output:
    🔄 Fetching...
    ✅ Result: 📦 Data received

`;

const promiseMethods = `
    🔗 1. Promise.all([]):
          📌 Syntax:
            Promise.all([promise1, promise2, promise3])
              .then(results => console.log("All resolved:", results))
              .catch(error => console.error("One failed:", error));

          ✅ Example:
            const p1 = Promise.resolve(1);
            const p2 = Promise.resolve(2);
            const p3 = Promise.reject("❌ Error");

            Promise.all([p1, p2, p3])
              .then(res => console.log(res))
              .catch(err => console.error("Failed:", err)); // Immediately fails on p3

    🟡 2. Promise.allSettled([]):
          📌 Syntax:
            Promise.allSettled([promise1, promise2])
              .then(results => console.log(results));

          ✅ Example:
            const p1 = Promise.resolve("✅ OK");
            const p2 = Promise.reject("❌ Failed");

            Promise.allSettled([p1, p2]).then(results => {
              results.forEach((result, index) => {
                console.log(\`Promise \${index + 1}:\`, result.status, result.value || result.reason);
              });
            });

    🏁 3. Promise.race([]):
          📌 Syntax:
            Promise.race([promise1, promise2])
              .then(result => console.log("First to settle:", result))
              .catch(error => console.error("First to reject:", error));

          ✅ Example:
            const p1 = new Promise(resolve => setTimeout(() => resolve("🏁 p1"), 100));
            const p2 = new Promise(resolve => setTimeout(() => resolve("🏁 p2"), 200));

            Promise.race([p1, p2]).then(result => {
              console.log("Winner:", result); // "🏁 p1"
            });

    🟢 4. Promise.any([]) (ES2021+):
          📌 Syntax:
            Promise.any([promise1, promise2])
              .then(result => console.log("First success:", result))
              .catch(error => console.error("All failed:", error));

          ✅ Example:
            const p1 = Promise.reject("❌ p1");
            const p2 = Promise.resolve("✅ p2");
            const p3 = Promise.resolve("✅ p3");

            Promise.any([p1, p2, p3])
              .then(result => console.log("Success:", result)) // ✅ p2
              .catch(err => console.error("All failed:", err));

`;

const debouncing = `
      HTML:
        <input type="text" id="search" placeholder="Type to search..." />

      JS:
        function debounce(fn, delay) {
          let timer;
          return function (...args) {
            clearTimeout(timer); // Reset the timer
            timer = setTimeout(() => {
              fn.apply(this, args); // Call the original function
            }, delay);
          };
        }

        function handleSearch(event) {
          console.log("Searching for:", event.target.value);
        }

        const debouncedSearch = debounce(handleSearch, 500);

        document.getElementById("search").addEventListener("input", debouncedSearch);

`;

const throttling = `
      HTML:
        <button id="button">Click me!</button>

      JS:
        // Throttle function: allows execution once every 'delay' ms
        function throttle(fn, delay) {
          let lastCall = 0;
          return function (...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
              lastCall = now;
              fn.apply(this, args);
            }
          };
        }

        // The function to be throttled
        function handleClick() {
          console.log("🟢 Button clicked at", new Date().toLocaleTimeString());
        }

        // Apply throttling (1 click per 2 seconds)
        const throttledClick = throttle(handleClick, 2000);

        // Attach to button
        document.getElementById("throttleBtn").addEventListener("click", throttledClick);

`;

const destructuring = `
  ✅ Array Destructuring                            ✅ Object Destructuring
      const colors = ["red", "green", "blue"];            const user = {
                                                            name: "Alice",
      const [first, second] = colors;                       age: 25,
                                                            city: "Paris"
      console.log(first);  // "red"                       };
      console.log(second); // "green"                     
                                                          const { name, city } = user;

                                                          console.log(name); // "Alice"
                                                          console.log(city); // "Paris"
`;

const spreadOp = `
  ✅ Spread in Arrays                               ✅ Spread in Objects
      const a = [1, 2, 3];                                const obj1 = { a: 1, b: 2 };
      const b = [4, 5];                                   const obj2 = { c: 3 };

      const combined = [...a, ...b];                      const merged = { ...obj1, ...obj2 };

      console.log(combined); // [1, 2, 3, 4, 5]           console.log(merged); // { a: 1, b: 2, c: 3 }

`;

const restOp = `
  ✅ Rest in Arrays                                 ✅ Rest in Objects
      const [first, ...rest] = [10, 20, 30, 40];          const user = { name: "Tom", age: 30, city: "London" };
                                                          const { name, ...others } = user;
      console.log(first); // 10
      console.log(rest);  // [20, 30, 40]                 console.log(name);   // "Tom"
                                                          console.log(others); // { age: 30, city: "London" }

`;

const stringLiterals = `
    function welcome(user) {
      return \`Welcome, \${user.name}! You have \${user.notifications} new messages.\`;
    }

    console.log(welcome({ name: "Tom", notifications: 3 }));

`;

const firstClassFn = `
    ✅ Example 1: Assigning a Function to a Variable
        const sayHello = function () {
        console.log("Hello!");
      };

      sayHello(); // ✅ Function stored and called from a variable

    ✅ Example 2: Passing Function as an Argument
        function greet(callback) {
          callback();
        }

        greet(() => {
          console.log("👋 Hello from callback!");
        });

`;

const generators = `
    function* numberGenerator() {
      yield 10;
      yield 20;
      yield 30;
    }

    const gen = numberGenerator();

    console.log(gen.next()); // { value: 10, done: false }
    console.log(gen.next()); // { value: 20, done: false }
    console.log(gen.next()); // { value: 30, done: false }
    console.log(gen.next()); // { value: undefined, done: true }

`;

export const JavaScriptQuestions = [
  {
    q: "What is JavaScript?",
    a: (
      <p>
        JavaScript is a programming language and it is used for adding dynamic
        functionality to HTML content. Mainly used for make web page,
        applications dynamically. with only HTML, CSS we make static pages.
        JavaScript will do the dynamic functionality. <br />
        <br />
        The browser has a built-in JavaScript engine that is responsible for
        interpreting and executing JavaScript code. <br />
        <br />
        Modern web browsers using JIT (Just in Time) which compiles the
        JavaScript to executable byte code.
      </p>
    ),
  },
  {
    q: "How do browsers run code?",
    a: (
      <>
        <li>The browser first downloads the HTML and CSS files.</li>
        <li>
          The HTML document is parsed by the HTML parser into the DOM (Document
          Object Model), which is a tree structure representing the elements on
          the page.
        </li>
        <li>
          The CSS is parsed into a CSSOM (CSS Object Model), which describes the
          styles for each element.
        </li>
        <li>
          Once the HTML and CSS are parsed, the browser encounters any
          JavaScript code embedded in the HTML or loaded via external files
        </li>
      </>
    ),
  },
  {
    q: "What are the features of JavaScript?",
    a: (
      <p>
        Dynamic typing, case sensitive, client side, Async processing, Event
        Handling, platform Independent.
      </p>
    ),
  },
  {
    q: "What are advantages of JavaScript?",
    a: (
      <p>
        Easy to learn, Interpreted language, Client-side validation, Rich UI,
        Reduced server interaction, Platform Independent, Object-oriented
        programming, Popular language, Response to user activity, Updates.
      </p>
    ),
  },
  {
    q: "What are data types in JS?",
    a: (
      <p>
        In JavaScript data are divided into two types. They are primitive and
        non- primitive.
        <br />
        <b>Primitive types:</b> string, number, boolean, null, undefined,
        symbol.
        <br />
        <b>Non-primitive types:</b> object (arrays, functions, objects).
      </p>
    ),
  },
  {
    q: "What are variables in JS?",
    a: (
      <p>
        Variables are containers for storing data values. In JavaScript, we use
        the keywords <b>var, let</b> and <b>const</b> to declare variables.
      </p>
    ),
  },
  {
    q: "What are var, let and const?",
    a: (
      <p>
        <b>var:</b> function-scoped, can be re-declared and updated. <br />
        <b>let:</b> block-scoped, cannot be re-declared but can be updated.
        <br />
        <b>const:</b> block-scoped, cannot be re-declared or updated (must be
        initialized at declaration).
      </p>
    ),
  },
  {
    q: "What is strict in JavaScript?",
    a: (
      <>
        <p>
          <b>Strict mode</b> is a feature in JavaScript that enforces stricter
          parsing and error handling. When enabled with <b>"use strict"</b>, it
          helps to catch common coding mistakes, prevents unsafe actions, and
          improves performance in some cases.
        </p>
        <strong>or</strong>
        <p>
          <b>"use strict"</b> is a directive that enables strict mode in
          JavaScript. It helps catch common coding mistakes and unsafe actions,
          such as using undeclared variables. It can be applied to an entire
          script or to individual functions.
        </p>
      </>
    ),
  },
  {
    q: "What is the use of constructor function?",
    a: (
      <p>
        A constructor function is used to create and initialize objects in
        JavaScript. It is a special type of function that is called with the new
        keyword to create a new instance of an object. The constructor function
        typically defines properties and methods for the object being created.
      </p>
    ),
  },
  {
    q: "What are JavaScript engines?",
    a: (
      <p>
        A JavaScript engine is a program or interpreter that executes JavaScript
        code. It is responsible for parsing, interpreting, and executing the
        JavaScript code in a web browser or other runtime environment. Examples
        of popular JavaScript engines include V8 (used in Google Chrome and
        Node.js), SpiderMonkey (used in Mozilla Firefox), and JavaScriptCore
        (used in Safari).
      </p>
    ),
  },
  {
    q: "What is ECMAScript?",
    a: (
      <p>
        <b>ECMAScript</b> is a{" "}
        <b>standardized scripting language specification</b> that serves as the{" "}
        <b>foundation for JavaScript</b>. It defines the{" "}
        <b>syntax, types, statements, keywords,</b> and other{" "}
        <b>core features</b> of the language. The <b>latest version</b> of
        ECMAScript is <b>ECMAScript 2021 (ES12)</b>, which includes{" "}
        <b>new features</b> and <b>improvements</b> to the language.
      </p>
    ),
  },
  {
    q: "Difference between == & === ?",
    a: (
      <>
        <p>
          <b>==</b> is the <b>loose equality operator</b>. It checks if{" "}
          <b>values are equal after type coercion</b>, meaning it tries to{" "}
          <b>convert the values to the same type</b> before comparing. <br />
          <b>===</b> is the <b>strict equality operator</b>. It checks both{" "}
          <b>value and type</b>, so it avoids <b>unexpected results</b> caused
          by <b>type conversion</b>.
          <pre>
            <code>{strictLoose}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          <b>==</b> is the abstract equality operator that performs type
          coercion before comparison, while <b>===</b> is the strict equality
          operator that checks for both value and type equality without type
          coercion.
        </p>
      </>
    ),
  },
  {
    q: "Difference between Undefined, Null, and not defined?",
    a: (
      <p>
        <b>Undefined</b> means a <b>variable has been declared</b> but has{" "}
        <b>not yet been assigned a value</b>.
        <pre>
          <code>{undefinedd}</code>
        </pre>
        <b>Null</b> is an <b>assignment value</b> that represents the
        <b> intentional absence</b> of any <b>object value</b>.
        <pre>
          <code>{nulll}</code>
        </pre>
        <br /> <b>Not defined</b> means a <b>variable has not been declared</b>{" "}
        in the <b>current scope</b>.
        <pre>
          <code>{notDefined}</code>
        </pre>
      </p>
    ),
  },
  {
    q: "What are Functions?",
    a: (
      <>
        <p>
          <b>Functions</b> are <b>reusable blocks of code to perform task</b>{" "}
          and its <b>accepts input parameters</b> and <b>returns output</b>.
        </p>
        <strong>or</strong>
        <p>
          Functions are reusable blocks of code that perform a specific task.
          They can take inputs (parameters), execute a series of statements, and
          optionally return a value. Functions help organize code, improve
          readability, and promote code reuse.
        </p>
      </>
    ),
  },
  {
    q: "What are Named functions in JavaScript?",
    a: (
      <>
        <p>
          Using the function keyword followed by a name that can be used as a
          callback to that function is known as named function. Named functions
          are regular JavaScript functions having name or identifier.
          <pre>
            <code>{namedFunctions}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Named functions are functions that have a specific name assigned to
          them. They are defined using the function keyword followed by the
          function name and parentheses. Named functions can be called by their
          name and can be used as callbacks or event handlers.
        </p>
      </>
    ),
  },
  {
    q: "What is Anonymous function?",
    a: (
      <>
        <p>
          An anonymous function is a function without a name, often used as a
          quick, one-time function—for example, in callbacks or event handlers.
          <pre>
            <code>{anonymousFun}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          An anonymous function is a function that does not have a name assigned
          to it. It is often used as a callback or passed as an argument to
          other functions. Anonymous functions can be defined using function
          expressions or arrow functions.
        </p>
      </>
    ),
  },
  {
    q: "what is Callback function",
    a: (
      <>
        <p>
          A callback function in JavaScript is a function that is passed into
          another function as an argument, and it's called later — usually after
          some operation finishes.
          <pre>
            <code>{callbackFn}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A callback function is a function passed as an argument to another
          function, which is then invoked inside the outer function to complete
          some kind of routine or action.
        </p>
      </>
    ),
  },
  {
    q: "What is Callback hell",
    a: (
      <>
        <p>
          Callback hell, where multiple nested callbacks make the code difficult
          to read, understand, and maintain. Each function depends on the result
          of the previous one, creating deeply nested code that’s: Hard to read,
          Hard to debug, Hard to handle errors, Hard to scale.
          <pre>
            <code>{cbHell}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Callback hell refers to a situation in JavaScript where multiple
          nested callback functions make the code difficult to read and
          maintain. This often occurs in asynchronous programming when each
          callback depends on the result of the previous one, leading to deeply
          nested and complex code structures.
        </p>
      </>
    ),
  },
  {
    q: "What is Currying in JavaScript?",
    a: (
      <>
        <p>
          Currying is a technique in JavaScript where a function doesn't take
          all its arguments at once. Instead, it takes them one at a time,
          returning a new function at each step that takes the next argument.
          This allows us to create more reusable and flexible functions.
          <pre>
            <code>{currying}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Currying is a functional programming technique in JavaScript where a
          function with multiple arguments is transformed into a sequence of
          functions, each taking a single argument. This allows for partial
          application of functions and can enhance code reusability and
          readability.
        </p>
      </>
    ),
  },
  {
    q: "What is Higher Order Function",
    a: (
      <>
        <p>
          A Higher Order Function in JavaScript is a function that either takes
          one or more functions as arguments, or returns a function as its
          result. <br />
          They're powerful tools for functional programming and are used in many
          places, like array methods (map, filter, reduce) and utilities like
          setTimeout or custom logic handlers.
          <pre>
            <code>{hof}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A higher-order function is a function that either takes one or more
          functions as arguments or returns a function as its result. They are
          commonly used in functional programming to create more abstract and
          reusable code.
        </p>
      </>
    ),
  },
  {
    q: "What is Hoisting in JavaScript?",
    a: (
      <>
        <p>
          Hoisting in JavaScript is when variable and function declarations are
          moved to the top of their scope before code execution. Variables
          declared with var are hoisted but initialized with undefined. let and
          const are hoisted too but are not initialized, so using them before
          declaration gives a ReferenceError. Function declarations are hoisted
          completely, so you can call them before their definition in the code.
          <pre>
            <code>{hoisting}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Hoisting is a JavaScript mechanism where variable and function
          declarations are moved to the top of their containing scope during the
          compilation phase, allowing them to be used before their actual
          declaration in the code.
        </p>
      </>
    ),
  },
  {
    q: "What is Lexical scoping?",
    a: (
      <>
        <p>
          Lexical scope is the ability for a function scope to access variables
          from the parent scope. we can take the example of scope chain.
          <pre>
            <code>{lexical}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Lexical scoping is a concept in JavaScript where the scope of a
          variable is determined by its position in the source code. Inner
          functions have access to variables defined in their outer (parent)
          functions, allowing for nested scopes and closures.
        </p>
      </>
    ),
  },
  {
    q: "What are Closures in JavaScript?",
    a: (
      <>
        <p>
          Closures allow functions to access variables from their outer scope
          even after the outer function has finished executing. This is useful
          for creating private variables and functions, as well as for
          maintaining state in asynchronous code.
          <pre>
            <code>{closures}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A closure is a feature in JavaScript where an inner function has
          access to the outer (enclosing) function's variables and parameters,
          even after the outer function has returned. Closures are commonly used
          for data privacy and creating function factories.
        </p>
      </>
    ),
  },
  {
    q: "this bind",
    a: (
      <>
        <p>
          In JavaScript, this refers to the object that is calling the function.{" "}
          <br />
          In regular functions, this is dynamic — it changes depending on how
          the function is called.
          <br /> But in arrow functions, this is lexically bound — it uses this
          from the place where the function was defined, not from where it's
          called.
          <pre>
            <code>{thiss}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          In JavaScript, this refers to the context in which a function is
          called. In regular functions, this is dynamic and can change based on
          how the function is invoked. In arrow functions, this is lexically
          bound, meaning it retains the value of this from the surrounding scope
          where the arrow function was defined.
        </p>
      </>
    ),
  },
  {
    q: "How call(), apply() & bind() is used?",
    a: (
      <>
        <p>
          In JavaScript, call (), apply (), and bind () are ways to control this
          value in JavaScript. <br />
          <b>call()</b> runs the function immediately and passes arguments one
          by one. <br />
          <b>apply()</b> is the same, but takes arguments as an array.
          <br /> <b>bind()</b> doesn’t run the function right away — it returns
          a new function with this locked in.
          <pre>
            <code>{apb}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          call(), apply(), and bind() are methods in JavaScript that allow you
          to set the value of this in a function. call() and apply() invoke the
          function immediately, with call() taking arguments individually and
          apply() taking them as an array. bind() returns a new function with
          this permanently set to the specified value, without invoking it
          immediately.
        </p>
      </>
    ),
  },
  {
    q: "What is IIFE (Immediately Invoked Function Expression)?",
    a: (
      <>
        <p>
          An IIFE (Immediately Invoked Function Expression) is a JavaScript
          function that runs as soon as it is defined. It is a design pattern
          used to create a private scope and avoid polluting the global
          namespace.
          <pre>
            <code>{iife}</code>
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between function declaration and function expression?",
    a: (
      <>
        <p>
          A function declaration defines a named function and is hoisted,
          meaning it can be called before its definition in the code. A function
          expression, on the other hand, defines a function as part of a
          variable assignment and is not hoisted, so it cannot be called before
          it is defined.
          <pre>
            <code>{fdfe}</code>
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "What are Arrays?",
    a: (
      <>
        <p>
          Arrays are ordered collection of values. used for storing and
          manipulating the list of items.
          <pre>
            <code>{arr}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          An array is a special variable in JavaScript that can hold more than
          one value at a time. It is a list-like object that allows you to store
          multiple values in a single variable, and you can access each value
          using its index (position in the list).
        </p>
      </>
    ),
  },
  {
    q: "What are Objects?",
    a: (
      <>
        <p>
          Objects are collections of key-value pairs. they are used to store and
          manage complex data of structures and used for modelling real word
          problems.
          <pre>
            <code>{obj}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          An object is a complex data type in JavaScript that allows you to
          store collections of related data and functionality. Objects are made
          up of properties (key-value pairs) and methods (functions that operate
          on the object's data). They are used to represent real-world entities
          and organize code in a structured way.
        </p>
      </>
    ),
  },
  {
    q: "What is ArrayBuffer?",
    a: (
      <>
        <p>
          ArrayBuffer object is used to represent a generic, fixed length raw
          binary data buffer. let buffer = new ArrayBuffer(16)
          <pre>
            <code>{arrBuffer}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          <li>ArrayBuffer is a low-level binary data buffer.</li>
          <li>It represents a fixed-length raw binary data buffer.</li>
          <li>
            Used to handle binary data (e.g., files, network streams) in
            JavaScript.
          </li>
          <li>
            It itself doesn’t provide methods to manipulate data — instead, you
            use typed arrays or DataView to read/write data in the buffer.
          </li>
        </p>
      </>
    ),
  },
  {
    q: "Difference between map, filter, find, and forEach",
    a: (
      <>
        <p>
          <b>map() :</b>
          <br />
          - Creates a new array by applying a function to each element of the
          original array.
          <br />- The new array has the same length as the original.
          <pre>
            <code>{map}</code>
          </pre>
          <b>filter() :</b>
          <br />
          - Creates a new array with only the elements that pass a test
          (predicate function).
          <br />- The new array can be smaller or equal in size.
          <pre>
            <code>{filter}</code>
          </pre>
          <b>find() :</b> <br />
          - Returns the first element that satisfies a condition (predicate
          function).
          <br />- Returns undefined if no elements match.
          <pre>
            <code>{find}</code>
          </pre>
          <b>forEach() :</b> <br />
          - Executes a function on each element of the array.
          <br />
          - Does not return a new array — returns undefined.
          <br />- Used for side effects like logging or updating external
          variables.
          <pre>
            <code>{forEach}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          <b>map()</b> creates a new array by applying a function to each
          element of the original array, <br />
          <b>filter()</b> creates a new array with elements that pass a test,
          <br />
          <b>find()</b> returns the first element that satisfies a condition,
          and
          <br />
          <b>forEach()</b> executes a function on each element without returning
          a new array.
        </p>
      </>
    ),
  },
  {
    q: "What is reducer?",
    a: (
      <>
        <p>
          A reducer uses reduce() to accumulate values into a single result. It
          takes a callback function and an initial value, processing each array
          element to produce a final output.
          <pre>
            <code>{reducer}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A reducer is a function that takes an accumulator and the current
          value as arguments, processes them, and returns a single accumulated
          result. It is commonly used with the reduce() method to aggregate
          array elements into a single value, such as summing numbers or
          combining objects.
        </p>
      </>
    ),
  },
  {
    q: "Difference between slice & splice",
    a: (
      <>
        <p>
          <b>slice()</b> returns a shallow copy of a portion of an array into a
          new array object selected from start to end (end not included) where
          start and end represent the index of items in that array. The original
          array will not be modified. <br />
          <b>splice()</b> changes the contents of an array by removing or
          replacing existing elements and/or adding new elements in place. The
          original array will be modified.
          <pre>
            <code>{sliceSplice}</code>
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "How many ways to create an object in JavaScript?",
    a: (
      <>
        <p>
          There are several ways to create an object in JavaScript:
          <br />
          1. Object Literal: Using curly braces {} to define key-value pairs.
          <br />
          2. Constructor Function: Using a function to create and initialize an
          object with the new keyword.
          <br />
          3. Object.create(): Creating a new object with a specified prototype
          object.
          <br />
          4. Class Syntax: Using the class keyword to define a blueprint for
          creating objects.
          <br />
          5. Factory Function: A function that returns a new object.
          <pre>
            <code>{createObjects}</code>
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "Shallow clone vs Deep clone",
    a: (
      <>
        <p>
          A shallow clone copies only the top-level properties of an object. If
          there are nested objects, they are still linked to the original.
          <br /> A deep clone creates a complete copy — including all nested
          objects — so changes to the new object won’t affect the original.
          <pre>
            <code>{shallowDeep}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A shallow clone creates a new object with copies of the original's
          top-level properties, but nested objects are still references to the
          same objects in memory.
          <br /> A deep clone creates a new object and recursively copies all
          nested objects, resulting in a completely independent copy.
        </p>
      </>
    ),
  },
  {
    q: "What is Set and Map in JavaScript?",
    a: (
      <>
        <p>
          A Set is a collection of unique values, while a Map is a collection of
          key-value pairs.
        </p>
      </>
    ),
  },
  {
    q: "What is WeakMap and WeakSet?",
    a: (
      <>
        <p>
          A WeakMap is a collection of key-value pairs where the keys are
          objects and the values can be any type. The keys in a WeakMap are
          weakly referenced, meaning that if there are no other references to
          the key object, it can be garbage collected. This makes WeakMaps
          useful for storing metadata about objects without preventing their
          garbage collection.
        </p>
      </>
    ),
  },
  {
    q: "What is DOM and DOM manipulation?",
    a: (
      <>
        <p>
          Document object model is representation of an HTML document as a tree
          of nodes. A node represents an HTML element. That allows us to create,
          change, or remove elements from the document.
          <br /> Dom Manipulation allow you to dynamically modify the web page
          and structure. used in web development for creating dynamic user
          interfaces.
        </p>
        <strong>or</strong>
        <p>
          The Document Object Model (DOM) is a programming interface for web
          documents. It represents the structure of an HTML document as a tree
          of nodes, where each node corresponds to an element, attribute, or
          piece of text in the document.
          <br /> DOM manipulation refers to the process of using JavaScript to
          dynamically change the content, structure, and style of a web page by
          adding, removing, or modifying elements and attributes in the DOM
          tree.
        </p>
      </>
    ),
  },
  {
    q: "Event handling",
    a: (
      <>
        <p>
          Event handling in JavaScript means writing code that listens for
          something like a click or a keypress, and then does something in
          response. We use addEventListener() to attach an event and a handler
          function to an element. It helps make web pages interactive.
          <pre>
            <code>{eventHandling}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Event handling is the process of responding to user interactions or
          other events that occur in a web application. In JavaScript, this is
          typically done by attaching event listeners to HTML elements using
          methods like addEventListener(). When an event occurs, the associated
          event handler function is executed, allowing developers to create
          interactive and dynamic web experiences.
        </p>
      </>
    ),
  },
  {
    q: "Event delegation",
    a: (
      <>
        <p>
          Event delegation is a technique in JavaScript where we add an event
          listener to a parent element instead of adding it to each individual
          child. This works because events bubble up from the target element to
          its ancestors.
          <pre>
            <code>{eventDelegation}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Event delegation is a technique in JavaScript where a single event
          listener is added to a parent element to manage events for its child
          elements. This approach takes advantage of event bubbling, allowing
          the parent to handle events for dynamically added or removed children,
          improving performance and reducing memory usage.
        </p>
      </>
    ),
  },
  {
    q: "Event bubbling",
    a: (
      <>
        <p>
          Event bubbling in JavaScript means that when an event occurs on a
          child element, it first runs its own event handler and then bubbles up
          to its parent, and then to the next parent, and so on, up to the root
          of the DOM.
          <pre>
            <code>{eventBubbling}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Event bubbling is a mechanism in JavaScript where an event triggered
          on a child element propagates up through its parent elements in the
          DOM hierarchy. This means that when an event occurs on a child, it
          first triggers the event handler on that child, and then the event
          bubbles up to its parent elements, triggering their event handlers as
          well, until it reaches the root of the document.
        </p>
      </>
    ),
  },
  {
    q: "Event capturing",
    a: (
      <>
        <p>
          The opposite of event bubbling is called event capturing. In bubbling,
          the event starts at the target element and moves up the DOM tree. In
          capturing, the event is caught from the top (ancestor) down to the
          target before it even reaches the child element.
          <pre>
            <code>{eventCapturing}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Event capturing is a mechanism in JavaScript where an event starts at
          the root of the DOM and propagates down to the target element. During
          this phase, event handlers on parent elements can intercept the event
          before it reaches the target element. This is the opposite of event
          bubbling, where the event propagates from the target element up to the
          root.
        </p>
      </>
    ),
  },

  {
    q: "Local storage, Session storage, Cookies",
    a: (
      <>
        <p>
          <b>Local Storage, Session Storage</b>, and <b>Cookies</b> in
          JavaScript — all used to store data in the browser, but with different
          behaviour. <br />
          <b>Local Storage:</b> Stores data with no expiration. Data persists
          even after browser closed or reopened. It has 5 - 10mb capacity.
          <br />
          <b>Session Storage:</b> Stores data with expiration. Data is lost when
          browser is closed. It has upto 5mb capacity.
          <br />
          <b>Cookies:</b> Stores small amount of data, can be sent to server
          with every HTTP request. It has expiration. It has 4kb capacity.
        </p>
        <strong>or</strong>
        <p>
          <b>Local Storage, Session Storage</b>, and <b>Cookies</b> are all ways
          to store data on the client side in a web browser, but they have
          different characteristics and use cases:
          <br />
          <b>1. Local Storage:</b>
          <br />
          - Data persists even after the browser is closed and reopened.
          <br />
          - Can store larger amounts of data (typically up to 5-10 MB).
          <br />
          - Data is stored as key-value pairs and is accessible only within the
          same origin (domain).
          <br /> - Commonly used for storing user preferences, settings, and
          other non-sensitive data.
          <br />
          <b>2. Session Storage:</b>
          <br />
          - Data persists only for the duration of the page session (until the
          browser or tab is closed).
          <br />
          - Can store similar amounts of data as Local Storage (typically up to
          5-10 MB).
          <br /> - Data is also stored as key-value pairs and is accessible only
          within the same origin (domain).
          <br /> - Commonly used for storing temporary data that should not
          persist across sessions, such as form data or temporary user inputs.
          <br /> <b>3. Cookies:</b>
          <br /> - Data can have an expiration date and can persist across
          sessions if set to do so.
          <br /> - Typically used for storing small amounts of data (up to 4 KB
          per cookie).
          <br /> - Data is sent to the server with every HTTP request, making it
          suitable for session management, authentication, and tracking.
          <br /> - Cookies can be set with various attributes like Secure,
          HttpOnly, and SameSite to enhance security.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between innerText, textContent, and innerHTML?",
    a: (
      <>
        <p>
          <b>innerText:</b> Represents the visible text content of an element,
          taking into account CSS styles like display and visibility. It
          triggers a reflow to compute the visible text.
          <br /> <b>textContent:</b> Represents the text content of an element
          and its descendants, ignoring CSS styles. It does not trigger a reflow
          and is generally faster than innerText.
          <br /> <b>innerHTML:</b> Represents the HTML content of an element,
          including tags. It allows you to get or set the HTML structure inside
          an element, but can pose security risks if not handled properly (e.g.,
          XSS attacks).
        </p>
      </>
    ),
  },
  {
    q: "Error handling",
    a: (
      <>
        <p>
          Error handling in JavaScript is the process of catching and managing
          errors to prevent the application from crashing. It helps us handle
          unexpected situations gracefully.
          <pre>
            <code>{errorHandling}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Error handling in JavaScript involves using constructs like try-catch
          blocks to catch and manage runtime errors. This allows developers to
          handle exceptions gracefully, provide meaningful error messages, and
          maintain application stability.
        </p>
      </>
    ),
  },
  {
    q: "What is reference error, type error and syntax error?",
    a: (
      <>
        <p>
          <b>ReferenceError:</b> Occurs when you try to access a variable that
          does not exist or is not defined in the current scope.
          <br />
          <b>TypeError:</b> Happens when you perform an operation on a value of
          the wrong type or try to use a method/property that doesn’t exist on
          that type.
          <br />
          <b>SyntaxError:</b>
          Raised when your code breaks the JavaScript syntax rules — i.e., code
          cannot be parsed.
          <br />
          <br />
          <b>Short Interview Answer:</b>
          <br />
          <b>ReferenceError:</b> Using a variable that isn’t declared.
          <br />
          <b>TypeError:</b> Using a value in an invalid way for its type.
          <br />
          <b>SyntaxError:</b> Mistakes in code syntax that prevent parsing.
          <pre>
            <code>{errorTypes}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          <b>ReferenceError:</b> This error occurs when you try to access a
          variable that has not been declared or is out of scope.
          <br />
          <b>TypeError:</b> This error occurs when you perform an operation on a
          value of the wrong type, such as calling a method that doesn’t exist
          on that type.
          <br />
          <b>SyntaxError:</b> This error occurs when there is a mistake in the
          syntax of your code, preventing it from being parsed correctly.
        </p>
      </>
    ),
  },
  {
    q: "What is try-catch-finally in JavaScript?",
    a: (
      <>
        <p>
          The try-catch-finally construct is used for runtime error handling.
          Code inside <code>try</code> runs first; if an exception occurs, the
          <code>catch</code> block receives the error and can handle it. The
          <code>finally</code> block (optional) runs after try/catch whether an
          error occurred or not — useful for cleanup.
          <pre>
            <code>{tryCatchFinally}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          The try-catch-finally construct in JavaScript is used for error
          handling. The code inside the try block is executed first. If an error
          occurs, the catch block is executed, allowing you to handle the error.
          The finally block (optional) is executed after the try and catch
          blocks, regardless of whether an error occurred or not, and is
          typically used for cleanup tasks.
        </p>
      </>
    ),
  },
  {
    q: "What is a Promise in JavaScript?",
    a: (
      <>
        <p>
          In JavaScript, a Promise is an object that represents the eventual
          completion (or failure) of an asynchronous operation, and its
          resulting value.
          <strong>Promise States:</strong>
          <b>pending:</b> initial state, not fulfilled or rejected. <br />
          <b>fulfilled:</b> operation completed successfully.
          <br />
          <b>rejected:</b> operation failed.
          <pre>
            <code>{promise}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          A Promise is an object in JavaScript that represents the eventual
          completion (or failure) of an asynchronous operation and its resulting
          value. It allows you to handle asynchronous tasks in a more manageable
          way, avoiding deeply nested callbacks.
        </p>
      </>
    ),
  },
  {
    q: "Why use Promises?",
    a: (
      <>
        <p>
          Promises help manage asynchronous code (like HTTP requests or timers)
          in a cleaner and more manageable way, avoiding deeply nested callbacks
          (also known as "callback hell").
        </p>
        <strong>or</strong>
        <p>
          Promises are used to handle asynchronous operations in JavaScript,
          providing a cleaner and more manageable way to work with async code
          compared to traditional callbacks. They help avoid "callback hell" and
          make it easier to chain multiple async operations together.
        </p>
      </>
    ),
  },
  {
    q: "What is Promise chaining",
    a: (
      <>
        <p>
          The process of executing a sequence of asynchronous tasks one after
          another using promises is known as promise chaining. It involves
          multiple .then() methods to a promise to perform series of task in
          specific order.
          <pre>
            <code>{promiseChaining}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Promise chaining is a technique in JavaScript where multiple
          asynchronous operations are performed in sequence by chaining .then()
          methods to a promise. Each .then() returns a new promise, allowing for
          a series of operations to be executed one after the other in a
          readable manner.
        </p>
      </>
    ),
  },
  {
    q: "How async/await works internally",
    a: (
      <>
        <p>
          async/await is syntactic sugar over Promises. It makes asynchronous
          code look and behave like synchronous code using generators and the
          event loop.
          <pre>
            <code>{asyncAwait}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          async/await is built on top of Promises and uses generators and the
          event loop to handle asynchronous operations. When an async function
          is called, it returns a Promise. The await keyword pauses the
          execution of the async function until the Promise is resolved or
          rejected, allowing for a more synchronous-like flow of code.
        </p>
      </>
    ),
  },
  {
    q: "How would you handle multiple async operations and wait for all to complete?",
    a: (
      <>
        <p>
          To handle multiple asynchronous operations and wait for all to
          complete, I would use Promise.all(). It takes an array of promises and
          returns a single promise that resolves when all of them have resolved,
          or rejects if any one fails.
        </p>
        <strong>or</strong>
        <p>
          I would use Promise.all() to handle multiple asynchronous operations
          and wait for all to complete. It takes an array of promises and
          returns a single promise that resolves when all the input promises
          have resolved, or rejects if any of them reject.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any?",
    a: (
      <>
        <p>
          <b>Promise.all():</b> Waits for all promises to resolve. If any
          promise rejects, it rejects immediately with that reason.
          <br /> <b>Promise.allSettled():</b> Waits for all promises to settle
          (either resolve or reject) and returns an array of their results.
          <br /> <b>Promise.race():</b> Waits for the first promise to settle
          (resolve or reject) and returns its result.
          <br /> <b>Promise.any():</b> Waits for the first promise to resolve.
          If all promises reject, it rejects with an AggregateError.
          <pre>
            <code>{promiseMethods}</code>
          </pre>
        </p>
      </>
    ),
  },
  {
    q: "Event loop and concurrency in JavaScript?",
    a: (
      <>
        <p>
          JavaScript is single-threaded, meaning it runs one thing at a time.
          The event loop is a mechanism that helps JavaScript handle
          asynchronous tasks — like setTimeout, promises, or user events — by
          putting them in a queue and executing them when the main stack is
          clear.
          <br />
          Concurrency in JavaScript means it can handle multiple things at once
          — like starting a timeout while continuing other work — but it only
          runs one task at a time through the event loop.
        </p>
        <strong>or</strong>
        <p>
          The event loop is a core part of JavaScript's concurrency model. It
          allows JavaScript to perform non-blocking operations by offloading
          tasks to the browser or Node.js environment, and then executing them
          when the main thread is free. This enables JavaScript to handle
          multiple tasks concurrently, even though it is single-threaded.
        </p>
      </>
    ),
  },
  {
    q: "Debouncing",
    a: (
      <>
        <p>
          Debouncing ensures a function is only called after a specified delay
          has passed since the last time the event was triggered. This is useful
          for operations that should only happen after the user stops performing
          an action, such as:Auto-saving after typing stops, Submitting a search
          query after typing ends.
          <pre>
            <code>{debouncing}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Debouncing is a technique used to limit the rate at which a function
          is executed. It ensures that the function is only called after a
          specified delay has passed since the last time it was invoked. This is
          useful for optimizing performance in scenarios where a function is
          triggered frequently, such as during window resizing or input events.
        </p>
      </>
    ),
  },
  {
    q: "Throttling",
    a: (
      <>
        <p>
          Throttling ensures a function is called at most once every X
          millisecond, regardless of how many times the event fires. It's useful
          when you want to allow periodic execution during continuous events,
          such as:Updating scroll position. Animating on mouse move.
          <pre>
            <code>{throttling}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Throttling is a technique used to limit the frequency at which a
          function is executed. It ensures that the function is only called at
          most once every specified interval, regardless of how many times it is
          triggered. This is useful for optimizing performance in scenarios
          where a function is called repeatedly, such as during scrolling or
          mouse movement.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between microtask and macrotask queues?",
    a: (
      <>
        <p>
          In JavaScript, the event loop manages two types of task queues:
          microtask and macrotask. <br />
          <b>Microtasks:</b> These include promise callbacks and mutation
          observers. They have higher priority and are executed immediately
          after the current task completes, before rendering or handling other
          events.
          <br /> <b>Macrotasks:</b> These include setTimeout, setInterval, and
          I/O operations. They are executed after all microtasks have been
          processed and the rendering phase is complete.
        </p>
      </>
    ),
  },
  {
    q: "Memory leak in JavaScript?",
    a: (
      <>
        <p>
          A memory leak in JavaScript is when a program keeps using memory it no
          longer needs. Over time, this can slow down or crash the app. It
          usually happens when objects are unintentionally kept in memory, such
          as through unused references, event listeners, or global variables.
        </p>
        <strong>or</strong>
        <p>
          A memory leak in JavaScript occurs when memory that is no longer
          needed by the program is not released, leading to increased memory
          usage over time. This can happen due to unintended references to
          objects, such as through closures, event listeners, or global
          variables, preventing the garbage collector from reclaiming that
          memory.
        </p>
      </>
    ),
  },
  {
    q: "Memory management in JavaScript?",
    a: (
      <>
        <p>
          Memory management in JavaScript involves allocating, using, and
          releasing memory efficiently while the application runs. JavaScript
          uses automatic memory management through a process called garbage
          collection, so developers don't manage memory directly like in lower
          level languages (e.g., C).
        </p>
        <strong>or</strong>
        <p>
          Memory management in JavaScript is handled automatically through a
          process called garbage collection. The JavaScript engine allocates
          memory for variables and objects when they are created, and it
          automatically frees up memory that is no longer needed by the program,
          helping to prevent memory leaks and optimize performance.
        </p>
      </>
    ),
  },
  {
    q: "Garbage Collection in JavaScript",
    a: (
      <>
        <p>
          Garbage collection (GC) is the process of automatically freeing memory
          that's no longer being used by the program. In JavaScript, this is
          handled by the JavaScript engine (like V8 in Chrome/Node.js) so that
          developers don’t need to manually allocate or deallocate memory.{" "}
        </p>
        <strong>or</strong>
        <p>
          Garbage collection in JavaScript is an automatic memory management
          process that identifies and frees up memory occupied by objects that
          are no longer reachable or needed by the program. This helps prevent
          memory leaks and ensures efficient use of memory resources.
        </p>
      </>
    ),
  },
  {
    q: "Performance optimization in JavaScript?",
    a: (
      <>
        <p>
          Performance optimization in JavaScript means writing code that runs
          faster and uses resources efficiently. This includes reducing DOM
          updates, avoiding unnecessary calculations, using techniques like
          memoization, debouncing, lazy loading, and using efficient data
          structures."{" "}
        </p>
        <strong>or</strong>
        <p>
          Performance optimization in JavaScript involves techniques and best
          practices to improve the speed and efficiency of code execution. This
          can include minimizing DOM manipulations, reducing memory usage,
          optimizing algorithms, using asynchronous programming, and leveraging
          browser caching and lazy loading.
        </p>
      </>
    ),
  },
  {
    q: "What are the best practices to avoid memory leaks?",
    a: (
      <>
        <p>
          To avoid memory leaks in JavaScript, follow these best practices:
          <br />
          1. Remove event listeners when they are no longer needed.
          <br />
          2. Avoid global variables that persist longer than necessary.
          <br />
          3. Use weak references (WeakMap, WeakSet) for objects that can be
          garbage collected.
          <br />
          4. Clear intervals and timeouts when they are no longer needed.
          <br />
          5. Be cautious with closures that may hold references to outer scope
          variables.
          <br />
          6. Regularly profile and monitor memory usage during development.
          <br /> 7. Use tools like Chrome DevTools to identify and fix memory
          leaks.
        </p>
        <strong>or</strong>
        <p>
          To avoid memory leaks in JavaScript, you can follow these best
          practices: 1. Remove event listeners when they are no longer needed.
          <br />
          2. Avoid creating global variables that persist longer than necessary.
          <br />
          3. Use WeakMap or WeakSet for objects that can be garbage collected.
          <br />
          4. Clear intervals and timeouts when they are no longer needed.
          <br />
          5. Be cautious with closures that may hold references to outer scope
          variables.
          <br />
          6. Regularly profile and monitor memory usage during development.
          <br />
          7. Use tools like Chrome DevTools to identify and fix memory leaks.
        </p>
      </>
    ),
  },
  {
    q: "What is module? How to work with them?",
    a: (
      <>
        <p>
          A module in JavaScript is a reusable piece of code that’s stored in
          its own file and can export functions, variables, or classes for use
          in other files. It helps keep code organized, maintainable, and
          separated by functionality — following the principle of separation of
          concerns.
        </p>
        <strong>or</strong>
        <p>
          A module in JavaScript is a self-contained piece of code that can
          export functions, objects, or values for use in other files. Modules
          help organize code, promote reusability, and manage dependencies. You
          can work with modules using the ES6 import/export syntax or CommonJS
          require/module.exports in Node.js.
        </p>
      </>
    ),
  },
  {
    q: "What are the new features in ES6?",
    a: (
      <>
        <p>
          Let, Const, Template literals, Default parameters, Arrow functions,
          Destructuring, Spread & Rest operator, Promises. multiline strings,
          Map, Set, Filter.
        </p>
        <strong>or</strong>
        <p>
          Some of the new features introduced in ES6 (ECMAScript 2015) include:
          <br />
          1. let and const for block-scoped variables
          <br /> 2. Arrow functions for concise function syntax
          <br /> 3. Template literals for easier string interpolation
          <br /> 4. Default parameters for functions
          <br /> 5. Destructuring assignment for extracting values from arrays
          and objects
          <br /> 6. Spread and rest operators for working with arrays and
          function arguments
          <br /> 7. Promises for better handling of asynchronous operations
          <br /> 8. Classes for object-oriented programming
          <br /> 9. Modules for better code organization and reuse
          <br /> 10. Enhanced object literals for more concise object syntax
        </p>
      </>
    ),
  },
  {
    q: "What is Destructuring?",
    a: (
      <>
        <p>
          It allows unpacking values from arrays or properties from objects into
          variables.
          <pre>
            <code>{destructuring}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Destructuring is a syntax in JavaScript that allows you to unpack
          values from arrays or properties from objects into distinct variables.
        </p>
      </>
    ),
  },
  {
    q: "What is spread operator?",
    a: (
      <>
        <p>
          Spread operator is used to spread the elements of an array and object
          into individual elements. It can use for copying arrays/objects,
          Combining arrays/objects Passing elements as arguments to functions.
          <pre>
            <code>{spreadOp}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          The spread operator (...) in JavaScript allows you to expand an array
          or object into individual elements. It is commonly used for copying,
          merging, or passing elements as function arguments.
        </p>
      </>
    ),
  },
  {
    q: "What is rest operator?",
    a: (
      <>
        <p>
          Rest operator is used to collect multiple elements into single array.
          It is mainly used in function parameters and array/object
          destructuring. It can use for grouping remaining arguments, capturing
          the rest of values.
          <pre>
            <code>{restOp}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          The rest operator (...) in JavaScript allows you to collect multiple
          elements into a single array. It is commonly used in function
          parameters and destructuring assignments to capture the remaining
          values.
        </p>
      </>
    ),
  },
  {
    q: "What are string literals?",
    a: (
      <>
        <p>
          Template literals use backticks (`) to allow embedded expressions.{" "}
          <pre>
            <code>{stringLiterals}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Template literals are string literals that allow embedded expressions
          and multi-line strings using backticks (`).
        </p>
      </>
    ),
  },
  {
    q: "Pollyfills",
    a: (
      <>
        <p>
          Pollyfills are pieces of code that provide modern functionality to
          older browsers that lack native support for those features{" "}
        </p>
        <strong>or</strong>
        <p>
          Polyfills are code snippets that add support for modern JavaScript
          features in older browsers that do not natively support them.
        </p>
      </>
    ),
  },
  {
    q: "First class functions",
    a: (
      <>
        <p>
          Every function in JavaScript are called first class functions. we can
          pass functions as parameters to another functions. we can assign
          functions as variables.{" "}
          <pre>
            <code>{firstClassFn}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          In JavaScript, functions are first-class citizens, meaning they can be
          treated like any other variable. They can be assigned to variables,
          passed as arguments to other functions, and returned from functions.
        </p>
      </>
    ),
  },
  {
    q: "What is dynamic import in JavaScript?",
    a: (
      <>
        <p>
          Dynamic import allows you to load JavaScript modules on demand using
          the import() function. It returns a promise that resolves to the
          module, enabling code splitting and lazy loading.
        </p>
        <strong>or</strong>
        <p>
          Dynamic import in JavaScript is a way to load modules asynchronously
          using the import() function. This allows for code splitting and lazy
          loading of modules, improving performance by only loading code when it
          is needed.
        </p>
      </>
    ),
  },
  {
    q: "Is JavaScript faster than server-side rendering?",
    a: (
      <>
        <p>
          Yes, JavaScript is faster than server-side rendering because java
          script does not require any web servers help to computation.
        </p>
        <strong>or</strong>
        <p>
          JavaScript can be faster than server-side rendering in certain
          scenarios, especially for highly interactive applications where
          client-side rendering can reduce server load and improve
          responsiveness. However, the performance comparison depends on various
          factors such as application complexity, network latency, and user
          experience requirements.
        </p>
      </>
    ),
  },
  {
    q: "Server side rendering vs client side rendering",
    a: (
      <>
        <p>
          Server-side rendering (SSR) generates the full HTML for a page on the
          server and sends it to the client. This can improve initial load time
          and SEO since the content is available immediately. However, it can
          increase server load and may result in slower interactions after the
          initial load.
        </p>
        <p>
          Client-side rendering (CSR) generates HTML on the client using
          JavaScript. This can lead to faster interactions after the initial
          load, as only data needs to be fetched from the server. However, it
          may result in slower initial load times and can be less SEO-friendly
          since content is not immediately available.
        </p>
      </>
    ),
  },
  {
    q: "What is hydration in client-side rendering?",
    a: (
      <>
        <p>
          Hydration is the process of attaching event listeners and making a
          server-rendered HTML page interactive on the client side using
          JavaScript. It allows the client-side JavaScript to take over and
          manage the existing HTML structure, enabling dynamic behavior and
          interactivity.
        </p>
        <strong>or</strong>
        <p>
          Hydration in client-side rendering refers to the process of converting
          a server-rendered HTML page into a fully interactive web application
          by attaching event listeners and initializing JavaScript components on
          the client side.
        </p>
      </>
    ),
  },
  {
    q: "Prototypes and inheritance in JavaScript",
    a: (
      <>
        <p>
          In JavaScript, every object has a hidden internal link to another
          object called its prototype. If you try to access a property or method
          that doesn’t exist on the object itself, JavaScript will look up the
          chain to the prototype to find it — this is called prototypal
          inheritance.{" "}
        </p>
        <strong>or</strong>
        <p>
          Prototypes in JavaScript are objects that provide a mechanism for
          inheritance. Every object has a prototype, and when you try to access
          a property or method on an object, JavaScript first checks the object
          itself. If it doesn't find it there, it looks up the prototype chain
          until it finds the property/method or reaches the end of the chain.
        </p>
      </>
    ),
  },
  {
    q: "What are generator functions?",
    a: (
      <>
        <p>
          It allows you to control the execution of a function. Unlike regular
          functions, generators can be paused at any point during their
          execution and later resumed from where they left off.{" "}
          <pre>
            <code>{generators}</code>
          </pre>
        </p>
        <strong>or</strong>
        <p>
          Generator functions are special types of functions in JavaScript that
          can be paused and resumed during their execution. They use the
          function* syntax and the yield keyword to produce a sequence of values
          over time, allowing for more controlled and efficient iteration.
        </p>
      </>
    ),
  },
  {
    q: "What is memoization with example?",
    a: (
      <>
        <p>
          In JavaScript, memorization is an optimization technique used to speed
          up the function execution by catching the results of expensive
          function calls. <br />
          Some functions may be called repeatedly with same arguments.
          Memoization prevents repeated work by storing results.{" "}
        </p>
        <strong>or</strong>
        <p>
          Memoization is an optimization technique in JavaScript that involves
          caching the results of expensive function calls and returning the
          cached result when the same inputs occur again. This can significantly
          improve performance for functions that are called frequently with the
          same arguments.
        </p>
      </>
    ),
  },
  {
    q: "What is tail call optimization in JavaScript?",
    a: (
      <>
        <p>
          Tail call optimization (TCO) is a technique used by some JavaScript
          engines to improve the performance of recursive functions. When a
          function calls itself as its last action (a tail call), TCO allows the
          engine to reuse the current function's stack frame for the next call,
          preventing stack overflow and reducing memory usage.
        </p>
      </>
    ),
  },
  {
    q: "Difference between parameter and arguments",
    a: (
      <>
        <p>
          <b>Parameters</b> are variables defined in the function. Inside
          function declaration, they act as a placeholder for the values the
          function will receive when called. <br />
          <b>Arguments</b> are actual values passed to a function when it is
          called. In the function call, they supply the data that will be used
          by the function.
        </p>
        <strong>or</strong>
        <p>
          <b>Parameters</b> are the named variables defined in a function's
          declaration, acting as placeholders for the values that will be passed
          to the function. <br />
          <b>Arguments</b> are the actual values or expressions provided to a
          function when it is invoked, corresponding to the parameters defined
          in the function.
        </p>
      </>
    ),
  },
];
