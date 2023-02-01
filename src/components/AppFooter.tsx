
import { Navbar } from "react-bootstrap"
import "../styles/appFooter.css"

export function AppFooter(){
    return(
        <div className="appFooter">
            <div className="itemContainer">
                <a className="footerItem" href="#">contact</a> 
                <p className="footerItem" style={{color: "rgb(245, 138, 7)"}}>/</p>
                <a className="footerItem" href="#">about me </a>
                <p className="footerItem"style={{color: "rgb(245, 138, 7)"}}>/</p>
                <p className="footerItem">thanks!</p>
            </div>
            
        </div>
    )
}