// app/page.tsx

import { Product } from "@/app/interfaces";
import { getFeaturedProducts } from "@/service/products";
import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import Hero from "../components/Hero/Hero";

// Componente de servidor
const Page = async () => {
  const products: Product[] = await getFeaturedProducts(); // Obtener los productos destacados

  return (
    <>
      <Hero />
      <CardList>
        {products.map((product, i) => (
          <Card key={i} {...product} variant="secondary" />
        ))}
      </CardList>
    </>
  );
};

export default Page;

