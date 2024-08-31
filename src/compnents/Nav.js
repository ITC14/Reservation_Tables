import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";



function Nav(){
    return(
        <>
            <nav className="Nav" >
                <HStack spacing={20}>
                    <Link to="/" className="CustomLink">HOME</Link>
                    <Link to="/about" className="CustomLink" >ABOUT</Link>
                    <Link to="/menu" className="CustomLink">MENU</Link>
                    <Link to="/booking" className="CustomLink">RESERVATION</Link>
                    <Link to="/order" className="CustomLink">ORDER ONLINE</Link>
                    <Link to="/login" className="CustomLink">LOGIN</Link>
                </HStack>
            </nav>  
            
        </>
    )
}
export default Nav;