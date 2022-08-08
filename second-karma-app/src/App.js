//  import Header from './Components/Header';
import CitiBank from './Components/CitiBank';
import AboutSaas from './Components/AboutSaas';
import Features from './Components/Features';
import FeaturesTypes from './Components/FeaturesTypes';
import CintContent from './Components/CintContent';
import ScreenShots from './Components/ScreenShots';
import TeamMember from './Components/TeamMember';
import PriceTable from './Components/PriceTable';
import PricingandPlan from './Components/PricingandPlan';
import AppGoogle from './Components/AppGoogle';
import Footer from './Components/Footer';
import RightReserved from './Components/RightReserved';
import './App.css';
import './Components/styles.css';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      {/* <Header/>  */}
      <CitiBank/>
      <AboutSaas/>
      <Features/>
      <FeaturesTypes/>  
      <CintContent/>
      <ScreenShots/>
      <TeamMember/>
      <PriceTable/>
      <PricingandPlan/>
      <AppGoogle/>
      <Footer/>
      <RightReserved/>
    </div>
  );
}

export default App;
