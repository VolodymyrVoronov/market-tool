import { RiHome2Fill, RiStockFill } from "react-icons/ri";

import { ROUTES } from "@/constants";

import NavItem from "../NavItem/NavItem";

interface INavigation {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element;
}

const navigation: INavigation[] = [
  {
    id: 1,
    title: "Main",
    link: ROUTES.MAIN,
    icon: <RiHome2Fill />,
  },
  {
    id: 2,
    title: "Stock",
    link: ROUTES.STOCK,
    icon: <RiStockFill />,
  },
];

const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex flex-row md:flex-col gap-2 md:gap-2.5 text-md md:text-lg">
        {navigation.map((item) => (
          <li key={item.id}>
            <NavItem to={item.link}>
              {item.icon} {item.title}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
