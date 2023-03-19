import { useQuery } from "@apollo/client";
import { QUERY_ITEM } from "../../utils/queries";
import { Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import { useState } from "react";

const Item = () => {
  // use 'useparams()' to retrieve value of the route parameter 'name'
  const { name } = useParams();
  const { loading, data } = useQuery(QUERY_ITEM, {
    // pass URL parameter
    variables: { name: name },
  });
  let i = 0;

  const [imgSrc, setImgSrc] = useState(i);

  const imageChanger = (e) => {
    let currentImage = e.target;
    if (i < data.item.imageURL.length - 1) {
      i++;
      currentImage.setAttribute("src", data.item.imageURL[i]);
      console.log(i);
      return;
    }
    i = 0;
    currentImage.setAttribute("src", data.item.imageURL[i]);
    console.log(i);
  };

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
                    onClick={(e) => imageChanger(e)}
                    boxSize="xl"
                    src={data.item.imageURL[imgSrc]}
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
                <Center fontSize="1xl"> Collected By: {data.item.user}</Center>
              </Box>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Item;
