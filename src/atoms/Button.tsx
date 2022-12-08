import React from "react";
import styled from "styled-components";
import { Theme } from "../theme/theme";

export enum ButtonSizeEnum {
  small = "small",
  medium = "medium",
  large = "large",
}

export type IButtonProps = {
  onClick?: () => void;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: ButtonSizeEnum;
  label?: string;
  children?: React.ReactNode;
  component?: "button" | "a";
};

function getButtonPAddingFromSize(size?: ButtonSizeEnum) {
  if (size) {
    switch (size) {
      case ButtonSizeEnum.large:
        return `
                    padding: 12px;
                    height: 62px;
                    min-width: 80px;
                `;
      case ButtonSizeEnum.medium:
        return `
                    padding: 8px;
                    height: 52px;
                    min-width: 80px;
                `;
      default:
        return `
                    padding: 6px;
                    height: 42px;
                    min-width: 80px;
                `;
    }
  }
  return `
                    padding: 6px;
                    height: 24px;
                    min-width: 80px;
                `;
}

export const StyledButton = styled.button<IButtonProps>`
  ${(props) => getButtonPAddingFromSize(props.size)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: ${(props) =>
    props.color ? Theme.colors[props.color] : Theme.colors.primary};
  color: white;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
  }
`;

export const Button = (props: IButtonProps) => {
  return (
    <StyledButton
      size={props.size ?? ButtonSizeEnum.medium}
      component={props.component ?? "button"}
      color={props.color ?? "primary"}
      onClick={props.onClick}
    >
      {props.children}
      <span>{props.label}</span>
    </StyledButton>
  );
};
