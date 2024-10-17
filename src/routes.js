// src/routes.js  
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import User from './user'; // 你的用户管理组件  

const AppRoutes = () => (  
  <Router>  
    <Routes>  
      <Route path="/user" element={<User/>} />  
    </Routes>  
  </Router>  
);  

export default AppRoutes;