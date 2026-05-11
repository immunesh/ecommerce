import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import { useGlobal } from "../../context/GlobalContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const location = useLocation();
  const { addToCart, product } = useGlobal();

  console.log("product", product);

  const [selectedColor, setSelectedColor] = useState(product.color || "black");

  const [selectedSize, setSelectedSize] = useState(product.size || "M");
  const [selectedBrand, setSelectedBrand] = useState(product.brand || "BrandX");

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => {
    // Replace this with actual count from your reviews array if available
    const count =
      product.reviews?.filter((r) => r.rating === star || r.rating < star)
        .length || 0;
    console.log(count);
    // Calculate percentage relative to total numRatings
    const percentage =
      product.numRatings > 0
        ? Math.round((count / product.numRatings) * 100)
        : 0;

    return { star, count, percentage };
  });

  const similerProducts = mens_kurta
    .filter(
      (item) =>
        item.title !== product.title && // Don't show the current product
        (item.color === product.color || item.brand === product.brand),
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  console.log("Similar Products:", similerProducts); //empty
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BREADCRUMB */}
        <div className="text-sm text-gray-500 mb-8">
          Home / Men / Clothing /
          <span className="text-gray-900 font-medium ml-1">
            {product.title}
          </span>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT IMAGE */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-[500px] md:h-[700px] object-cover object-top"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:sticky lg:top-24">
            {/* BRAND */}
            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              {product.brand}
            </p>

            {/* TITLE */}
            <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
              {product.title}
            </h1>

            {/* REVIEWS */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      rating < product.rating
                        ? "text-yellow-400"
                        : "text-gray-200",
                      "h-5 w-5",
                    )}
                  />
                ))}
              </div>

              <span className="text-sm text-gray-500">
                {product.numRatings} Reviews
              </span>
            </div>

            {/* PRICE */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                ₹{product.discountedPrice}
              </span>

              <span className="text-xl line-through text-gray-400">
                ₹{product.price}
              </span>

              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                {product.discountPercent}% OFF
              </span>
            </div>

            {/* STOCK */}
            <div className="mt-4">
              {product.inStock ? (
                <span className="text-green-600 font-medium">✓ In Stock</span>
              ) : (
                <span className="text-red-500 font-medium">Out Of Stock</span>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8">
              <p className="text-gray-600 leading-7">
                {product.description ||
                  "Premium quality product with comfortable fabric and modern design."}
              </p>
            </div>

            {/* COLOR */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Color
              </h3>

              <div className="flex items-center gap-4">
                {[product.color].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={classNames(
                      selectedColor === color ? "ring-2 ring-black" : "",
                      "h-10 w-10 rounded-full border",
                    )}
                    style={{
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900">Size</h3>

                <button className="text-sm text-indigo-600">Size Guide</button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={classNames(
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-900",
                      "border rounded-xl py-3 text-sm font-medium transition-all hover:border-black",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 space-y-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Add To Cart
              </button>

              <button className="w-full border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* product reviews  */}
        <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDE: Rating Summary (Your existing code) */}
          <div class="lg:col-span-4">
            <div class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-6">
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Customer Reviews
              </h3>
              <div class="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg w-full mb-6">
                <span class="text-5xl font-extrabold text-gray-900">
                  {product.rating}
                </span>
                <div class="flex items-center mt-2 text-yellow-400 gap-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        rating < product.rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5",
                      )}
                    />
                  ))}
                </div>
                <p class="text-sm text-gray-500 mt-2">
                  {product.numRatings} ratings
                </p>
              </div>

              <div className="space-y-4 max-w-md">
                {ratingBreakdown.map((item) => (
                  <div
                    key={item.star}
                    className="grid grid-cols-12 items-center gap-4"
                  >
                    {/* Star Level Label */}
                    <div className="col-span-2 text-sm font-medium text-gray-700 whitespace-nowrap">
                      {item.star} Star
                    </div>

                    {/* Progress Bar Container */}
                    <div className="col-span-8 h-4 bg-gray-100 rounded-full border border-gray-200 overflow-hidden shadow-inner">
                      {/* The "Fill" Line - Using Green or Yellow for a professional feel */}
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${
                          item.star >= 4
                            ? "bg-green-500"
                            : item.star === 3
                              ? "bg-yellow-400"
                              : "bg-orange-400"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>

                    {/* Percentage or Count Label */}
                    <div className="col-span-2 text-sm text-gray-500 text-right font-semibold">
                      {item.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Individual Reviews List */}
          <div class="lg:col-span-8 space-y-8">
            {[1].map((review) => (
              <div key={review} class="border-b border-gray-100 pb-8">
                <div class="flex items-center gap-4 mb-4">
                  <div class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 uppercase">
                    {/* Fallback avatar with initials */}
                    JD
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900">John Doe</h4>
                    <div class="flex items-center gap-2">
                      <div class="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            class="w-4 h-4 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span class="text-xs text-gray-400">Oct 24, 2023</span>
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <p class="font-semibold text-gray-900">Excellent Quality!</p>
                  <p class="text-gray-600 leading-relaxed text-sm">
                    The fabric is very breathable and the fit is exactly as
                    described in the size chart. I've washed it twice and the
                    color hasn't faded at all. Highly recommend for summer wear.
                  </p>
                </div>

                {/* Optional Verified Purchase Badge */}
                <div class="mt-4 flex items-center text-green-600 text-xs font-medium">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Verified Purchase
                </div>
              </div>
            ))}
          </div>

          {/*similar products section  */}
  
          <div className="mt-20 border-t pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Similar Products
            </h2>

            {/* Using Flex instead of Grid */}
            <div className="flex gap-6 justify-start flex-wrap lg:flex-nowrap">
              {similerProducts.map((item, index) => (
                <div key={index} className="flex-none">
                  <HomeSectionCard product={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
