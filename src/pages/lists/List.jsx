import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Mail from '../../components/Mail/Mail'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns';
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/Searchitem/Searchitem'

export default function List() {

  const location = useLocation()
  console.log(location)          //see in console what is the llocation hook holding in it.(it is of data-type object)
  const [destination,setdestination] = useState(location.state.destination)   //console.log(destination) it holds the  location input by the user
  const [date,setdate] = useState(location.state.date)
  const [option,setoption] = useState(location.state.option)
  const [opencal,setopencal] = useState(false)

  return (
    <>
    <div>
        <Navbar/>
        <Header type='list'/>
        <div className="listcontainer">
          <div className="listwrapper">
            <div className="listsearch">
              <h1 className="lstitle">Search</h1>
              <div className="lsitem">
                <label htmlFor="h">Destination</label>
                <input id='h' type="text" placeholder={destination} />
              </div>
              <div className="lsitem">
              <label htmlFor="">Check-in Date</label>
              <span onClick={() => setopencal(!opencal)}>{format(date[0].startDate, 'dd/mm/yyyy')} to {format(date[0].endDate,'dd/mm/yyyy')} </span>
              {opencal  && <DateRange   onChange={item => setdate([item.selection])} 
              minDate={new Date()}
              ranges={date}/>}
              </div>
              <div className="lsitem">
                <label htmlFor="lsopttxt">Option</label>
                <div className="lsoptlist">

                <div className="lsoptitem">
                  <span className="lsopttxt">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='lsoptninput' placeholder=''/>
                </div>
                <div className="lsoptitem">
                  <span className="lsopttxt">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='lsoptninput' />
                </div>
                <div className="lsoptitem">
                  <span className="lsopttxt">
                    Adult
                  </span>
                  <input type="number" className='lsoptninput' min={1} placeholder={option.adults}/>
                </div>
                <div className="lsoptitem">
                  <span className="lsopttxt">
                    Children
                  </span>
                  <input type="number" className='lsoptninput' min={0} placeholder={option.children} />
                </div>
                <div className="lsoptitem">
                  <span className="lsopttxt">
                    Rooms
                  </span>
                  <input type="number" className='lsoptninput' min={1} placeholder={option.room} />
                </ div>
                </div>
              </div>
              <button>Search</button>
            </div>


{/* results part */}
            <div className="listresult">
            <Searchitem/>
            <Searchitem/>
            </div>
              
          </div>
        </div>
    </div> 
        <div className="foot">
          <Mail/>
         <Footer/>
        </div>
    </>
    
  )
}

