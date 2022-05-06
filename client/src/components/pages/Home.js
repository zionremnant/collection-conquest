import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import { HStack, LinkBox, LinkOverlay, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";



const Home = () => {
    const { loading, data } = useQuery(QUERY_ITEMS, {
        fetchPolicy: "no-cache",
    });

    const itemList = data?.items || [];

    return (
        <div>

            <Box
                w='100%'
                h='100%'
                bgGradient='linear( blue.100, green.300, cyan.600)'>
                <Heading
                    // w='100%'
                    h='50px'
                    bgGradient='linear(to-r, teal.500, green.300, cyan.600)'


                // bgGradient='linear(to-l, cyan.600, green.300)'
                // bgClip='text'
                // fontSize='6xl'
                // fontWeight='extrabold'


                >Welcome to Collection Conquest!!</Heading>
                <div>

                    <h2>Here is a list of the Collection so far!</h2>
                    <HStack>

                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                <HStack>
                                    <SimpleGrid columns={3} spacing={10}>
                                        {itemList.map((item) => {
                                            return (
                                                <LinkBox>
                                                    <Box
                                                        bg="#086F83"
                                                        w="30rem"
                                                        borderWidth="1rem"
                                                        borderRadius="md"
                                                        borderColor="#086F83"
                                                        color="white"

                                                    >
                                                        <h2>{item.name}</h2>
                                                        <div>
                                                            <LinkOverlay href={`/Item/${item.name}`}>
                                                                <Image
                                                                    boxSize="xl"
                                                                    src={item.imageURL}
                                                                    alt="Image Of Figure"
                                                                />
                                                            </LinkOverlay>
                                                        </div>
                                                        <p>{item.description}</p>
                                                        <p>{item.type}</p>
                                                        <p>{item.dateOfPurchase}</p>
                                                    </Box>
                                                </LinkBox>
                                            );
                                        })}
                                    </SimpleGrid>
                                </HStack>
                            </div>
                        )}

                    </HStack>

                </div>
            </Box >

        </div >
    );
};

export default Home;
