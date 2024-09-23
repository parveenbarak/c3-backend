import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/Adminpage';
import TeacherPage from './pages/TeacherPage';
import ViewerPage from './pages/ViewerPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/viewer" element={<ViewerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
