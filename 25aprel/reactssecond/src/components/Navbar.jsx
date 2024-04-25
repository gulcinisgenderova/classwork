import LeftNav from "./LeftNav";
import Right from "./Right";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftNav />
      <Right />
    </div>
  );
};

export default Navbar;
