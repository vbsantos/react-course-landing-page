import Container from "components/atoms/Container";
import styled, { css } from "styled-components";

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
  display: inline-block;

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
      color: ${(props) => props.theme.colors.primary.main};
    }
  }
`;

interface PropType {
  /**
   * Imagem de fundo do Componente
   */
  image?: string;
  /**
   * Conteúdo do Componente
   */
  children?: React.ReactNode;
}

const Hero = ({ image, children }: PropType) => (
  <Root image={image} data-testid="hero">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
);

export default Hero;
