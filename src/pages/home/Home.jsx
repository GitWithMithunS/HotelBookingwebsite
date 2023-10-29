import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import Propertylist from '../../components/Propertylist/Propertylist'


import './Home.css'
import Stay from '../../components/Stay/Stay'
import Mail from '../../components/Mail/Mail'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
  <>
  <div>
    <Navbar/>
    <Header/>
    <div className="homecontainer">
      <Features/>  
      <h1 className="hometitle">Browse by property type</h1> 
      <Propertylist/>
      <div className="txt">
      <h1 className="hometitle">Stay at our top unique properties</h1> 
      <p >From castles and villas to boats and igloos, we've got it all</p> 
      </div>
      <Stay/>
    </div>
    <Mail/>
    <div className="foot">
    <Footer/>

    </div>
      
  </div>  
    
  </>
  )
}



