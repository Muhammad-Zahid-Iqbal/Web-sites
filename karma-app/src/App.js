import Navbar from './components/Navbar';
import CenteralTextArea from './components/CenteralTextArea';
import TotalEarning from './components/TotalEarning';
import "bootstrap/dist/css/bootstrap.min.css";
import RankPage from './components/RankPage';
import YourPlan from './components/YourPlan';
import YourBusiness from './components/YourBusiness';
import YourBusinessContentPage from './components/YourBusinessContentPage';
import OurHelpFind from './components/OurHelpFind';
import Footer from './components/Footer';
import './App.css';
import PageContent from './PageContent';

function App() {
  return (
    <div>
     <Navbar/>
     <PageContent/>
     <CenteralTextArea/>
     <TotalEarning/>
     <RankPage/>
     <YourPlan/>
     <YourBusiness/>
     <YourBusinessContentPage/>
    <OurHelpFind/>
    <Footer/>
    </div>
  );
}

export default App;
