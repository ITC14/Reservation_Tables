import { Heading, HStack, VStack } from "@chakra-ui/react";
import resto from "../image/restaurantfood.jpg";

const name = "Little Lemon";
const city ="Chigago";
const description ="We are  a family owned Mediterranean restaurant,focused on traditional recipes served with a modern twist."
function Description(){
    return(
        <>
            <HStack>
                <VStack>
                    <Heading as="h1" size="4xl">{name}</Heading>
                    <Heading as="h2" size="2xl">{city}</Heading>
                    <Heading as="h3" size="md">{description}</Heading>                
                </VStack>
                <img src={resto} alt="Top meal" width="200rem" height="200 rem" />
            </HStack>
        </>
    )
}
export default Description;