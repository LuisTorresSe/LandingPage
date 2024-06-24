import { useState } from "react";
import styles from "./Header.module.css";
import HamburgerIconSVG from "../../../../components/svgs/icons/HamburgerIconSVG";
import CloseIconSVG from "../../../../components/svgs/icons/CloseIconSVG";
import { Link, NavLink } from "react-router-dom";

interface Props {
  showHeader: boolean;
}

function Header({ showHeader }: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div
      className={`${styles["header"]} ${
        showHeader ? styles["header__fixed"] : ""
      }`}
    >
      <div
        onClick={toggleMenu}
        className={`${styles["header__icon"]} ${
          !openMenu && styles["header__icon-hamburger--active"]
        } `}
      >
        <HamburgerIconSVG />
      </div>

      <div
        onClick={toggleMenu}
        className={`${styles["header__icon"]} ${
          openMenu && styles["header__icon-close--active"]
        } `}
      >
        <CloseIconSVG />
      </div>

      <div
        className={`${styles["header__menu"]} ${
          openMenu && styles["header__menu--active"]
        }`}
      >
        <nav className={styles["header__nav"]}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles["header__link"]} ${styles["header__link--active"]} `
                : styles["header__link--active"]
            }
          >
            Inicio
          </NavLink>
          <NavLink to="" className={styles["header__link"]}>
            Precios
          </NavLink>
        </nav>
        <div className={styles["header__nav-app"]}>
          <Link to="" className={styles["header__link-login"]}>
            Ingresar
          </Link>
          <Link to="" className={styles["header__link-register"]}>
            Registrar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
