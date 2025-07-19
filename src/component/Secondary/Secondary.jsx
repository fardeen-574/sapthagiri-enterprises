import './Secondary.css'
import {SecondaryImage} from "../../assets"
const Secondary = () => {
  return (
    <div className='secondary-container'>
        <img className='secondary-image' src={SecondaryImage} alt="" />
        <div className='secondary-content'>
            <div>
                <div className='secondary-heading'><span style={{fontSize:40, color:"#ff9700"}}>&bull; </span> WHAT WE OFFER?</div>           
                <div className="secondary-big-heading">
                    DESIGN TO PRODUCTION
                </div>
                <p className='secondary-description'>At our cutting-edge sheet metal fabrication company, we pride ourselves on delivering precision-engineered solutions tailored to the unique needs of our clients. With a comprehensive suite of services that includes laser cutting, bending, stamping, welding, and surface treatment, we transform raw metal sheets into high-quality, functional components and finished products based on clients’ requirements.</p>
                <button className='secondary-button'> LEARN MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Secondary