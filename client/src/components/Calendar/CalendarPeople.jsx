import { useSelector, useDispatch } from "react-redux";
import {
  Radio,
  RadioGroup,
  VStack,
  Heading,
  Box,
  FormControl,
  Switch,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { setSelectedMember } from "../../redux/slices/membersSlice";
import { toggleFilter } from "../../redux/slices/calendarSlice";

export default function CalendarPeople() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.members);
  const selectedMember = useSelector((state) => state.members.selectedMember);
  const isFiltered = useSelector((state) => state.events.filter);

  const handleRadioChange = (value) => {
    const selectedMemberId = value !== "" ? value : null;
    dispatch(setSelectedMember(selectedMemberId));
  };

  const handleToggleChange = () => {
    dispatch(toggleFilter());
  };

  return (
    <Box p={0}>
      <Heading mb={4} size="lg" color="black">
        Roommates
      </Heading>
      <RadioGroup
        onChange={handleRadioChange}
        value={selectedMember ? selectedMember.id : ""}
      >
        <VStack align="start" spacing={3}>
          {members.map((member) => (
            <Radio
              key={member.id}
              value={String(member.id)}
              size="lg"
              colorScheme="whiteAlpha"
              _hover={{ bg: "teal.100" }}
              _checked={{
                bg: "teal.500",
                borderColor: "teal.500",
                color: "white",
              }}
              _focus={{
                boxShadow: "0 0 0 3px rgba(56, 178, 172, 0.6)",
              }}
              color="black"
            >
              <Text color="black">{`${member.firstName} ${member.lastName}`}</Text>
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
      <FormControl display="flex" alignItems="center" mt={4}>
        <FormLabel htmlFor="calendar-filter" mb="0" color="black">
          Filter Calendar
        </FormLabel>
        <Switch
          id="calendar-filter"
          colorScheme="teal"
          size="lg"
          isChecked={isFiltered}
          onChange={handleToggleChange}
        />
      </FormControl>
    </Box>
  );
}
