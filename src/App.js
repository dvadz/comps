import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonsPage from "./pages/ButtonPage";

const App = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path={"/"}>
          <DropdownPage />
        </Route>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/buttons"}>
          <ButtonsPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
