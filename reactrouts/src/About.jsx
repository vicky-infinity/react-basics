function About() {
  return (
    <section className="about-page">
      <img
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
        alt="Team members working together around a table"
      />
      <div className="about-copy">
        <h2>About us</h2>
        <p>
          We are a small team that cares about making useful, thoughtful products.
          Our goal is to make everyday choices a little easier and more enjoyable.
        </p>
        <button type="button">Buy now</button>
      </div>
    </section>
  )
}

export default About