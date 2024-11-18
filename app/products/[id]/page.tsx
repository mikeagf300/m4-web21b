import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
    // Extraer el id directamente de params
    const { id } = params;

    // Obtener todos los productos
    const products = await getProducts();

    // Obtener el producto usando el id
    const product = getProductById(Number(id), products);

    // Si no se encuentra el producto, retorna una página de error 404
    if (!product) {
        return notFound();
    }

    // Pasa tanto el producto como el id al componente ProductDetail
    return <ProductDetail product={product} id={id} />;
};

export default page;
