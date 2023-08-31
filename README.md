# Homework 4 assignment for the TypeScript Module

## Task 1

You have a React component that uses useRef and IntersectionObserver to determine when the user reaches the end of the content.

1. Set the correct prop types for this component. It has two properties: children and onContentEndVisible. children can be any valid React node, and onContentEndVisible is a function without arguments that returns void.

2. Set the correct type for useRef. The endContentRef reference is used for a div element that is located at the end of the content.

3. Set the correct type for options (a class can also be a type for options).

```ts
import React, { useEffect, useRef } from "react";

export function Observer({ children, onContentEndVisible }: Props) {
  const endContentRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
      root: null,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          onContentEndVisible();
          observer.disconnect();
        }
      });
    }, options);

    if (endContentRef.current) {
      observer.observe(endContentRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [onContentEndVisible]);

  return (
    <div>
      {children}
      <div ref={endContentRef} />
    </div>
  );
}
```

## Task 2

Add types for the following code elements:

1. RequestStep is a string literal.
2. State represents an object with two properties: isRequestInProgress and requestStep.
3. Action represents possible actions that can be dispatched to the reducer.

```ts
import React, { useReducer } from "react";

const initialState: State = {
  isRequestInProgress: false,
  requestStep: "idle",
};

function requestReducer(state: State, action: Action): State {
  switch (action.type) {
    case "START_REQUEST":
      return { ...state, isRequestInProgress: true, requestStep: "start" };
    case "PENDING_REQUEST":
      return { ...state, isRequestInProgress: true, requestStep: "pending" };
    case "FINISH_REQUEST":
      return { ...state, isRequestInProgress: false, requestStep: "finished" };
    case "RESET_REQUEST":
      return { ...state, isRequestInProgress: false, requestStep: "idle" };
    default:
      return state;
  }
}

export function RequestComponent() {
  const [requestState, requestDispatch] = useReducer(
    requestReducer,
    initialState
  );

  const startRequest = () => {
    requestDispatch({ type: "START_REQUEST" });
    // Simulate a server request
    setTimeout(() => {
      requestDispatch({ type: "PENDING_REQUEST" });
      // Simulate receiving a response from the server
      setTimeout(() => {
        requestDispatch({ type: "FINISH_REQUEST" });
      }, 2000);
    }, 2000);
  };

  const resetRequest = () => {
    requestDispatch({ type: "RESET_REQUEST" });
  };

  return (
    <div>
      <button onClick={startRequest}>Почати запит</button>
      <button onClick={resetRequest}>Скинути запит</button>
      <p>Стан запиту: {requestState.requestStep}</p>
    </div>
  );
}

export default RequestComponent;
```

## Task 3

You are creating a form component in React. You have an input field in which you want to track changes using the onChange event handler. Your task is to correctly type the event that is passed to this function.

```ts
import React, { useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

## Task 4

You're applying context to your menu, and now you need to type it:

1. Describe the type SelectedMenu: This should be an object containing an id of type MenuIds.

2. Describe the type MenuSelected: This type is an object that contains selectedMenu.

3. Describe the type MenuAction: This type represents an object with a method onSelectedMenu that takes an object of type SelectedMenu as an argument and returns void.

4. Describe the type PropsProvider: Describe the correct type for children.

5. Describe the type PropsMenu: Describe the type for menus, it should be of type Menu.
