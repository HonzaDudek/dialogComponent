import styled from "styled-components";
import { StyledButton } from "../atoms/Button";
import { MdClose, MdInfoOutline } from "react-icons/md";
import { Theme } from "../theme/theme";
import React from "react";
import { Box } from "../atoms/Box";

export type IDialogHeaderProps = {
  icon?: JSX.Element;
  title: string;
  actions?: JSX.Element;
  handleToggle: () => void;
};

const StyledDialogHeader = styled(Box)`
  width: 100%;
  min-height: 75px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: ${Theme.sizes.base}px;
`;
const StyledDialogHeaderIcon = styled(Box)`
  margin: auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: ${Theme.sizes.double}px;
    height: auto;
  }
`;

const StyledIconButton = styled(StyledButton)`
  background: transparent;
  color: ${Theme.colors.info};
  border: none;
  position: absolute;
  top: -24px;
  margin: 10px;
  right: -24px;
  min-width: ${Theme.sizes.double}px;
  min-height: ${Theme.sizes.double}px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const StyledDialogHeaderTitle = styled.p`
  margin: auto 20px;
  min-width: 40%;
  font-weight: bold;
`;

const StyledDialogActions = styled(Box)<Partial<IDialogHeaderProps>>`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
`;

export const DialogHeader = ({
  icon = <MdInfoOutline />,
  title,
  actions,
  handleToggle,
}: IDialogHeaderProps) => {
  return (
    <StyledDialogHeader>
      {icon && (
        <StyledDialogHeaderIcon>
          {React.cloneElement(icon, { viewBox: "0 0 24 24" })}
        </StyledDialogHeaderIcon>
      )}
      {title && <StyledDialogHeaderTitle>{title}</StyledDialogHeaderTitle>}
      {actions && (
        <StyledDialogActions actions={actions}>{actions}</StyledDialogActions>
      )}
      <StyledIconButton onClick={() => handleToggle()}>
        <MdClose />
      </StyledIconButton>
    </StyledDialogHeader>
  );
};
