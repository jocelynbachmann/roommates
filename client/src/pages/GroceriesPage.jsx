import { Box } from "@chakra-ui/react";
import FullGroceriesList from "../components/Groceries/GroceryTable/FullGroceriesList";
import MealPlanBox from "../components/Groceries/MealPlan/MealPlanBox";

export default function GroceriesPage() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      width="100%"
      height="100vh"
      className="calendar-page"
    >
      <FullGroceriesList />
      <Box 
        flex="0.35"
        borderRadius="md"
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      >
        <MealPlanBox />
      </Box>
    </Box>
  );
}
