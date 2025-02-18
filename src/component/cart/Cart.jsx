import { useEffect, useState } from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, reset } from "../../redux/cartSlice";
const data = [
  {
    id: 1,
    img1: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleave Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 2,
    img2: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Coat",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 3,
    img1: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },

  {
    id: 4,
    img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img1: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "skirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
  {
    id: 5,
    img2: "https://images.pexels.com/photos/1254041/pexels-photo-1254041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img1: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Long Sleave Graphic T-shirt",
    isNew: true,
    oldPrice: 19,
    price: 12,
  },
];

export const Cart = () => {
  const [products, setProducts] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  console.log("REDUDX", cartItems);

  useEffect(() => {
    if (localStorage.getItem("cartProduct")) {
      // setProducts(JSON.parse(localStorage.getItem("cartProduct")))
      setProducts(JSON.parse(localStorage?.getItem("cartProduct")));
      // console.log(JSON.parse(localStorage?.getItem("cartProduct")));
    }
  }, []);

  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div className="cart">
      <div className="container">
        <div className="allProducts">
          {cartItems.products?.map((item, index) => (
            <div key={index} className="product">
              <div className="productImage">
                <img src={item.images[0]} alt="" />
              </div>
              <div className="productDetails">
                <div className="description">
                  <p>{item.title}</p>
                  <p>{item.title}</p>
                  <span>
                    {item.productQuantity} x {item.currentPrice} EGP
                  </span>
                </div>
                <div onClick={() => handleRemoveItem(item)} className="delete">
                  <DeleteOutlineIcon />
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <h4>SUBTOTAL</h4>
            item<p>{cartItems.totalPrice} EGP </p>
          </div>

          <div className="checkOut">
            <button>PROCESSED TO CHECKOUT</button>
          </div>
          <div onClick={handleReset} className="reset">
            <p>RESET THE CART</p>
          </div>
        </div>
      </div>
    </div>
  );
};
