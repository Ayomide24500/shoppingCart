import { useSelector } from "react-redux";
import { FC } from "react";
interface iShow {
  show: any;
  handleShowgo: any;
}
const Card: FC<iShow> = ({ show, handleShowgo }) => {
  const cart = useSelector((state: any) => state.cart);
  return (
    <div>
      <div
        className="h-[300px] w-[30%] bg-orange-500 absolute top-20 right-0"
        style={{ display: show ? "block" : "none" }}
      >
        <h2 className="text-white font-bold text-lg p-2">Cart</h2>
        <ul>
          {cart.map((item: any) => (
            <li key={item.id} className="text-white p-2">
              <img src={item.image} alt={item.name} className="w-8 h-8 mr-2" />
              {item.name} - {item.price} - {item.rating}
            </li>
          ))}
        </ul>
        <button
          onClick={handleShowgo}
          className="h-[40px] w-[100px] relative top-55 left-30  bg-yellow-600 text-white"
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
