import { Dialog } from "./Dialog";
import { Box } from "../atoms/Box";
import React from "react";

export const Dialog3 = () => {
  return (
    <Dialog
      title={"No action dialog"}
      buttonProps={{
        label: "Open no action dialog",
        color: "info",
      }}
    >
      <Box>
        <p>This is random dialog content</p>
      </Box>
    </Dialog>
  );
};
