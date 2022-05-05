import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import { HStack } from "@chakra-ui/react";
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
      <Heading>Welcome to Collection Conquest!!</Heading>
      <div>
        <h2>Here is a list of the Collection so far!</h2>
        <HStack>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <HStack>
                {itemList.map((item) => {
                  return (
                    <Box
                      bg="teal"
                      w="30rem"
                      borderWidth="1rem"
                      borderRadius="md"
                      borderColor="teal"
                      color="white"
                    >
                      <h2>{item.name}</h2>
                      <div>
                        <Image
                          boxSize="xl"
                          src={item.imageURL}
                          alt="Image Of Figure"
                        />
                      </div>
                      <p>{item.description}</p>
                      <p>{item.type}</p>
                      <p>{item.dateOfPurchase}</p>
                    </Box>
                  );
                })}
              </HStack>
            </div>
          )}
        </HStack>
      </div>
    </div>
  );
};

export default Home;
