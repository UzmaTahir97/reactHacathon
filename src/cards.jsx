import React from "react";

function Cart({ cart, addToCart, decreaseQty, removeItem }) {
  return (
    <div className="mt-10 bg-gray-100 p-5 rounded">
      <h2 className="text-xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-3"
          >
            <span>
              {item.name} (Rs {item.price})
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-300"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() => addToCart(item)}
                className="px-2 bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 font-bold"
              >
                ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
