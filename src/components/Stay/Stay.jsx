import './Stay.css'

export default function Stay() {
  return (
    <>
    <div className="stay">
        <div className="stayitem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=" alt="" className="stayimg" />
            <div className="imgtxt">
                <span className='stayname'>Waldschenke Stendenitz</span>
                <span className="stayplace">Germany,Neuruppin</span>
                <span className="stayprice">Stay from $120</span>
                <div className="stayrating">
                    <button>8.9</button>
                    <span>Fabulous, 288 reviews</span>
                </div>
            </div>
        </div>
        <div className="stayitem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/228714298.webp?k=2e88556aac50ed7e31bdc4f399c385b1c2b3208d8a3c3fc622e770bc6d9b0c98&o=" alt="" className="stayimg" />
            <div className="imgtxt">
                <span className='stayname'>Harbor View</span>
                <span className="stayplace">United Kingdom, Isle of Skye</span>
                <span className="stayprice">Stay from $170</span>
                <div className="stayrating">
                    <button>9.1</button>
                    <span>Superb, 189 reviews</span>
                </div>
            </div>
        </div>
        <div className="stayitem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/236967822.webp?k=767dbb831d2109499cf73d2880a88e021a73781d7206cb812a328fd344756951&o=" alt="" className="stayimg" />
            <div className="imgtxt">
                <span className='stayname'>Casa Rural La Marquesa-Cuena</span>
                <span className="stayplace">Spain,Valera de Abajo</span>
                <span className="stayprice">Stay from $69</span>
                <div className="stayrating">
                    <button>8.6</button>
                    <span>Fabulous, 96 reviews</span>
                </div>
            </div>
        </div>

        <div className="stayitem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=" alt="" className="stayimg" />
            <div className="imgtxt">
                <span className='stayname'>Domki ROSSE niedaleko plaży</span>
                <span className="stayplace">Poland, Jastrzębia Góra</span>
                <span className="stayprice">Stay from $220</span>
                <div className="stayrating">
                    <button>9.6</button>
                    <span>Excellent, 301 reviews</span>
                </div>
            </div>
        </div>
         
    </div>
    </>
  )
}
