import { Product } from "@/app/interfaces";
import { productsMock } from "@/app/mocks/products";

const ffProductsMock = process.env.FF_PRODUCTS_MOCK || false;
const apiUrl = `${process.env.API_URL}`;

// Función para obtener todos los productos desde la API
export const getProducts = async (): Promise<Product[]> => {
    try {
      const res = await fetch(apiUrl + "/products");
      if (!res.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
  
      const data = await res.json();
      if (!Array.isArray(data)) {
        throw new Error("El formato de los datos es incorrecto");
      }
  
      return data;
    } catch (error) {
      console.error("Error al obtener productos:", error);
  
      if (ffProductsMock) {
        console.warn("Usando productos mock debido a un fallo en el fetch");
        return productsMock;
      }
  
      throw error;
    }
  };
  

export const getFeaturedProducts = async (): Promise<Product[]> => {
    const res = await getProducts(); // No pasa ningún argumento, obtiene todos los productos
    // Asegurarse de que res sea un array antes de usar slice
    const featured = Array.isArray(res) ? res.slice(0, 3) : [];
    return featured;
  };

// Función para obtener un producto por su ID
export const getProductById = (id: number, products: Product[]): Product | undefined => {
    return products.find((product) => product.id === id);
};
