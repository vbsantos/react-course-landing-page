import styled from "styled-components";
import { ReactNode } from "react";

//#region CardMedia

interface PropTypesCardMedia {
  /**
   * Qualquer imagem
   */
  image?: string;
}

const MediaStyledComponent = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;

export const CardMedia = ({ image }: PropTypesCardMedia) => {
  return <MediaStyledComponent image={image} />;
};

//#endregion

//#region CardBody

interface PropTypesCardBody {
  /**
   * Título, texto e CTA
   */
  children?: ReactNode;
}

const BodyStyledComponent = styled.div`
  padding: 16px;

  h6 {
    margin-top: 0;
  }
`;

export const CardBody = ({ children }: PropTypesCardBody) => {
  return <BodyStyledComponent>{children}</BodyStyledComponent>;
};

//#endregion

//#region Card

interface PropTypesCard {
  /**
   * CardMedia e CardBody
   */
  children?: ReactNode;
}

const CardStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  overflow: hidden;
`;

const Card = ({ children }: PropTypesCard) => {
  return <CardStyledComponent>{children}</CardStyledComponent>;
};

//#endregion

export default Card;
