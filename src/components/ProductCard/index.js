import './index.css'

const ProductCard = () => (
  <div className="product-card">
    <div className="first-container-product">
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1629739742/b-1_chahbu.png"
        alt="books"
        className="image-product-card"
      />
      <div className="column-product-card">
        <h1 className="heading-product-card">
          Get a free chapter of this book
        </h1>
        <p className="para-product-card">
          Create custom landing pages with Omega that converts more visitors
          than any websites.
        </p>
      </div>
    </div>
    <button type="button" className="book-button">
      Get a free chapter
    </button>
  </div>
)
export default ProductCard
