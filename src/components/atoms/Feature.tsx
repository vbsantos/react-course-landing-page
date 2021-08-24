import { ReactNode } from "react";
import styled from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

interface PropType {
  icon?: ReactNode;
  title?: string;
  children?: ReactNode;
}

const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
    min-height: 3.12rem;

    ${breakAt(BreakpointSizes.lg)} {
      min-height: 3.9rem;
    }
  }

  & p {
    margin: 0;
  }
`;

const getPrimaryColor = ({ theme }) => {
  return theme.colors.primary.main;
};

const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background-color: ${getPrimaryColor};
    }
  }
`;

const IconContainer = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getPrimaryColor};
`;

const Feature = ({
  icon = undefined,
  title = "",
  children = undefined,
}: PropType) => {
  return (
    <Root>
      <IconRoot>
        <IconContainer>{icon}</IconContainer>
      </IconRoot>
      <h5>{title}</h5>
      <div>{children}</div>
    </Root>
  );
};

export default Feature;
