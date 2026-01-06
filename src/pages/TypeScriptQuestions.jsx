const types = `   let name: string;
    let age: number;
    let isAdmin: boolean;
`;

const anyUnknown = `   let x: unknown;
    x = "hello";
    if (typeof x === "string") console.log(x.toUpperCase());
`;

const union = `let value: number | string;`;

const intersection = ` type A = { name: string };
  type B = { age: number };
  type C = A & B;   // { name, age }
`;

const interfaces = `  interface User {
     name: string;
     age?: number;   // optional property
  }
`;

const generics = `  function identity<T>(value: T): T {
     return value;
  }
`;

const never = `  function err(): never {
     throw new Error("error");
  }
`;

const eenum = `  enum Status {
     Success,
     Error,
     Pending
  }
`;

const inference = `let x = 10; // inferred as number`;

const optionalChaining = `user?.address?.city`;

const nullishCoal = `let msg = username ?? "Guest";`;

const tuple = `let person: [string, number] = ["John", 25];`;

const readonly = `  interface User {
    readonly id: number;
  }
`;

const keyof = `type Keys = keyof User; // "name" | "age"`;

const partial = `    Partial<User>   // all optional
    Required<User>  // all required
    Pick<User, "name">
    Omit<User, "age">
`;

const record = `type Roles = Record<string, number>;`;

const ttypeof = `  const user = { name: "A" };
  type UserType = typeof user;
`;

const asconst = `const x = { type: "primary" } as const;`;

const assertion = `(value as string).toUpperCase();`;

const module = ` export const a = 10;
  import { a } from "./file";
`;

const customType = `  function isString(x: unknown): x is string {
    return typeof x === "string";
  }
`;
const interfaceMergingAndTypeAlias = `   interface A { a: string; }
    interface A { b: number; }
    // merged A = { a, b }
`;

export const TypeScriptQuestions = [
  {
    q: "What is TypeScript?",
    a: (
      <p>
        TypeScript is a superset of JavaScript that adds static typing,
        interfaces, and other features to catch errors during development.
      </p>
    ),
  },
  {
    q: "What are the main advantages of TypeScript?",
    a: (
      <>
        <li>Catch errors at compile time</li>
        <li>Better IntelliSense & autocomplete</li>
        <li>Cleaner, self-documenting code</li>
        <li>Supports OOP features (interfaces, abstract classes, generics)</li>
        <li>Improves large-scale application maintainability</li>
      </>
    ),
  },
  {
    q: "What are Types in TypeScript?",
    a: (
      <>
        <pre>
          <code>{types}</code>
        </pre>
        TS has primitive, union, literal, tuple, enum, any, unknown, never, void
        etc.
      </>
    ),
  },
  {
    q: "What is the difference between any and unknown",
    a: (
      <>
        <strong>any:</strong>
        <li>Turns off type checking</li>
        <li>Unsafe</li>
        <strong>unknown:</strong>
        <li>Type-safe</li>
        <li>Must be checked before use</li>
        <pre>
          <code>{anyUnknown}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Union type?",
    a: (
      <>
        <p>Allows a variable to have multiple types.</p>
        <pre>
          <code>{union}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Intersection type?",
    a: (
      <>
        <p>Combines multiple types into one.</p>
        <pre>
          <code>{intersection}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What are Interfaces in TypeScript?",
    a: (
      <>
        <p>Interfaces define the shape of an object.</p>
        <pre>
          <code>{interfaces}</code>
        </pre>
      </>
    ),
  },
  {
    q: "Difference between type and interface?",
    a: <p>...</p>,
  },
  {
    q: "What are Generics?",
    a: (
      <>
        <p>Generics allow reusable components with a placeholder type.</p>
        <pre>
          <code>{generics}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is never type?",
    a: (
      <>
        <p>
          Represents values that never occur. Used for:
          <li>functions that throw errors</li>
          <li>infinite loops</li>
        </p>
        <pre>
          <code>{never}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is enum in TypeScript?",
    a: (
      <>
        <p>Group of constant values.</p>
        <pre>
          <code>{eenum}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Type Inference?",
    a: (
      <>
        <p>TypeScript automatically infers types:</p>
        <pre>
          <code>{inference}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Optional Chaining?",
    a: (
      <>
        <p>Safe access for nested object properties.</p>
        <pre>
          <code>{optionalChaining}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Nullish Coalescing ?? ?",
    a: (
      <>
        <p>Provides fallback only for null or undefined.</p>
        <pre>
          <code>{nullishCoal}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Tuple in TypeScript?",
    a: (
      <>
        <p>Array with fixed types and order.</p>
        <pre>
          <code>{tuple}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What are Readonly properties?",
    a: (
      <>
        <p>Prevents modification.</p>
        <pre>
          <code>{readonly}</code>
        </pre>
      </>
    ),
  },
  {
    q: "Explain keyof keyword.",
    a: (
      <>
        <p>Extracts property names of an object type.</p>
        <pre>
          <code>{keyof}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Partial, Required, Pick, Omit?",
    a: (
      <>
        <p>Built-in utility types.</p>
        <pre>
          <code>{partial}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Record type?",
    a: (
      <>
        <p>Creates an object with fixed keys and value types.</p>
        <pre>
          <code>{record}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is typeof in TypeScript?",
    a: (
      <>
        <p>Extracts type from a value.</p>
        <pre>
          <code>{ttypeof}</code>
        </pre>
      </>
    ),
  },
  {
    q: "Explain as const.",
    a: (
      <>
        <p>Makes object values immutable (readonly + literal types).</p>
        <pre>
          <code>{asconst}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What are Assertion Functions?",
    a: (
      <>
        <p>Tell TypeScript a value is a specific type.</p>
        <pre>
          <code>{assertion}</code>
        </pre>
      </>
    ),
  },
  {
    q: "What is Module in TypeScript?",
    a: (
      <>
        <p>Any file that uses import or export becomes a module.</p>
        <p>It helps split code into smaller, reusable pieces.</p>
        <pre>
          <code>{module}</code>
        </pre>
      </>
    ),
  },
  {
    q: "How to create a custom Type guards?",
    a: (
      <>
        <p>
          Type guards are functions or checks that let TypeScript narrow down
          the type at runtime.
        </p>
        <pre>
          <code>{customType}</code>
        </pre>
      </>
    ),
  },
  {
    q: "Difference between interface merging and type alias?",
    a: (
      <>
        <p>
          Interfaces are designed for object shapes and can be extended or
          merged automatically.
        </p>
        <p>
          Type aliases are more flexible but cannot merge — they must be defined
          once.
        </p>
        <pre>
          <code>{interfaceMergingAndTypeAlias}</code>
        </pre>
      </>
    ),
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
  {
    q: "",
    a: <p>...</p>,
  },
];
