import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        {props.searchBar ? <form className= "d-flex">
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button
              className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>:""}
         </div>
         </div>      
    </nav>
  );
}
Header.defaultProps = {
  title: "your Title is here",
  searchBar: true,
};

Header.propTypes = {
  title: propTypes.string,
  searchBar: propTypes.bool.isRequired,
};
