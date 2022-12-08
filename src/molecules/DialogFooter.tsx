import styled from "styled-components";
import React from "react";
import { Box } from "../atoms/Box";
import { Theme } from "../theme/theme";

export type IDialogFooterProps = {
  actions?: JSX.Element;
  footerContent?: string;
};

const StyledDialogFooter = styled(Box)`
  width: 100%;
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  padding: ${Theme.sizes.base}px;
  margin-top: auto;
`;

const StyledDialogActions = styled(Box)<Partial<IDialogFooterProps>>`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
`;

const StyledFooterContent = styled(Box)`
  width: 35%;
`;

export const DialogFooter = ({
  actions,
  footerContent,
}: IDialogFooterProps) => {
  return (
    <StyledDialogFooter>
      {footerContent && (
        <StyledFooterContent>
          <p>{footerContent}</p>
        </StyledFooterContent>
      )}
      {actions && (
        <StyledDialogActions actions={actions}>{actions}</StyledDialogActions>
      )}
    </StyledDialogFooter>
  );
};
