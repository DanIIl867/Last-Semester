import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}/>
      </Routes>
    </div>
  );
};
