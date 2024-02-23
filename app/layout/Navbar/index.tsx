import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className="container-xxl">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-xxl">
            <a className="navbar-brand" href="#">
              Era Flowers
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Hoa cưới
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hoa sinh nhật / khai trương
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hoa viếng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Giỏ hoa trái cây
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
