import { Box, Button, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGrocery } from '../../../redux/slices/groceriesSlice';

export default function MealPlanBox() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.groceries.groceries);

  const favouriteItems = items.filter(item => item.favourite);

  const removeFavourite = (item) => {
    dispatch(updateGrocery({ id: item.id, favourite: false }));
  };

  const generateMeal = () => {
    let selectedItems = [];
    favouriteItems.forEach(item => {
        selectedItems.push(item.name);
    });
  };

  return (
    <Box p={5}>
      <Heading mb={4} size="lg" color="black" textAlign="center">
        Need Help <br /> Planning a Meal?
      </Heading>
      <Heading mb={4} size="sm" color="teal" textAlign="center">
        Select from the table the grocery items you would like <br /> to incorporate
      </Heading>
      <VStack align="start" spacing={3}>
        {favouriteItems.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
          >
            <IconButton
              icon={<span className="material-symbols-outlined">close_small</span>}
              bg="transparent"
              color="red"
              variant="unstyled"
              onClick={() => removeFavourite(item)}
            />
            <Text color="black">{item.name}</Text>
          </Box>
        ))}
      </VStack>
      <Box
        p={4}
        display="flex"
        justifyContent="center"
      >
        <Button
            size="md"
            bg="teal.500"
            color="white"
            _hover={{ bg: "teal.600" }}
            onClick={generateMeal}
        >
            Generate Meal
        </Button>
      </Box>
    </Box>
  );
}
