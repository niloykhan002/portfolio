import { Route, Routes } from "react-router";
import "./App.css";
import Root from "./layouts/Root";
import Home from "./layouts/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
