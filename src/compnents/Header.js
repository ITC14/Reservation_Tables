import logo from "../image/Logo .svg"
import Nav from "./Nav";
function Header(){
    return(
        <>
            <img src={logo} alt="Logo"/>
            <Nav/>
        </>
    )
}
export default Header;