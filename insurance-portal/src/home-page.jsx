import InsuranceCard from './insuranceCard.jsx'
import './insuranceCard.css'
import { useNavigate } from 'react-router-dom'
 

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
    <div className="app-container">
      <InsuranceCard
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80"
        imageAlt="Vehicle insurance"
        title="Vehicle Insurance"
        description="Protect your car with roadside assistance, accident cover, and easy claims support for every journey."
        onViewMore={() => navigate('/vehicle-insurance')}

// THE FOLLOWING IS THE EXAMPLE AND THE ALTERNATIVE WAY TO NAVIGATE TO THE VEHICLE INSURANCE PAGE WITH NORMAL FUNCTION INSTEAD OF ARROW FUNCTION. IT IS COMMENTED OUT FOR REFERENCE PURPOSES ONLY.

//         function HomePage() {
//   const navigate = useNavigate()

//   function handleVehicleClick() {
//     navigate('/vehicle-insurance')
//   }

//   return (
//     <InsuranceCard
//       // other props...
//       onViewMore={handleVehicleClick}
//     />
//   )
// }
        
      />
      <InsuranceCard
        image="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
        imageAlt="Life insurance"
        title="Life Insurance"
        description="Secure your family's future with long-term protection, flexible plans, and financial peace of mind."
        onViewMore={() => navigate('/life-insurance')}
      />
      <InsuranceCard
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80"
        imageAlt="Health insurance"
        title="Health Insurance"
        description="Stay covered for hospital care, wellness support, and everyday medical needs with trusted protection."
        onViewMore={() => navigate('/health-insurance')}
      />
      </div>
    </>
  );
}
export default HomePage