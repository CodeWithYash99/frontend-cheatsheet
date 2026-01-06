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

const reduce = `
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

const useReduce = `
  const fruits = ['apple', 'banana', 'apple'];
  const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(count); // { apple: 2, banana: 1 }

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
  1. Object Literal (most common):
    const obj = {
      name: "Alice",
      age: 25
    };

  2. Using new Object() Constructor:
    const obj = new Object();
    obj.name = "Bob";
    obj.age = 30;

  3. Using Object.create() (prototype-based creation):          
    const proto = {                                               
      greet() {                                                     
        console.log("Hello!");
      }
    };                                                                
                                                                          
    const obj = Object.create(proto);
    obj.name = "Eve"; 
    obj.greet(); // Output: Hello!

  4. Using a Constructor Function:                                  
    function Person(name, age) {                                  
      this.name = name;
      this.age = age;
    }

    const person1 = new Person("Charlie", 35);

  5. Using ES6 class Syntax:
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    }

    const person2 = new Person("Diana", 28);

  6. Using Factory Functions (functions that return objects):
    function createPerson(name, age) {
      return {
        name,
        age,
        greet() {
          console.log(\`Hi, I am \${name}\`);
        }
      };
    }

    const person3 = createPerson("Frank", 40);
    person3.greet(); // Hi, I am Frank

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
✅ Simple Example: Chaining with .then()                                               
    new Promise((resolve, reject) => {                                                      
      setTimeout(() => resolve(1), 1000); // Step 1: Resolve with 1 after 1s                  
    })                                                                                          
      .then(result => {                                                                       
        console.log("Step 1:", result); // 1                                               
        return result * 2;
      })                                                                                    
      .then(result => {                                                                       
        console.log("Step 2:", result); // 2                                                    
        return result * 3;                                                                      
      })                                                                                      
      .then(result => {                                                                       
        console.log("Step 3:", result); // 6                                                    
      });                                                                                       
                                                                                              
                                                                                              
✅ Example with Async Function in Chain:
    function doubleAsync(n) {
      return new Promise(resolve => {
        setTimeout(() => resolve(n * 2), 500);
      });
    }

    doubleAsync(2)
      .then(result => {
        console.log("First:", result); // 4
        return doubleAsync(result);    // 8
      })
      .then(result => {
        console.log("Second:", result); // 8
        return doubleAsync(result);     // 16
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

const iterator = `
  function* numbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  const numIterator = numbers();
  console.log(numIterator.next()); // { value: 1, done: false }

`;

const interceptors = `
  axios.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer token';
    return config;
  });

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
          <b>const</b> are <b>block-scoped</b>, with const being used for values that
          should not change.
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
          - <b>var</b> is <b>function-scoped</b>, can be redeclared and reassigned, but it
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
          - In JavaScript, <b>use strict</b> is a directive that enables strict
            mode, which helps catch common coding mistakes and unsafe actions.
        </p>
        <p>
          - For example, it prevents using undeclared variables, disallows duplicate
          parameter names, and makes assignments to read-only properties throw
          errors.
        </p>
        <p>
          - Strict mode makes your code more secure and easier to debug.
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
          - It acts like a blueprint — it will allows you define to properties and
          methods inside the function, and then use the{" "}
          <code>
            <b>new</b>
          </code>{" "}
          keyword to create new object instances.
        </p>
        <p>
          - Constructor function helps to organize code, avoid repetition, and make
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
            is the loose equality operator that compares values after performing type
            coercion, that means it converts the types if they are different.
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
              <b>not defined</b>
            </code>{" "}
            occurs when you try to access a variable that hasn’t been declared
            at all, which will throw a reference error.
          </li>
          <li>
            Understanding these differences helps to prevent runtime errors and makes 
            code more predictable.
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
          - An array in JavaScript is a special type of object used to store
          multiple values in a single variable.
        </p>
        <p>
          - Each value, or element, is indexed starting from zero, which makes
          it easy to access or loop through items.
        </p>
        <p>
          - Arrays can hold different data types, like numbers, strings, or even
          other arrays.
        </p>
        <p>
          - It is often use built-in methods like{" "}
          <code>
            <b>map, filter,</b>
          </code>{" "}
          and
          <code>
            <b>reduce</b>
          </code>{" "}
          to manipulate array data efficiently.
        </p>
        <pre>{arr}</pre>
      </>
    ),
  },
  {
    q: "What are Objects?",
    a: (
      <>
        <p>
          - Objects in JavaScript are collections of key-value pairs that let us
          store and organize data in a structured way.
        </p>
        <p>
          - The keys are usually strings or symbols, and the values can be any
          data type — even other objects or functions.
        </p>
        <p>
          - I like using objects when I need to represent real-world entities,
          like a user with properties such as name and email.
        </p>
        <p>
          - They’re also the foundation of many JavaScript concepts, including
          JSON and object-oriented programming.
        </p>
        <pre>{obj}</pre>
      </>
    ),
  },
  {
    q: "What is ArrayBuffer?",
    a: (
      <>
        <p>
          - An ArrayBuffer in JavaScript is a low-level object that represents a
          fixed-length block of raw binary data.
        </p>
        <p>
          - It doesn’t deal directly with numbers or strings — instead, it
          provides a way to store data that can be interpreted through typed
          arrays, like <b>Int8Array</b> or <b>Float32Array</b>.
        </p>
        <p>
          - I’d use an ArrayBuffer when working with things like files, images,
          or network streams where performance and memory control are important.
        </p>
        <pre>{arrBuffer}</pre>
      </>
    ),
  },
  {
    q: "Difference between map, filter, find, and forEach",
    a: (
      <>
        <p>
          In JavaScript, all four methods — <b>map, filter, find,</b> and{" "}
          <b>forEach</b> — are used to work with arrays, but they serve
          different purposes.
          <p>
            <b>map() :</b>
            <p>
              - Creates a new array by applying a function to each element of
              the original array.
            </p>
            <p>- The new array has the same length as the original.</p>
          </p>
          <pre>{map}</pre>
          <p>
            <b>filter() :</b>
            <p>
              - Creates a new array with only the elements that pass a test
              (predicate function).
            </p>
            <p>- The new array can be smaller or equal in size.</p>
          </p>
          <pre>{filter}</pre>
          <p>
            <b>find() :</b>
            <p>
              - Returns the first element that satisfies a condition (predicate
              function).
            </p>
            <p>- Returns undefined if no elements match.</p>
          </p>
          <pre>{find} </pre>
          <p>
            <b>forEach() :</b>
            <p>- Executes a function on each element of the array.</p>
            <p>- Does not return a new array — returns undefined.</p>
            <p>
              - Used for side effects like logging or updating external
              variables.
            </p>
          </p>
          <pre>{forEach}</pre>
        </p>
      </>
    ),
  },
  {
    q: "What is reduce in JS? What is the use case of reduce in JS?",
    a: (
      <>
        <p>
          - In JavaScript,{" "}
          <code>
            <b>reduce()</b>
          </code>{" "}
          is an <b>array method</b> that lets you{" "}
          <b>combine all elements of an array into a single value</b> by
          applying a function repeatedly.
        </p>
        <p>
          - It takes a callback with an accumulator and current value, plus an
          optional initial value.
        </p>
        <p>
          - A common use case is{" "}
          <b>summing numbers, flattening arrays, or grouping data</b>. For
          example:
        </p>
        <pre>{reduce}</pre>
        <p>
          - It’s very powerful for transforming arrays into a single result
          efficiently.
        </p>
        <strong>Use Case:</strong>
        <p>
          - The{" "}
          <code>
            <b>reduce()</b>
          </code>{" "}
          method in JavaScript is used whenever you want to
          <b>combine or transform array elements into a single value</b>. Common
          use cases include:
          <ol>
            <li>
              <b>Summing or multiplying numbers</b> in an array.
            </li>
            <li>
              <b>Flattening arrays</b> of arrays into one array.
            </li>
            <li>
              <b>Counting or grouping objects</b> by a property.
            </li>
            <li>
              <b>Building more complex data structures</b> like objects or maps
              from arrays. For example, to count occurrences of items:
            </li>
          </ol>
        </p>
        <pre>{useReduce}</pre>
        <p>
          -{" "}
          <code>
            <b>reduce()</b>
          </code>{" "}
          is very flexible and can replace multiple loops or intermediate
          arrays.
        </p>
      </>
    ),
  },
  {
    q: "Difference between slice & splice in JS?",
    a: (
      <>
        <p>
          - In JavaScript, slice and splice sound similar but behave very
          differently.
        </p>
        <p>
          - <b>slice</b> is non-destructive — it returns a new array containing
          selected elements without changing the original one.
        </p>
        <p>
          - On the other hand, <b>splice</b>, modifies the original array by
          adding, removing, or replacing elements.
        </p>
        <p>
          - For example, I’d use slice when I just need a portion of data to
          display, and splice when I actually want to update the array’s
          contents.
        </p>
        <pre>{sliceSplice}</pre>
        <p>
          <b>slice()</b> returns a shallow copy of a portion of an array into a
          new array object selected from start to end (end not included) where
          start and end represent the index of items in that array. The original
          array will not be modified.
        </p>
        <p>
          <b>splice()</b> changes the contents of an array by removing or
          replacing existing elements and/or adding new elements in place. The
          original array will be modified.
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
          <ol>
            <li>
              <b>Object Literal:</b> Using curly braces{" "}
              <code>
                <b>{"{}"}</b>
              </code>{" "}
              to define key-value pairs.
            </li>
            <li>
              <b>Constructor Function:</b> Using a function to create and
              initialize an object with the <b>new</b> keyword.{" "}
              <code>
                <b>new Object()</b>
              </code>
            </li>
            <li>
              <b>Object.create():</b> Creating a new object with a specified
              prototype object.{" "}
              <code>
                <b>Object.create()</b>
              </code>
            </li>
            <li>
              <b>Class Syntax:</b> Using the <b>class</b> keyword to define a
              blueprint for creating objects.
            </li>
            <li>
              <b>Factory Function:</b> A function that returns a new object.
            </li>
          </ol>
        </p>
        <pre>{createObjects}</pre>
      </>
    ),
  },
  {
    q: "Shallow clone vs Deep clone  in JS?",
    a: (
      <>
        <p>
          - In JavaScript, a <b>shallow clone</b> creates a new object, but only
          the top-level properties are copied — if those properties reference
          other objects, they still point to the same memory.
        </p>
        <p>
          - On the other hand, <b>deep clone</b>, copies everything recursively,
          so nested objects are fully duplicated and independent of the
          original.
        </p>
        <p>
          - For example,{" "}
          <code>
            <b>Object.assign()</b>
          </code>{" "}
          or the spread operator do shallow copies,
        </p>
        <p>
          - while{" "}
          <code>
            <b>structuredClone()</b>
          </code>{" "}
          or using{" "}
          <code>
            <b>JSON.parse(JSON.stringify())</b>
          </code>{" "}
          can create deep copies.
        </p>
        <pre>{shallowDeep}</pre>
      </>
    ),
  },
  {
    q: "What is Set and Map in JavaScript?",
    a: (
      <>
        <p>
          - In JavaScript, a <b>Set</b> and a <b>Map</b> are built-in data
          structures.
        </p>
        <p>
          - A <b>Set</b> stores unique values — no duplicates — and it is great
          when you just need to check for the presence of items quickly.
        </p>
        <p>
          - A <b>Map</b>, on the other hand, stores key-value pairs like an
          object, but the keys can be of any type, not just strings.
        </p>
        <p>
          - <b>Map</b> also maintains the insertion order and gives better
          performance for frequent additions and lookups compared to plain
          objects.
        </p>
      </>
    ),
  },
  {
    q: "What is WeakMap and WeakSet  in JS?",
    a: (
      <>
        <p>
          - In JavaScript, <b>WeakMap</b> and <b>WeakSet</b> are similar to{" "}
          <b>Map</b> and <b>Set</b>, but with a key difference — they hold weak
          references to their objects.
        </p>
        <p>
          - That means if there’s no other reference to an object stored inside
          them, it can be garbage-collected automatically.
        </p>
        <p>
          - A <b>WeakMap</b> stores key-value pairs where keys must be objects,
          and a <b>WeakSet</b> stores only object values.
        </p>

        <p>
          - They don’t support iteration or size checking because their contents
          can change as garbage collection happens.
        </p>
      </>
    ),
  },
  {
    q: "What is DOM and DOM manipulation  in JS?",
    a: (
      <>
        <p>
          - The DOM, or Document Object Model, is a programming interface that
          represents an HTML or XML document as a tree of nodes, where each node
          corresponds to an element, attribute, or piece of content.
        </p>
        <p>
          - DOM manipulation in JavaScript means using methods like
          getElementById, querySelector, appendChild, or removeChild to
          dynamically change the content, structure, or style of a web page.
        </p>
        <p>
          - Essentially, it lets us interact with the page in real-time,
          updating it without reloading.
        </p>
      </>
    ),
  },
  {
    q: "Event handling",
    a: (
      <>
        {" "}
        <p>
          - Event handling in JavaScript is how we make web pages interactive by
          responding to user actions, like clicks, typing, or mouse movements.
        </p>
        <p>
          - We can attach event listeners using methods like addEventListener,
          specifying the event type and a callback function. The callback runs
          whenever the event occurs.
        </p>
        <p>
          - This allows us to dynamically update the UI, validate forms, or
          trigger animations, making the web page responsive to user
          interactions.
        </p>
        <pre>{eventHandling}</pre>
      </>
    ),
  },
  {
    q: "Event delegation",
    a: (
      <>
        <p>
          - Event delegation is a technique in JavaScript where instead of
          adding event listeners to multiple child elements, we attach a single
          listener to their parent.
        </p>
        <p>
          - The event naturally bubbles up the DOM, and we can identify which
          child triggered it using <b>event.target</b>.
        </p>
        <p>
          - This improves performance and makes dynamic content handling easier
          — for example, when new elements are added to a list, we don’t need to
          reattach listeners for each one.
        </p>
        <pre>{eventDelegation}</pre>
      </>
    ),
  },
  {
    q: "Event bubbling",
    a: (
      <>
        <p>
          - Event bubbling in JavaScript is the process where an event starts
          from the deepest target element and then bubbles up through its parent
          elements in the DOM hierarchy.
        </p>
        <p>
          - For example, if you click a button inside a{" "}
          <code>
            <b>div</b>
          </code>
          , the click event first runs on the button, then on the{" "}
          <code>
            <b>div</b>
          </code>
          , and continues up to the{" "}
          <code>
            <b>document</b>
          </code>
          .
        </p>
        <p>
          - It’s useful when using techniques like event delegation, but
          sometimes we stop it with{" "}
          <code>
            <b>event.stopPropagation()</b>
          </code>{" "}
          to prevent parent handlers from being triggered.
        </p>
        <pre>{eventBubbling}</pre>
      </>
    ),
  },
  {
    q: "Event capturing",
    a: (
      <>
        <p>
          - Event capturing, also called the trickle-down phase, is the opposite
          of event bubbling.
        </p>
        <p>
          - In this phase, an event starts from the top of the DOM — like the
          <b>document</b> — and moves down to the target element.
        </p>
        <p>
          - By default, JavaScript uses bubbling, but we can enable capturing by
          passing <b>true</b> as the third argument in <b>addEventListener</b>.
        </p>
        <p>
          - It is less commonly used, but it is helpful when you need to handle
          events before they reach their target.
        </p>
        <pre>{eventCapturing}</pre>
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
          behaviour.
          <p>
            <b>Local Storage:</b> Stores data with no expiration. Data persists
            even after browser closed or reopened. It has 5 - 10mb capacity.
          </p>
          <p>
            <b>Session Storage:</b> Stores data with expiration. Data is lost
            when browser is closed. It has upto 5mb capacity.
          </p>
          <p>
            <b>Cookies:</b> Stores small amount of data, can be sent to server
            with every HTTP request. It has expiration. It has 4kb capacity.
          </p>
        </p>
        <strong>or</strong>
        <p>
          <b>Local Storage, Session Storage</b>, and <b>Cookies</b> are all ways
          to store data on the client side in a web browser, but they have
          different characteristics and use cases:
        </p>
        <ol>
          <li>
            <b>Local Storage:</b>
            <p>
              - Data persists even after the browser is closed and reopened.
            </p>
            <p>- Can store larger amounts of data (typically up to 5-10 MB).</p>
            <p>
              - Data is stored as key-value pairs and is accessible only within
              the same origin (domain).
            </p>
            <p>
              - Commonly used for storing user preferences, settings, and other
              non-sensitive data.
            </p>
          </li>
          <li>
            <b>Session Storage:</b>
            <p>
              - Data persists only for the duration of the page session (until
              the browser or tab is closed).
            </p>
            <p>
              - Can store similar amounts of data as Local Storage (typically up
              to 5-10 MB).
            </p>
            <p>
              - Data is also stored as key-value pairs and is accessible only
              within the same origin (domain).
            </p>
            <p>
              - Commonly used for storing temporary data that should not persist
              across sessions, such as form data or temporary user inputs.
            </p>
          </li>
          <li>
            <b>Cookies:</b>
            <p>
              - Data can have an expiration date and can persist across sessions
              if set to do so.
            </p>
            <p>
              - Typically used for storing small amounts of data (up to 4 KB per
              cookie).
            </p>
            <p>
              - Data is sent to the server with every HTTP request, making it
              suitable for session management, authentication, and tracking.
            </p>
            <p>
              - Cookies can be set with various attributes like Secure,
              HttpOnly, and SameSite to enhance security.
            </p>
          </li>
        </ol>
      </>
    ),
  },
  {
    q: "What is the difference between innerText, textContent, and innerHTML?",
    a: (
      <>
        <p>
          In JavaScript, <b>innerText, textContent,</b> and <b>innerHTML</b> are
          all used to get or set content inside an element, but they work
          differently.
        </p>
        <p>
          <b>innerText:</b> Returns the visible text content of an element,
          taking into account CSS styles like display and visibility. It
          triggers a reflow to compute the visible text.
        </p>
        <p>
          <b>textContent:</b> Returns the text content of an element and its
          descendants, ignoring CSS styles. It does not trigger a reflow and is
          generally faster than innerText.
        </p>
        <p>
          <b>innerHTML:</b> Returns the HTML content of an element, including
          tags. It allows you to get or set the HTML structure inside an
          element, but can pose security risks if not handled properly (e.g.,
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
          - Error handling in JavaScript helps us to manage unexpected issues in
          our code, like invalid inputs or failed network requests, without
          crashing the program.
        </p>
        <p>
          - The most common way is using <b>try...catch...finally</b>, where we
          wrap risky code in a <b>try</b> block, handle errors in <b>catch</b>,
          and optionally run cleanup code in <b>finally</b>.
        </p>
        <p>
          - We can also throw custom errors using the <b>throw</b> statement.
        </p>
        <p>
          - In asynchronous code, we often handle errors with <b>.catch()</b> in
          Promises or <b>try...catch</b> inside
          <b>async/await</b> functions.
        </p>
        <pre>{errorHandling}</pre>
      </>
    ),
  },
  {
    q: "What is reference error, type error and syntax error in JS?",
    a: (
      <>
        <p>
          In JavaScript, different types of errors are indicates specific
          problems.
        </p>
        <p>
          <b>ReferenceError:</b> Occurs when you try to access a variable that
          does not exist or is not defined in the current scope.
        </p>
        <p>
          <b>TypeError:</b> Happens when you perform an operation on a value of
          the wrong type or try to use a method/property that doesn’t exist on
          that type.
        </p>
        <p>
          <b>SyntaxError:</b> Raised when the code structure itself is invalid,
          — like a missing bracket or keyword.
        </p>

        <pre>{errorTypes}</pre>

        <strong>Short Interview Answer:</strong>
        <p>
          <b>ReferenceError:</b> Using a variable that isn’t declared.
          <br />
          <b>TypeError:</b> Using a value in an invalid way for its type.
          <br />
          <b>SyntaxError:</b> Mistakes in code syntax that prevent parsing.
        </p>
      </>
    ),
  },
  {
    q: "What is try-catch-finally in JavaScript?",
    a: (
      <>
        <p>
          - In JavaScript, <b>try...catch...finally</b> is used for error
          handling.
        </p>
        <p>
          - Code inside the <b>try</b> block is executed first, and if an error
          occurs, the <b>catch</b> block runs to handle it gracefully —
          preventing the app from crashing.
        </p>
        <p>
          - The <b>finally</b> block runs no matter what, whether there was an
          error or not, and it is often used for cleanup tasks like closing
          connections or resetting variables.
        </p>
        <p>- This structure makes code more reliable and easier to debug.</p>
        <pre>
          <code>{tryCatchFinally}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is a Promise in JavaScript?",
    a: (
      <>
        <p>
          - A Promise in JavaScript is an object that represents the eventual
          completion or failure of an asynchronous operation.
        </p>
        <p>- It has three states — pending, fulfilled, and rejected.</p>
        <p>
          - Promises helps us to write cleaner async code without falling into
          callback hell.
        </p>
        <p>
          - We handle results using <b>.then()</b> for success and{" "}
          <b>.catch()</b> for errors, and <b>.finally()</b> for cleanup.
        </p>
        <p>
          - Promises are also the foundation of async/await, which makes
          asynchronous code look more like synchronous code.
        </p>
        <pre>{promise}</pre>
      </>
    ),
  },
  {
    q: "Why use Promises in JS?",
    a: (
      <>
        <p>
          - In JavaScript, Promises are used to handle asynchronous operations
          in a more readable and manageable way.
        </p>
        <p>
          - Before Promises, callbacks often led to messy, nested code — what we
          call ‘callback hell.’
        </p>
        <p>
          - Promises solve that by letting us chain actions by using .then() and
          handle errors with .catch().
        </p>
        <p>
          - They make async logic easier to follow, improve error handling, and
          work seamlessly with async/await, which gives us cleaner, more
          synchronous-looking code.
        </p>
      </>
    ),
  },
  {
    q: "What is Promise chaining in JS?",
    a: (
      <>
        <p>
          - Promise chaining in JavaScript is a technique to perform multiple
          asynchronous operations in sequence.
        </p>
        <p>
          - Each <b>.then()</b> returns a new Promise, so the next{" "}
          <b>.then()</b> can use the result of the previous one.
        </p>
        <p>
          - This helps avoid deeply nested callbacks and keeps code readable.
        </p>
        <p>
          - You can also handle errors at the end of the chain using{" "}
          <b>.catch()</b>, which makes error handling consistent across multiple
          async steps.
        </p>
        <pre>{promiseChaining}</pre>
      </>
    ),
  },
  {
    q: "How async/await works internally in JS?",
    a: (
      <>
        <p>
          - <b>async/await</b> in JavaScript is a syntactic sugar over Promises,
          making asynchronous code look like a synchronous. When an <b>async</b>{" "}
          function runs, it always returns a Promise.
        </p>
        <p>
          - The <b>await</b> keyword pauses the function execution until the
          awaited Promise resolves or rejects, but it doesn’t block the main
          thread — other code keeps running.
        </p>
        <p>
          - Internally, the JavaScript engine uses the event loop and microtasks
          to resume the function once the Promise settles, which makes async
          code easier to read and maintain.
        </p>
        <pre>{asyncAwait}</pre>
      </>
    ),
  },
  {
    q: "How would you handle multiple async operations and wait for all to complete?",
    a: (
      <>
        <p>
          - To handle multiple asynchronous operations and wait for all of them
          to complete, I’d use Promise.all().
        </p>
        <p>
          - It takes an array of Promises and returns a single Promise that
          resolves when all of them succeed or rejects if any one fails.
        </p>
        <p>
          - This is useful when, for example, you need to fetch data from
          multiple APIs in parallel.
        </p>
        <p>
          - For cases where I want to handle results individually even if some
          fail, I could use Promise.allSettled(), which gives the outcome of
          each Promise without failing the entire batch.
        </p>
      </>
    ),
  },
  {
    q: "What is the difference between Promise.all, Promise.allSettled, Promise.race, and Promise.any in JS?",
    a: (
      <>
        <p>
          In JavaScript, these Promise methods help manage multiple asynchronous
          operations differently.
        </p>
        <p>
          <b>Promise.all():</b> Waits for all promises to resolve. If any
          promise rejects, it rejects immediately with that reason.
        </p>
        <p>
          <b>Promise.allSettled():</b> Waits for all promises to settle (either
          resolve or reject) and returns an array of their results.
        </p>
        <p>
          <b>Promise.race():</b> Waits for the first promise to settle (resolve
          or reject) and returns its result.
        </p>
        <p>
          <b>Promise.any():</b> Waits for the first promise to resolve. If all
          promises reject, it rejects with an AggregateError.
        </p>
        <pre>{promiseMethods}</pre>
      </>
    ),
  },
  {
    q: "Event loop and concurrency in JavaScript?",
    a: (
      <>
        <p>
          - In JavaScript, the event loop allows the language to handle
          concurrency despite being single-threaded.
        </p>
        <p>
          - The call stack executes synchronous code, while asynchronous
          operations like timers, network requests, or Promises are handled in
          the task queue or microtask queue.
        </p>
        <p>
          - The event loop continuously checks the stack and moves tasks from
          the queue to the stack when it’s empty.
        </p>
        <p>
          - This way, JavaScript can perform non-blocking operations and handle
          multiple tasks seemingly at the same time, without multi-threading.
        </p>
      </>
    ),
  },
  {
    q: "Debouncing",
    a: (
      <>
        <p>
          - Debouncing in JavaScript is a technique to limit how often a
          function is executed.
        </p>
        <p>
          - It’s commonly used for performance optimization, like handling input
          events or window resizing.
        </p>
        <p>
          - Basically, the function is only called after a specified delay has
          passed since the last time it was triggered.
        </p>
        <p>
          - This prevents it from running too frequently and improves efficiency
          — for example, ensuring an API call is only made once the user stops
          typing instead of on every keystroke.
        </p>
        <pre>{debouncing}</pre>
      </>
    ),
  },
  {
    q: "Throttling",
    a: (
      <>
        <p>
          - Throttling in JavaScript is a technique to control how often a
          function is executed over time.
        </p>
        <p>
          - Unlike debouncing, which delays execution until the activity stops,
          throttling ensures the function runs at most once in a specified
          interval.{" "}
        </p>
        <p>
          - It’s useful for tasks like handling scroll or resize events, where
          continuous execution could hurt performance.{" "}
        </p>
        <p>
          - For example, a scroll event handler might be throttled to run once
          every 200 milliseconds instead of firing hundreds of times per second.
        </p>
        <pre>{throttling}</pre>
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
          - A Memory leak in JavaScript occurs when memory that is no longer
          needed by the program is not released, leading to consume more and
          more memory over time.
        </p>
        <p>
          - This can happens due to forgotten timers or intervals, objects, such
          as through closures, event listeners, or global variables, preventing
          the garbage collector from reclaiming that memory.
        </p>
        <p>
          - Memory leaks can leads to slow down applications or even crash them,
          so tools like Chrome DevTools or Node’s memory profiler are often used
          to detect and fix them.
        </p>
      </>
    ),
  },
  {
    q: "Memory management in JavaScript?",
    a: (
      <>
        <p>
          Memory management in JavaScript is handled automatically through a
          process called garbage collection. The JavaScript engine allocates
          memory for variables and objects when they are created, and it
          automatically frees up memory that is no longer needed by the program,
          helping to prevent memory leaks and optimize performance.
        </p>
        <strong>or</strong>
        <p>
          - Memory management in JavaScript is mostly handled automatically
          through garbage collection.
        </p>
        <p>
          - The engine keeps track of which objects are still reachable and
          frees memory for objects that are no longer referenced.
        </p>
        <p>
          - Common patterns include avoiding unnecessary global variables,
          clearing timers or event listeners when no longer needed, and being
          careful with closures to prevent retaining large objects.
        </p>
        <p>
          - Efficient memory management helps keep applications fast and
          prevents leaks over time.
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
          - Garbage collection in JavaScript is the process by which the engine
          automatically frees memory that’s no longer needed by the program.
        </p>
        <p>
          - The most common strategy is mark-and-sweep, where the engine tracks
          which objects are reachable and marks them as in use.
        </p>
        <p>
          - Anything not reachable — like objects without references — gets
          cleared from memory.
        </p>
        <p>
          - It will helps to prevent memory leaks and keeps applications running
          efficiently without the developer having to manually manage memory.
        </p>
      </>
    ),
  },
  {
    q: "Performance optimization in JavaScript?",
    a: (
      <>
        <p>
          - Performance optimization in JavaScript involves writing code that
          runs efficiently and uses minimal resources.
        </p>
        <p>
          - Common strategies include minimizing DOM manipulations, debouncing
          or throttling event handlers, using efficient loops and data
          structures, caching values instead of recalculating them, and avoiding
          memory leaks.
        </p>
        <p>
          - Tools like Chrome DevTools or Lighthouse help profile and identify
          bottlenecks, while modern techniques like lazy loading, code
          splitting, and using requestAnimationFrame for animations further
          improve performance.
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
          <ol>
            <li>Remove event listeners when they are no longer needed.</li>
            <li>Avoid global variables that persist longer than necessary.</li>
            <li>
              Use weak references (WeakMap, WeakSet) for objects that can be
              garbage collected.
            </li>
            <li>
              Clear intervals and timeouts when they are no longer needed.
            </li>
            <li>
              Be cautious with closures that may hold references to outer scope
              variables.
            </li>
            <li>
              Regularly profile and monitor memory usage during development.
            </li>
            <li>
              Use tools like Chrome DevTools to identify and fix memory leaks.
            </li>
          </ol>
        </p>
      </>
    ),
  },
  {
    q: "What is module? How to work with them?",
    a: (
      <>
        <p>
          - In JavaScript, a module is a reusable piece of code that
          encapsulates functionality, making it easier to maintain and avoid
          polluting the global scope.
        </p>
        <p>
          - You can export functions, objects, or variables from one file using
          <b>export</b> and import them into another using <b>import</b>.
        </p>
        <p>
          - Modules can be either <b>ES6 modules</b> using <b>import/export</b>{" "}
          or older
          <b>CommonJS modules</b> using <b>require/module.exports</b> in
          Node.js.
        </p>
        <p>
          - They help organize code, promote reusability, and improve
          readability in larger projects.
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
    q: "What are Iterator functions in JS?",
    a: (
      <>
        <p>
          - In JavaScript, iterators are objects that let you traverse through a
          collection one element at a time.
        </p>
        <p>
          - An object becomes iterable if it implements a{" "}
          <code>
            <b>next()</b>
          </code>{" "}
          method that returns{" "}
          <code>
            <b>{"{ value, done }"}</b>
          </code>
          .
        </p>
        <p>
          - Arrays, strings, and many built-in objects are iterable by default.
        </p>
        <p>
          - You can also create custom iterators using generator functions. For
          example:
        </p>
        <pre>{iterator}</pre>
        <p>
          - Iterators are the foundation of for…of loops and allow lazy
          evaluation of sequences.
        </p>
      </>
    ),
  },
  {
    q: "What are Interceptors in JS?",
    a: (
      <>
        <p>
          - In JavaScript, <b>interceptors</b> are functions that let you{" "}
          <b>intercept and modify requests or responses</b> in libraries like
          Axios or frameworks like Angular.
        </p>
        <p>
          - They are commonly used for{" "}
          <b>logging, authentication, or error handling</b> before the request
          is sent or after a response is received. For example, in Axios:
        </p>
        <pre>{interceptors}</pre>
        <p>
          - This adds an auth token to every outgoing request. Interceptors
          provide a centralized way to <b>handle cross-cutting concerns</b> in
          your application.
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
