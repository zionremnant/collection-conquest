// WORK IN PROGRESS
import { useMutation } from "@apollo/client";
// import { useParams } from "react-router-dom";
import { SAVE_ITEM } from "../../utils/mutations";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import { Checkbox } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CloudinaryUploadWidget from "../../CloudinaryUploadWidget";

const NewItem = () => {
  const [userFormData, setUserFormData] = useState({
    name: "",
    description: "",
    dateOfPurchase: "",
    imageURL: "",
    reminder: null,
    obtained: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const [value, onChange] = useState(new Date());

  // let { id } = useParams();

  const [saveItem, { error }] = useMutation(SAVE_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await saveItem({
        variables: { ...userFormData },
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
      reminder: null,
      obtained: null,
    });
  };

  return (
    <FormControl onSubmit={handleFormSubmit}>
      <FormLabel htmlFor="name">Name Of Collectible:</FormLabel>
      <Input id="name" type="text" onChange={handleInputChange} />
      <FormLabel htmlFor="description">
        Brief Description Of Collectible:
      </FormLabel>
      <Input id="description" type="text" onChange={handleInputChange} />
      <FormLabel htmlFor="name">Date Of Purchase:</FormLabel>
      <Calendar onChange={onChange} value={value} />
      <FormLabel htmlFor="description">
        Is this Collectible a Pre-Order?
      </FormLabel>
      <Checkbox defaultChecked onChange={handleInputChange}>
        Pre-Ordered?
      </Checkbox>
      <FormLabel htmlFor="description">
        Do you have already have this item?
      </FormLabel>
      <Checkbox defaultChecked onChange={handleInputChange}>
        Obtained?
      </Checkbox>

      <CloudinaryUploadWidget />

      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </FormControl>
  );
};

export default NewItem;
