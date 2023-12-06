import { useParams } from "react-router-dom";
import { storeHooks } from "../hook/storeHook";
import data from "../data.json";
import { useState } from "react";

const DetailsPage = () => {
  const { productID } = useParams();
  const { product } = storeHooks();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const singleProduct = data?.find((el: any) => {
    return el.id === parseInt(productID!);
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <div className="bg-gray-100 h-full w-[100%]">
      <div className="h-[450px] w-[100%] bg-slate-300 flex justify-around items-center gap-3">
        <div className="w-[25%] h-[400px] relative">
          <p className="font-bold pl-9 pt-4 text-2xl text-gray-400">Product</p>
          <div className="w-[100%] h-[140px] flex justify-between items-center">
            <img
              src=""
              alt=""
              className="w-[100px] h-[40px] bg-pink-500 ml-10"
            />
            <p className="pr-10">name</p>
          </div>
          <button className="h-[60px] w-[190px] bg-orange-600 absolute bottom-8">
            Add To Cart
          </button>
        </div>
        <div className="w-[100px] h-[300px]">
          <p className="font-bold pl-4 pt-4 text-1xl text-gray-400">Price</p>
          <div className="flex justify-around items-center h-[200px]">
            <p className="font-bold text-1xl text-orange-400">$300.00</p>
          </div>
        </div>
        <div className="w-[20%] h-[300px]">
          <p className="font-bold pl-9 pt-4 text-1xl text-gray-400">Qty</p>
          <div className="flex justify-around items-center h-[200px]">
            <div className="h-[80px] w-[200px] bg-slate-100 flex  justify-around items-center">
              <p>-</p>
              <p>0</p>
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="w-[22%] h-[300px]">
          <p className="font-bold pl-9 pt-4 text-1xl text-gray-400">Total</p>
          <div className="flex justify-around items-center h-[200px]">
            <p className="font-bold text-1xl text-orange-400">$300.00</p>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[100%]">
        <div className="flex justify-center items-center flex-col gap-2">
          <h1 className="font-bold text-xl pt-5">
            Spend <span className="text-orange-500">$1,700.00</span> more to
            reach FREE SHIPPING!
          </h1>
          <p className="font-bold text-xl">
            to add more products to your cart and receive free shipping for
            <span className="text-orange-500">$2,000.00</span>
          </p>
        </div>
        <div className="h-[700px] w-[100%] flex items-center justify-around">
          <div className="w-[30%] h-[490px] ">
            <p className="pt-9 pl-10 font-bold">Coupon</p>
            <div className="flex justify-around items-center mt-6">
              <input type="text" className="w-[260px] h-[50px] pl-5" />
              <button className="h-[50px] w-[200px] bg-orange-500 text-white text-xl ">
                Add to cart
              </button>
            </div>
          </div>
          <div className="w-[30%] h-[490px] mb-14">
            <div className="h-[50px] w-[100%] border-b-4">
              <p className="font-bold text-xl">Cart Total</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="h-[440px] w-[200px]">
                <p className="font-bold text-xl pl-9 pt-11">SubTotal</p>
                <p className="font-bold text-xl pl-9 pt-11">Shipping</p>
              </div>
              <div className="h-[440px] w-[300px]">
                <p className="font-bold text-xl pl-16 pt-11">$300.00</p>
                <div className="flex justify-around items-center">
                  <p className="pt-9">Flat rate: $20.00</p>
                  <div className="mr-9 mt-11">
                    <input
                      type="checkbox"
                      id="myCheckbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="hidden" // hide the default checkbox
                    />
                    <label
                      htmlFor="myCheckbox"
                      className={`${
                        isChecked
                          ? "bg-orange-500 border-white"
                          : "bg-transparent border-orange-500"
                      } border-2 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    >
                      {isChecked && (
                        <span className="text-white">&#10003;</span>
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex justify-around items-center h-[30px] mr-2">
                  <p className="pt-9">local pickup: $20.00</p>
                  <div className="mr-9 mt-8">
                    <input
                      type="checkbox"
                      id="myCheckbox2"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      className="hidden"
                    />
                    <label
                      htmlFor="myCheckbox2"
                      className={`${
                        isChecked2
                          ? "bg-blue-500 border-white"
                          : "bg-transparent border-blue-500"
                      } border-2 w-8 h-8 flex items-center justify-center cursor-pointer`}
                    >
                      {isChecked2 && (
                        <span className="text-white">&#10003;</span>
                      )}
                    </label>
                  </div>
                </div>
                <h1 className="font-bold text-xl pl-16 pt-11">
                  Shipping to CA
                </h1>
                <h1 className="text-xl pl-16 pt-6 text-orange-600">
                  change address
                </h1>
              </div>
            </div>
            <div className="w-[100%] h-[120px] border-t flex justify-between items-center">
              <p className="pl-10 pt-7 font-bold text-xl">Total</p>
              <p className="pr-10 pt-7 font-bold text-xl text-orange-600">
                $320.00
              </p>
            </div>
          </div>
          <div className="w-[30%] h-[490px] flex justify-center items-center">
            <button className="h-[60px] w-[350px] bg-orange-600 text-white text-xl ">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
