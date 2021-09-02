import ProductGrid from "components/organisms/ProductGrid";
import PlaceholderImage from "stories/assets/bg-car.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

const products = [
  {
    id: 1,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    image: PlaceholderImage,
    title: "Título",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export const usage = () => <ProductGrid products={products} />;
