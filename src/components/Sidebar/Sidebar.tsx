import Nav from "../Nav/Nav";

const Sidebar = (): JSX.Element => {
  return (
    <div className="min-w-[200px] p-3 border-b-[1px] md:border-r-[1px]">
      <Nav />
    </div>
  );
};

export default Sidebar;
