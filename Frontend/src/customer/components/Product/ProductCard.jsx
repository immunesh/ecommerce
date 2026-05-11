import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { addProduct } = useGlobal();

  const handleAddProduct = (product) => {
    addProduct(product);
    navigate(`/product/${product.title}`);
  };

  return (
    <div className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* DISCOUNT BADGE */}
        <div className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full font-medium">
          {product.discountPersent}% OFF
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {/* BRAND */}
        <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
          {product.brand}
        </h3>

        {/* TITLE */}
        <p className="mt-1 text-sm text-gray-500 line-clamp-2 min-h-[40px]">
          {product.title}
        </p>

        {/* PRICE */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product.discountedPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.price}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={()=>handleAddProduct(product)}
          className="mt-4 w-full rounded-lg bg-black text-white py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
