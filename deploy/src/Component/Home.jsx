import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App2.css";
import gambar from "../Image/gambar1.png";

function Home() {
  return (
    <>
      <section className="container">
        <nav className="fixed-top navbar navbar-expand-lg bg-body-tertiary pt-4 ps-4 pe-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Simple Header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item nav-pills">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <Link to="/create-product" className="btn btn-primary ms-2">
                Create Product
              </Link>
            </div>
          </div>
        </nav>
      </section>
      <section className="hero" id="home">
        <main className="content">
          <h1>
            Better Solutions For Your <br />
            Business
          </h1>
          <p>
            We are team of talented desginers making websites with Bootstrap
          </p>
          <a href="#" className="cta">
            Get Started
          </a>
          <a href="" className="cta1">
            Watch Video
          </a>
        </main>
        <div className="image">
          <img src={gambar} alt="" />
        </div>
      </section>
      <section className="sec-card">
        <div className="card-cotainer">
          <div className="card" style={{ width: "18rem" }}>
            <img src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src="" alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="btn-loadmore">
        <Link to="/load-more" className="btn btn-primary ms-2">
                Load More
              </Link>
        </div>
      </section>

      <section className="sub-footer">
        <div className="info-container">
          <div className="info">
            <ul>
              <li>
                <h2>
                  <strong>Arsha</strong>
                </h2>
              </li>
              <li>
                <p>A108 Adam Street</p>
              </li>
              <li>
                <p>New York,NY 535022</p>
              </li>
              <li>
                <p>United States</p>
              </li>
              <br />
              <li>
                <p>
                  <b>Phone:</b>+1 5589 55488 55
                </p>
              </li>
              <li>
                <p>
                  <b>Email:</b>info@example.com
                </p>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <strong>Useful Links</strong>
              </li>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#">Term of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <strong>Our Services</strong>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>
                <strong>Our Social Networks</strong>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque quia ea fugit temporibus!
                </p>
              </li>
              <li>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="final">
        <p>©Copyright Ashra . All Right Reserved</p>
        <p>
          Designed by <span>Ivan</span>
        </p>
      </div>
    </>
  );
}

export default Home;
