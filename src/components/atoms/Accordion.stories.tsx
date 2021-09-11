import Accordion from "components/atoms/Accordion";
import AccordionGroup from "components/atoms/AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
    <Accordion title="Como faço minha mudança de categoria?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
    <Accordion title="Como faço minha mudança de categoria?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime
        explicabo, minus dolorem id tempora suscipit quibusdam quo ex odit
        vitae, fuga reprehenderit cumque eveniet! Veniam suscipit delectus
        fugiat eveniet!
      </p>
    </Accordion>
  </AccordionGroup>
);
