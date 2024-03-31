import { Outlet } from "react-router-dom";

import { Button } from "./components/ui/button";

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Market Tool</h1>
      <Button variant="default">Button</Button>

      <Outlet />
    </div>
  );
};

export default App;

