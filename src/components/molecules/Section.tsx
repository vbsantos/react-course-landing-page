import { ReactNode } from "react";
import styled from "styled-components";

import Container from "components/atoms/Container";

const Content = styled.div`
  margin: 40px 0;
`;

interface PropType {
  children: ReactNode;
}

const Section = ({ children }: PropType) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Section;
