import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";


export default function App() {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    
  );
}