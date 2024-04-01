import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.css";

interface INavItemProps {
  to: string;

  children: ReactNode;
}

const NavItem = ({ to, children }: INavItemProps): JSX.Element => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
