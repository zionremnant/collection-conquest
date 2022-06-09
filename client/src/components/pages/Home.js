import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import {
  Center,
  HStack,
  LinkBox,
  LinkOverlay,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEMS, {
    fetchPolicy: "no-cache",
  });

  const itemList = data?.items || [];

  return (
    <div bg="red.200" w={[300, 400, 500]}>
      <Box
        w="100%"
        minHeight="100vh"
        h="100%"
        paddingBottom="0.25rem"
        bgGradient="linear( blue.200, green.300, cyan.600)"
      >
        <Center
          bgGradient="linear(to-l, #004c4c, cyan.600)"
          bgClip="text"
          fontSize={{ base: "40px", md: "40px", lg: "56px" }}
          fontWeight="extrabold"
        >
          Welcome to Collection Conquest!!
        </Center>
        <div>
          <Center fontSize="2xl">
            {" "}
            Here is a list of the Collection so far!!
          </Center>
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
                              marginLeft="6rem"
                            >
                              <Center fontSize="4xl" as="u">
                                {" "}
                                {item.name}
                              </Center>
                              <div>
                                <LinkOverlay href={`/Item/${item.name}`}>
                                  <Image
                                    boxSize="xl"
                                    src={item.imageURL[0]}
                                    alt="Image Of Figure"
                                  />
                                </LinkOverlay>
                              </div>
                              <Center fontSize="2xl">
                                {" "}
                                {item.description}
                              </Center>
                              <Center fontSize="1xl">
                                {" "}
                                Date of Purchase: {item.dateOfPurchase}
                              </Center>
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
