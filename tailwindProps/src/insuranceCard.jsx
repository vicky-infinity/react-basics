// This component is a simple card that displays insurance information. It includes an image, title, description, and a button to view more information. The component accepts props for the image source, alt text, title, description, a callback function for the button click event, and an optional className for additional styling.
// input props of the componets are:
// - image: string, the source of the image
// - imageAlt: string, the alt text for the image
// - title: string, the title of the insurance card
// - description: string, the description of the insurance card
// - onViewMore: function, the callback function for the button click event

import './InsuranceCard.css';



export default function InsuranceCard({
  image,
  imageAlt = '',
  title,
  description,
  onViewMore,
  className = '', // this prop allows for additional class names to be passed in for styling purposes if not passed, it will default to an empty string the use of this to allow the single or multiple cards to style differently if needed otherwise they will all have the same styling by default it will use the default styling defined in the InsuranceCard.css file currently
}) {
  return (
    <article className={`insurance-card ${className}`.trim()}>
      <div className="insurance-card__image-wrap">
        <img
          className="insurance-card__image"
          src={image}
          alt={imageAlt}
        />
      </div>

      <div className="insurance-card__body">
        <h3 className="insurance-card__title">{title}</h3>
        <p className="insurance-card__description">{description}</p>

        <button
          type="button"
          className="insurance-card__button"
          onClick={onViewMore}
        >
          View more info
        </button>
      </div>
    </article>
  );
}