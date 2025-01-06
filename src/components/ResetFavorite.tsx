import { resetFavorite } from "@/store/nextSlice";
import { useDispatch } from "react-redux";

const ResetFavorite = () => {
  const dispatch = useDispatch();
  const handleResetFavorite = () => {
    const confirmReset = window.confirm(
      "Are you sure to delete all items from your Favorite?"
    );
    if (confirmReset) {
      dispatch(resetFavorite());
    }
  };
  return (
    <button
      onClick={handleResetFavorite}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      reset favorite
    </button>
  );
};

export default ResetFavorite;