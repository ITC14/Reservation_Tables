import { Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import resto from "../image/restaurantfood.jpg";
import "../style/CallToAction.css";


const name = "Little Lemon";
const city ="Chigago";
const Description =()=>{
    return(
        <p className="Description">We are  a family owned Mediterranean restaurant,<br/>focused on traditional recipes served with <br/>a modern twist.</p>
    )
}
function CallToAction(){
    return(
        <>
            <Box marginBottom={50}>
                <HStack justifyContent="space" spacing={20} backgroundColor="#495E57" paddingLeft="25%" position="relative">
                    <VStack spacing={0} align="start" margin={10}>
                        <Heading as="h1" className="Name" id="Name">{name}</Heading>
                        <Heading as="h2" size="2xl" id="City">{city}</Heading>
                        <Description/>  
                        <Box className="Booking">
                            <Link to="/booking" className="BtnLink">Reserve a table</Link>
                        </Box>         
                    </VStack>
                    <Image src={resto} alt="Top meal" id="HeroImage" />
                </HStack>
            </Box>
        </>
    )
}
export default CallToAction;