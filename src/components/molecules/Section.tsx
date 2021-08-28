import { ReactNode } from "react";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";

const Content = styled.div`
  padding: 40px 0;
  ${(props) =>
    props.inverse &&
    css`
      background-color: #f7f7f7;
    `}

  h2 {
    margin-top: 0;
  }
`;

interface PropType {
  children?: ReactNode;
  inverse?: Boolean;
}

const Section = ({ children, inverse = false }: PropType) => {
  return (
    <Content inverse={inverse}>
      <Container>{children}</Container>
    </Content>
  );
};

export default Section;
