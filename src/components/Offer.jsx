import kajuKatli from '../assets/kaju-katli.png'

function Offer() {
  return (
    <section className="offer" id="offers">
      <div className="offer-pattern"></div>
      <div className="offer-copy">
        <p className="eyebrow">LIGHT UP YOUR DIWALI</p>
        <h2>
          More joy.
          <br />
          <em>More mithai.</em>
        </h2>
        <p>
          Make gifting extra special with our festive sweet boxes. Celebrate
          together and share a little happiness in every bite.
        </p>
        <div className="offer-sticker">
          <small>FESTIVE SPECIAL</small>
          <strong>
            20% <span>OFF</span>
          </strong>
          <small>ON FESTIVE SWEET BOXES</small>
        </div>
        <a className="button button-dark" href="#visit">
          Plan your visit <span>→</span>
        </a>
        <small className="disclaimer">
          Sample promotional offer — confirm dates, eligible items and terms with
          the shop before publishing.
        </small>
      </div>
      <div className="offer-image">
        <img src={kajuKatli} alt="Kaju katli festive sweets" />
        <div className="round-seal">
          SHARE
          <br />
          THE
          <br />
          JOY ✦
        </div>
      </div>
    </section>
  )
}

export default Offer

