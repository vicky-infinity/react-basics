function VehicleInsurance() {
  return (
    <main className="insurance-detail-page">
      <h2>Vehicle Insurance</h2>
      <p>
        Vehicle insurance helps protect you from costs related to accidents,
        vehicle damage, and other unexpected events on the road.
      </p>
      <button
        type="button"
        onClick={() => window.alert('Demo: vehicle insurance purchased successfully!')}
      >
        Buy Now
      </button>
    </main>
  )
}

export default VehicleInsurance