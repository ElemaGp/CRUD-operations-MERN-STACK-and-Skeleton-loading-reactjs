import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/create/Create';
import EditUser from './pages/editUser/EditUser';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<EditUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
