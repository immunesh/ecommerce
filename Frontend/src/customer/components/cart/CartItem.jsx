import { useLocation } from "react-router-dom";

export default function CartItem({ item }) {
    const location=useLocation();

    return (
        <div className="flex items-center gap-4 py-4 border-b">
            <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover object-top" />

            <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
            </div>

            <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span className="text-sm">{item.quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded">+</button>
            </div>
    
            <p className="text-sm font-medium text-gray-900">${item.price}</p>
        </div>
    );
}