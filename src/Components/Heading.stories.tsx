import { text } from "@storybook/addon-knobs";

import Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const usage = () => (
  <>
    <Heading>
      <h1>{text("H1", "Componente Heading 1")}</h1>
    </Heading>
    <Heading>
      <h2>{text("H2", "Componente Heading 2")}</h2>
    </Heading>
    <Heading>
      <h3>{text("H3", "Componente Heading 3")}</h3>
    </Heading>
    <Heading>
      <h4>{text("H4", "Componente Heading 4")}</h4>
    </Heading>
    <Heading>
      <h5>{text("H5", "Componente Heading 5")}</h5>
    </Heading>
    <Heading>
      <h6>Componente Heading 6</h6>
    </Heading>
  </>
);
