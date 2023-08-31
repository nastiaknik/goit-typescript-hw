import { Routes, Route } from "react-router-dom";
import { Form } from "./module1/Form";
import { Observer } from "./module4/Observer";
import { RequestComponent } from "./module4/2";
import { FormComponent } from "./module4/3";
import { ComponentApp } from "./module4/4";
import { Header, StyledNavLink, LinkList } from "./App.styled.js";

function App() {
  return (
    <>
      <Header>
        <nav>
          <LinkList>
            <StyledNavLink to="/homework1">Homework 1</StyledNavLink>
            <StyledNavLink to="/task1">Task 1</StyledNavLink>
            <StyledNavLink to="/task2">Task 2</StyledNavLink>
            <StyledNavLink to="/task3">Task 3</StyledNavLink>
            <StyledNavLink to="/task4">Task 4</StyledNavLink>
          </LinkList>
        </nav>
      </Header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Form />} /> */}
          <Route path="/homework1" element={<Form />} />
          <Route path="/task1" element={<Observer />} />
          <Route path="/task2" element={<RequestComponent />} />
          <Route path="/task3" element={<FormComponent />} />
          <Route path="/task4" element={<ComponentApp />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
