import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";



function Nav(){
    return(
        <>
            <nav className="Nav" >
                <HStack>
                    <Link to="/" className="CustomLink">Home</Link>
                    <Link to="/about" className="CustomLink" >About</Link>
                    <Link to="/menu" className="CustomLink">Menu</Link>
                    <Link to="/booking" className="CustomLink">Reservations</Link>
                    <Link to="/order" className="CustomLink">Order Online</Link>
                    <Link to="/login" className="CustomLink">Login</Link>
                </HStack>
            </nav>  
            
        </>
    )
}
export default Nav;