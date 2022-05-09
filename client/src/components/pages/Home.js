import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import {
    HStack,
    LinkBox,
    LinkOverlay,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Home = () => {
    const { loading, data } = useQuery(QUERY_ITEMS, {
        fetchPolicy: "no-cache",
    });

    const itemList = data?.items || [];

    return (
        <div bg="red.200" w={[300, 400, 500]}>
            <Box
                w="100%"
                h="100%"
                bgGradient="linear( blue.200, green.300, cyan.600)"
            >
                <Heading
                    bgGradient="linear(to-l, #004c4c, cyan.600)"
                    bgClip="text"
                    fontSize={{ base: "40px", md: "40px", lg: "56px" }}
                    fontWeight="extrabold"
                >
                    Welcome to Collection Conquest!!
                </Heading>
                <div>
                    <Text fontSize="2xl"> Here is a list of the Collection so far!!</Text>
                    <HStack>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <div>
                                <HStack>
                                    <Wrap>
                                        {itemList.map((item) => {
                                            return (
                                                <WrapItem>
                                                    <LinkBox>
                                                        <Box
                                                            bg="#086F83"
                                                            w={[300, 400, 500]}
                                                            borderWidth="1rem"
                                                            borderRadius="md"
                                                            borderColor="#086F83"
                                                            color="white"
                                                        >
                                                            <Text fontSize="4xl" as="u">
                                                                {" "}
                                                                {item.name}
                                                            </Text>
                                                            <div>
                                                                <LinkOverlay href={`/Item/${item.name}`}>
                                                                    <Image
                                                                        boxSize={[300, 400, 500]}
                                                                        src={item.imageURL}
                                                                        alt="Image Of Figure"
                                                                    />
                                                                </LinkOverlay>
                                                            </div>
                                                            <Text fontSize="2xl"> {item.description}</Text>
                                                            <Text fontSize="1xl">
                                                                {" "}
                                                                Date of Purchase: {item.dateOfPurchase}
                                                            </Text>
                                                        </Box>
                                                    </LinkBox>
                                                </WrapItem>
                                            );
                                        })}
                                    </Wrap>
                                </HStack>
                            </div>
                        )}
                    </HStack>
                </div>
            </Box>
        </div>
    );
};

export default Home;
