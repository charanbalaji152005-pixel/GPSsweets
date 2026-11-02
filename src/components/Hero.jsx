import motichoorLaddu from '../assets/motichoor-laddu.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow"></div>
      <div className="hero-copy">
        <p className="eyebrow">THE FESTIVAL OF LIGHTS, THE JOY OF SWEETS</p>
        <h1>
          Make this Diwali
          <br />
          <em>a little sweeter.</em>
        </h1>
        <p className="hero-text">
          Bring home the warmth of tradition with delicious sweets and savouries
          made for sharing, gifting and celebrating.
        </p>
        <div className="hero-actions">
          <a className="button button-gold" href="#collection">
            Explore the collection <span>→</span>
          </a>
          <a className="text-link" href="#offers">
            View festive offers
          </a>
        </div>
        <div className="hero-note">
          <span>✦</span> A little sweetness makes every moment special.
        </div>
      </div>
      <div className="hero-art">
        <div className="sunburst"></div>
        <div className="hero-photo">
          <img src={motichoorLaddu} alt="Golden festive motichoor laddu" />
        </div>
        <div className="floating-tag">
          A FESTIVE
          <br />
          <b>FAVOURITE</b> ✨
        </div>
        <span className="spark s1">✦</span>
        <span className="spark s2">✧</span>
      </div>
      <div className="hero-bottom">
        <span>TRADITION IN EVERY BITE</span>
        <span>SCROLL TO DISCOVER ↓</span>
      </div>
    </section>
  )
}

export default Hero

