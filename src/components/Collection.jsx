import ProductCard from './ProductCard'
import products from '../data/products'

function Collection() {
  return (
    <section className="collection section" id="collection">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE GPS SWEETS EDIT</p>
          <h2>
            Made for your <em>sweet tooth.</em>
          </h2>
        </div>
        <span className="count">01 — 10 / OUR PICKS</span>
      </div>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.number} {...product} />
        ))}
      </div>
    </section>
  )
}

export default Collection

