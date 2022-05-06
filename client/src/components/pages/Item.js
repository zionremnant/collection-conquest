import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { HStack } from "@chakra-ui/react";
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
      <Heading>Welcome to Collection Conquest!!</Heading>
      <div>
        <h2>Here is the Collectible!</h2>
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
                <h2>{data.item.name}</h2>
                <div>
                  <Image
                    boxSize="xl"
                    src={data.item.imageURL}
                    alt="Image Of Figure"
                  />
                </div>
                <p>{data.item.description}</p>
                <p>{data.item.dateOfPurchase}</p>
                <p>{data.item.obtained}</p>
                <p>{data.item.reminder}</p>
                {/* <p>{data.item.user}</p> */}
              </Box>
            </div>
          )}
        </HStack>
      </div>
    </div>
  );
};

export default Item;
