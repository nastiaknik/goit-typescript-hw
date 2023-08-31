import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0;
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  z-index: 100;
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 0;
  margin-top: 0;
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  text-align: start;
  text-decoration: none;
  font-size: 16px;
  font-weight: 550;
  color: #007bff;
  background-color: transparent;

  &.active {
    &:hover,
    &:focus {
      color: #495057;
      background-color: #fff;
    }
    margin-bottom: -1px;
    color: #495057;
    background-color: #fff;
  }
`;
