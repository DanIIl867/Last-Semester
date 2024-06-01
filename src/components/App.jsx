import { Route, Routes } from "react-router-dom";
import { GreatsPage } from './Pages/GreatsPage';
import { GymPage } from './Pages/GymPage';
import { NotFound } from './Pages/NotFoundPage';
import { CatsPage } from "./Pages/CatsPage";
import { CatDitailsPage } from './Pages/CatDitailsPage'
import { Layout } from './Pages/Layout'
import { Clock } from "./Clock/Clock";
import { ColorPicker } from "./ColorPicker/ColorPicker";
import { colorPickerOptions } from 'components/ColorPicker/ColorPicker.styled';
import { Form } from "./Form/Form";
import { Dropdown } from "./DropdownMenu/DropdownMenu";
import { Counter } from "./Counter/Counter";
import { Header } from "./Header/Header";
 
export const App = () => {
  return (
    <div>

      <Header/>

      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/Home" element={<GreatsPage/>}/>
        <Route path="/Clock" element={<Clock/>}/>
        <Route path="/ColorPicker" element={<ColorPicker options={colorPickerOptions}/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Dropdown" element={<Dropdown/>}/>
        <Route path="/Counter" element={<Counter/>}/>
        <Route path="/Cats" element={<CatsPage/>}/>
        <Route path="/Gym" element={<GymPage/>}/>
        <Route path="/cats/:catId" element={<CatDitailsPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
};
