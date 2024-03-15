import { Route, Routes } from "react-router-dom";
import Master from "./pages/master/master";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Master />} />
      </Routes>
    </div>
  );
}

export default App;
