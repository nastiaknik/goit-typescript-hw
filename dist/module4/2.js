import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer, useState } from "react";
import { Wrapper, ActionBtn, Progress, RequestState, Circle, Label, Title, Bar, } from "./Request.styled";
const initialState = {
    isRequestInProgress: false,
    requestStep: "idle",
};
function requestReducer(state, action) {
    switch (action.type) {
        case "START_REQUEST":
            return Object.assign(Object.assign({}, state), { isRequestInProgress: true, requestStep: "start" });
        case "PENDING_REQUEST":
            return Object.assign(Object.assign({}, state), { isRequestInProgress: true, requestStep: "pending" });
        case "FINISH_REQUEST":
            return Object.assign(Object.assign({}, state), { isRequestInProgress: false, requestStep: "finished" });
        case "RESET_REQUEST":
            return Object.assign(Object.assign({}, state), { isRequestInProgress: false, requestStep: "idle" });
        default:
            return state;
    }
}
export function RequestComponent() {
    const [requestState, requestDispatch] = useReducer(requestReducer, initialState);
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
    return (_jsxs(Wrapper, { children: [_jsx(ActionBtn, { onClick: startRequest, children: "\u041F\u043E\u0447\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442" }), _jsx(ActionBtn, { onClick: resetRequest, children: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u0437\u0430\u043F\u0438\u0442" }), _jsxs(RequestState, { children: ["\u0421\u0442\u0430\u043D \u0437\u0430\u043F\u0438\u0442\u0443: ", requestState.requestStep] }), _jsx(Progress, { children: steps.map((step, index) => (_jsxs("div", { children: [_jsxs(Circle, { className: activeStep === 3 || activeStep > index + 1
                                ? "done"
                                : activeStep === index + 1
                                    ? "active"
                                    : "", children: [_jsx(Label, { children: activeStep > index + 1 || activeStep === 3
                                        ? "\u2713"
                                        : step.title }), _jsx(Title, { children: step.label })] }), index < steps.length - 1 && (_jsx(Bar, { className: activeStep > index + 1 ? "active" : "" }))] }, index))) })] }));
}
export default RequestComponent;
