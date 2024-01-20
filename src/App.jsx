import React, { useState } from "react";
import ListEmployeeComponent from "./Components/ListEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import Employee from "./Components/Employee";
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<Employee />}></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
