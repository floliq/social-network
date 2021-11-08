import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/dialogs/dialogs";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className="wrapper-content">
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/dialogs" element={<Dialogs />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
