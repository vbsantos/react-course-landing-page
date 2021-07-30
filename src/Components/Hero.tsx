import styled, { css } from "styled-components";

import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const colorYellow = "#ffc107";

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    &::before {
      content: "\\2713\\0020";
      color: ${colorYellow};
    }
  }
`;

const Container = styled.div`
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
  /**
   * Imagem de fundo do Componente
   */
  image: string;
  /**
   * Conteúdo do Componente
   */
  children: React.ReactNode;
}

const Hero = ({ image, children }: PropType) => (
  <Root image={image}>
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
