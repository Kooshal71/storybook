import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <Button bg="green" color="white">
    Success
  </Button>
);
export const Danger = () => (
  <Button bg="red" color="white">
    Danger
  </Button>
);
export const Primary = () => (
  <Button bg="blue" color="white">
    Primary
  </Button>
);
