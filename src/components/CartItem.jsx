import { useDispatch } from 'react-redux';
import { formatPrice, generateAmountOptions } from '../utils';
import { editItem, removeItem } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const {
    cartID,
    title,
    price,
    image,
    amount,
    company,
    productColor,
    productID,
  } = cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
      <Link to={`/products/${productID}`}>
        <img
          src={image}
          alt=""
          className=" h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
        />
      </Link>
      <div className="sm:ml-16 sm:w-48">
        <Link to={`/products/${productID}`}>
          <h3 className="capitalize font-medium">{title}</h3>
        </Link>

        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          Color:
          <span
            className=" badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Quantity</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
          <button
            className="mt-2 link link-primary link-hover text-sm"
            onClick={removeItemFromTheCart}
          >
            remove
          </button>
        </div>
      </div>
      {/* PRICE */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
