import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const fixedCart = storedCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(fixedCart);
  }, []);

  const updateQuantity = (id, delta) => {
    const updatedCart = cart.map((item) => {
      if (item.Id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (!confirmRemove) return;

    const updatedCart = cart.filter((item) => item.Id !== id);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("✅ Item removed from cart");
  };

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toLowerCase();
    if (code === "coupon10") {
      setDiscount(10);
      toast.success("✅ 10% discount applied!");
    } else {
      setDiscount(0);
      toast.error("❌ Invalid coupon code!");
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shipping = cart.length ? 300 : 0;
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount + shipping;

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/checkout");
  };
  return (
    <>
      <div className="px-4 sm:px-8 lg:px-[12%] py-12 bg-gray-50 text-gray-800 min-h-screen">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-600 font-bricolage">
          My Shopping Cart
        </h1>

        <ToastContainer position="top-right" autoClose={1500} />
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th></th>
                <th>Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr
                  key={item.Id}
                  className="bg-white border rounded-xl shadow-sm"
                >
                  <td className="text-center">
                    <button
                      onClick={() => removeFromCart(item.Id)}
                      className="text-xl text-gray-400 hover:text-red-500"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </td>
                  <td className="flex items-center gap-4 py-4 px-2">
                    <img
                      src={item.ProductsImage}
                      alt={item.Name}
                      className="w-24 h-24 object-contain border border-gray-200 p-2 rounded-lg"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.Name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.Category}</p>
                    </div>
                  </td>
                  <td className="text-center text-gray-800 font-medium">
                    ${item.Price.toFixed(2)}
                  </td>
                  <td className="text-center">
                    <div className="inline-flex items-center border border-gray-200 rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.Id, -1)}
                        className="px-3 py-1 hover:text-red-500"
                      >
                        <i className="ri-subtract-line"></i>
                      </button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.Id, 1)}
                        className="px-3 py-1 hover:text-green-500"
                      >
                        <i className="ri-add-line"></i>
                      </button>
                    </div>
                  </td>
                  <td className="text-center font-semibold text-gray-800">
                    ${(item.Price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}

              {cart.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-500">
                    <i className="ri-shopping-cart-line text-2xl mr-2"></i> Your
                    Cart is Empty!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          <div className="overflow-x-auto">
            {cart.map((item) => (
              <div
                key={item.Id}
                className="bg-white border border-gray-200 space-y-3 rounded-xl shadow p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.Name}
                  </h3>
                  <button
                    onClick={() => removeFromCart(item.Id)}
                    className="text-xl text-gray-400 hover:text-red-500"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
                <img
                  src={item.ProductsImage}
                  alt={item.Name}
                  className="w-full h-40 object-contain"
                />
                <p className="text-sm text-gray-500">{item.Category}</p>
                <p className="text-base font-medium text-gray-800">
                  Price: ${item.Price.toFixed(2)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-200 rounded">
                    <button
                      onClick={() => updateQuantity(item.Id, -1)}
                      className="px-3 py-1 hover:text-red-500"
                    >
                      <i className="ri-subtract-line"></i>
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.Id, 1)}
                      className="px-3 py-1 hover:text-green-500"
                    >
                      <i className="ri-add-line"></i>
                    </button>
                  </div>
                  <span className="font-semibold text-gray-800">
                    Total: ${(item.Price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                <i className="ri-shopping-cart-line text-2xl mr-2"></i> Your
                Cart is Empty!
              </div>
            )}
          </div>
        </div>

        {/* Coupon Section 2:18:30 */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/2 flex">
            <input
              type="text"
              placeholder="Coupon Code (e.g., coupon10)"
              value={couponCode}
              name="coupon"
              onChange={(e) => setCouponCode(e.target.value)}
              className="border border-gray-300 px-4 py-2 w-full rounded-l-md outline-none text-gray-700"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-yellow-500 px-6 py-2 rounded-r-md text-white hover:bg-red-500 transition"
            >
              Apply
            </button>
          </div>
        </div>

        {/* cart totals */}
        <div className="mt-12 md:w-1/3 ml-auto border border-gray-300 rounded-lg p-6 shadow bg-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Cart Totals
          </h3>
          <div className="flex justify-between mb-2 font-medium">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between mb-2 text-green-600 font-medium">
              <span className="text-gray-600">Discount</span>
              <span className="font-medium">
                - ${discountAmount.toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex justify-between mb-2 font-medium">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl mb-2 font-bold border-t border-gray-300 pt-4 mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="bg-yellow-500 font-semibold py-3 rounded-full w-full mt-4 text-white hover:bg-yellow-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
