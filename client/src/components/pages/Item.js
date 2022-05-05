import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { Container, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

import Container from "../container";

const Item = () => {
  // use useparams() to retrieve value of the route parameter :itemId
  const { itemId } = useParams();
  const { loading, data } = useQuery(QUERY_ITEM, {
    // pass URL parameter
    variables: { itemId: itemId },
  });

  const item = data?.item || [];

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
              {itemList.map((item) => {
                return (
                  <Box>
                    <h2>{item.name}</h2>
                    <div>
                      <Image src={item.ImageUrl} alt="Image Of Figure" />
                    </div>
                    <p>{item.description}</p>
                    <p>{item.type}</p>
                    <p>{item.dateOfPurchase}</p>
                  </Box>
                );
              })}
            </div>
          )}
        </HStack>
      </div>
      <div>
        <Container itemId={item._id} />
      </div>
    </div>
  );
};

export default Item;
