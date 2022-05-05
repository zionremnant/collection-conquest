import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Item = () => {
  const { loading, data } = useQuery(QUERY_ITEM, {
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
    </div>
  );
};

export default Item;
