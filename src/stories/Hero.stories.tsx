import Hero from "../Components/Hero";

import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage} title={"Ganhe sua liberdade para ir e vir"}>
    <p>A escola lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage} title={"Ganhe sua liberdade para ir e vir"}>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <button>Matricule-se agora</button>
  </Hero>
);
