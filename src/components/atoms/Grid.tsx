import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreakpointSizes[size])} {
      grid-template-columns: repeat(${(props) => props[size]}, 1fr);
    }
  `;

const GridStyledComponent = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
`;

interface PropType {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: ReactNode;
}

const Grid = ({
  children = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
}: PropType) => {
  return (
    <GridStyledComponent sm={sm} md={md} lg={lg} xl={xl}>
      {children}
    </GridStyledComponent>
  );
};

export default Grid;
