import { text } from "@storybook/addon-knobs";

import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import BgHighwayImage from "stories/assets/bg-highway.jpg";
import BgCarImage from "stories/assets/bg-car.jpg";

import Hero from "./Hero";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <Heading>
      <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    </Heading>
    <p>{text("Text", "A escola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <Button variant="outlined" color="primary">
      Matricule-se agora
    </Button>
  </Hero>
);
