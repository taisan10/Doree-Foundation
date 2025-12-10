

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { Home } from "./Components/Home/index/Home";




export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
  <Route path="/" element={<Home />} />
   

         
        </Routes>
      </Layout>
 
    </Router>
  );
}
