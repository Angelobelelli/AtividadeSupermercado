import React from "react";

const ProductCard = ({ name, price, image }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.price}>R${price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    maxWidth: "200px",
    background: "#fff",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "18px",
    margin: "8px 0",
  },
  price: {
    color: "#333",
    fontWeight: "bold",
  },
};

export default ProductCard;
