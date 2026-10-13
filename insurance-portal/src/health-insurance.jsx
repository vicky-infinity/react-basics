function HealthInsurance() {
	return (
		<main className="insurance-detail-page">
			<h2>Health Insurance</h2>
			<p>
				Health insurance helps cover healthcare costs from illness or injury. It
				can help individuals and families manage medical expenses and access
				needed care.
			</p>
			<button
				type="button"
				onClick={() => window.alert('Demo: health insurance purchased successfully!')}
			>
				Buy Now
			</button>
		</main>
	)
}

export default HealthInsurance
