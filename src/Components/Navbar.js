import { Link } from "react-router-dom";

export default function Navbar(props) {
  const darkmode = () => {
    if (document.querySelector(".fa-regular")) {
      document.querySelector(".fa-regular").classList.add("fa-solid");
      document.querySelector(".fa-regular").classList.remove("fa-regular")
      document.body.style.backgroundColor='white'

    } else {
      document.querySelector(".fa-solid").classList.add("fa-regular")
      document.querySelector(".fa-solid").classList.remove("fa-solid");
      document.body.style.backgroundColor='black'


    }
  };
  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainmemt
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <i
              className="fa-solid  fa-2xl fa-moon cp1 mx-3"
              onClick={darkmode}
            ></i>
          </div>
        </nav>
      </div>
    </>
  );
}
