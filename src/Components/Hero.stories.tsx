import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import Heading from "./Heading";

import BgHighwayImage from "../stories/assets/bg-highway.jpg";
import BgCarImage from "../stories/assets/bg-car.jpg";

export default {
  title: "Components/Hero",
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
    <button>Matricule-se agora</button>
  </Hero>
);
