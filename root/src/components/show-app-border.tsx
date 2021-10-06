import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

function ShowAppBorders({ setShowAppBorders }) {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Box mt={2}>
        <Button onClick={setShowAppBorders}>Show app borders</Button>
      </Box>
    </Stack>
  );
}

export default ShowAppBorders;
