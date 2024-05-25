import { Route, Routes } from "react-router-dom";
import { GreatsPage } from './Pages/GreatsPage';
import { GymPage } from './Pages/GymPage';
import { NotFound } from './Pages/NotFoundPage';
import { CatsPage } from "./Pages/CatsPage";
import { CatDitailsPage } from './Pages/CatDitailsPage'
import { Layout } from './Pages/Layout'
 
export const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<GreatsPage/>}/>
        <Route path="/Cats" element={<CatsPage/>}/>
        <Route path="/Gym" element={<GymPage/>}/>
        <Route path="/cats/:catId" element={<CatDitailsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
