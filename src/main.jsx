import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login.jsx';
import Start from './assets/start/Start.jsx';
import Atividade from './assets/start/Atividade.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Atividade' element={<Atividade />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  </StrictMode>,
);
