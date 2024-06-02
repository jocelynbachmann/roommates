import { useState } from "react";
import {
  Input,
  Button,
  Box,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
} from "@chakra-ui/react";
import { HexColorPicker } from "react-colorful";
import { addChore } from "../redux/choresSlice";
import { useDispatch } from "react-redux";
import { EditIcon } from "@chakra-ui/icons";

export default function CreateChore() {
  const [newChore, setNewChore] = useState("");
  const [newColor, setNewColor] = useState("#aabbcc");
  const { onOpen, onClose, isOpen } = useDisclosure();

  const dispatch = useDispatch();

  const addNewChore = () => {
    if (newChore.trim() !== "") {
      dispatch(addChore({ title: newChore, color: newColor }));
      setNewChore("");
    }
  };

  return (
    <Box mt={4} display="flex" position="relative" w="100%">
      <Input
        value={newChore}
        onChange={(e) => setNewChore(e.target.value)}
        placeholder="New Chore"
        marginRight={2}
        flexGrow={1}
      />
      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement="bottom"
      >
        <PopoverTrigger>
          <IconButton
            icon={<EditIcon />}
            bg={newColor}
          />
        </PopoverTrigger>
        <PopoverContent pt={2} pb={3} pl={4} boxShadow="lg" borderRadius="md">
          <PopoverHeader pt={0} pl={0} fontWeight="bold" borderBottom="0">
            Pick the colour for this new chore
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <HexColorPicker color={newColor} onChange={setNewColor} />
        </PopoverContent>
      </Popover>
      <Button onClick={addNewChore} colorScheme="teal" ml={2} p={4} boxShadow="0 2px 4px rgba(0,0,0,0.1)">
        Add Chore
      </Button>
    </Box>
  );
}
