import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import { HStack, LinkBox, LinkOverlay, SimpleGrid, Text } from "@chakra-ui/react";
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
                bgGradient='linear( blue.200, green.300, cyan.600)'>
                <Heading
                    bgGradient='linear(to-l, #004c4c, cyan.600)'
                    bgClip='text'
                    fontSize='6xl'
                    fontWeight='extrabold'



                >Welcome to Collection Conquest!!</Heading>
                <div>

                    <Text fontSize='2xl' > Here is a list of the Collection so far!!</Text>
                    <HStack>

                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                <HStack>
                                    <SimpleGrid columns={3} spacing="15">
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

                                                        <Text fontSize='4xl' as='u'> {item.name}</Text>
                                                        <div>
                                                            <LinkOverlay href={`/Item/${item.name}`}>
                                                                <Image
                                                                    boxSize="xl"
                                                                    src={item.imageURL}
                                                                    alt="Image Of Figure"
                                                                />
                                                            </LinkOverlay>
                                                        </div>
                                                        <Text fontSize='2xl' > {item.description}</Text>
                                                        <Text fontSize='1xl' > Date of Purchase: {item.dateOfPurchase}</Text>
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
