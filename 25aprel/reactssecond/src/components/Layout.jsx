import Navbar from "./Navbar";
import Hero from "./Hero";

import Footer from "./Footer";


import "./style.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Layout;
