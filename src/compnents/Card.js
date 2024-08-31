import { Heading, HStack, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import deliveryLogo from "../image/food_delivery.png";
import greekSalad from "../image/greek_salad.jpg";
import lemonDessert from "../image/lemon_dessert.jpg";
import brushetta from "../image/bruschetta.jpg";


const itemsCard = [{
    name: 'Greek Salad',
    image: greekSalad,
    description: 'Greek salad is a traditional and emblematic salad recipe composed of Greek cuisine, made with tomato, cucumber, olive oil, oregano, feta, olives, onion, green pepper, and capers.',
    price: 10.99
},
{
    name: 'Bruschetta',
    image: brushetta,
    description: 'Bruschetta is a traditional Italian antipasto culinary preparation, composed of slices of toasted bread, rubbed with garlic, drizzled with olive oil and garnished, most often with pieces of tomatoes.',
    price: 13.99
},
{
    name: 'Lemon Dessert',
    image: lemonDessert,
    description: 'Zesty lemon tart with a buttery, crisp crust, filled with a smooth, tangy lemon curd. It’s topped with a light dusting of powdered sugar and perhaps a dollop of whipped cream or a few fresh berries.',
    price: 15.99
}
]

const Model = ()=>{
    return (
        <>
            <HStack justifyContent="center" spacing="3em" marginBottom={50}>
                {itemsCard.map((item)=>{
                    return(
                        <VStack key={item.name} spacing={2} width="20%" height="30%">
                            <img src={item.image} alt={item.name} width="100%" height="200vmax"/>
                            <HStack justifyContent="space-between" width="100%">
                                <Heading as="h3" size="md">{item.name}</Heading>
                                <Text color="#495E57" fontWeight="600" marginRight="2em">${item.price}</Text>
                            </HStack>
                            <Tooltip label={item.description} bg="#495E57" width="30%" marginLeft={10}   color="#ffffff" borderRadius={2} p={5}>
                                <Text noOfLines={3} color="gray">{item.description}</Text>
                            </Tooltip>
                            <HStack width="100%" justifyContent="space-between">
                                <Heading as="h4" size="sm">ORDER DELIVERY</Heading>
                                <Image src={deliveryLogo} alt="Delivery Logo" boxSize="5em"/>
                            </HStack>
                        </VStack>
                    )})}
            </HStack>
        </>
    )
}

function Card(){
    return(
        <>
            <Model/>
        </>
    )
}
export default Card;