function LifeInsurance() {
  return (
    <main className="insurance-detail-page">
      <h2>Life Insurance</h2>
      <p>
        Life insurance can provide financial support for the people you care
        about and help them plan for the future.
      </p>
      <button
        type="button"
        onClick={() => window.alert('Demo: life insurance purchased successfully!')}
      >
        Buy Now
      </button>
    </main>
  )
}

export default LifeInsurance