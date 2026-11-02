function ProductCard({ number, name, description, image }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
        <span className="image-overlay">
          <span>DISCOVER THE TASTE ↗</span>
        </span>
        <span className="product-number">{number}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <span className="arrow">↗</span>
      </div>
    </article>
  )
}

export default ProductCard

