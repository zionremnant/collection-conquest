import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { Center, Heading, HStack, Link } from "@chakra-ui/react";
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

  if (itemList.length < 1) {
    console.log("This bitch empty! Yeet!");
  }

  return (
    <div>
      <Box
        w="100%"
        h="calc(100vh)"
        bgGradient="linear( blue.200, green.300, cyan.600)"
      >
        {Auth.loggedIn() ? (
          <HStack>
            {itemList.length >= 1 ? (
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
                              w={[300, 400, 500]}
                              borderWidth="1rem"
                              borderRadius="md"
                              borderColor="teal"
                              color="white"
                            >
                              <h2>{item.name}</h2>
                              <div>
                                <Image
                                  boxSize={[300, 400, 500]}
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
            ) : (
              <Center fontSize="2rem" fontWeight="bold">
                Uh Oh! You haven't added any Collectibles yet!
                <Link color="teal" href="/newitem">
                  Click Here to add some!
                </Link>
              </Center>
            )}
          </HStack>
        ) : (
          <Center fontSize="2rem" fontWeight="bold">
            {" "}
            You Need To Be Logged In to view this page!{" "}
          </Center>
        )}
      </Box>
    </div>
  );
};

export default Profile;
