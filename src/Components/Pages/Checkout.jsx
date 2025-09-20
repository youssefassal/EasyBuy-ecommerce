import React, { useEffect, useState } from "react";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("bank");
  // const [discount, setDiscount] = useState(100);
  const discount = 100;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCart = storedCart.map((item) => ({
      ...item,
      Price: parseFloat(item.Price),
      quantity: item.quantity || 1,
    }));
    setCart(updatedCart);
  }, []);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );
  const shipping = cart.length ? 300 : 0;
  const total = subtotal + shipping - discount;

  const PaymentOption = ({ id, label }) => (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 p-4 border rounded-md cursor-pointer transition-all ${
        selectedPayment === id
          ? "border-yellow-400 bg-yellow-50 shadow-sm"
          : "border-gray-300"
      }`}
    >
      <input
        type="radio"
        name="payment"
        id={id}
        value={id}
        checked={selectedPayment === id}
        onChange={() => setSelectedPayment(id)}
        className="mt-1 w-4 h-4 text-yellow-400 accent-yellow-400"
      />
      <span className="text-sm">{label}</span>
    </label>
  );

  return (
    <>
      <div className="min-h-screen px-[8%] lg:px-[12%] py-14 bg-white text-gray-800">
        <h1 className="text-5xl font-bricolage font-semibold text-center mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Billing Section */}
          <div className="lg:col-span-2 bg-white p-8 border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Billing Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="firstname"
                  className="text-sm font-medium mb-1 block"
                >
                  First Name *
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Jack"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="text-sm font-medium mb-1 block"
                >
                  Last Name *
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Sparrow"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium mb-1 block"
                >
                  Company Name (Optional)
                </label>
                <input
                  autoComplete="off"
                  id="company"
                  type="text"
                  placeholder="Company name"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="country"
                  className="text-sm font-medium mb-1 block"
                >
                  Country *
                </label>
                <select
                  autoComplete="off"
                  id="country"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                >
                  <option>Select Country</option>
                  <option className="bg-yellow-100">Egypt</option>
                  <option className="bg-yellow-100">USA</option>
                  <option className="bg-yellow-100">UK</option>
                  <option className="bg-yellow-100">India</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="text-sm font-medium mb-1 block"
                >
                  Street Address *
                </label>
                <input
                  autoComplete="off"
                  id="address"
                  type="text"
                  placeholder="House number and street name"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="apartment"
                  className="text-sm font-medium mb-1 block"
                >
                  Apt, Suite, Etc. (Optional) *
                </label>
                <input
                  id="apartment"
                  type="text"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="text-sm font-medium mb-1 block"
                >
                  City *
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="zip" className="text-sm font-medium mb-1 block">
                  Postal Code/zip *
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="0000"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="state"
                  className="text-sm font-medium mb-1 block"
                >
                  State *
                </label>
                <select
                  id="state"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                >
                  <option>Select State</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-1 block"
                >
                  Email Address *
                </label>
                <input
                  autoComplete="off"
                  id="email"
                  type="text"
                  placeholder="Email"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium mb-1 block"
                >
                  Phone *
                </label>
                <input
                  autoComplete="off"
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  className="focus:outline-yellow-400 w-full px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
            </form>
            {/* Additional Options */}
            <div className="mt-6 space-y-4">
              <label
                htmlFor="create-account"
                className="flex items-center text-sm gap-2"
              >
                <input
                  id="create-account"
                  type="checkbox"
                  className="w-4 h-4 accent-yellow-400"
                />
                <span>Create an account?</span>
              </label>
              <label
                htmlFor="different-address"
                className="flex items-center text-sm gap-2"
              >
                <input
                  id="different-address"
                  type="checkbox"
                  className="w-4 h-4 accent-yellow-400"
                />
                <span>Ship to a different address</span>
              </label>
              <div>
                <label
                  htmlFor="order-notes"
                  className="text-sm font-medium mb-1 block"
                >
                  Order Notes *
                </label>
                <textarea
                  id="order-notes"
                  placeholder="Notes about your order, e.g. special delivery instructions"
                  className="focus:outline-yellow-400 w-full min-h-[100px] px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* order Section */}
          <div className="bg-gray-50 p-8 h-fit border border-gray-200 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Your Order</h2>
            <div className="space-y-3 text-sm">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>
                    {item.Name} x {item.quantity}
                  </span>
                  <span>${(item.Price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <hr className="my-2 border-gray-200" />
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500">
                <span>Discount</span>
                <span className="text-green-600">- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 border-t border-gray-200 pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6 space-y-3">
              <PaymentOption id="bank" label="Direct Bank Transfer" />
              <PaymentOption id="check" label="Check Payments" />
              <PaymentOption id="cod" label="Cash on Delivery" />
              <PaymentOption id="paypal" label="PayPal" />
            </div>

            {/* Terms */}
            <div className="mt-6 text-sm">
              <label htmlFor="terms" className="flex items-center gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 accent-yellow-400"
                  required
                />
                I agree to the Terms and Conditions{" "}
                <span className="text-yellow-500 underline cursor-pointer hover:text-yellow-600 transition-all">
                  Terms and Conditions
                </span>
              </label>
            </div>

            {/* Button */}
            <button className="w-full font-semibold bg-yellow-400 hover:bg-yellow-500 text-white py-3 rounded-md mt-6 transition-all">
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
