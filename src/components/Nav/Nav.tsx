import { RiHome2Fill, RiStockFill } from "react-icons/ri";

import { ROUTES } from "@/constants";

import NavItem from "../NavItem/NavItem";

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex flex-row md:flex-col gap-2.5 text-lg">
        <li>
          <NavItem to={ROUTES.MAIN}>
            <RiHome2Fill /> Main
          </NavItem>
        </li>

        <li>
          <NavItem to={ROUTES.STOCK}>
            <RiStockFill /> Stock
          </NavItem>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
