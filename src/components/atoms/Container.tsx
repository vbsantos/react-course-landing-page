import { ReactNode } from "react";
import styled from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const ContainerStyledComponent = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.lg)} {
    width: 1140px;
    margin: 0 auto;
  }

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }
`;

interface PropType {
  children?: ReactNode;
}

const Container = ({ children }: PropType) => {
  return <ContainerStyledComponent>{children}</ContainerStyledComponent>;
};

export default Container;
