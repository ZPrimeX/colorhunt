import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

const PaletteDelete = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Delete</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure?</PopoverBody>
        <PopoverFooter>
          <Button colorScheme="blue">Close</Button>
          <Button colorScheme="red">Delete</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default PaletteDelete;
