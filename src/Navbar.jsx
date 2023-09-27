import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            MoVie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="movies">
                  movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tv">
                  Tv
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="people">
                  People
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav  d-flex mb-2 mb-lg-0">
            <li className="nav-item order-lg-first order-last d-flex align-items-center">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-soundcloud"></i>
              </li>
              <li className="nav-item order-lg-last order-first ">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item order-lg-last order-first">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li><li className="nav-item order-lg-last order-first">
                <span className="nav-link" to="register">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
