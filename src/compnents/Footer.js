import { HStack, VStack } from "@chakra-ui/react";
import logo from "../image/Logo.svg"
import Nav from "./Nav";

function Footer(){
    return(
        <div className="Footer">
            <HStack >
                <img src={logo} alt="Mini-Logo"/>
                <VStack>
                    <h3> All Navigation links</h3>
                    <Nav/>
                </VStack>
                <p>&copy; 2024 Reservation App. All rights reserved.</p>
                <p>Contact</p>
                    <p>Help</p>
                    <p>Privacy</p>
                    <p>Terms</p>
            </HStack>
         
        </div>
    )
}
export default Footer;