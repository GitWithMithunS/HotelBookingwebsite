import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Mail from '../../components/Mail/Mail'
import Navbar from '../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Hotel.css'
import { faBed,  faLocationDot,faCircleXmark, faArrowAltCircleLeft, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

export default function Hotel() {
  const [slideno,setslideno]=useState(0)   //current image slide number
  const [open,setopen] = useState(false)
  const handelopenimg = (i) => {           //i(index number of the image) is passed as paramete)
    setslideno(i)
    setopen(true)
  }
  const handelmove = (direction) => {
    let newslidenumber;
    if(direction==='l'){
      newslidenumber = slideno===0 ? 8: slideno-1;
    }
    else{
      newslidenumber = slideno === 8 ? 1: slideno+1;
    }
    setslideno(newslidenumber)
  }
  const photo=[                      //array of objects (key(src),value(image)pairs) which i am gonna access in the code further
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60029006.jpg?k=9af974c665a46ff690c6985d07d2e3df3fd7a5dd2a0dc7fb23b55d35af1f674f&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60028712.jpg?k=0cd5f5917fda5e60e898e30e5abb52a766f11c4f4f431ee26872912e0857d005&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/34269422.jpg?k=ab3cd457f8f5c80d8894d80e0d0bb64d61a0048b75d1ba1960c58b06f8d77a3f&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/17174571.jpg?k=28281f402f9d80d33eb882dc536abd0395e615c08b14359a399f9138aac633a3&o=&hp=1'},
    {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/60028934.jpg?k=f4edda54103c18d9649a4f1839fe3d68061d30f43dc214f6cefc0781acb0037d&o=&hp=1"},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/60029023.jpg?k=b330c2b818e33d5122fc69f02721c42c1e87e35b024ef4daf4cac50574e994c8&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/111102824.jpg?k=b253d91374503e5db9f0da979ed92934f1250bdcc528fe2459f787794b852a99&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/30480980.jpg?k=7c5475224a74f5633ee5847847720917f151cc76e5055993cefbae5c6936b403&o=&hp=1'},
    {src:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/376563897.jpg?k=13a7274928f127d8fa30e1bde9d0bdd7bb3ae216c73d5b7d64bb6ab2b8038b35&o=&hp=1'}
  ]
  return (
    <div className="single">
      <Navbar/>
      <Header type='list'/>
        <div className="hotelcontain">
          {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setopen(false)} />
            <FontAwesomeIcon icon={faArrowAltCircleLeft}  className='arrow' onClick={() => handelmove('l')} />
            <div className="sliderwrapper">
              <img src={photo[slideno].src} alt="" className="sliderimg" />
            </div>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' onClick={() => handelmove('r')} />

          </div>}
          <div className="hotelwrapper">
            <button className="bookbtn">Reserve or Book Now!</button>
            <h1 className="hoteltitle">Vivanta Goa, Panaji</h1>
            <div className="hoteladdress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="locationtxt"> Off D. B. Bandodkar Road, 403001 Panaji, India </span>
            <span className="hoteldist">– Great location - show map</span>
            </div>
            <span className="hotelpricehighlight">Book a stay over $1245 at this pproperty and get a free airport taxi</span>
            <div className="hotelimage">
              {photo.map((photo,i)=>(
                <div className="hotelimgwrapper">
                  <img src={photo.src} alt="" onClick={() => handelopenimg(i)} className='hotelimg' />
                  </div>
              ))}
            </div>
            <div className="hoteldetails">
              <div className="hdtxt">
                <h1 className="hdtxttitle">Get the celebrity treatment with world-class service at Vivanta Goa, Panaji</h1>
                <p className="hdtxtdesc">
                    Located in the City Centre, the modern Vivanta by Taj Panaji enjoys views of the Mandovi River and Altinho Hills. 
                    <div className="gap">
                    Providing a rooftop pool, it also has a 24-hour gym and pampering massage at Jiva Spa. This pet friendly property offers free WiFi.
                    Fitted with hardwood flooring and a day bed by the large windows, air-conditioned rooms are equipped with a 32-inch flat-screen TV and DVD player. A well-stocked minibar and a work desk are included.  Bathrooms have a separate bathtub and rainshower.
                    </div>
                    <div className="gap">
                    Vivanta by Taj Panaji is 35 km from Dabolim Airport. Free parking is available.
                    </div>
                    <div className="gap">
                    The 24-hour business centre provides services like laptop rentals. Day trips can be arranged at the tour desk.
                    </div>
                    <div className="gap">
                    Latitude serves a selection of North Indian, Goan and Italian cuisines. Other dining options include Pan-Asian food at Tamari, desserts at Caramel and cocktails at Tease Bar.
                    </div>
                    <div className="gap">
                    Couples particularly like the location — they rated it 8.7 for a two-person trip.
                    </div>
                    <div className='gap' id='hig'>
                    Hotel chain/brand:
                    <div className='gap'>
                    The Indian Hotels Co Ltd
                    </div>
                    </div>
                </p>
              </div>
              <div className="hdprice">
                <h1 className="firstheading">Property highlights</h1>
                <h2 className="secondheading">Perfect for a 27-night stay!</h2>
                <div className="hdpricedetails">
                  <div className="firstdetail">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className='txt'>Top location: Highly rated by recent guests (9.3)</span>
                  <div>

                  <FontAwesomeIcon icon={faBed} />
                  <span className="txt">
                    Want a great night's sleep? This hotel was highly rated for its very comfy beds.</span>
                  </div>
                  </div>
                  <div className="seconddetail">
                  <h2 className="secondheading">Breakfast info</h2>
                  <span className="txt">Continental, Italian, Full English/Irish, Vegetarian, Vegan, Halal, Gluten-free, Asian, American, Buffet</span>
                  </div>
                  <div className="thirddetail">
                  <FontAwesomeIcon icon={faPlaystation} />
                  <span className="txt">Free private parking available at the hotel</span>
                  </div>
                  <div className="dprice">
                    <div>
                    <span className="price"><small>starts at -</small>$1245</span>
                    </div>
                    <button>Reserve</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <Mail/>
          <div className="foot">
          <Footer />
          </div>
    </div>
  )
}
