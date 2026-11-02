function Visit() {
  return (
    <section className="visit" id="visit">
      <div>
        <p className="eyebrow">COME SAY HELLO</p>
        <h2>
          Find your way to
          <br />
          <em>GPS Sweets.</em>
        </h2>
        <p>Drop by and pick up something delicious for your celebration.</p>
      </div>
      <div className="address-card">
        <div className="pin">⌖</div>
        <h3>GPS Sweets</h3>
        <p className="address">Krishnagiri, Tamil Nadu, India</p>
        <small>Shop street address and landmark to be added.</small>
        <a
          className="button button-gold"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/search/?api=1&query=GPS+Sweets+Krishnagiri+Tamil+Nadu"
        >
          Open in Google Maps ↗
        </a>
        <small className="map-note">
          Map opens a search for GPS Sweets in Krishnagiri. Confirm the exact
          shop pin before publishing.
        </small>
      </div>
    </section>
  )
}

export default Visit

