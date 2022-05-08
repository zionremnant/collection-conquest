// WORK IN PROGRESS
import { useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import { SAVE_ITEM } from "../../utils/mutations";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
    {Auth.loggedIn() ? (
      <HStack>
    <FormControl>

      <FormLabel htmlFor="name">Name Of Collectible:</FormLabel>
      <Input


        id="name"
        name="name"
        value={userFormData.name}
        type="text"
        onChange={handleInputChange}
      />
      <FormLabel htmlFor="description">
        Brief Description Of Collectible:
      </FormLabel>
      <Input
        id="description"
        name="description"
        value={userFormData.description}
        type="text"
        onChange={handleInputChange}
      />
      <FormLabel htmlFor="dateOfPurchase">Date Of Purchase:</FormLabel>
      <Calendar id="dateOfPurchase" onChange={onChange} value={value} />
      <FormLabel htmlFor="reminder">Is this Collectible a Pre-Order?</FormLabel>
      <Checkbox
        id="reminder"
        value={userFormData.reminder}
        name="reminder"
        onChange={(e) => setChecked(e.target.checked)}
      >
        Pre-Ordered?
      </Checkbox>
      <FormLabel htmlFor="obtained">Do you already have this item?</FormLabel>

      <Checkbox
        id="obtained"
        value={userFormData.obtained}
        name="obtained"
        onChange={(e) => setCheckedTwo(e.target.checked)}
      >
        Obtained?
      </Checkbox>

      <CloudinaryUploadWidget
        setUserFormData={setUserFormData}
        userFormData={userFormData}
      />

      <Button onClick={handleFormSubmit} type="submit" colorScheme="blue">
        Submit
      </Button>

    </FormControl >
    </HStack>
    ) : (
      <Heading> You Need To Be Logged In to view this page! </Heading>
    )}
    </div>
  );
};

export default NewItem;
