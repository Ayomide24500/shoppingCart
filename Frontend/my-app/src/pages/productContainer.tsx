import pix2 from ".././assets/4.png";
import { addCart } from "../global/reduxState";
import { useDispatch } from "react-redux";

const ProductContainer = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-[650px] w-[24%] relative">
      <div className="mr-16 h-[120px] absolute left-17">
        <div className="w-[60px] h-[30px] bg-pink-400 flex justify-center items-center ml-2 mt-5">
          <p className="font-bold text-1xl text-white">-5%</p>
        </div>
        <div className="w-[100px] h-[30px] bg-orange-600 flex justify-center items-center ml-2 mt-5">
          <p className="font-bold text-1xl text-white">Features</p>
        </div>
      </div>
      <div className="h-[500px] w-[400px] absolute top-12 left-2 ml-12">
        <img src={pix2} alt="" />

        <div
          className="h-[80px] w-[90%] bg-slate-500 absolute bottom-10 right-10 flex justify-center items-center text-2xl font-bold text-white"
          onClick={() => {
            const productData = {
              // ... populate with your product data
            };
            dispatch(addCart(productData));
          }}
        >
          Add to Cart
        </div>
      </div>
      <div className="w-[100%] h-[150px] absolute bottom-0">
        <h1 className="font-bold text-2xl pl-8 pt-3">Cihpargoi edarg</h1>
        <p className="font-bold text-xl text-orange-600 pl-8 pt-3">
          $100.00 - $100.00
        </p>
        <p className="pl-8 pt-1">⭐⭐⭐⭐⭐ 1</p>
      </div>
    </div>
  );
};

export default ProductContainer;
