import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/GlobalContext";


const HomeSectionCard = ({ product }) => {
  const { addProduct } = useGlobal();
  const navigate = useNavigate();

  const handleNavigate = () => {
    addProduct(product);
    navigate(`/product/${product.title}`);
  };

  return (
    <div 
      onClick={handleNavigate} 
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] border m-2 hover:shadow-xl transition-all duration-300"
    >
      <div className="h-[13rem] w-full">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>

      <div className="p-4 w-full">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-1">{product.title}</p>
      </div>
    </div>
  );
};


export default HomeSectionCard;
