import { useReducer, useState } from "react";
import "./style.css";

// Add types for the following code elements:

// 1. RequestStep is a string literal.
// 2. State represents an object with two properties: isRequestInProgress and requestStep.
// 3. Action represents possible actions that can be dispatched to the reducer.

type State = {
  isRequestInProgress: boolean;
  requestStep: "start" | "idle" | "pending" | "finished";
};

type Action = {
  type:
    | "START_REQUEST"
    | "PENDING_REQUEST"
    | "FINISH_REQUEST"
    | "RESET_REQUEST";
};

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
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { label: "Start", title: "1" },
    { label: "Pending", title: "2" },
    { label: "Finish", title: "3" },
  ];
  const startRequest = () => {
    requestDispatch({ type: "START_REQUEST" });
    setActiveStep((prevStep) => (prevStep <= 3 ? prevStep + 1 : 1));
    // Simulate a server request
    setTimeout(() => {
      setActiveStep((prevStep) => (prevStep <= 3 ? prevStep + 1 : 1));
      requestDispatch({ type: "PENDING_REQUEST" });
      // Simulate receiving a response from the server
      setTimeout(() => {
        setActiveStep((prevStep) => (prevStep <= 3 ? prevStep + 1 : 1));
        requestDispatch({ type: "FINISH_REQUEST" });
      }, 2000);
    }, 2000);
  };

  const resetRequest = () => {
    setActiveStep(1);
    requestDispatch({ type: "RESET_REQUEST" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
        }}
        onClick={startRequest}
      >
        Почати запит
      </button>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          margin: "5px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "16px",
        }}
        onClick={resetRequest}
      >
        Скинути запит
      </button>
      <p style={{ marginTop: "10px", fontSize: "18px" }}>
        Стан запиту: {requestState.requestStep}
      </p>

      <div className="progress" style={{ display: "flex" }}>
        {steps.map((step, index) => (
          <div key={index}>
            <div
              className={`circle ${
                activeStep === index + 1
                  ? "active"
                  : activeStep > index + 1
                  ? "done"
                  : ""
              }`}
            >
              <span className="label">
                {activeStep > index + 1 ? "\u2713" : step.title}
              </span>
              <span className="title">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <span
                className={`bar ${activeStep > index + 1 ? "active" : ""}`}
              ></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestComponent;
