import { useState } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddPuppy from "./pages/AddPuppy";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";np

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Puppy Bowl {token}</h1>
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/addPlayer" element={<AddPuppy />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;