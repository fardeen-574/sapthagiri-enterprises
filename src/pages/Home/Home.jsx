import PrimaryHome from '../../component/PrimaryHome/Primary'
import Secondary from '../../component/Secondary/Secondary'
import AboutComponent from '../../component/AboutComponent/About'
import Services from '../../component/Services/Services'
import ManufacturingProcess from '../../component/ManufacturingProcess/ManufacturingProcess'
import ContactUs from '../../component/ContactUs/ContactUs'
const Home = () => {
  return (
    <>
    <PrimaryHome/>
    <Secondary/>
    <Services/>
    <AboutComponent/>
    <ManufacturingProcess/>
    <ContactUs/>
    </>
  )
}

export default Home