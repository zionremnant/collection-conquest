import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/react";

import Auth from "../../utils/auth";

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Text color="white">Sign Up</Text>
      <Box>
        {data ? (
          <Text color="white" fontSize="1rem">
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </Text>
        ) : (
          <FormControl>
            <Input
              className="form-input"
              placeholder="Your Name"
              name="username"
              type="text"
              value={formState.username}
              onChange={handleChange}
              focusBorderColor="white"
              bg="white"
            />
            <br></br>
            <br></br>
            <Input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              bg="white"
              focusBorderColor="white"
            />
            <br></br>
            <br></br>
            <InputGroup size="md">
              <Input
                className="form-input"
                placeholder="******"
                name="password"
                type={show ? "text" : "password"}
                value={formState.password}
                onChange={handleChange}
                bg="white"
                focusBorderColor="white"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <br></br>
            <Button
              className="btn btn-block btn-info"
              style={{ cursor: "pointer" }}
              type="submit"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </FormControl>
        )}

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error.message}
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default Signup;
