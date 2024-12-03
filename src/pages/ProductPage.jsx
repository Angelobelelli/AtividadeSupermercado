import React from "react";
import "./ProductPage.css";
import  Navbarra  from "../components/Navbarra";

const ProductPage = () => {
  return (
    <div className="product-container">
      
      <Navbarra/>
      <main className="product-main">
        <section className="product-info">
          <h1>Nescau</h1>
          <p className="product-price">R$10,99</p>
          <div className="product-actions">
            <button className="add-to-cart">Adicionar ao Carrinho</button>
            <div className="quantity-selector">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <div className="cep-calculator">
              <input type="text" placeholder="CEP" />
              <button>Calcular</button>
            </div>
          </div>
          <h2>Nescau</h2>
          <p>
            Nescau é uma marca de achocolatado em pó amplamente conhecida e produzida pela Nestlé. É utilizado principalmente para ser misturado com leite, criando uma bebida saborosa e energética.
          </p>
          <ul>
            <li>Sabor: combinação marcante de cacau e açúcar.</li>
            <li>Fortificado com vitaminas e minerais.</li>
            <li>Uso versátil: em sobremesas e bebidas.</li>
            <li>Apelo energético, ideal para jovens e atletas.</li>
          </ul>
        </section>

        <section className="product-image">
          <img
            src="https://imgs.pontofrio.com.br/1560930805/1xg.jpg"
            alt="Nescau"
            className="main-image"
          />
        </section>
      </main>

      <aside className="related-products">
        <h3>Produtos Semelhantes:</h3>
        <div className="related-grid">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtvPbZLFfR8oulwYNBjEXx86q0qBfGJNxZQ&s" alt="Produto 1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqQDgAjIvq6XdrZtl3VUqQgqpTFscshOiI-g&s" alt="Produto 2" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJdRgAEIIWQS2ydyx04r7mMFrcsTWEizsBg&s" alt="Produto 3" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzMjkiAbfzm6a7jWdZYpkrC7odZqemiig3yHhfnB-tRcGksrtm82QnbI1odL8mVbHXhv0&usqp=CAUl ca" alt="Produto 4" />
        </div>
      </aside>
    </div>
  );
};

export default ProductPage;
