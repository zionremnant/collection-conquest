import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { Container } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: "no-cache",
  });

  const itemList = data?.items || [];

  return (
    <HStack>
      <div>
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
      </div>
    </HStack>
  );
};

export default Profile;
