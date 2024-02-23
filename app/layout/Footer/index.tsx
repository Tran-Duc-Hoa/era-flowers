import { FaFacebook } from "react-icons/fa";

import { FiMapPin } from "react-icons/fi";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3">
            <div className="fs-1 from-red-to-amber">Era Flowers</div>
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
                <FaFacebook /> Facebook
              </li>
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
