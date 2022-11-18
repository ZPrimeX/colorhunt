import React from "react";
import { Routes, Route } from 'react-router-dom';
import PaletteProvider from "./components/context/PaletteContext";
import Layout from "./components/navbar/Layout";
import Home from "./Home";

function App() {
  return (
    <PaletteProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </PaletteProvider>
  );
}

export default App;
