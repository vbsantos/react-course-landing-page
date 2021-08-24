import {
  FaCar as Icon1,
  FaKey as Icon2,
  FaMapMarkedAlt as Icon3,
  FaAccessibleIcon as Icon4,
} from "react-icons/fa";
import Feature from "./Feature";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<Icon1 />} title="Lorem ipsum dolor">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      quaerat voluptas molestias ducimus!
    </p>
  </Feature>
);

export const withGrid = () => (
  <Grid sm={2} md={4}>
    <Feature icon={<Icon1 />} title="Maior e melhor frota">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<Icon2 />} title="Habilitação mais rápida">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<Icon3 />} title="Excelente localização">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
    <Feature icon={<Icon4 />} title="Acessibilidade">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
  </Grid>
);
