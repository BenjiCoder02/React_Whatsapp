import React from "react"
import "./compStyles.css"
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function Navbar(){
    return(
        <div className="navbar">
            <div className="top">
                <h2> <div className="logo"><WhatsAppIcon /></div> WhatsApp</h2>
                <div className="right-nav">
                    <button>
                        <SearchIcon />
                    </button>
                    <button>
                        <MoreVertIcon />
                    </button>
                </div>
            </div>
            <div className="bottom">
                <h3><a href="#" className="active">CHATS</a></h3>
                <h3><a href="#">STATUS</a></h3>
            </div>
        </div>
    )
}

export default Navbar