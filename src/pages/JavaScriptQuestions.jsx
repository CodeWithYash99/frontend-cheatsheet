const strictLoose = `
  console.log(5 == "5"); // true 
  console.log(5 === "5"); // false

`;

const undefinedNullNotDefined = `
  let a;
  console.log(a); // 👉 undefined

  function test() {}
  console.log(test()); // 👉 undefined

  let b = null;
  console.log(b); // 👉 null

  if (b === null) {
    console.log("Value is intentionally set to null");
  }
    
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
  1. Function declaration:
    sayHello(); // Works because of hoisting

    function sayHello() {
      console.log("Hello from function declaration!");
    }

  2. Function Expression:
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

const destructuringArr = `
  const colors = ["red", "green", "blue"];            
                                                        
  const [first, second] = colors;                       
                                                        
  console.log(first);  // "red"                       
  console.log(second); // "green"                     
                                                          
`;

const destructuringObj = `
  const user = {
    name: "Alice",
    age: 25,
    city: "Paris"
  };

  const { name, city } = user;

  console.log(name); // "Alice"
  console.log(city); // "Paris"

`;

const spreadOp = `
✅ Spread in Arrays:                            
    const a = [1, 2, 3];                                
    const b = [4, 5];             
    const combined = [...a, ...b];                      

    console.log(combined); // [1, 2, 3, 4, 5]           

✅ Spread in Objects:
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3 };
    const merged = { ...obj1, ...obj2 };

    console.log(merged); // { a: 1, b: 2, c: 3 }

`;

const restOp = `
✅ Rest in Arrays:                             
    const [first, ...rest] = [10, 20, 30, 40];          
                                                        
    console.log(first); // 10
    console.log(rest);  // [20, 30, 40]                 
                                                        
✅ Rest in Objects:
    const user = { name: "Tom", age: 30, city: "London" };
    const { name, ...others } = user;
    console.log(name);   // "Tom"
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

const dynamic = `
  import('./utils.js').then(module => {
    module.doSomething();
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

const memo = `
  function memoizedAdd() {
    const cache = {};
    return function(n) {
      if (cache[n]) return cache[n];
      console.log('Calculating...');
      cache[n] = n + 10;
      return cache[n];
    };
  }
  const add = memoizedAdd();
  add(5); // calculates
  add(5); // returns from cache

`;

export const JavaScriptQuestions = [
  {
    q: "What is JavaScript?",
    a: (
      <>
        <p className="ans-para">
          JavaScript is a high-level, interpreted programming language that adds
          interactivity and dynamic behavior to web pages. While HTML defines
          the structure and CSS handles the styling, JavaScript controls how a
          page behaves — things like handling user interactions, updating the
          DOM in real time, and communicating with APIs.
        </p>
        <p className="ans-para">
          In front-end development, JavaScript is essential for creating
          responsive, interactive user experiences. Modern JavaScript (ES6 and
          later) introduces features like arrow functions, modules, promises,
          and async/await, which can make the code more efficient and readable.
        </p>
        <p>
          I also use JavaScript with frameworks and libraries like React to
          build component-based UIs and manage application state more
          effectively.
        </p>
      </>
    ),
  },
  {
    q: "How do browsers run code?",
    a: (
      <>
        <li>
          When a browser loads a web page, it first parses the HTML to build the
          DOM (Document Object Model) and CSS to build the CSSOM.
        </li>
        <li>
          When it encounters JavaScript, the JavaScript engine takes over. The
          engine parses the JS code, compiles it into machine code using
          Just-In-Time (JIT) compilation, and then executes it.
        </li>
        <li>
          The browser also has a call stack, heap, and event loop to manage
          synchronous and asynchronous tasks. Through the Web APIs (like
          setTimeout, fetch, or DOM manipulation), JavaScript interacts with the
          browser environment.
        </li>
        <li>
          Finally, any changes to the DOM or CSSOM trigger the browser’s
          rendering pipeline — which handles layout, painting, and compositing —
          to update what the user sees on the screen.
        </li>
      </>
    ),
  },
  {
    q: "What are the features of JavaScript?",
    a: (
      <>
        <p className="ans-para">
          JavaScript is a lightweight, interpreted programming language that
          adds interactivity to web pages. Some of its key features include
          dynamic typing, prototype-based object orientation, and first-class
          functions — meaning functions can be treated like variables.
        </p>
        <p className="ans-para">
          It’s also event-driven and supports asynchronous programming using
          promises and async/await, which helps manage tasks like API calls
          smoothly.
        </p>
        <p>
          Plus, JavaScript integrates directly with HTML and CSS, making it
          essential for creating responsive, interactive front-end applications.
        </p>
      </>
    ),
  },
  {
    q: "What are advantages of JavaScript?",
    a: (
      <>
        <p className="ans-para">
          JavaScript is fast, flexible, and essential for making web pages
          interactive. It runs directly in the browser, so there is no need for
          compilation, and it is supported by all major browsers.
        </p>
        <p className="ans-para">
          It is also very versatile — we can use it for front-end, back-end, or
          even mobile apps.
        </p>
        <p>
          Plus, the community and ecosystem are huge, with frameworks like React
          that make development faster and easier.
        </p>
      </>
    ),
  },
  {
    q: "What are data types in JS?",
    a: (
      <>
        <p className="ans-para">
          JavaScript data types are mainly divided into primitive and
          non-primitive types.
        </p>
        <p className="ans-para">
          Primitive types include String, Number, Boolean, Undefined, Null,
          BigInt, and Symbol.
        </p>
        <p className="ans-para">
          The only non-primitive type is Object, which also includes arrays and
          functions.
        </p>
        <p>
          The key difference is that primitive values are stored by value, while
          objects are stored and passed by reference.
        </p>
        <strong>Follow-up questions:</strong>
        <p>
          - What do you mean by ‘stored by value’ and ‘stored by reference’?
        </p>
        <p>- Is an array a primitive or an object?</p>
        <p>- What’s the difference between null and undefined?</p>
        <p>- What is BigInt used for?</p>
        <p>- What is a Symbol?</p>
        <p>- Are functions objects in JavaScript?</p>
      </>
    ),
  },
  {
    q: "What are variables in JS?",
    a: (
      <>
        <p>
          - In JavaScript, variables are containers used to store data values
          that can be changed or accessed later in the program.
        </p>
        <p>
          - We can declare them using <b>var, let,</b> or <b>const</b>.
        </p>
        <p>
          - <b>var</b> is <b>function-scoped</b>, while <b>let</b> and{" "}
          <b>const</b> are block-scoped, with const being used for values that
          shouldn’t change.
        </p>
        <p>
          - Variables can hold different types of data, like numbers, strings,
          or objects, and they play a key role in making programs dynamic and
          interactive.
        </p>
      </>
    ),
  },
  {
    q: "What are var, let and const?",
    a: (
      <>
        <p>
          - In JavaScript, <b>var, let,</b> and <b>const</b> are used to declare
          variables.
        </p>
        <p>
          - <b>var</b> is <b>function-scoped</b> and can be redeclared, but it
          has some unexpected behaviors like hoisting that can cause bugs.
        </p>
        <p>
          - <b>let</b> is <b>block-scoped</b>, can be updated but not redeclared
          in the same scope, making it safer than <b>var</b>.
        </p>
        <p>
          - <b>const</b> is also <b>block-scoped</b>, but its value cannot be
          reassigned after declaration. Choosing between them depends on whether
          you need a variable to change or stay constant.
        </p>
      </>
    ),
  },
  {
    q: "What is strict in JavaScript?",
    a: (
      <>
        <p>
          In JavaScript, <b>use strict</b> is a directive that enables strict
          mode, which helps catch common coding mistakes and unsafe actions. For
          example, it prevents using undeclared variables, disallows duplicate
          parameter names, and makes assignments to read-only properties throw
          errors. Strict mode makes your code more secure and easier to debug.
          You can enable it for an entire script or for individual functions by
          placing{" "}
          <code>
            <b>'use strict';</b>
          </code>{" "}
          at the top.
        </p>
      </>
    ),
  },
  {
    q: "What is the use of constructor function in JS?",
    a: (
      <>
        <p>
          - In JavaScript, a constructor function is used to create multiple
          objects with the same structure and behavior.
        </p>
        <p>
          - It acts like a blueprint — it will allows you define properties and
          methods inside the function, and then use the{" "}
          <code>
            <b>new</b>
          </code>{" "}
          keyword to create new object instances.
        </p>
        <p>
          - Constructor functions help organize code, avoid repetition, and make
          it easier to work with multiple similar objects in a program.
        </p>
      </>
    ),
  },
  {
    q: "What are JavaScript engines?",
    a: (
      <>
        <p>
          - A JavaScript engine is a program or interpreter that executes
          JavaScript code.
        </p>
        <p>
          - Every browser has its own engine — for example, Chrome uses V8,
          Firefox uses SpiderMonkey, and Safari uses JavaScriptCore.
        </p>
        <p>
          - The engine reads the JavaScript code, parses it, compiles it into
          machine code, and executes it.
        </p>
        <p>
          - Modern engines also use Just-In-Time compilation to make the code
          run faster, which is why JavaScript can be both flexible and
          performant in the browser.
        </p>
      </>
    ),
  },
  {
    q: "What is ECMAScript in JS?",
    a: (
      <>
        <p>
          - ECMAScript, often abbreviated as ES, is the standard specification
          that defines how JavaScript should work.
        </p>
        <p>
          - JavaScript is an implementation of ECMAScript. This standard ensures
          that all browsers behave consistently when running JavaScript code.
        </p>
        <p>
          - Over the years, ECMAScript has introduced important updates like
          ES6, which brought features like classes, arrow functions, template
          literals, and modules, making JavaScript more modern and powerful.
        </p>
      </>
    ),
  },
  {
    q: "Difference between == & === ?",
    a: (
      <>
        <p>
          In JavaScript,
          <li>
            <code>
              <b>==</b>
            </code>{" "}
            is the equality operator that compares values after performing type
            coercion, meaning it converts the types if they are different.
          </li>
          <li>
            On the other hand,{" "}
            <code>
              <b>===</b>
            </code>{" "}
            is the strict equality operator, which compares both value and type
            without converting them.
          </li>
          <li>
            It is generally recommended to use{" "}
            <code>
              <b>===</b>
            </code>{" "}
            to avoid unexpected results caused by type coercion.
          </li>
          <li>
            For example,{" "}
            <code>
              <b>5 == '5'</b>
            </code>{" "}
            is true, but{" "}
            <code>
              <b>5 === '5'</b>
            </code>{" "}
            is false because one is a number and the other is a string.
          </li>
        </p>
        <pre>{strictLoose}</pre>
      </>
    ),
  },
  {
    q: "Difference between Undefined, Null, and not defined in JS?",
    a: (
      <>
        <p>
          In JavaScript,
          <li>
            <code>
              <b>undefined</b>
            </code>{" "}
            means a variable has been declared but not assigned any value.
          </li>
          <li>
            <code>
              <b>null</b>
            </code>{" "}
            is an intentional assignment that represents <b>‘no value’</b> or an{" "}
            <b>empty object</b>.
          </li>
          <li>
            On the other hand,{" "}
            <code>
              <b>‘not defined’</b>
            </code>{" "}
            occurs when you try to access a variable that hasn’t been declared
            at all, which will throw a reference error. Understanding these
            differences helps to prevent runtime errors and makes code more
            predictable.
          </li>
        </p>
        <pre>{undefinedNullNotDefined}</pre>
      </>
    ),
  },
  {
    q: "What are Functions in JS?",
    a: (
      <>
        <p>
          - In JavaScript, a function is a reusable block of code that performs
          a specific task.
        </p>
        <p>
          - Functions help organize code, reduce repetition, and make programs
          more modular.
        </p>
        <p>
          - We can define a function using the{" "}
          <code>
            <b>function</b>
          </code>{" "}
          keyword, or with arrow function syntax in ES6.
        </p>
        <p>
          - Functions can take parameters as input, perform operations, and
          return a value.
        </p>
        <p>
          - For example, a function{" "}
          <code>
            <b>add(a, b)</b>
          </code>{" "}
          can take two numbers and return their sum, which can be used anywhere
          in your program.
        </p>
      </>
    ),
  },
  {
    q: "What are Named functions (Function Declaration) in JS?",
    a: (
      <>
        <p>
          - In JavaScript, a <b>named function</b> is a function that has a
          specific name when it is declared using the function keyword.
        </p>
        <p>
          - This name can be used to call the function anywhere in the scope
          it’s defined.
        </p>
        <p>
          - Named functions are useful because they make code more readable,
          help with debugging by showing the function name in stack traces, and
          can be recursive.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>function greet(){"{ console.log('Hello'); }"}</b>
          </code>{" "}
          is a named function that can be called using{" "}
          <code>
            <b>greet().</b>
          </code>
        </p>
        <pre>{namedFunctions}</pre>
      </>
    ),
  },
  {
    q: "What is Anonymous function (Function Expression) in JS?",
    a: (
      <>
        <p>
          - In JavaScript, an{" "}
          <code>
            <b>anonymous function</b>
          </code>{" "}
          is a function that <b>does not have a name</b> when it is defined.
        </p>
        <p>
          - These functions are often used as <b>callback functions</b> or
          assigned to variables.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>const greet = function() {"{ console.log('Hello');"}</b>
          </code>
          defines an anonymous function assigned to{" "}
          <code>
            <b>greet</b>
          </code>
          .
        </p>
        <p>
          - Anonymous functions are useful for short, one-time tasks and for
          keeping the code concise, especially in events, timers, or array
          methods like{" "}
          <code>
            <b>map</b>
          </code>{" "}
          and{" "}
          <code>
            <b>forEach</b>
          </code>
          .
        </p>
        <pre>{anonymousFun}</pre>
      </>
    ),
  },
  {
    q: "What is Arrow functions in JS?",
    a: (
      <>
        <p>
          - Arrow functions in JavaScript are a concise way to write functions
          using the{" "}
          <code>
            <b>{"=>"}</b>
          </code>{" "}
          syntax introduced in ES6.
        </p>
        <p>
          - They are often shorter than traditional functions and don’t have
          their own{" "}
          <code>
            <b>this, arguments, or super</b>
          </code>
          , which makes them useful in callbacks or methods where you want to
          preserve the outer{" "}
          <code>
            <b>this</b>
          </code>{" "}
          context.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>{"const add = (a, b) => a + b;"}</b>
          </code>{" "}
          is an arrow function that returns the sum of <b>a</b> and <b>b</b>.
          They make code cleaner and easier to read.
        </p>
      </>
    ),
  },
  {
    q: "Difference between Arrow functions & Regular functions in JS?",
    a: (
      <>
        <p>
          - The main differences between arrow functions and regular functions
          in JavaScript are about syntax and behavior.
        </p>
        <p>
          - Arrow functions have a shorter syntax and don’t have their own{" "}
          <code>
            <b>this</b>
          </code>
          , arguments, or super, so they inherit{" "}
          <code>
            <b>this</b>
          </code>{" "}
          from the surrounding scope.
        </p>
        <p>
          - Regular functions, declared with the function keyword, have their
          own{" "}
          <code>
            <b>this</b>
          </code>{" "}
          and can be used as constructors with{" "}
          <code>
            <b>new</b>
          </code>
          .
        </p>
        <p>
          - Arrow functions are great for callbacks and concise code, while
          regular functions are better when you need dynamic{" "}
          <code>
            <b>this</b>
          </code>{" "}
          or constructors.
        </p>
      </>
    ),
  },
  {
    q: "What is Callback function in JS?",
    a: (
      <>
        <p>
          - In JavaScript, a{" "}
          <code>
            <b>callback function</b>
          </code>{" "}
          is a function that is passed as an argument to another function and is
          executed after some operation is completed.
        </p>
        <p>
          - Callbacks are commonly used for asynchronous tasks like API calls,
          timers, or events.
        </p>
        <p>
          - For example, in{" "}
          <code>
            <b>{"setTimeout(() => { console.log('Hello'); }, 1000);"}</b>
          </code>
          , the arrow function is a callback that runs after one second.
        </p>
        <p>
          - Callbacks help manage the flow of code and ensure certain operations
          happen only after others are finished.
        </p>
        <pre>{callbackFn}</pre>
      </>
    ),
  },
  {
    q: "What is Callback hell in JS?",
    a: (
      <>
        <p>
          - Callback hell in JavaScript happens when you have{" "}
          <b>multiple nested callback functions</b>, often in asynchronous code,
          making it hard to read, maintain, and debug.
        </p>
        <p>
          - It usually looks like a pyramid or ‘rightward-slanting’ code
          structure.
        </p>
        <p>
          - For example, multiple setTimeout or API calls nested inside each
          other can create callback hell.
        </p>
        <p>
          - To avoid it, developers use Promises, async/await, or modular
          functions to keep the code clean and readable.
        </p>
        <pre>{cbHell}</pre>
      </>
    ),
  },
  {
    q: "What is Currying in JavaScript?",
    a: (
      <>
        <p>
          - Currying in JavaScript is a technique where a function with multiple
          arguments is transformed into a sequence of <b>nested functions</b>,
          each taking <b>one argument at a time</b>.
        </p>
        <p>
          - It helps in <b>reusing functions and creating more flexible code</b>
          .
        </p>
        <p>
          - For example, a
          <code>
            <b>function add(a, b)</b>
          </code>{" "}
          can be curried as{" "}
          <code>
            <b>add(a)(b)</b>
          </code>{" "}
          so you can call{" "}
          <code>
            <b>add(2)(3)</b>
          </code>{" "}
          to get 5.
        </p>
        <p>
          - Currying is often used in functional programming to make code
          modular and composable.
        </p>
        <pre>{currying}</pre>
      </>
    ),
  },
  {
    q: "What is Higher Order Function JavaScript?",
    a: (
      <>
        <p>
          - A Higher Order Function in JavaScript is a function that either
          takes another function as an argument, returns a function, or both.
        </p>
        <p>
          - They is a key concept in functional programming and helps to make
          code more modular and reusable.
        </p>
        <p>
          - Examples include array methods like map, filter, and reduce, which
          take callback functions to process data.
        </p>
        <p>
          - For instance,{" "}
          <code>
            <b>[1,2,3].map(n =&gt; n * 2)</b>
          </code>{" "}
          uses a higher-order function map with an arrow function as a callback.
        </p>
        <pre>{hof}</pre>
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
        </p>
        <pre>{hoisting}</pre>
        <strong>or</strong>
        <p>
          - Hoisting in JavaScript is a behavior where variable and function
          declarations are moved to the top of their scope during the
          compilation phase.
        </p>
        <p>
          - This means you can access functions or variables before they are
          actually declared in the code.
        </p>
        <p>
          - For example, calling a function declared with{" "}
          <code>
            <b>function greet() {}</b>
          </code>
          works even if it appears later in the code.
        </p>
        <p>
          - However, variables declared with var are hoisted but initialized as
          undefined, while let and const are hoisted but remain in a ‘temporal
          dead zone’ until their declaration.
        </p>
      </>
    ),
  },
  {
    q: "What is Temporal Dead Zone (TDZ) in JS?",
    a: (
      <>
        <p>
          - The Temporal Dead Zone (TDZ), in JavaScript is the period between
          the start of a block and the point where a variable declared with let
          or const is initialized.
        </p>
        <p>
          - During this time, if you try to access the variable, JavaScript will
          throw a ReferenceError.
        </p>
        <p>
          - TDZ exists to prevent variables from being used before they are
          properly declared and initialized, making code safer.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>console.log(a); let a = 5;</b>
          </code>{" "}
          will throw an error because a is in the TDZ.
        </p>
      </>
    ),
  },
  {
    q: "How to stop Hoisting in JS?",
    a: (
      <>
        <p>
          - Always declare your variables at the top of their scope. This will
          make your code more readable and easier to maintain.
        </p>
        <p>
          - Use the <b>let</b> or <b>const</b> keywords to declare your
          variables instead of the <b>var</b> keyword.
        </p>
        <p>- Use JavaScript's strict mode.</p>
      </>
    ),
  },
  {
    q: "What is Lexical scoping in JS?",
    a: (
      <>
        <p>
          - Lexical scoping in JavaScript means that a function’s scope is
          determined by where it is defined in the source code, not where it is
          called.
        </p>
        <p>
          - Inner functions have access to variables defined in their outer
          enclosing functions, but outer functions cannot access variables
          inside inner functions.
        </p>
        <p>
          - This is fundamental to closures. For example, if a function is
          defined inside another function, it can use the outer function’s
          variables even when called later.
        </p>
        <pre>{lexical}</pre>
      </>
    ),
  },
  {
    q: "What are Closures in JavaScript?",
    a: (
      <>
        <p>
          A closure in JavaScript is a function that remembers and has access to
          variables from its outer function even after the outer function has
          finished executing. Closures are useful for creating private
          variables, data encapsulation, and maintaining state in functions.
        </p>
        <pre>{closures}</pre>
      </>
    ),
  },
  {
    q: "What is `this` keyword in JS?",
    a: (
      <>
        <p>
          - In JavaScript, this refers to the object in which a function is
          called.
        </p>
        <p>
          - In regular functions, this is dynamic and can change based on how
          the function is invoked.
        </p>
        <p>
          - In arrow functions, this is lexically bound, meaning it retains the
          value of this from the surrounding scope where the arrow function was
          defined.
        </p>
        <pre>{thiss}</pre>
      </>
    ),
  },
  {
    q: "How call(), apply() & bind() is used in JS?",
    a: (
      <>
        <p>
          - In JavaScript,{" "}
          <code>
            <b>call(), apply (), bind ()</b>
          </code>{" "}
          are used to explicitly set the value of <b>this</b> inside a function.
        </p>
        <p>
          -{" "}
          <code>
            <b>call()</b>
          </code>{" "}
          - Invokes a function immediately with a specified <b>this</b> value
          and arguments provided individually.
        </p>
        <p>
          -{" "}
          <code>
            <b>apply()</b>
          </code>
          - Invokes a function immediately with a specified <b>this</b> value
          and arguments provided as an array (or an array-like object).
        </p>
        <p>
          -{" "}
          <code>
            <b>bind()</b>
          </code>
          - Creates a new function with a specified <b>this</b> value (and
          optionally, initial arguments) that can be invoked later. It does not
          execute the original function immediately.
        </p>
        <pre>{apb}</pre>
      </>
    ),
  },
  {
    q: "What is IIFE (Immediately Invoked Function Expression)?",
    a: (
      <>
        <p>
          - An Immediately Invoked Function Expression, or IIFE, is a JavaScript
          function that runs as soon as it is defined.
        </p>
        <p>
          - It is wrapped in parentheses and followed by{" "}
          <code>
            <b>()</b>
          </code>{" "}
          to execute immediately.
        </p>
        <p>
          - IIFEs are useful for creating a private scope and avoiding polluting
          the global namespace.
        </p>
        <p>
          - For example:{" "}
          <code>
            <b>{"(function() { console.log('Hello'); })();"}</b>
          </code>{" "}
          will run instantly without needing to be called later.
        </p>
        <p>- They’re often used in modules or to isolate code in JavaScript.</p>
        <pre>{iife}</pre>
      </>
    ),
  },
  {
    q: "Difference between Function declaration & Function expression?",
    a: (
      <>
        <p>
          - In JavaScript, the difference between function declarations and
          function expressions are mainly about hoisting and syntax.
        </p>
        <p>
          - A <b>Function declaration</b> uses the function keyword followed by
          a name, like{" "}
          <code>
            <b>function greet() {}</b>
          </code>
          .
        </p>
        <p>- It is hoisted, so you can call it before it’s defined.</p>
        <p>
          - A <b>Function expression</b> assigns a function to a variable, like{" "}
          <code>
            <b>const greet = function() {}</b>
          </code>{" "}
          or using an arrow function.
        </p>
        <p>
          - Function expressions are not hoisted, so you can’t call them before
          the assignment.
        </p>
        <p>
          - Expressions are useful for passing functions as arguments or
          creating IIFEs.
        </p>
        <pre>{fdfe}</pre>
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
          - ES6, also called ECMAScript 2015, introduced many modern JavaScript
          features to make coding easier and cleaner. Some key features include:
          <ol>
            <li>let and const for block-scoped variables,</li>
            <li>Arrow functions () =&gt; {} for concise syntax,</li>
            <li>Template literals using backticks for string interpolation,</li>
            <li>Default, rest, and spread operators,</li>
            <li>Destructuring for arrays and objects,</li>
            <li>Classes and modules for better code organization,</li>
            <li>Promises for asynchronous programming, </li>
            <li>Map, Set, and enhanced object literals.</li>
          </ol>
        </p>
        <p>- These features make JavaScript more powerful and maintainable.</p>
      </>
    ),
  },
  {
    q: "What is Destructuring in JS?",
    a: (
      <>
        <p>
          - In JavaScript, <b>destructuring</b> is a convenient way to{" "}
          <b>extract values from arrays or properties from objects</b> into
          separate variables.
        </p>
        <p>
          - It helps write cleaner and more readable code. For example, with
          arrays:
        </p>
        <pre>{destructuringArr}</pre>
        <p>- And with objects:</p>
        <pre>{destructuringObj}</pre>
        <p>
          - It’s widely used in modern JavaScript, especially with function
          parameters and React props.
        </p>
      </>
    ),
  },
  {
    q: "What is spread operator in JS?",
    a: (
      <>
        <p>
          - In JavaScript, the spread operator (...) allows you to expand an
          array or object into individual elements.
        </p>
        <p>
          - It’s commonly used to copy arrays, merge arrays or objects, and pass
          elements as separate arguments to functions. For example:
        </p>
        <pre>{spreadOp}</pre>
        <p>
          - It makes code concise and avoids mutating the original array or
          object.
        </p>
      </>
    ),
  },
  {
    q: "What is rest operator in JS?",
    a: (
      <>
        <p>
          - In JavaScript, the rest operator (...) allows a function to accept
          an indefinite number of arguments as an array.
        </p>
        <p>
          - It is used in function parameters to gather remaining arguments that
          are not explicitly named. For example:
        </p>
        <pre>
          <code>{restOp}</code>
        </pre>
        <p>
          - This makes functions flexible, letting them handle any number of
          inputs easily.
        </p>
      </>
    ),
  },
  {
    q: "What are String Literals in JS?",
    a: (
      <>
        <p>
          - In JavaScript, <b>string literals</b> are sequences of characters
          enclosed in <b>quotes</b>. You can use single quotes{" "}
          <code>
            <b>' '</b>
          </code>
          , double quotes{" "}
          <code>
            <b>" "</b>
          </code>
          , or backticks{" "}
          <code>
            <b>` `</b>
          </code>{" "}
          for <b>template literals</b>.
        </p>
        <p>
          - Template literals allow you to include{" "}
          <b>variables and expressions</b> directly in the string using{" "}
          <code>
            <b>${"{}"}</b>
          </code>{" "}
          and also support <b>multi-line strings</b>. For example:
        </p>
        <pre>{stringLiterals}</pre>
        <p>
          - String literals are the simplest way to represent text in
          JavaScript.
        </p>
      </>
    ),
  },
  {
    q: "What are Pollyfills in JS?",
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
        <p>
          - Polyfills in JavaScript are <b>code snippets or libraries</b> that
          add support for newer JavaScript features in <b>older browsers</b>{" "}
          that don’t support them natively.
        </p>
        <p>
          - They basically ‘fill in’ the missing functionality. For example, if
          a browser doesn’t support{" "}
          <code>
            <b>Array.from()</b>
          </code>{" "}
          or{" "}
          <code>
            <b>Promise</b>
          </code>
          , a polyfill can define that behavior manually so your code still
          works.
        </p>
        <p>
          - Developers often use tools like <b>Babel</b> or libraries like{" "}
          <b>core-js</b> to automatically include polyfills for backward
          compatibility.
        </p>
      </>
    ),
  },
  {
    q: "What is First class functions in JS?",
    a: (
      <>
        <p>
          - In JavaScript, functions are <b>first-class citizens</b>, which
          means they are treated like any other value.
        </p>
        <p>
          - You can <b>assign them to variables, pass them as arguments</b> to
          other functions, and <b>return them from functions</b>.
        </p>
        <p>
          - This allows powerful programming patterns like callbacks,
          higher-order functions, and closures. For example:
        </p>
        <pre>{firstClassFn}</pre>
        <p>
          - This flexibility is what makes JavaScript great for functional
          programming.
        </p>
      </>
    ),
  },
  {
    q: "What is Dynamic import in JavaScript?",
    a: (
      <>
        <p>
          Dynamic import in JavaScript is a way to load modules asynchronously
          using the{" "}
          <code>
            <b>import()</b>
          </code>{" "}
          function. This allows for code splitting and lazy loading of modules,
          improving performance by only loading code when it is needed.
        </p>
        <strong>or</strong>
        <p>
          - Dynamic import in JavaScript allows you to{" "}
          <b>load modules on demand</b> instead of importing them at the top of
          the file.
        </p>
        <p>
          - It uses the{" "}
          <code>
            <b>import()</b>
          </code>
          function, which returns a <b>promise</b>, so the module is loaded{" "}
          <b>asynchronously</b>.
        </p>
        <p>
          - This helps improve performance by reducing the initial bundle size —
          only loading code when it is actually needed. For example:
        </p>
        <p>
          - This is especially useful in large apps for code-splitting and lazy
          loading.
        </p>
        <pre>{dynamic}</pre>
      </>
    ),
  },
  {
    q: "Is JavaScript faster than server-side rendering?",
    a: (
      <>
        <p>
          JavaScript can be faster than server-side rendering in certain
          scenarios, especially for highly interactive applications where
          client-side rendering can reduce server load and improve
          responsiveness. However, the performance comparison depends on various
          factors such as application complexity, network latency, and user
          experience requirements.
        </p>
        <strong>or</strong>
        <p>
          - <b>JavaScript rendering on the client side is not always faster</b>{" "}
          than server-side rendering.
        </p>
        <p>
          - With <b>client-side rendering (CSR)</b>, the browser has to{" "}
          <b>download, parse, and execute JavaScript</b> before showing content,
          which can slow down the initial load.
        </p>
        <p>
          - on the other hand, <b>Server-side rendering (SSR)</b>, sends fully
          rendered HTML, so the first page loads faster and is better for SEO.
        </p>
        <p>
          - However, once loaded, CSR can make{" "}
          <b>page transitions and interactions faster</b>, since everything
          happens on the client without full reloads.
        </p>
      </>
    ),
  },
  {
    q: "Server side rendering vs client side rendering in JS?",
    a: (
      <>
        <p>
          - In JavaScript, <b>Server-Side Rendering</b> (SSR) means the HTML is
          <b>generated on the server</b> and sent to the browser fully formed,
          so the user sees content faster and SEO improves.
        </p>
        <p>
          - <b>Client-Side Rendering</b> (CSR) means the browser first loads a
          blank HTML page and then <b>JavaScript builds the UI</b> dynamically
          on the client side, which can delay the first paint but makes
          navigation faster once loaded.
        </p>
        <p>
          - Frameworks like Next.js use SSR, while React or Angular apps often
          use CSR.
        </p>
      </>
    ),
  },
  {
    q: "What is Hydration in client-side rendering in JS?",
    a: (
      <>
        <p>
          - Hydration in JavaScript is the process where the{" "}
          <b>client-side JavaScript takes over the static HTML</b> that was
          rendered by the server and <b>makes it interactive</b>.
        </p>
        <p>- This usually happens in frameworks like React or Next.js.</p>
        <p>
          - The server sends pre-rendered HTML for faster page load and SEO, and
          then the client ‘hydrates’ it by attaching event listeners and
          rebuilding the virtual DOM.
        </p>
        <p>
          - It is basically how a static page becomes dynamic after the
          JavaScript bundle runs in the browser.
        </p>
      </>
    ),
  },
  {
    q: "What are Prototypes and Inheritance in JavaScript?",
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
          - In JavaScript, <b>prototypes</b> are the mechanism by which objects
          can <b>inherit properties and methods</b> from other objects.
        </p>
        <p>
          - Every JavaScript object has an internal link to another object
          called its <b>prototype</b>, and properties defined on the prototype
          are shared by all instances.
        </p>
        <p>
          - Inheritance in JavaScript is prototype-based, meaning objects can
          inherit directly from other objects.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>
              Person.prototype.sayHi = function() {"{ console.log('Hi'); }"}
            </b>
          </code>{" "}
          lets all objects created from <b>Person</b> access <b>sayHi</b>{" "}
          through the prototype chain.
        </p>
      </>
    ),
  },
  {
    q: "What are Generator functions in JS?",
    a: (
      <>
        <p>
          - In JavaScript, Generator functions are special functions that can
          <b> pause and resume their execution</b> using the{" "}
          <code>
            <b>function*</b>
          </code>{" "}
          syntax and the{" "}
          <code>
            <b>yield</b>
          </code>{" "}
          keyword.
        </p>
        <p>
          - Instead of returning a single value, they return an{" "}
          <b>iterator object</b>, which lets you get values one at a time using
          <code>
            <b>next().</b>
          </code>
        </p>
        <p>
          - This is useful for handling sequences, lazy evaluation, or
          asynchronous flows. For example:
        </p>
        <pre>{generators}</pre>
        <p>
          - Each{" "}
          <code>
            <b>next()</b>
          </code>{" "}
          call resumes execution until the next{" "}
          <code>
            <b>yield.</b>
          </code>
        </p>
      </>
    ),
  },
  {
    q: "What is Memoization in JS with example?",
    a: (
      <>
        <p>
          - <b>Memoization</b> in JavaScript is a technique to improve
          performance by caching the results of function calls so that if the
          same inputs occur again, the function returns the cached result
          instead of recalculating it. It is often used in expensive
          computations like recursion. For example:
        </p>
        <pre>{memo}</pre>
        <p>- This avoids repeated work and makes the function faster.</p>
      </>
    ),
  },
  {
    q: "What is Tail Call Optimization (TOC) in JavaScript?",
    a: (
      <>
        <p>
          - <b>Tail call optimization</b> in JavaScript is a feature where the
          <b>JavaScript engine optimizes recursive function calls</b> that occur
          as the
          <b>last action</b> in a function — meaning the function returns the
          result of another function call directly.
        </p>
        <p>
          - This optimization helps{" "}
          <b>save memory and prevent stack overflow</b> by reusing the current
          function’s stack frame instead of creating a new one.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>return factorial(n - 1, n * acc);</b>
          </code>{" "}
          in a recursive function is a tail call because it’s the last statement
          returned.
        </p>
      </>
    ),
  },
  {
    q: "Difference between Parameters and Arguments in JS?",
    a: (
      <>
        <p>
          In JavaScript,
          <p>
            - <b>Parameters</b> are the variables listed in the function
            definition that act as placeholders for values.
          </p>
          <p>
            - <b>Arguments</b> are the actual values passed to the function when
            it is called.
          </p>
          <p>
            - For example, in{" "}
            <code>
              <b>function add(a, b) {"{ return a + b; }"}</b>
            </code>
            , <b>a</b> and <b>b</b> are <b>parameters</b>, while calling{" "}
            <code>
              <b>add(2, 3)</b>
            </code>{" "}
            passes <b>2</b> and <b>3</b> as <b>arguments</b>.
          </p>
          <p>
            - <b>Parameters</b> define what the function expects, and{" "}
            <b>arguments</b> are what it actually receives during execution.
          </p>
        </p>
      </>
    ),
  },
];
