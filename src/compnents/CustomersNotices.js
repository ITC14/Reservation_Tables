import { Box, Heading, HStack, Image, Text, Tooltip, VStack, } from "@chakra-ui/react";
import { useEffect, useState,useRef } from "react";

const itemsCard = [{
    name: 'User 1',
    rating: "*****",
    comment: 'I had an amazing experience at this restaurant! The food was delicious—every dish was bursting with flavor. The service was top-notch, and the atmosphere was perfect for a cozy dinner.  ',
},
{
    name: 'User 2',
    rating: "***",
    comment: 'The ambiance at this restaurant is fantastic, with a warm and inviting decor that sets the perfect mood. The menu offers a great variety, and the seafood platter I had was fresh and expertly prepared. ',
},
{
    name: 'User 3',
    rating: "****",
    comment: 'This place is a hidden gem! The homemade pasta was incredible, and the wine list had some excellent choices. The staff were friendly and attentive, making sure we had everything we needed. ',
},
{
    name: 'User 4',
    rating: "*****",
    comment: 'I absolutely loved the dining experience at this restaurant!I would definitely recommend this place to anyone looking for a cozy and enjoyable dinner experience.',
}
]

 
function CustomersNotices(){
    const [user, setUser] = useState([]);
    const carouselRef = useRef(null);
    const fectchData = ()=>{
        fetch('https://randomuser.me/api/?results=5')
       .then(response => response.json())
       .then(data => {
        if (data.results && data.results.length > 0) {
            setUser(data.results);
       }})
    }
    useEffect(()=>{
        fectchData();
       },[]);
       
    return Object.keys(user).length > 0 ?(
        <>
            <VStack marginBottom={50}>
                <Heading as="h2" size="4xl">Testimonials</Heading>
                <HStack justifyContent="center" spacing="3em">
                    <Box
                        ref={carouselRef}
                        overflowX="auto"
                        whiteSpace="nowrap"
                        width="80vw"
                        sx={{ scrollBehavior: 'smooth' }}
                        cursor="grab"
                        position="relative"
                    >
                        <HStack spacing="5em" align="start">
                            {itemsCard.map((item,index)=>
                                (
                                    <VStack key={index} spacing={2} width="30%" borderRadius="md" boxShadow="md" bg="white" justifyContent="start" transition="all 0.2s" // Optionnel: ajoute une transition douce pour les changements d'état
                                    _hover={{ 
                                        boxShadow: "lg" // Augmente l'ombre au survol pour un effet interactif
                                    }}
                                    display="inline-block"
                                    >
                                        <Heading as="h2" size="6xl" color="#F4CE14" fontWeight="900" marginRight="2em" textAlign="start" width="100%" >{item.rating}</Heading>
                                        <HStack justifyContent="space-between" width="100%">
                                            <Image objectFit='cover' borderRadius="2em"src={user[index]?.picture.large} alt={item.name}  boxSize='100%'/>
                                            <Heading as="h3" size="md">{user[index]?.name.first} {user[index]?.name.last}</Heading>
                                        </HStack>
                                                <Tooltip
                                                margin={2}
                                                    placement="bottom-end"
                                                    label={item.comment}
                                                    bg="#495E57"
                                                    color="white"
                                                    p={5}
                                                    borderRadius={2}
                                                    fontWeight="700"
                                                    // Ensure the box takes up full height when expanded
                                                >
                                                    <Text whiteSpace="wrap" noOfLines={3} color="gray" maxHeight="none">{item.comment}</Text>
                                                </Tooltip>
                                    </VStack>
                                ))}
                        </HStack>
                    </Box>
                </HStack>
            </VStack>
        </>
    ):(
        <HStack marginBottom={50} justifyContent="center">
            <h1>Data pending ...</h1>
        </HStack>
        
    )
}
export default CustomersNotices;