import { Box, Heading, HStack, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import chefs from "../image/MarioAdrian.jpg";
import team2 from "../image/Team.jpg";
import "../style/Team.css";

const name = "Little Lemon";
const city ="Chigago";
const description = "Our restaurant team is a dynamic group of passionate professionals dedicated to delivering exceptional dining experiences. From our skilled chefs who craft delicious, innovative dishes to our attentive servers who ensure impeccable service, every member plays a crucial role. The front-of-house staff creates a warm, welcoming atmosphere, while the back-of-house team works tirelessly to maintain high standards of quality and efficiency. Together, we strive to exceed expectations and make every visit memorable"
function Team(){
    return(
        <Box marginBottom={50} marginTop={75}>
                <HStack justifyContent="space" spacing={20} backgroundColor="#495E57" paddingLeft="25%" position="relative">
                    <VStack spacing={0} align="start" margin={10} width="30%">
                        <Heading as="h1" className="Name" id="Name">{name}</Heading>
                        <Heading as="h2" size="2xl" id="City">{city}</Heading>
                        <Tooltip label={description} placement="bottom-end" bg="white" color="#495E57" width="20%" marginLeft={10}p={5} borderRadius={5}>
                            <Text color="white" noOfLines={3}>{description}</Text>  
                        </Tooltip>
                    </VStack>
                    <Image src={chefs} alt="Top meal" id="chef" />
                    <Image src={team2} alt="Top meal" id="team2" />
                </HStack>
            </Box>
    )
}
export default Team;