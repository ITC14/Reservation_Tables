import { Heading, HStack, Link, VStack } from "@chakra-ui/react";
import logo from "../image/Logo.svg"
import "../style/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faLinkedin, faSquareInstagram, faTiktok, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";


function Footer(){
    return(
        <div className="Footer">
            <HStack  justifyContent="center" spacing={100} padding={20} marginTop={150}>
                <VStack>
                    <img src={logo} alt="Mini-Logo"/>
                    <HStack>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faSquareInstagram}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faTiktok}/>
                    </HStack>
                </VStack>
                <VStack>
                    <Heading as="h3"size="md" className="H3">Useful links</Heading>
                    <HStack spacing={50}>
                        <VStack spacing={20}>
                            <Link to="/" className="FooterLink">Home</Link>
                            <Link to="/about" className="FooterLink" >About</Link>
                            <Link to="/menu" className="FooterLink">Menu</Link>
                            
                        </VStack>
                        <VStack spacing={20}>
                            <Link to="/booking" className="FooterLink">Reservation</Link>
                            <Link to="/order" className="FooterLink">Order online</Link>
                            <Link to="/login" className="FooterLink">Login</Link>
                        </VStack>
                    </HStack>
                    
                </VStack>
                <VStack spacing={0}>
                    <Heading as="h3"size="md" className="H3">Contact</Heading>
                    <p>You want to taste the best at the best prices.<br/> Contact us</p>
                    <p><FontAwesomeIcon icon={faPhone}/>+000 7566557996</p>
                    <p><FontAwesomeIcon icon={faEnvelopeSquare}/> www.littlelemom@contact.com</p>
                    <p><FontAwesomeIcon icon={faLocationPin}/> Chigago All Start street</p>                   
                </VStack>
            </HStack>
            <HStack justifyContent="space-around" bg="rgb(33, 33, 33)">
            <p>&copy; 2024 Reservation App. All rights reserved.</p>
                <HStack >
                    <Link to="/privacy" className="FooterLink" m={10}p={20} borderRight="solid 0.15rem white">Privacy</Link>
                    <Link to="/terms" className="FooterLink">Terms</Link>
                </HStack>
            </HStack>
         
        </div>
    )
}
export default Footer;