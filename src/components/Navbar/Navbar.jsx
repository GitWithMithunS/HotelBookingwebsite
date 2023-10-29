import "./navbar.css"
 
 export default function Navbar() {
   return (
     <div className="navbar">
        <div className="navcontainer">
            <span className="logo"><h1>BookMe.com</h1></span>
            <div className="navitems">
                <button className="navbutton">Register</button>
                <button className="navbutton">Login</button>
            </div>
        </div>
     </div>
   )
 }
 