import styled from "@emotion/styled";
import { Box, Stack } from "@chakra-ui/react";

export const NavigationBox = styled(Box)(() => ({
  padding: "8px",
  margin: "8px",
  borderColor: "green",
  borderStyle: "dashed",
}));
export const ProductListBox = styled(Box)(() => ({
  padding: "8px",
  margin: "8px",
  borderColor: "red",
  borderStyle: "dashed",
}));
export const ShellBox = styled(Box)(() => ({
  padding: "8px",
  margin: "8px",
  borderColor: "blue",
  borderStyle: "dashed",
}));

export const CustomStack = styled(Stack)(() => ({
  width: "800px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
