import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './pages/create/Create';
import EditUser from './pages/editUser/EditUser';
import Home from './pages/home/Home';
import SingleUser from './pages/singleUser/SingleUser';
import { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';

function App() {

  const [checked, setChecked] = useState(false);

  return (
    <div className={checked ? "darkApp" : "app"}>
      <FormControlLabel label="Dark mode" control={<Switch size="large" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>} /> {/*Getting the value from the "switch" element (note that whenever the switch is switched on, the "checked" prop value is true and whenever it is switched off, the "checked" prop value is false. I'm simply grabbing that value using my own "checked" useState. )*/}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<EditUser />} />
            <Route path="user">
              <Route index element="" />
              <Route path=":id" element={<SingleUser/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
