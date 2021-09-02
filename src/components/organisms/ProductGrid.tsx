import { useState } from "react";
import styled from "styled-components";

import Grid from "components/atoms/Grid";
import Card, { CardMedia, CardBody } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

interface Product {
  id: number;
  image: string;
  title: string;
  summary: string;
}

interface PropType {
  products?: Product[];
}

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }: PropType) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <div>
                <Button color="primary" variant="link">
                  Saiba Mais
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button onClick={() => setShowAll(true)} variant="outlined">
            Lista Completa de Serviços
          </Button>
        </Toolbar>
      )}
    </>
  );
};

export default ProductGrid;
