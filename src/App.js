import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import Homepage from "./components/Homepage";

function App() {


  return (
    <div>
        <Routes>
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
    </div>
  );
}

export default App;
