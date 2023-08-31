import { useReducer, useState } from "react";
import {
  Wrapper,
  ActionBtn,
  Progress,
  RequestState,
  Circle,
  Label,
  Title,
  Bar,
} from "./Request.styled";

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
    { label: "Finished", title: "3" },
  ];
  const startRequest = () => {
    requestDispatch({ type: "START_REQUEST" });
    setActiveStep(1);
    // Simulate a server request
    setTimeout(() => {
      setActiveStep(2);
      requestDispatch({ type: "PENDING_REQUEST" });
      // Simulate receiving a response from the server
      setTimeout(() => {
        setActiveStep(3);
        requestDispatch({ type: "FINISH_REQUEST" });
      }, 2000);
    }, 2000);
  };

  const resetRequest = () => {
    setActiveStep(1);
    requestDispatch({ type: "RESET_REQUEST" });
  };

  return (
    <Wrapper>
      <ActionBtn onClick={startRequest}>Почати запит</ActionBtn>
      <ActionBtn onClick={resetRequest}>Скинути запит</ActionBtn>
      <RequestState>Стан запиту: {requestState.requestStep}</RequestState>

      <Progress>
        {steps.map((step, index) => (
          <div key={index}>
            <Circle
              className={
                activeStep === 3 || activeStep > index + 1
                  ? "done"
                  : activeStep === index + 1
                  ? "active"
                  : ""
              }
            >
              <Label>
                {activeStep > index + 1 || activeStep === 3
                  ? "\u2713"
                  : step.title}
              </Label>
              <Title>{step.label}</Title>
            </Circle>
            {index < steps.length - 1 && (
              <Bar className={activeStep > index + 1 ? "active" : ""}></Bar>
            )}
          </div>
        ))}
      </Progress>
    </Wrapper>
  );
}

export default RequestComponent;
