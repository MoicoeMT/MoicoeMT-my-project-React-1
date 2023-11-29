import React from "react"

const MyNavbar = () => {
  return (
    <nav className="navbar mb-5 navbar-expand-lg bg-dark">
      <div className="container-fluid d-flex justify-content-between mx-4">
        <div className="d-flex justify-content-between w-100">
          <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">about</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="#">Service</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="#">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default MyNavbar;