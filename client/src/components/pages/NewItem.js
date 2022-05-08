// WORK IN PROGRESS
import { useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import { SAVE_ITEM } from "../../utils/mutations";
import { Box, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CloudinaryUploadWidget from "../../CloudinaryUploadWidget";
import { Heading, HStack } from "@chakra-ui/react";
import Auth from "../../utils/auth";

const NewItem = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    description: "",
    dateOfPurchase: "",
    imageURL: "",
    reminder: false,
    obtained: false,
  });

  const [value, onChange] = useState(new Date());

  const [checked, setChecked] = useState(false);

  const [checkedTwo, setCheckedTwo] = useState(false);

  useEffect(() => {
    console.log(userFormData);
  }, [userFormData]);

  useEffect(() => {
    setUserFormData({ ...userFormData, reminder: checked });
    console.log(checked);
  }, [checked]);

  useEffect(() => {
    setUserFormData({ ...userFormData, obtained: checkedTwo });
    console.log(checked);
  }, [checkedTwo]);

  useEffect(() => {
    setUserFormData({ ...userFormData, dateOfPurchase: value.toDateString() });
    console.log(value);
  }, [value]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // if (name === "reminder") {
    //   console.log(event.target.checked)
    //   setUserFormData({ ...userFormData, [name]: event.target.checked });
    // }
    // if (name === "obtained") {
    //   console.log(event.target.checked)
    //   setUserFormData({ ...userFormData, [name]: event.target.checked });
    // }

    setUserFormData({ ...userFormData, [name]: value });
  };

  // let { id } = useParams();

  const [saveItem, { error }] = useMutation(SAVE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log("I am submitting~");

    try {
      const { data } = await saveItem({
        variables: { itemData: { ...userFormData } },
      });

      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setUserFormData({
      name: "",
      description: "",
      dateOfPurchase: "",
      imageURL: "",
      reminder: false,
      obtained: false,
    });
  };

  return (
    <div>
      <Box
        w="100%"
        h="calc(100vh)"
        bgGradient="linear( blue.200, green.300, cyan.600)"
        paddingBottom="1rem"
      >
        {Auth.loggedIn() ? (
          <HStack>
            <Box
              bg="#086F83"
              w={[300, 400, 500]}
              borderWidth="1rem"
              borderRadius="md"
              borderColor="#086F83"
              display="block"
              marginLeft="auto"
              marginRight="auto"
              marginTop="1.25rem"
            >
              <FormControl>
                <FormLabel color="white" htmlFor="name">
                  Name Of Collectible:
                </FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={userFormData.name}
                  type="text"
                  onChange={handleInputChange}
                  bg="white"
                  focusBorderColor="white"
                />
                <br></br>
                <br></br>
                <FormLabel color="white" htmlFor="description">
                  Brief Description Of Collectible:
                </FormLabel>
                <Input
                  id="description"
                  name="description"
                  value={userFormData.description}
                  type="text"
                  onChange={handleInputChange}
                  bg="white"
                  focusBorderColor="white"
                />
                <br></br>
                <br></br>
                <FormLabel color="white" htmlFor="dateOfPurchase">
                  Date Of Purchase:
                </FormLabel>
                <Calendar
                  id="dateOfPurchase"
                  onChange={onChange}
                  value={value}
                />
                <br></br>
                <FormLabel color="white" htmlFor="reminder">
                  Is this Collectible a Pre-Order?
                </FormLabel>
                <Checkbox
                  id="reminder"
                  value={userFormData.reminder}
                  name="reminder"
                  onChange={(e) => setChecked(e.target.checked)}
                  color="white"
                >
                  Pre-Ordered?
                </Checkbox>
                <br></br>
                <br></br>
                <FormLabel color="white" htmlFor="obtained">
                  Do you already have this item?
                </FormLabel>

                <Checkbox
                  id="obtained"
                  value={userFormData.obtained}
                  name="obtained"
                  onChange={(e) => setCheckedTwo(e.target.checked)}
                  color="white"
                >
                  Obtained?
                </Checkbox>
                <br></br>
                <br></br>

                <CloudinaryUploadWidget
                  setUserFormData={setUserFormData}
                  userFormData={userFormData}
                />

                <Button
                  marginLeft="1rem"
                  onClick={handleFormSubmit}
                  type="submit"
                  colorScheme="blue"
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
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

export default NewItem;
