import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form } from "./module1/Form";
import { ObserverComponent } from "./module4/Observer";
import { RequestComponent } from "./module4/2";
import { FormComponent } from "./module4/3";
import { ComponentApp } from "./module4/4";
import { Header, StyledNavLink, LinkList } from "./App.styled.js";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, { children: _jsx("nav", { children: _jsxs(LinkList, { children: [_jsx(StyledNavLink, { to: "/", children: "Hw 1" }), _jsx(StyledNavLink, { to: "/task1", children: "Task 1" }), _jsx(StyledNavLink, { to: "/task2", children: "Task 2" }), _jsx(StyledNavLink, { to: "/task3", children: "Task 3" }), _jsx(StyledNavLink, { to: "/task4", children: "Task 4" })] }) }) }), _jsx("main", { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Form, {}) }), _jsx(Route, { path: "/task1", element: _jsx(ObserverComponent, {}) }), _jsx(Route, { path: "/task2", element: _jsx(RequestComponent, {}) }), _jsx(Route, { path: "/task3", element: _jsx(FormComponent, {}) }), _jsx(Route, { path: "/task4", element: _jsx(ComponentApp, {}) }), _jsx(Route, { path: "*", element: _jsx("div", { children: "404" }) })] }) }), _jsx(ToastContainer, {})] }));
}
export default App;
