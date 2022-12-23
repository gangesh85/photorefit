import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <NavLink className='nav' to="/">Home</NavLink>
      <NavLink className='nav' to="orders">Orders</NavLink>
      <NavLink className='nav' to="about">About</NavLink>
      <NavLink className='nav' to="login">Login</NavLink>
    </div>
  );
};

export default Menu;
