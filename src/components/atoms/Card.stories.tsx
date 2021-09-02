import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import PlaceholderImage from "stories/assets/bg-car.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, labore
          consequatur deleniti fugit, modi sed eveniet reiciendis libero illo
          architecto voluptates. Aperiam voluptatibus accusamus autem provident
          fugiat illo cum neque?
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const noMedia = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Título</h6>
        </Heading>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, labore
          consequatur deleniti fugit, modi sed eveniet reiciendis libero illo
          architecto voluptates. Aperiam voluptatibus accusamus autem provident
          fugiat illo cum neque?
        </p>
        <div>
          <Button color="primary" variant="link">
            Saiba Mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
