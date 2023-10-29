import { Navigate, useNavigate } from 'react-router-dom'
import './Searchitem.css'

export default function Searchitem() {
    const navi = useNavigate()
    const handelavai = () => {
        navi('/hotels/id:')
    } 
  return (
    <>
    <div className="resultcell">

     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420196551.webp?k=9c7dfe0ad0a0d766b2fcc783490574356e7072952f86acd1d109290d7ee92db8&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>9.3</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$230</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/323638476.webp?k=8d31eadc62e17539ad0c47667e88a5c1db500e9a874f29e841fac5f4bc968951&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>9.6</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$2123</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/376560909.webp?k=c189269d5edd2b1e33285504dc70a73e0e6d62200d61f8e28d70061b00e78c49&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>9.2</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$623</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/60029006.webp?k=14c817b66e7c025ba53ef6dadf579adcafe9076c64e0bc1fd114b491d0e93bd2&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$1123</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/236435416.webp?k=58da0b33e589f43a4a17a898cc80b7429368fffd6c31c6b97af2ee9382b6de83&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$900</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/327780230.webp?k=1f8e5977c08283bdd280b03bde95573a59886448fcd538aa81165557c1c87597&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$90</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/133596541.webp?k=8f2af12311983edff7ef4946b5b2b01319828dd2aa60fc16f2ae0d87b9b96ab1&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$548</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/73754944.webp?k=3bf0f04500471829b61695a96b202decb13c3ffcb0718316d6372bda3ffe6c14&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.7</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$339</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
     <div className="searchitem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/319574545.webp?k=06221644d558b22580039ad7a75e8fcadb57a0d4ff15d8c5a9c60ab270ae48ce&o=" alt="" className="siimg" />
        <div className="sidesc">
            <h1 className='sidesctitle'>Hotel Casa De Patio</h1>
            <span className="sidistance">500m from the center</span>
            <span className="sitaxi">Free airport taxi</span>
            <span className="sisubtitles">Studio Apartment with Air conditioning</span>
            <span className="sifeatures">Entire studio + 1 Bathroom + 21msqr 1 full bed</span>
            <span className="sicancelop">Free cancellation</span>
            <span className="sicancelsub">You can cancel later,so lock in this great price today</span>
        </div>
        <div className="sidetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>9.7</button>
            </div>
            <div className="sidetailstxt">
                <span className="siprice">$1980</span>
                <span className="sitax">Includes taxes and fees</span>
                <button className="sicheckbtn" onClick={handelavai}>See availability</button>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

