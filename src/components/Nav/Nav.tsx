import { RiHome2Fill, RiStockFill, RiBaseStationFill } from "react-icons/ri";

import { ROUTES } from "@/constants";

import NavItem from "../NavItem/NavItem";

interface INavigation {
  id: string;
  title: string;
  link: string;
  icon: JSX.Element;
}

const navigation: INavigation[] = [
  {
    id: self.crypto.randomUUID(),
    title: "Main",
    link: ROUTES.MAIN,
    icon: <RiHome2Fill />,
  },
  {
    id: self.crypto.randomUUID(),
    title: "Status",
    link: ROUTES.STATUS,
    icon: <RiBaseStationFill />,
  },
  {
    id: self.crypto.randomUUID(),
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
              <span className="text-blue-600">{item.icon}</span> {item.title}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
