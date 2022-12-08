import { Dialog } from "./Dialog";
import { Button } from "../atoms/Button";
import { Box } from "../atoms/Box";
import React from "react";

export const Dialog2 = () => {
  return (
    <Dialog
      title={"Dialog without footer content"}
      buttonProps={{
        label: "Open dialog without footer content",
        color: "secondary",
      }}
      headerActions={
        <>
          <Button
            label={"Action 1"}
            color={"primary"}
            onClick={() => console.log("clicked 1 button")}
          />
          <Button
            label={"Action 2"}
            color={"secondary"}
            onClick={() => console.log("clicked 2 button")}
          />
        </>
      }
      footerActions={
        <>
          <Button
            label={"Very Long action Label 5"}
            color={"secondary"}
            onClick={() => console.log("clicked 5 button")}
          />
          <Button
            label={"Action 6"}
            color={"secondary"}
            onClick={() => console.log("clicked 6 button")}
          />
        </>
      }
    >
      <Box>
        <p>This is random dialog content</p>
      </Box>
    </Dialog>
  );
};
