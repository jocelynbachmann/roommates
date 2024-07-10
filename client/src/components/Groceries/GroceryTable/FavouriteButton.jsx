import { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { updateGroceryAsync } from "../../../redux/groceries/thunks";

export default function FavoriteButton({ groceryItem }) {
  const [isFavourite, setIsFavourite] = useState(groceryItem.favourite);
  const dispatch = useDispatch();

  const toggleFavourite = () => {
    dispatch(updateGroceryAsync({ _id: groceryItem._id, favourite: !isFavourite }));
    setIsFavourite(!isFavourite);
  };

  return (
    <IconButton
      aria-label="Toggle Favorite"
      icon={<StarIcon />}
      color={isFavourite ? "orange.500" : "gray.600"}
      onClick={toggleFavourite}
      bg="transparent"
      _hover={{ color: isFavourite ? "orange.300" : "gray.400" }}
      _active={{ color: isFavourite ? "orange.700" : "gray.800" }}
    />
  );
}
