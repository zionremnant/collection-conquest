import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { Heading, HStack } from "@chakra-ui/react";
import { Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import Auth from "../../utils/auth";

const Profile = () => {
  const { username } = useParams();
  console.log(username);

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username },
  });
  console.log(data);

  const itemList = data?.user.items || [];

  return (

    <div>

      {Auth.loggedIn() ? (
        <HStack>

          <div>

            <Heading>Here are ALL of your Collectibles!</Heading>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <Wrap>
                  {itemList.map((item) => {
                    return (

                      <WrapItem>
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
                          <p>
                            Do you have this Collectible?{" "}
                            {item.obtained ? "Yes!" : "NO! :("}
                          </p>
                          <p>
                            Did you select a reminder?{" "}
                            {item.reminder ? "Yuppers!" : "Noppers!"}
                          </p>
                        </Box>
                      </WrapItem>
                    );
                  })}

                </Wrap>

              </div>
            )}

          </div>

        </HStack>
      ) : (

        <Heading> You Need To Be Logged In to view this page! </Heading>

      )

      }

    </div >

  );
};

export default Profile;
