import { Outlet } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Market Tool</h1>

      <Outlet />
    </div>
  );
};

export default App;

