import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faPerson, faPlane, faSearch, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faMagento } from '@fortawesome/free-brands-svg-icons'
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom'

export default function Header({type}) {
const [destination,setdestination] = useState('')
const [date, setdate] = useState([             //from react-date-range website
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
const navigator = useNavigate()

const handlesearch =() =>{
    navigator('/hotels', {state:{destination,date,option}})             
}

  //calender
const [opencal,setopencal] = useState(false)
const calclick = () => {
    setopencal(!opencal)        //onclicking setcal will be opposite of opencal
  }
  
  //adults,children,rooms
const [openoption,setopenoption] = useState(false)
const [option,setoption] = useState({
    adults:1,
    children:0,
    room:1
})
const handeloption = (name , operation) => {
    setoption((prev) => {
        return{
            ...prev,                                                                  //look into it again
            [name]:operation ==='i' ? option[name] + 1 : option[name]-1 ,            
        };
        });
    };


  return (
    <>
    <div className="header">
        <div className="headercontainer">
        <div className="headerlist">
            <div className="headerlistitems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerlistitems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerlistitems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
            </div>
            <div className="headerlistitems">
            <FontAwesomeIcon icon={faMagento} />
            <span>Attractions</span>
            </div>
            <div className="headerlistitems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>
           



          {type !== "list" && <> 
          
            <h1 className="headertitle">Find your next stay</h1>
                <p className="headerdiscription">Search low prices on hotels, homes and much more...</p>
                <button className="headerbtn">Sign in/Register</button>
                <div className="headersearch">
                    <div className="headersearchitem">
                    <FontAwesomeIcon icon={faBed} className='headericon' />
                     <input type="text" placeholder='Were are u going?' onChange={e=>setdestination(e.target.value)} className='headersearchinput' />
                    </div>
                    
                    <div className="headersearchitem">
                    <FontAwesomeIcon icon={faCalendar} className='headericon' />
                     <span onClick={calclick} className="headersearchtext" >Check-in:{format(date[0].startDate,'dd/mm/yyyy')} Check-out: {format(date[0].endDate,'dd/mm/yyyy')}</span>      
                    {/*when opencal and daterange(which is already true) only then the calender shows up  as onclick function is defined above with help of a useState*/}
                    {opencal && <DateRange                    
                        editableDateInputs={true}
                        onChange={item => setdate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        minDate={new Date}
                        className='date'
                        />
                    } 
                    </div>
                                       
                    <div className="headersearchitem">
                    <FontAwesomeIcon icon={faPerson} className='headericon' />
                    <span className="headertext" onClick={() => {setopenoption(!openoption)}}>{option.adults} adult - {option.children} children - {option.room} Room</span>
                    {
                    openoption && <div className="options">
                        <div className="optionitems">
                            <span className="optiontext">Adult</span>
                        <div className="optioncounter">
                            <button className="optioncounterbuttonn" disabled={option.adults<=1} onClick={() => handeloption('adults' ,'d')}>-</button>
                            <span className="optioncounterbutton">{option.adults}</span>
                            <button className="optioncounterbuttonn" onClick={() => handeloption('adults' ,'i')}>+</button>
                        </div>
                        </div>
                        <div className="optionitems">
                            <span className="optiontext">Children</span>
                            <div className="optioncounter">
                            <button className="optioncounterbuttonn" disabled={option.children<=0} onClick={() => handeloption('children' ,'d')}>-</button>
                            <span className="optioncounterbutton">{option.children}</span>
                            <button className="optioncounterbuttonn" onClick={() => handeloption('children' ,'i')}>+</button>
                            </div>
                        </div>
                        <div className="optionitems">
                            <span className="optiontext">Room</span>
                            <div className="optioncounter">
                            <button className="optioncounterbuttonn" disabled={option.room<=1} onClick={() => handeloption('room' ,'d')}>-</button>
                            <span className="optioncounterbutton">{option.room}</span>
                            <button className="optioncounterbuttonn" onClick={() => handeloption('room' ,'i')}>+</button>
                            </div>
                        </div>
                    </div>
                    }
                    </div>
                    
                    <div className="headersearchitem">
                    <button className="headerbtn" onClick={handlesearch}>
                    <FontAwesomeIcon icon={faSearch} className='headericon' />
                    Search
                    </button>
                    </div>
                </div>
                </>}
              
        


        </div>
    </div>
    </>
  )
}
