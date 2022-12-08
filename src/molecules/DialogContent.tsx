import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { Box } from "../atoms/Box";
import { Theme } from "../theme/theme";

const StyledDialogContent = styled(Box)`
  display: flex;
  flex-direction: column;
  background: white;
  padding: ${Theme.sizes.base}px;
`;

export const DialogContent: FC<PropsWithChildren> = (props) => {
  return <StyledDialogContent>{props.children}</StyledDialogContent>;
};
