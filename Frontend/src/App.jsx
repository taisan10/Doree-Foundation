

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { Home } from "./Components/Home/index/Home";
import { About } from "./Components/About/0Index/About";
import { WhoWeAre } from "./Components/Who We Are/Index/WhoWeAre";


import './Components/UI/i18n.js';



export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About /> } />
  <Route path="/Who" element={<WhoWeAre /> } />
        </Routes>
      </Layout>
 
    </Router>
  );
}
