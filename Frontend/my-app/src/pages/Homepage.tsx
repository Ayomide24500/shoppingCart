import pix from ".././assets/1.png";
import pix1 from ".././assets/yu.jpg";
import pix3 from ".././assets/2.png";
import pix4 from ".././assets/3.png";
import pix5 from ".././assets/6.png";
import { useDispatch } from "react-redux";
import { addCart } from "../global/reduxState";
import pix6 from ".././assets/banner-04.png";
import ProductContainer from "./productContainer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Homepage = () => {
  const dispatch = useDispatch();
  const generateProductData = (
    id: any,
    name: any,
    price: any,
    rating: any,
    image: any
  ) => ({
    id,
    name,
    price,
    rating,
    image,
  });

  const productData1 = generateProductData(
    1,
    "Product 1",
    "$20.00 $420.00",
    "⭐⭐⭐⭐⭐ 1",
    pix3
  );
  const productData2 = generateProductData(
    2,
    "Product 2",
    "$30.00 $500.00",
    "⭐⭐⭐⭐⭐ 2",
    pix4
  );
  const productData3 = generateProductData(
    3,
    "Product 3",
    "$25.00 $450.00",
    "⭐⭐⭐⭐⭐ 3",
    pix5
  );

  const handleAddToCart = (productData: any) => {
    dispatch(addCart(productData));
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const Target = new Date("9/8/2023 11:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = Target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[100vh] w-[100%]">
      <div
        className="h-[700px] w-[100%] flex justify-around items-center"
        style={{
          backgroundImage: `url(${pix1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="h-[600px] w-[26%] flex justify-center items-center">
          <img src={pix} alt="" />
        </div>
        <div className="h-[600px] w-[40%]">
          <div className="font-bold pl-10 pt-10 text-2xl">
            Hybrid Smartwatches
          </div>
          <h1 className="text-5xl font-bold pl-10 pt-10 text-white">
            Wearable health you'll
            <br /> want to wear
          </h1>
          <p className="text-3xs text-white pl-10 pt-10">
            Explore a range of Hybrid smartwatches crafted to track, monitor and
            improve overall health and wellness.Powered by state-of-the-art
            technology, sapa trackers are renowned for their award-winning
            designed and surpassed battery life
          </p>
          <p className="text-3xs font-bold text-white pl-10 pt-10 mt-9">#1</p>
          <h1 className="text-2xl font-bold pl-10 pt-10 text-orange-500">
            WORLDWIDE
          </h1>
          <p className="text-1xl font-bold text-white pl-10 pt-10">
            Sapa Invented The First hybrid Smart Watch
          </p>
          <button className="h-[60px] w-[200px] bg-orange-500 text-white font-bold ml-10 mt-4">
            Buy Now
          </button>
        </div>
      </div>
      <div className="h-[100%] w-[100%]">
        <div className="w-[100%] h-[160px] flex justify-between items-center">
          <div className="w-[20%] h-[110px] ml-8 gap-9">
            <p className="font-bold text-gray-600 pl-10 pt-4">
              ACTIVITY TRACKING
            </p>
            <h1 className="font-bold text-5xl pl-10 pt-2">Flash Sale</h1>
          </div>
          <div className="w-[20%] h-[100px] mr-8 flex justify-around items-center">
            <div className="h-[90px] w-[71px] bg-orange-900">{days}</div>
            <div className="h-[90px] w-[71px] bg-orange-900">{hours}</div>
            <div className="h-[90px] w-[71px] bg-orange-900">{minutes}</div>
            <div className="h-[90px] w-[71px] bg-orange-900">{seconds}</div>
          </div>
        </div>
        <div className="h-[700px] w-[100%] flex flex-wrap justify-around items-center">
          <ProductContainer />
          <div className="h-[650px] w-[24%]  relative">
            <Link to={`/detail/${productData1.id}`}>
              <div className="mr-16 h-[120px] absolute left-17">
                <div className="w-[60px] h-[30px] bg-pink-400 flex justify-center items-center ml-2 mt-5">
                  <p className="font-bold text-1xl text-white">-5%</p>
                </div>
                <div className="w-[100px] h-[30px] bg-orange-600 flex justify-center items-center ml-2 mt-5">
                  <p className="font-bold text-1xl text-white">Features</p>
                </div>
              </div>
              <div className="h-[500px] w-[400px] absolute top-12 left-2 ml-12">
                <img src={pix3} alt="" />
                <div
                  className="h-[80px] w-[90%] bg-slate-500 absolute bottom-10 right-10 flex justify-center items-center text-2xl font-bold text-white"
                  onClick={() => handleAddToCart(productData1)}
                >
                  Add to Cart
                </div>
              </div>
              <div className="w-[100%] h-[150px] absolute bottom-0">
                <h1 className="font-bold text-2xl pl-8 pt-3">
                  {productData1.name}
                </h1>
                <p className="font-bold text-xl text-orange-600 pl-8 pt-3">
                  {productData1.price}
                </p>
                <p className="pl-8 pt-1">{productData1.rating}</p>
              </div>
            </Link>
          </div>
          <div className="h-[650px] w-[24%]  relative">
            <Link to={`/detail/${productData2.id}`}>
              <div className="mr-16 h-[120px] absolute left-17">
                <div className="w-[60px] h-[30px] bg-pink-400 flex justify-center items-center ml-2 mt-5">
                  <p className="font-bold text-1xl text-white">-5%</p>
                </div>
                <div className="w-[100px] h-[30px] bg-orange-600 flex justify-center items-center ml-2 mt-5">
                  <p className="font-bold text-1xl text-white">Features</p>
                </div>
              </div>
              <div className="h-[500px] w-[400px] absolute top-12 left-2 ml-12">
                <img src={pix3} alt="" />
                <div
                  className="h-[80px] w-[90%] bg-slate-500 absolute bottom-10 right-10 flex justify-center items-center text-2xl font-bold text-white"
                  onClick={() => handleAddToCart(productData2)}
                >
                  Add to Cart
                </div>
              </div>
              <div className="w-[100%] h-[150px] absolute bottom-0">
                <h1 className="font-bold text-2xl pl-8 pt-3">
                  {productData1.name}
                </h1>
                <p className="font-bold text-xl text-orange-600 pl-8 pt-3">
                  {productData1.price}
                </p>
                <p className="pl-8 pt-1">{productData1.rating}</p>
              </div>
            </Link>
          </div>
          <div className="h-[650px] w-[24%]  relative">
            <div className="mr-16 h-[120px] absolute left-17">
              <div className="w-[60px] h-[30px] bg-pink-400 flex justify-center items-center ml-2 mt-5">
                <p className="font-bold text-1xl text-white">-5%</p>
              </div>
              <div className="w-[100px] h-[30px] bg-orange-600 flex justify-center items-center ml-2 mt-5">
                <p className="font-bold text-1xl text-white">Features</p>
              </div>
            </div>
            <div className="h-[500px] w-[400px] absolute top-12 left-2 ml-12">
              <Link to={`/detail/${productData3.id}`}>
                <img src={pix3} alt="" />
              </Link>
              <div
                className="h-[80px] w-[90%] bg-slate-500 absolute bottom-10 right-10 flex justify-center items-center text-2xl font-bold text-white"
                onClick={() => handleAddToCart(productData3)}
              >
                Add to Cart
              </div>
            </div>
            <div className="w-[100%] h-[150px] absolute bottom-0">
              <h1 className="font-bold text-2xl pl-8 pt-3">
                {productData1.name}
              </h1>
              <p className="font-bold text-xl text-orange-600 pl-8 pt-3">
                {productData1.price}
              </p>
              <p className="pl-8 pt-1">{productData1.rating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[100%] bg-slate-200 flex justify-around items-center">
        <div className="h-[100%] w-[50%] ml-1">
          <div className="h-[250px] gap-12 flex flex-col">
            <h1 className="font-extrabold text-5xl pl-7 pt-4">
              High-tech Functionality
            </h1>
            <p className="font-bold pl-7 pt-3 gap-5 text-xl text-black">
              If you’re looking to buy the best activity tracker or hybrid
              smartwatch, you want to make sure you find one that works with
              your life. All our fitness trackers and hybrid smartwatches help
              you meet your goals by tracking steps, runs, swim and sleep
              automatically, and feature classic styles that work for your
              workouts and for your everyday life
            </p>
          </div>
          <div className="h-[64%] w-[100%] bg-orange-400"></div>
        </div>
        <div className="h-[100%] w-[40%] ">
          <img src={pix6} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
