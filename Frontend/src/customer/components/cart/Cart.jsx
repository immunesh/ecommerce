import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

import {
  XMarkIcon,
  QuestionMarkCircleIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { useGlobal } from "../../context/GlobalContext";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useGlobal();
  const [noOfItems, setNoOFItems] = useState(1);

  console.log("cartItems", cartItems); //printed

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5;
  const tax = 0.18 * totalPrice;
  const totalorder = totalPrice + shipping + tax;

  const increaseNO = () => {
    setNoOFItems((prev) => prev + 1);
  };

  const decreaseNO = () => {
    setNoOFItems((prev) => (prev > 1 ? prev - 1 : 1));
  };

  console.log("locaiton", location);

  return (
    <div className="bg-white pt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {cartItems.length == 0 ? (
          
            <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900">
              Sorry! N item in the cart
            </h1>
       
        ) : (
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {location.pathname === "/checkout" ? "Orders" : "Shopping Cart"}
            </h1>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
              {/* CART ITEMS LIST */}
              <section className="lg:col-span-7">
                <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.imageUrl} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                        />
                      </div>
                      {console.log("this is item", item)}
                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                {item.title}
                              </h3>
                            </div>
                            <div className="mt-1 flex text-sm text-gray-500">
                              <p>{item.color}</p>
                              <p className="ml-4 border-l border-gray-200 pl-4">
                                {item.size.map((s) => (
                                  <span key={s.name}>{s.name}</span>
                                ))}
                              </p>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              {item.price}
                            </p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9 ">
                            <div className="flex gap-3 items-center ">
                              <MinusIcon
                                onClick={decreaseNO}
                                className="h-5 w-5 border-2 border-gray-700 rounded-full"
                              />
                              <span>{noOfItems}</span>
                              <PlusIcon
                                onClick={increaseNO}
                                className="h-5 w-5 border-2 border-gray-700 rounded-full"
                              />
                            </div>
                            <div className="absolute right-0 top-0">
                              <button
                                type="button"
                                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                              >
                                <XMarkIcon className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                          {item.status === "In stock" ? (
                            <span className="text-green-500">✓</span>
                          ) : (
                            <span className="text-gray-400">🕒</span>
                          )}
                          <span>{item.numRatings}</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* ORDER SUMMARY SIDEBAR */}
              <section className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                <h2 className="text-lg font-medium text-gray-900">
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">
                      Rs {totalPrice}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <QuestionMarkCircleIcon className="ml-2 h-5 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      Rs {shipping}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <QuestionMarkCircleIcon className="ml-2 h-5 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      Rs {tax}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      Rs {totalorder}
                    </dd>
                  </div>
                </dl>
                {location.pathname === "/checkout" ? null : (
                  <div className="mt-6">
                    <button
                      onClick={() => navigate("/checkout")}
                      type="button"
                      className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </section>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
