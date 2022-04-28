import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const localtion = useLocation();
  return (
    <header className="header">
      <h1>Task Tracker {title}</h1>
      {localtion.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

// CSS in JS
// const headingStyle = { color: "red", backgroundColor: "black" };

export default Header;
