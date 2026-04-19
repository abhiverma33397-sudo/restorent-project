import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Pages/layout/Layout";
import WelcomePage from "./Pages/FirstPage/WelcomePage";

function Router() {
  return (
   
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<WelcomePage />} />
         
        <Route path="/" element={<Layout />}>
        
       
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
