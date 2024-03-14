import { FLOWER_TYPES } from "@/app/constants";
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
                {FLOWER_TYPES.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <a
                      className={"nav-link active " + styles.navLink}
                      aria-current="page"
                      href={item.href}
                    >
                      {item.name.toLowerCase()}
                    </a>
                  </li>
                ))}
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
