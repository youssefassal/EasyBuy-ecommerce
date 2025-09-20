import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useCart = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);
    if (!exists) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("✅ Item added to cart");
    } else {
      toast.warning("⚠️ Item already in cart");
    }
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  return { handleAddToCart };
};
