import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { HStack, LinkBox, LinkOverlay, SimpleGrid, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

const Item = () => {
  // use 'useparams()' to retrieve value of the route parameter 'name'
  const { name } = useParams();
  const { loading, data } = useQuery(QUERY_ITEM, {
    // pass URL parameter
    variables: { name: name },
  });

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
          <Text fontSize='2xl' > Here is the Collectible!!</Text>
          <HStack>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <Box
                  bg="teal"
                  w="30rem"
                  borderWidth="1rem"
                  borderRadius="md"
                  borderColor="teal"
                  color="white"
                >
                  <Text fontSize='4xl' as='u'> {data.item.name}</Text>

                  <div>
                    <Image
                      boxSize="xl"
                      src={data.item.imageURL}
                      alt="Image Of Figure"
                    />
                  </div>
                  <Text fontSize='2xl' > {data.item.description}</Text>
                  <Text fontSize='1xl' > {data.item.dateOfPurchase}</Text>
                  <Text fontSize='1xl' > {data.item.obtained}</Text>
                  <Text fontSize='1xl' > {data.item.reminder}</Text>
                  <Text fontSize='1xl' > {data.item.user}</Text>
                </Box>
              </div>
            )}
          </HStack>
        </div>
      </Box >
    </div >
  );
};

export default Item;
