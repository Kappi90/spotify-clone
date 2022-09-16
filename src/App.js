import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumPage from "./components/AlbumPage";
import BottomNav from "./components/BottomNav";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/albumPage' element={<AlbumPage />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
