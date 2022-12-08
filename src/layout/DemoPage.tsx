import styled from "styled-components";
import React from "react";
import { Box } from "../atoms/Box";
import { Dialog1 } from "../organisms/Dialog1";
import { Theme } from "../theme/theme";
import { Dialog2 } from "../organisms/Dialog2";
import { Dialog3 } from "../organisms/Dialog3";

export const PageLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const StyledDialogButtonWrapper = styled(Box)`
  margin: auto;
  width: 500px;
  min-height: 500px;
  padding: 16px;
  border-radius: 10px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${Theme.colors.info};
`;

export const DemoPage = () => {
  return (
    <PageLayout>
      <StyledDialogButtonWrapper>
        <Dialog1 />
        <Dialog2 />
        <Dialog3 />
      </StyledDialogButtonWrapper>
    </PageLayout>
  );
};
