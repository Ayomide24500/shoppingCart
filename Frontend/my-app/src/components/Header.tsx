import pix from ".././assets/logo-1.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import Card from "../pages/Card";
import { useState } from "react";
const Header = () => {
  const cart = useSelector((state: any) => state.cart);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleShowgo = () => {
    setShow(false);
  };
  return (
    <header className="w-[100%] h-[70px] p-4 flex justify-between items-center relative">
      <div className="h-[50px] w-[200px] text-black flex justify-center items-center">
        <img src={pix} alt="" />
      </div>
      <div className="h-[40px] w-[40%] flex justify-around items-center">
        <nav className="font-bold cursor-pointer">Home</nav>
        <nav className="font-bold cursor-pointer">Shop</nav>
        <nav className="font-bold cursor-pointer">Pages</nav>
        <nav className="font-bold cursor-pointer">Contact</nav>
      </div>
      <div className="h-[40px] w-[20%] flex justify-around items-center">
        <div className="h-[40px] w-[60px] flex justify-center items-center font-bold text-2xl">
          <IoSearchOutline />
        </div>
        <div className="h-[40px] w-[60px] flex justify-center items-center font-bold text-2xl">
          <FaRegHeart />
        </div>
        <div
          className="h-[40px] w-[60px] flex justify-center items-center font-bold text-2xl"
          onClick={handleShow}
        >
          <FaCartShopping />
          {cart.length}
        </div>
      </div>
      <Card show={show} handleShowgo={handleShowgo} />
    </header>
  );
};

export default Header;
