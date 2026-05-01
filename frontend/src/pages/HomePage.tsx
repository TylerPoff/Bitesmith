import "../styles/Home.css"

export default function HomePage() {
      return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Bitesmith</h1>
        <p>
          A running log of my very unqualified food opinions across NYC,
          the good, the bad, and what I would go back to.
        </p>
      </section>

      <section className="home-section">
        <h2>Recent Reviews</h2>
        <p>No reviews yet.</p>
      </section>

    </div>
  );
}