import { FaFacebook, FaPhone } from "react-icons/fa";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={"container-xxl " + styles.content}>
        <nav className={"navbar navbar-expand-lg " + styles.navbar}>
          <div className="container-xxl">
            <a className="navbar-brand from-red-to-amber fs-1" href="/">
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#wedding-section"
                  >
                    Hoa cưới
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#birthday-section">
                    Hoa sinh nhật / khai trương
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#funeral-section">
                    Hoa viếng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#fruit-basket-section">
                    Giỏ hoa trái cây
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="d-none d-xl-flex gap-2 align-items-center">
          <a
            title="Era Flowers Page"
            className={styles.listItemLink}
            href="https://www.facebook.com/shophoa.eraflowers"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook fontSize={25} />
          </a>
          <div title="Hotline" className="d-flex align-items-center gap-1">
            <FaPhone /> 0903 984 134
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
