import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3">
            <Link href="/" className={styles.logo}>
              <Image
                width={250}
                height={60}
                alt="Era Flowers"
                src="/logo.jpg"
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <h5>CHĂM SÓC KHÁCH HÀNG</h5>
            <ul className={styles.list}>
              <li>Giới Thiệu</li>
              <li>Liên Hệ</li>
              <li>Chính Sách Vận Chuyển</li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <h5>THEO DÕI</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <a
                  title="Era Flowers Page"
                  className={styles.listItemLink}
                  href="https://www.facebook.com/shophoa.eraflowers"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebook /> Facebook
                </a>
              </li>
              <ul className={styles.list}>
                <li className={styles.listItem} title="Hotline">
                  <FaPhone /> 0903 984 134
                </li>
              </ul>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <h5>ĐỊA CHỈ</h5>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <FiMapPin />
                <p>A2 Eratown Đức Khải, Quận 7, TP.HCM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
