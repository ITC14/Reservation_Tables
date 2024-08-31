import { Box, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Specializations(){
    return(
        <>
         <HStack justifyContent="space-around"  spacing={10} marginBottom={50}>
            <Heading as="h2" size="xl">This weeks specials!</Heading>
            <Box className="Booking">
                <Link to="/order" className="BtnLink">Online Menu</Link>
            </Box>
         </HStack>
        </>
    )
}
export default Specializations;