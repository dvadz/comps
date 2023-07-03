import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonsPage from "./pages/ButtonPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
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
