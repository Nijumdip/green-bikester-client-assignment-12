import React from "react";

const Blog = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-10">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">
          <h2 class="card-title">
            Q. 01. How will you improve the performance of a React Application?
          </h2>
          <p>
            Ans: <br />
            i. Keeping component state local where necessary. <br />
            ii. Memoizing React components to prevent unnecessary re-renders.{" "}
            <br />
            iii. Code-splitting in React using dynamic import(). <br />
            iv. Windowing or list virtualization in React. <br />
            v. Lazy loading images in React.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">
          <h2 class="card-title">
            Q. 02. What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            Ans: <br />
            There are four main types of state you need to properly manage in
            your React apps: i. Local state. <br />
            ii. Global state. <br />
            iii. Server state.
            <br />
            iv. Windowing or list virtualization in React. <br />
            v. URL state.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">
          <h2 class="card-title">
            Q. 03. How does prototypical inheritance work?
          </h2>
          <p>
            Ans: <br />
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            <br />
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object. get PrototypeOf and Object
            <br />
            <br />
            One of the most important advantages of prototypal inheritance is
            that you can add new properties to prototypes after they are
            created. This allows you to add new methods to a prototype which
            will be automatically made available to all the objects which
            delegate to that prototype.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">
          <h2 class="card-title">
            Q. 04. Why you do not set the state directly in React.
          </h2>
          <p>
            Ans: <br />
            One should never update the state directly because of the following
            reasons: If you update it directly, calling the setState() afterward{" "}
            <br />
            may just replace the update you made. When you directly update the
            state, it does not change this.
            <br />
            <br />
            Update. State can be updated in response to event handlers, server
            responses or prop changes. React provides a method called setState
            for this purpose. setState() enqueues changes to the component state <br />
            and tells React that this component and its children need to be
            re-rendered with the updated state.
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body text-left">
          <h2 class="card-title">
            Q. 06. What is a unit test? Why should write unit tests?
          </h2>
          <p>
            Ans: <br />
            Ans: <br />
            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the <br /> development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
            <br />
            <br />
            The main objective of unit testing is to isolate written code to test and determine if it works as intended.
            <br />
            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
