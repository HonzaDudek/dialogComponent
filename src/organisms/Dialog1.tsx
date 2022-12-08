import { Dialog } from "./Dialog";
import { Button, ButtonSizeEnum } from "../atoms/Button";
import { Box } from "../atoms/Box";
import React from "react";

export const Dialog1 = () => {
  return (
    <Dialog
      title={"Full dialog"}
      buttonProps={{
        label: "Open full dialog",
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
          <Button
            label={"Small action Label 3"}
            color={"secondary"}
            size={ButtonSizeEnum.small}
            onClick={() => console.log("clicked 3 button")}
          />
          <Button
            label={"Large action Label 4"}
            color={"secondary"}
            onClick={() => console.log("clicked 4 button")}
            size={ButtonSizeEnum.large}
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
          <Button
            label={"Action 7"}
            color={"success"}
            onClick={() => console.log("clicked 7 button")}
          />
          <Button
            label={"Action 8"}
            color={"info"}
            onClick={() => console.log("clicked 8 button")}
          />
          <Button
            label={"Action 9"}
            color={"warning"}
            onClick={() => console.log("clicked 9 button")}
          />
          <Button
            label={"Action 10"}
            color={"error"}
            onClick={() => console.log("clicked 10 button")}
          />
        </>
      }
      footerContent={"This is some footer content"}
    >
      <Box>
        <p>This is random dialog content</p>
      </Box>
    </Dialog>
  );
};
