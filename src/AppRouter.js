import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "./containers/about";
import HomeScreen from "./containers/home";

function AppRouter() {
  return (
    <div style={{}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/about" element={<AboutScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
