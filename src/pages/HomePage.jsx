import React from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import Navbarra from "../components/Navbarra";

const products = [
  {
    id: 1,
    name: "Nescau",
    price: 10.99,
    image: "https://imgs.casasbahia.com.br/1564266200/1xg.jpg",
  },
  {
    id: 2,
    name: "Toddy",
    price: 9.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5FVifyDRgUKQbVLWDxoXYG-3BrL9OIBYlQ&s",
  },
  {
    id: 3,
    name: "Leite",
    price: 5.99,
    image:
      "https://piracanjuba-institucional-prd.s3.sa-east-1.amazonaws.com/product_images/image/848x1007px-uht-integral-frontal-esquerda-461.webp",
  },
  {
    id: 4,
    name: "Café",
    price: 3.49,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzL3munhn3snD2JwvG9Sl-zoHwgFhUQG9zw&s",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const handleProd = (event) => {
    console.log("Função handleLogin chamada");
    navigate("/produto/:id");
  };
  return (
    <div>
      <Navbarra />
      <div style={styles.container} onClick={handleProd}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#002B5B",
    color: "#fff",
  },
  logo: {
    width: "100px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "16px",
    margin: 0,
    padding: 0,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
};

export default HomePage;
