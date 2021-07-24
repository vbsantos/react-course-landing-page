import Hero from "../Components/Hero";

import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    image={BgHighwayImage}
    title={
      <span>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </span>
    }
  >
    <p>A escola lider em aprovação</p>
  </Hero>
);

export const withList = () => (
  <Hero
    image={BgCarImage}
    title={
      <span>
        Ganhe sua <strong>liberdade</strong>
        <br /> para ir e vir
      </span>
    }
  >
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
    <button>Matricule-se agora</button>
  </Hero>
);
