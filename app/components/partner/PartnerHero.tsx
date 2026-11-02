import "./PartnerHero.css";

export default function PartnerHero() {
  return (
    <section className="partner-hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="partner-container">
        <div className="partner-content">
          <span className="partner-eyebrow">
            <span className="eyebrow-line" />
            BUILD THE FUTURE WITH AUGGIT
          </span>

          <h1>
            Partner with us to
            <br />
            <span>shape the next</span>
            <br />
            generation of
            <br />
            enterprise solutions
          </h1>

          <p className="partner-description">
            Collaborate, co-innovate, and deliver greater value to businesses worldwide with Auggit.
          </p>
        </div>

        <div className="partner-visual">
          <img
            src="/partner/partner-hero.png?v=2"
            alt="Auggit partnership: Co-Innovate, Grow Together, Deliver More Value"
            width={528}
            height={438}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
