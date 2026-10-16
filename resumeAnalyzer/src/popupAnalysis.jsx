import { createPortal } from "react-dom";

function PopupAnalysis({ result, onClose }) {
    // The result object is expected to have the following structure:
    // {
    //   "name": "Candidate Name",
    //   "email": "Candidate Email",
    //   "phone": "Candidate Phone",
    //   "matchScore": 85,
    //   "status": "Selected",
    //   "summary": "Summary of the analysis",
    //   "matchingSkills": ["Skill1", "Skill2"],
    //   "missingSkills": ["Skill3", "Skill4"]
    // }
    // the following code is for matchingSkills and missingSkills are displayed as comma-separated strings, or "N/A" if they are empty or not provided.
	const matchingSkills = Array.isArray(result.matchingSkills)
		? result.matchingSkills.join(", ") || "N/A"
		: "N/A";
	const missingSkills = Array.isArray(result.missingSkills)
		? result.missingSkills.join(", ") || "N/A"
		: "N/A";

	return createPortal(
		<div className="analysis-backdrop" role="presentation" onClick={onClose}>
			<section
				className="analysis-popup"
				role="dialog"
				aria-modal="true"
				aria-labelledby="analysis-title"
				onClick={(event) => event.stopPropagation()}
			>
				<h2 id="analysis-title">Candidate Analysis</h2>
				<p>{result.summary || "No summary provided."}</p>
				<p><strong>Matching skills:</strong> {matchingSkills}</p>
				<p><strong>Missing skills:</strong> {missingSkills}</p>
				<button type="button" onClick={onClose}>Close</button>
			</section>
		</div>,
		document.body
	);
}

export default PopupAnalysis;