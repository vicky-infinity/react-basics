import { useState } from "react";
import PopupAnalysis from "./popupAnalysis.jsx";

function ResumeResultTable({ results }) {
    // this state is used to track which result is currently selected for detailed analysis in the popup
	// When the "Analysis" button is clicked for a specific result, that result is set as the selectedResult,
    // which triggers the rendering of the PopupAnalysis component with the details of that result.
    // When the popup is closed, selectedResult is set back to null, hiding the popup.
    const [selectedResult, setSelectedResult] = useState(null);

	return (
		<section className="analysis-results">
			<h2>Resume Analysis Result</h2>
			<div className="results-table-wrap">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Match</th>
                            <th>Status</th>
							<th>Analysis</th>
						</tr>
					</thead>
					<tbody>
						{results.map((result, index) => {
							const status = ["Selected", "Rejected"].includes(result.status)
								? result.status
								: "N/A";

							return (
							<tr key={index}>
								<td>{result.name || "N/A"}</td>
								<td>{result.email || "N/A"}</td>
								<td>{result.phone || "N/A"}</td>
								<td>{Number.isFinite(result.matchScore) ? `${result.matchScore}%` : "N/A"}</td>
								<td>
									<span className={`status-badge ${status === "Selected" ? "status-selected" : status === "Rejected" ? "status-rejected" : ""}`}>
										{status}
									</span>
								</td>
								<td>
									<button type="button" onClick={() => setSelectedResult(result)}>
										Analysis
									</button>
								</td>
							</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{selectedResult && (
				<PopupAnalysis result={selectedResult} onClose={() => setSelectedResult(null)} />
			)}
		</section>
	);
}

export default ResumeResultTable;