import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import { Box, Button, Container, FormControl, Input } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
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

  return (
    <VStack>
      <Container>
        <h4>Sign Up</h4>
        <Box w="40rem" bg="teal" border="1rem" borderColor="teal">
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <FormControl>
              <Input
                className="form-input"
                placeholder="Your Name"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
              />
              <Input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <Input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
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
      </Container>
    </VStack>
  );
};

export default Signup;
