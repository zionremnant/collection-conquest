import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
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
        w="100%"
        h="100%"
        bgGradient="linear( blue.200, green.300, cyan.600)"
        paddingBottom="4rem"
      >
        <Center
          bgGradient="linear(to-l, #004c4c, cyan.600)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Collection Conquest!!
        </Center>
        <div>
          <Center fontSize="2xl"> Here is the Collectible!!</Center>
          {/* <HStack> */}
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
                display="block"
                marginLeft="auto"
                marginRight="auto"
                marginBottom="3rem"
              >
                <Center fontSize="4xl" as="u">
                  Name: {data.item.name}
                </Center>

                <div>
                  <Image
                    boxSize="xl"
                    src={data.item.imageURL}
                    alt="Image Of Figure"
                  />
                </div>
                <Center fontSize="2xl">
                  Description: {data.item.description}
                </Center>
                <Center fontSize="1xl">
                  Date Purchased: {data.item.dateOfPurchase}
                </Center>
                <Center fontSize="1xl">
                  Collectible Obtained?{" "}
                  {data.item.obtained
                    ? "You know it!"
                    : "Unfortunately, not yet..."}
                </Center>
                <Center fontSize="1xl">
                  Reminder Requested? {data.item.reminder ? "Yesh!" : "Nopes!"}
                </Center>
                <Center fontSize="1xl"> {data.item.user}</Center>
              </Box>
            </div>
          )}
          {/* </HStack> */}
        </div>
      </Box>
    </div>
  );
};

export default Item;
