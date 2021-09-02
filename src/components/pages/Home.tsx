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

import ProductGrid from "components/organisms/ProductGrid";

import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";
import ImageProductGrid1 from "assets/serv-01.jpg";
import ImageProductGrid2 from "assets/serv-02.jpg";
import ImageProductGrid3 from "assets/serv-03.jpg";
import ImageProductGrid4 from "assets/serv-04.jpg";
import ImageProductGrid5 from "assets/serv-05.jpg";

const products = [
  {
    id: 1,
    image: ImageProductGrid1,
    title: "1ª Habilitação Carro e Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: ImageProductGrid2,
    title: "1ª Habilitação Carro",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: ImageProductGrid3,
    title: "1ª Habilitação Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: ImageProductGrid4,
    title: "Mudança de Categoria Caminhão",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: ImageProductGrid5,
    title: "Aulas Avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

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

    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>

    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Bohrer Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptates incidunt reiciendis nesciunt vitae doloremque fugit sit?
            Maxime praesentium voluptatem ut quam at, quaerat, tenetur animi
            deserunt minus hic quasi!
          </p>
          <div>
            <Button color="primary">Saiba Mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas Recorrentes</h2>
      </Heading>
    </Section>

    <Footer />
  </>
);

export default Home;
