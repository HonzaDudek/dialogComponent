import React from "react";
import styled from "styled-components";
import { Box } from "./Box";

export type IModalProps = {
  isOpen?: boolean;
  children?: React.ReactNode;
  handleCLose?: () => void;
};

const StyledModal = styled(Box)<IModalProps>`
  display: ${(props: IModalProps) => (props.isOpen ? "flex" : "none")};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const StyledModalContent = styled(Box)`
  min-width: 600px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background: white;
  margin: auto;
  padding: 24px;
`;

export const Modal = (props: IModalProps) => {
  return (
    <StyledModal isOpen={props.isOpen}>
      {props.isOpen && (
        <StyledModalContent>{props.children}</StyledModalContent>
      )}
    </StyledModal>
  );
};
