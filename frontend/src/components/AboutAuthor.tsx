  const facts = [
    "Born in Ohio, based in NYC",
    "Blue eyes",
    "I can't cook",
    "BS in Chemical Engineering, MS in Computer Science",
    "Keeps notes on everything I eat",
    "Married to the most wonderful woman in the world (She's right behind me)",
  ];

export default function AboutAuthor() {
    return (
        <section>
            <h2> About Author </h2>
            <p>Hi, I am Tyler. I made Bitesmith as a way to keep track of places I have tried around NYC and 
                remember what stood out to me.
            </p>

            <ul className="about-list">
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>

        </section>
    )
}