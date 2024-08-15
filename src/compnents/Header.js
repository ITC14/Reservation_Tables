import { HStack } from "@chakra-ui/react";
import logo from "../image/Logo.svg"
import Nav from "./Nav";
function Header(){
    return(
        <>
            <HStack spacing={5} margin={50} justifyContent="center">
                <img src={logo} alt="Logo"/>
                <Nav/>
            </HStack>
        </>
    )
}
export default Header;