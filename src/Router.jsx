import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/Layout/Layout"; // Check L is capital or small in folder name
import WelcomePage from "./Pages/FirstPage/WelcomePage";
import MenuPage from "./Pages/NavbarPages/MenuPage"; 
import AboutPage from "./Pages/NavbarPages/AboutPage";
import ContactPage from "./Pages/NavbarPages/ContactPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage />} />
        
       
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;