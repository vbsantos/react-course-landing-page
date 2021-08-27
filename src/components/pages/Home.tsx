import {
  FaCar as Icon1,
  FaKey as Icon2,
  FaMapMarkedAlt as Icon3,
  FaAccessibleIcon as Icon4,
} from "react-icons/fa";

import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Hero from "components/molecules/Hero";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";

import HeroImage from "assets/hero.jpg";

const Home = () => (
  <>
    <Hero image={HeroImage}>
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

    <Section>
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
    </Section>
  </>
);

export default Home;
