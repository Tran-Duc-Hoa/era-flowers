import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaPhone } from "react-icons/fa";

import { FLOWER_TYPES } from "@/app/constants";
import styles from "./Header.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar} />

      <div className={"container-xxl"}>
        <div className={styles.middleBar}>
          <Link href="/" className={"d-none d-xl-block " + styles.logo}>
            <Image width={250} height={60} alt="Era Flowers" src="/logo.jpg" />
          </Link>
          <div className={"d-none d-xl-block " + styles.searchGroup}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm"
                aria-label="Tìm kiếm sản phẩm"
                aria-describedby="search-input"
              />
              <span
                className="input-group-text btn btn-primary"
                id="search-input"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
            </div>
          </div>
          <div className="d-none d-xl-flex gap-3 align-items-center">
            <Link
              title="Era Flowers Page"
              className={styles.listItemLink}
              href="https://www.facebook.com/shophoa.eraflowers"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook fontSize={25} />
            </Link>
            <div
              title="Hotline"
              className={"d-flex align-items-center gap-1 " + styles.hotline}
            >
              <FaPhone fontSize={24} color="#0d6efd" />
              <div>
                <p className={styles.textSmall}>Gọi đặt hàng</p>
                <p>0903 984 134</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className="container-xxl">
          <nav className={"navbar navbar-expand-lg " + styles.navbar}>
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
            <Link href="/" className="d-xl-none">
              <Image
                width={250}
                height={60}
                alt="Era Flowers"
                src="/logo.jpg"
              />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {FLOWER_TYPES.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link
                      className={"nav-link " + styles.navLink}
                      aria-current="page"
                      href={item.href}
                    >
                      {item.name.toLowerCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
